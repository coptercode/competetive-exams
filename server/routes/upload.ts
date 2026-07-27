import { Router } from 'express';
import multer from 'multer';
import { requireAuth, requireAdmin, requireAdminOrTeacher } from '../middleware/auth.js';
import { uploadToMinio, buildStorageKey, deleteFromMinio, minioClient, MINIO_BUCKET } from '../lib/minio.js';
import { processVideoForDrm, isFfmpegAvailable } from '../lib/drm-processor.js';
import { prisma } from '../lib/prisma.js';
import { ListObjectsV2Command, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { fileTypeFromBuffer } from 'file-type';

async function validateMagicBytes(buffer: Buffer, declaredMimeType: string) {
  if (declaredMimeType === 'text/markdown') return; // Cannot check magic bytes for text reliably
  const type = await fileTypeFromBuffer(buffer);
  if (!type || type.mime !== declaredMimeType) {
    // some quicktime files might be detected as mp4 or vice versa by file-type, allow generic video matches
    if (declaredMimeType.startsWith('video/') && type?.mime.startsWith('video/')) return;
    throw new Error(`Invalid file content. Magic bytes mismatch (got ${type?.mime || 'unknown'}, expected ${declaredMimeType}).`);
  }
}

const router = Router();

// TEMPORARY REPAIR ENDPOINT
router.get('/fix-supabase-md', async (req, res) => {
  try {
    const listCommand = new ListObjectsV2Command({ Bucket: MINIO_BUCKET });
    const listResponse = await minioClient.send(listCommand);
    const mdFiles = (listResponse.Contents || []).filter((item: any) => item.Key && item.Key.endsWith('.md'));

    const results = [];
    for (const file of mdFiles) {
      const getCommand = new GetObjectCommand({ Bucket: MINIO_BUCKET, Key: file.Key });
      const getResponse = await minioClient.send(getCommand);
      const content = await getResponse.Body?.transformToString();
      
      if (!content) continue;
      // Aggressive replacement to fix concatenated tables
      const fixedContent = content.replace(/\|[\s\u200B]*\|/g, '|\n|');
      
      if (fixedContent !== content) {
        const putCommand = new PutObjectCommand({
          Bucket: MINIO_BUCKET,
          Key: file.Key,
          Body: fixedContent,
          ContentType: "text/markdown",
        });
        await minioClient.send(putCommand);
        results.push(`Fixed: ${file.Key}`);
      } else {
        results.push(`Skipped (OK): ${file.Key}`);
      }
    }
    res.json({ success: true, results });
  } catch (err: any) {
    res.status(500).json({ error: String(err) });
  }
});

// Use memory storage so we can pipe directly to R2
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB max
  fileFilter: (_req, file, cb) => {
    const allowed = [
      'application/pdf',
      'image/jpeg',
      'image/png',
      'image/webp',
      'video/mp4',
      'video/webm',
      'video/quicktime',
      'video/x-matroska',
      'application/zip',
      'text/markdown',
    ];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error(`File type not allowed: ${file.mimetype}`));
    }
  },
});

// Larger limit for video file uploads (notes/assignments stay at 5 MB)
const videoUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 500 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = ['video/mp4', 'video/webm', 'video/quicktime', 'video/x-matroska'];
    if (allowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error(`File type not allowed: ${file.mimetype}`));
  },
});

// ─────────────────────────────────────────────
//  GET /upload/structure
//  Return boards → classes → subjects for admin picker
// ─────────────────────────────────────────────
router.get('/upload/structure', requireAuth, async (_req, res) => {
  try {
    const dbBoards = await prisma.board.findMany({
      include: {
        classes: {
          include: { subjects: { select: { id: true, name: true, code: true } } },
          orderBy: { sortOrder: 'asc' },
        },
      },
      orderBy: { name: 'asc' },
    });

    const boards = dbBoards.map(b => ({
      ...b,
      title: b.name,
      classes: b.classes.map(c => ({
        ...c,
        title: c.name,
        subjects: c.subjects.map(s => ({
          ...s,
          title: s.name,
          color: s.code // Use code as color if needed, or leave undefined
        }))
      }))
    }));

    res.json({ boards });
  } catch (err) {
    console.error('Failed to fetch upload structure:', err);
    res.status(500).json({ error: 'Failed to fetch structure' });
  }
});

