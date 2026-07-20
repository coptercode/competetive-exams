import 'dotenv/config';
import { getJwtSecret, isProduction } from './lib/env.js';
import { startDatabase } from './lib/db.js';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import { prisma } from './lib/prisma.js';
import authRoutes from './routes/auth.js';
import academicRoutes from './routes/academic.js';
import courseRoutes from './routes/course.js';
import quizRoutes from './routes/quiz.js';
import assignmentRoutes from './routes/assignment.js';
import progressRoutes from './routes/progress.js';
import tutorRoutes from './routes/tutor.js';
import uploadRoutes from './routes/upload.js';
import videoRoutes from './routes/videos.js';
import liveClassRoutes from './routes/live-class.js';
import notificationRoutes from './routes/notification.js';

// Fail fast if required secrets are missing in production, rather than silently
// falling back to an insecure dev default at request time.
getJwtSecret();

// Start the database if it is not already running
await startDatabase();

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(helmet());

const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

app.use(cors({
  origin: isProduction()
    ? (allowedOrigins.length > 0 ? allowedOrigins : false)
    : true,
  credentials: true,
}));
if (isProduction() && allowedOrigins.length === 0) {
  console.warn('[server] ALLOWED_ORIGINS is not set in production — all cross-origin requests will be blocked. Set ALLOWED_ORIGINS to your frontend domain(s).');
}

app.use(express.json());
// NOTE: this only serves the local-disk fallback used when MinIO is unreachable.
// The primary storage path (MinIO) now issues short-lived presigned URLs — see lib/minio.ts.
// This can't be gated behind requireAuth: the frontend loads these files via <iframe>/<embed>/
// direct navigation (SecureNotesPreview.tsx), which never attaches an Authorization header.
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.use((req, res, next) => {
  console.log(`[server] [request] ${req.method} ${req.url}`);
  next();
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'eduverse-api' });
});

app.use('/api/auth', authRoutes);
app.use('/api', academicRoutes);
app.use('/api', courseRoutes);
app.use('/api', quizRoutes);
app.use('/api', assignmentRoutes);
app.use('/api', progressRoutes);
app.use('/api', tutorRoutes);
app.use('/api', liveClassRoutes);
app.use('/api', uploadRoutes);
app.use('/api', videoRoutes);
app.use('/api', notificationRoutes);

// Dev-only debugging endpoints — never mounted in production.
if (!isProduction()) {
  app.get('/api/dev/count', async (_req, res) => {
    try {
      const count = await prisma.topic.count();
      res.json({ count });
    } catch (err: any) {
      console.error('dev/count failed:', err);
      res.status(500).json({ error: 'Internal error' });
    }
  });

  app.get('/api/dev/student-assignments/:email', async (req, res) => {
    try {
      const email = req.params.email;
      const user = await prisma.user.findUnique({ where: { email }, include: { studentProfile: true } });
      if (!user || !user.studentProfile) return res.status(404).json({ error: 'Student not found' });

      const classId = user.studentProfile.classId;
      const assignments = await prisma.assignment.findMany({
        where: { topic: { chapter: { unit: { subject: { classId } } } } },
        include: {
          topic: { include: { chapter: { include: { unit: { include: { subject: true } } } } } },
          submissions: { where: { studentId: user.studentProfile.id } }
        }
      });
      res.json({ classId, assignmentsCount: assignments.length, assignments });
    } catch (err: any) {
      console.error('dev/student-assignments failed:', err);
      res.status(500).json({ error: 'Internal error' });
    }
  });

  app.get('/api/dev/check-500', async (req, res) => {
    try {
      const jwt = (await import('jsonwebtoken')).default;
      const token = jwt.sign({ userId: 'student123', role: 'STUDENT' }, getJwtSecret());

      const fetchRes = await fetch(`http://localhost:${port}/api/assignments`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const text = await fetchRes.text();

      res.json({ status: fetchRes.status, body: text });
    } catch (err: any) {
      res.json({ success: false, error: err.message });
    }
  });

  app.get('/api/dev/seed', async (_req, res) => {
    try {
      const stateBoard = await prisma.board.findFirst({ where: { code: 'STATE' } });
      if (!stateBoard) return res.json({ error: 'State board not found' });

      const topic = await prisma.topic.findFirst({
        where: {
          chapter: {
            unit: {
              subject: {
                class: {
                  boardId: stateBoard.id,
                  name: 'Class 9'
                }
              }
            }
          }
        },
        include: {
          chapter: {
            include: {
              unit: {
                include: {
                  subject: true
                }
              }
            }
          }
        }
      });

      if (!topic) return res.json({ error: 'Topic not found' });

      const existingNotesCount = await prisma.courseNote.count({ where: { topicId: topic.id } });
      const note = await prisma.courseNote.create({
        data: {
          title: 'State Board Auto Seeded Note',
          fileUrl: '/uploads/test.pdf',
          topicId: topic.id,
          sortOrder: existingNotesCount + 1,
          isRequiredForComplete: false,
          uploadedByUserId: 'system',
          uploadedByName: 'System Bot',
          subjectTitle: topic.chapter.unit.subject.name,
        }
      });

      const assignment = await prisma.assignment.create({
        data: {
          title: 'State Board Auto Seeded Assignment',
          description: 'Testing if it shows up!',
          maxMarks: 100,
          passingMarks: 40,
          deadline: new Date(Date.now() + 86400000 * 7),
          topicId: topic.id,
        }
      });

      res.json({ success: true, noteId: note.id, assignmentId: assignment.id });
    } catch (err: any) {
      console.error('dev/seed failed:', err);
      res.json({ success: false, error: err.message });
    }
  });

  app.get('/api/dev/users', async (_req, res) => {
    try {
      const users = await prisma.user.findMany({ select: { email: true, role: true } });
      res.json({ users });
    } catch (err: any) {
      console.error('dev/users failed:', err);
      res.status(500).json({ error: 'Internal error' });
    }
  });

  app.get('/api/dev/all-assignments', async (_req, res) => {
    try {
      const assignments = await prisma.assignment.findMany({
        include: {
          topic: { include: { chapter: { include: { unit: { include: { subject: { include: { class: { include: { board: true } } } } } } } } } }
        }
      });
      res.json({ count: assignments.length, assignments });
    } catch (err: any) {
      console.error('dev/all-assignments failed:', err);
      res.status(500).json({ error: 'Internal error' });
    }
  });
}

// Serve the built frontend from the same container/process in production.
// In dev the Vite dev server handles the frontend separately (see vite.config.ts proxy).
if (isProduction()) {
  const clientDir = path.join(process.cwd(), 'dist', 'client');
  app.use(express.static(clientDir));

  // This app uses hash-based routing (see src/store — activeView, not react-router paths),
  // so the URL path is always just "/" as far as the server is concerned; the route lives
  // in the "#/..." fragment, which browsers never send. One fallback route covers every view.
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api') || req.path.startsWith('/uploads')) return next();
    res.sendFile(path.join(clientDir, 'index.html'));
  });
}

app.use((_req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(port, () => {
  console.log(`EduVerse API running at http://localhost:${port}/api`);
});
