import { Router } from 'express';
import { prisma } from '../lib/prisma.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

router.get('/topics/:topicId/videos', async (req, res) => {
  const topicId = req.params.topicId as string;
  let videos = await prisma.courseVideo.findMany({
    where: { topicId },
    orderBy: { sortOrder: 'asc' },
  });

  if (videos.length === 0) {
    const topic = await prisma.topic.findUnique({
      where: { id: topicId },
      include: { chapter: { include: { unit: { include: { subject: true } } } } }
    });

    if (topic) {
      const subjectName = topic.chapter?.unit?.subject?.name || 'General';
      const searchQuery = encodeURIComponent(`${subjectName} ${topic.name} lecture tutorial`);
      const defaultYtUrl = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`; // Fallback educational format
      
      const newVideo = await prisma.courseVideo.create({
        data: {
          title: `${topic.name} Video Lecture`,
          videoUrl: defaultYtUrl,
          duration: 900,
          topicId: topic.id,
          sortOrder: 1,
        }
      });
      videos = [newVideo];
    }
  }

  res.json(videos);
});

// Update or set a topic's YouTube video URL
router.post('/topics/:topicId/youtube', requireAuth, async (req, res) => {
  const topicId = req.params.topicId as string;
  const { youtubeUrl, title } = req.body;

  if (!youtubeUrl) {
    return res.status(400).json({ error: 'youtubeUrl is required' });
  }

  try {
    const existingVideo = await prisma.courseVideo.findFirst({
      where: { topicId },
      orderBy: { sortOrder: 'asc' }
    });

    let video;
    if (existingVideo) {
      video = await prisma.courseVideo.update({
        where: { id: existingVideo.id },
        data: {
          videoUrl: youtubeUrl,
          title: title || existingVideo.title
        }
      });
    } else {
      const topic = await prisma.topic.findUnique({ where: { id: topicId } });
      video = await prisma.courseVideo.create({
        data: {
          title: title || `${topic?.name || 'Topic'} Video Lecture`,
          videoUrl: youtubeUrl,
          duration: 900,
          topicId,
          sortOrder: 1
        }
      });
    }

    res.json({ success: true, video });
  } catch (err) {
    console.error('Failed to update topic YouTube video URL:', err);
    res.status(500).json({ error: 'Failed to update topic video' });
  }
});

router.get('/topics/:topicId/notes', async (req, res) => {
  const topicId = req.params.topicId as string;
  const notes = await prisma.courseNote.findMany({
    where: { topicId },
    orderBy: { sortOrder: 'asc' },
  });
  res.json(notes);
});

router.get('/topics/:topicId/resources', async (req, res) => {
  const topicId = req.params.topicId as string;
  const resources = await prisma.courseResource.findMany({
    where: { topicId },
    orderBy: { sortOrder: 'asc' },
  });
  res.json(resources);
});

router.post('/videos/:videoId/progress', requireAuth, async (req, res) => {
  const { watchDuration, completedPercent } = req.body as {
    watchDuration?: number;
    completedPercent?: number;
  };

  const student = await prisma.student.findUnique({ where: { id: req.auth!.userId } });
  if (!student) {
    return res.status(403).json({ error: 'Student profile required' });
  }

  const videoId = req.params.videoId as string;
  const progress = await prisma.videoWatchHistory.upsert({
    where: {
      studentId_videoId: {
        studentId: student.id,
        videoId,
      },
    },
    update: {
      watchDuration: watchDuration ?? 0,
      completedPercent: completedPercent ?? 0,
    },
    create: {
      studentId: student.id,
      videoId,
      watchDuration: watchDuration ?? 0,
      completedPercent: completedPercent ?? 0,
    },
  });

  res.json(progress);
});

export default router;