// ─────────────────────────────────────────────
//  POST /upload/note
//  Admin uploads a note/PDF for a class & subject
// ─────────────────────────────────────────────
router.post(
  '/upload/note',
  requireAuth,
  requireAdminOrTeacher,
  upload.single('file'),
  async (req, res) => {
    try {
      const { subjectId, title, classTitle, subjectTitle } = req.body as {
        subjectId?: string;
        title?: string;
        classTitle?: string;
        subjectTitle?: string;
      };

      if (!req.file || !subjectId || !title) {
        return res.status(400).json({ error: 'file, subjectId, and title are required' });
      }

      await validateMagicBytes(req.file.buffer, req.file.mimetype);

      // Find a topic to attach the note to (first topic in subject)
      const topic = await prisma.topic.findFirst({
        where: { chapter: { unit: { subjectId } } },
        orderBy: { sortOrder: 'asc' },
      });

      if (!topic) {
        return res.status(404).json({ error: 'No topic found for this subject' });
      }

      const key = buildStorageKey(
        'notes',
        classTitle || 'general',
        subjectTitle || 'general',
        req.file.originalname,
      );

      let fileUrl: string;
      try {
        fileUrl = await uploadToMinio(key, req.file.buffer, req.file.mimetype);
      } catch (minioErr) {
        // Fallback: store as local reference when MinIO is not yet configured
        console.warn('MinIO upload failed (credentials may not be set), using local path:', minioErr);
        fileUrl = `/uploads/${key}`;
      }

      // Resolve uploader info
      const uploadingUser = await prisma.user.findUnique({ where: { id: req.auth!.userId } });
      const professorName = uploadingUser ? `${uploadingUser.firstName} ${uploadingUser.lastName}` : 'Professor';

      const existingNotesCount = await prisma.courseNote.count({
        where: { topicId: topic.id }
      });

      // Save note record in DB
      const note = await prisma.courseNote.create({
        data: {
          title,
          fileUrl,
          topicId: topic.id,
          sortOrder: existingNotesCount + 1,
          isRequiredForComplete: false,
          uploadedByUserId: req.auth!.userId,
          uploadedByName: professorName,
          subjectTitle: subjectTitle || null,
        },
      });

      // Send database notifications to corresponding class students
      try {
        const subject = await prisma.subject.findUnique({ where: { id: subjectId } });

        if (subject?.classId) {
          const students = await prisma.student.findMany({ where: { classId: subject.classId } });
          if (students.length > 0) {
            const dbNotif = await prisma.notification.create({
              data: {
                title: 'New Study Material Uploaded',
                body: `Professor ${professorName} uploaded new notes: "${title}" for ${subject.name}.`,
                type: 'ACADEMIC',
                data: {
                  subjectId,
                  noteId: note.id,
                  fileUrl,
                },
              },
            });

            await prisma.userNotification.createMany({
              data: students.map((s) => ({
                userId: s.id,
                notificationId: dbNotif.id,
                isRead: false,
              })),
              skipDuplicates: true,
            });
          }
        }
      } catch (notifErr) {
        console.warn('Failed to dispatch notes upload notification:', notifErr);
      }

      res.status(201).json({
        success: true,
        note: { id: note.id, title: note.title, fileUrl: note.fileUrl },
      });
    } catch (err) {
      console.error('Note upload error:', err);
      res.status(500).json({ error: 'Upload failed' });
    }
  },
);

// ─────────────────────────────────────────────
//  POST /upload/assignment
//  Admin creates/uploads an assignment for a class & subject
// ─────────────────────────────────────────────
router.post(
  '/upload/assignment',
  requireAuth,
  requireAdminOrTeacher,
  upload.single('file'),
  async (req, res) => {
    try {
      const {
        subjectId,
        title,
        description,
        classTitle,
        subjectTitle,
        deadline,
        maxMarks,
        passingMarks,
      } = req.body as {
        subjectId?: string;
        title?: string;
        description?: string;
        classTitle?: string;
        subjectTitle?: string;
        deadline?: string;
        maxMarks?: string;
        passingMarks?: string;
      };

      if (!subjectId || !title || !deadline) {
        return res.status(400).json({ error: 'subjectId, title, and deadline are required' });
      }

      // Find a topic to attach the assignment to
      const topic = await prisma.topic.findFirst({
        where: { chapter: { unit: { subjectId } } },
        orderBy: { sortOrder: 'asc' },
      });

      if (!topic) {
        return res.status(404).json({ error: 'No topic found for this subject' });
      }

      let fileUrl: string | null = null;

      if (req.file) {
        await validateMagicBytes(req.file.buffer, req.file.mimetype);

        const key = buildStorageKey(
          'assignment',
          classTitle || 'general',
          subjectTitle || 'general',
          req.file.originalname,
        );

        try {
          fileUrl = await uploadToMinio(key, req.file.buffer, req.file.mimetype);
        } catch (minioErr) {
          console.warn('MinIO upload failed, using local path:', minioErr);
          fileUrl = `/uploads/${key}`;
        }
      }

      const assignment = await prisma.assignment.create({
        data: {
          title,
          description: description || '',
          fileUrl: fileUrl || undefined,
          topicId: topic.id,
          maxMarks: parseFloat(maxMarks || '100'),
          passingMarks: parseFloat(passingMarks || '40'),
          deadline: new Date(deadline),
        },
      });

      // Send database notifications to corresponding class students
      try {
        const subject = await prisma.subject.findUnique({ where: { id: subjectId } });
        const uploadingUser = await prisma.user.findUnique({ where: { id: req.auth!.userId } });
        const professorName = uploadingUser ? `${uploadingUser.firstName} ${uploadingUser.lastName}` : 'Professor';

        if (subject?.classId) {
          const students = await prisma.student.findMany({ where: { classId: subject.classId } });
          if (students.length > 0) {
            const dbNotif = await prisma.notification.create({
              data: {
                title: 'New Assignment Assigned',
                body: `Professor ${professorName} posted a new assignment: "${title}" for ${subject.name}. Due: ${new Date(deadline).toLocaleDateString('en-IN')}.`,
                type: 'ACADEMIC',
                data: {
                  subjectId,
                  assignmentId: assignment.id,
                  fileUrl: fileUrl || undefined,
                },
              },
            });

            await prisma.userNotification.createMany({
              data: students.map((s) => ({
                userId: s.id,
                notificationId: dbNotif.id,
                isRead: false,
              })),
              skipDuplicates: true,
            });
          }
        }
      } catch (notifErr) {
        console.warn('Failed to dispatch assignment upload notification:', notifErr);
      }

      res.status(201).json({
        success: true,
        assignment: {
          id: assignment.id,
          title: assignment.title,
          deadline: assignment.deadline,
          fileUrl: assignment.fileUrl,
        },
      });
    } catch (err) {
      console.error('Assignment upload error:', err);
      res.status(500).json({ error: 'Assignment creation failed' });
    }
  },
);

// ─────────────────────────────────────────────
//  GET /upload/notes?subjectId=xxx
//  List all notes for a subject
// ─────────────────────────────────────────────
router.get('/upload/notes', requireAuth, async (req, res) => {
  const { subjectId } = req.query as { subjectId?: string };
  if (!subjectId) return res.status(400).json({ error: 'subjectId is required' });

  try {
    const notes = await prisma.courseNote.findMany({
      where: { 
        topic: { chapter: { unit: { subjectId } } },
        uploadedByUserId: { not: null }
      },
      orderBy: { sortOrder: 'asc' },
    });
    const cleanedNotes = notes.map(n => {
      let fileUrl = n.fileUrl;
      if (fileUrl.includes('.supabase.co') && fileUrl.includes('/s3/')) {
        fileUrl = fileUrl.replace('/s3/', '/object/public/');
        // Fix wrongly encoded slashes in the path (e.g. bucket/notes%2Fclass-9%2Fmath)
        const parts = fileUrl.split('/');
        const lastPart = parts.pop();
        if (lastPart && lastPart.includes('%2F')) {
          parts.push(...lastPart.split('%2F'));
          fileUrl = parts.join('/');
        }
      }
      return { ...n, fileUrl };
    });

    res.json({ notes: cleanedNotes });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
});

// ─────────────────────────────────────────────
//  GET /upload/notes/all
//  List ALL notes across every subject (for student notes gallery)
// ─────────────────────────────────────────────
router.get('/upload/notes/all', requireAuth, async (req, res) => {
  try {
    let whereClause: any = {};
    if (req.auth?.role === 'STUDENT') {
      const studentProfile = await prisma.student.findUnique({
        where: { id: req.auth.userId }
      });
      if (studentProfile) {
        whereClause = {
          topic: {
            chapter: {
              unit: {
                subject: {
                  classId: studentProfile.classId,
                  class: {
                    boardId: studentProfile.boardId
                  }
                }
              }
            }
          }
        };
      }
    }

    // Only show notes explicitly uploaded by a user (staff/teacher)
    // Auto-generated curriculum notes will have uploadedByUserId as null
    whereClause.uploadedByUserId = { not: null };

    const notes = await prisma.courseNote.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' },
      include: {
        topic: {
          include: {
            chapter: {
              include: {
                unit: {
                  include: {
                    subject: { select: { name: true } },
                  },
                },
              },
            },
          },
        },
      },
    });

    const enriched = notes.map((n) => {
      let fileUrl = n.fileUrl;
      if (fileUrl.includes('.supabase.co') && fileUrl.includes('/s3/')) {
        fileUrl = fileUrl.replace('/s3/', '/object/public/');
        // Fix wrongly encoded slashes
        const parts = fileUrl.split('/');
        const lastPart = parts.pop();
        if (lastPart && lastPart.includes('%2F')) {
          parts.push(...lastPart.split('%2F'));
          fileUrl = parts.join('/');
        }
      }
      return {
        id: n.id,
        title: n.title,
        fileUrl,
        uploadedByName: n.uploadedByName || 'Professor',
        subjectTitle: n.subjectTitle || n.topic?.chapter?.unit?.subject?.name || 'General',
        createdAt: n.createdAt,
      };
    });

    res.json({ notes: enriched });
  } catch (err) {
    console.error('Failed to fetch all notes:', err);
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
});

// ─────────────────────────────────────────────
//  GET /upload/assignments?subjectId=xxx
//  List all assignments for a subject (with deadline-lock status)
// ─────────────────────────────────────────────
router.get('/upload/assignments', requireAuth, async (req, res) => {
  const { subjectId } = req.query as { subjectId?: string };
  if (!subjectId) return res.status(400).json({ error: 'subjectId is required' });

  try {
    const assignments = await prisma.assignment.findMany({
      where: { topic: { chapter: { unit: { subjectId } } } },
      orderBy: { deadline: 'asc' },
    });

    const now = new Date();
    const enriched = assignments.map((a) => {
      let fileUrl = a.fileUrl || '';
      if (fileUrl.includes('.supabase.co') && fileUrl.includes('/s3/')) {
        fileUrl = fileUrl.replace('/s3/', '/object/public/');
        const parts = fileUrl.split('/');
        const lastPart = parts.pop();
        if (lastPart && lastPart.includes('%2F')) {
          parts.push(...lastPart.split('%2F'));
          fileUrl = parts.join('/');
        }
      }
      return {
        ...a,
        fileUrl,
        isLocked: a.deadline ? a.deadline < now : false,
      };
    });

    res.json({ assignments: enriched });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch assignments' });
  }
});

// ─────────────────────────────────────────────
//  PATCH /upload/assignment/:id/deadline
//  Admin updates the deadline (also controls locking)
// ─────────────────────────────────────────────
router.patch('/upload/assignment/:id/deadline', requireAuth, requireAdminOrTeacher, async (req, res) => {
  const id = req.params.id as string;
  const { deadline } = req.body as { deadline?: string };
  if (!deadline) return res.status(400).json({ error: 'deadline is required' });

  try {
    const updated = await prisma.assignment.update({
      where: { id },
      data: { deadline: new Date(deadline) },
    });

    const now = new Date();
    res.json({ success: true, isLocked: updated.deadline ? updated.deadline < now : false, assignment: updated });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update deadline' });
  }
});

// ─────────────────────────────────────────────
//  DELETE /upload/assignment/:id
// ─────────────────────────────────────────────
router.delete('/upload/assignment/:id', requireAuth, requireAdminOrTeacher, async (req, res) => {
  const id = req.params.id as string;
  try {
    await prisma.assignment.delete({ where: { id } });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete assignment' });
  }
});

// ─────────────────────────────────────────────
//  DELETE /upload/note/:id
// ─────────────────────────────────────────────
router.delete('/upload/note/:id', requireAuth, requireAdminOrTeacher, async (req, res) => {
  const id = req.params.id as string;
  try {
    await prisma.courseNote.delete({ where: { id } });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete note' });
  }
});

// ─────────────────────────────────────────────
//  POST /upload/video
//  Admin uploads a video lecture for a class & subject
// ─────────────────────────────────────────────
router.post(
  '/upload/video',
  requireAuth,
  requireAdminOrTeacher,
  videoUpload.single('file'),
  async (req, res) => {
    try {
      const { subjectId, title, duration, classTitle, subjectTitle, videoUrl, drmProtected } = req.body as {
        subjectId?: string;
        title?: string;
        duration?: string;
        classTitle?: string;
        subjectTitle?: string;
        videoUrl?: string;
        drmProtected?: string;
      };

      if (!subjectId || !title) {
        return res.status(400).json({ error: 'subjectId and title are required' });
      }

      if (!req.file && !videoUrl) {
        return res.status(400).json({ error: 'Either file or videoUrl is required' });
      }

      const enableDrm = drmProtected === 'true' && !!req.file;
      if (enableDrm && !(await isFfmpegAvailable())) {
        return res.status(503).json({ error: 'FFmpeg is required for DRM processing but was not found on the server' });
      }

      // Find a topic to attach the video to (first topic in subject)
      const topic = await prisma.topic.findFirst({
        where: { chapter: { unit: { subjectId } } },
        orderBy: { sortOrder: 'asc' },
      });

      if (!topic) {
        return res.status(404).json({ error: 'No topic found for this subject' });
      }

      let fileUrl = videoUrl || '';

      if (req.file && !enableDrm) {
        await validateMagicBytes(req.file.buffer, req.file.mimetype);

        const key = buildStorageKey(
          'video',
          classTitle || 'general',
          subjectTitle || 'general',
          req.file.originalname,
        );

        try {
          fileUrl = await uploadToMinio(key, req.file.buffer, req.file.mimetype);
        } catch (minioErr) {
          console.warn('MinIO video upload failed, using local path:', minioErr);
          fileUrl = `/uploads/${key}`;
        }
      } else if (req.file && enableDrm) {
        await validateMagicBytes(req.file.buffer, req.file.mimetype);
        // Original kept in MinIO via DRM pipeline; videoUrl stores internal reference only
        fileUrl = `drm-pending://${req.file.originalname}`;
      }

      // Duration parsing (input in minutes, convert to seconds)
      const durationSeconds = Math.max(10, Math.round(parseFloat(duration || '10') * 60));

      const existingVideosCount = await prisma.courseVideo.count({
        where: { topicId: topic.id }
      });

      // Save video record in DB (DRM fields populated after processing for protected uploads)
      const video = await prisma.courseVideo.create({
        data: {
          title,
          videoUrl: fileUrl,
          duration: durationSeconds,
          topicId: topic.id,
          sortOrder: existingVideosCount + 1,
          drmEnabled: enableDrm ? true : undefined,
        },
      });

      if (enableDrm && req.file) {
        try {
          const drmResult = await processVideoForDrm(video.id, req.file.buffer, req.file.originalname);
          const updated = await prisma.courseVideo.update({
            where: { id: video.id },
            data: {
              drmEnabled: true,
              encryptedPath: drmResult.encryptedPath,
              hlsPath: drmResult.hlsPath,
              dashPath: drmResult.dashPath,
              licenseId: drmResult.licenseId,
              drmMetadata: drmResult.drmMetadata,
              videoUrl: drmResult.encryptedPath,
            },
          });

          return res.status(201).json({
            success: true,
            video: {
              id: updated.id,
              title: updated.title,
              videoUrl: updated.videoUrl,
              duration: updated.duration,
              drmEnabled: true,
            },
          });
        } catch (drmErr) {
          console.error('DRM processing failed:', drmErr);
          await prisma.courseVideo.delete({ where: { id: video.id } }).catch(() => undefined);
          return res.status(500).json({ error: 'DRM video processing failed' });
        }
      }

      res.status(201).json({
        success: true,
        video: { id: video.id, title: video.title, videoUrl: video.videoUrl, duration: video.duration, drmEnabled: false },
      });
    } catch (err) {
      console.error('Video upload error:', err);
      res.status(500).json({ error: 'Video upload failed' });
    }
  },
);

// ─────────────────────────────────────────────
//  GET /upload/videos?subjectId=xxx
//  List all videos for a subject
// ─────────────────────────────────────────────
router.get('/upload/videos', requireAuth, async (req, res) => {
  const { subjectId } = req.query as { subjectId?: string };
  if (!subjectId) return res.status(400).json({ error: 'subjectId is required' });

  try {
    const videos = await prisma.courseVideo.findMany({
      where: { topic: { chapter: { unit: { subjectId } } } },
      orderBy: { sortOrder: 'asc' },
    });
    res.json({ videos });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
});

// ─────────────────────────────────────────────
//  DELETE /upload/video/:id
// ─────────────────────────────────────────────
router.delete('/upload/video/:id', requireAuth, requireAdminOrTeacher, async (req, res) => {
  const id = req.params.id as string;
  try {
    await prisma.courseVideo.delete({ where: { id } });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete video' });
  }
});

router.use((err: any, req: any, res: any, next: any) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      const isVideoRoute = req.originalUrl?.includes('/upload/video');
      return res.status(400).json({
        error: isVideoRoute
          ? 'Video file exceeds the 500MB limit.'
          : 'File size exceeds the 5MB limit. Please upload a smaller file.',
      });
    }
    return res.status(400).json({ error: err.message });
  } else if (err) {
    return res.status(400).json({ error: err.message });
  }
  next();
});

export default router;
