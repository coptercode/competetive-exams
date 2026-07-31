import 'dotenv/config';
import { startDatabase } from './lib/db.js';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import path from 'path';
import fs from 'fs';
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
import chapterLockRoutes from './routes/chapter-lock.js';
import notesRoutes from './routes/notes.js';
import profileRoutes from './routes/profile.js';
import { runChapterLockMigration } from './lib/chapter-lock-migration.js';
import { runCandidateProfileMigration } from './lib/candidate-profile-migration.js';

// Start the database if it is not already running
await startDatabase();

// Apply schema migrations (safe/idempotent)
try {
  await runChapterLockMigration();
  await runCandidateProfileMigration();
} catch (err: any) {
  console.log('[db] Dynamic migrations will run on active database connection.');
}

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(helmet());

const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',') 
  : ['http://localhost:5173', 'http://localhost:3000'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json());
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.use((req, res, next) => {
  console.log(`[server] [request] ${req.method} ${req.url}`);
  next();
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'eduverse-api' });
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: { error: 'Too many requests, please try again later.' }
});

app.use('/api/auth', authLimiter, authRoutes);
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
app.use('/api', chapterLockRoutes);
app.use('/api', notesRoutes);
app.use('/api', profileRoutes);

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'EduVerse LMS Backend API',
    uptimeSeconds: process.uptime(),
    timestamp: new Date()
  });
});

app.get('/api', (_req, res) => {
  res.json({
    message: 'Welcome to EduVerse LMS Backend API',
    version: '1.0.0',
    endpoints: [
      '/api/auth/login',
      '/api/auth/signup',
      '/api/auth/users',
      '/api/profile',
      '/api/live-classes',
      '/api/assignments',
      '/api/quizzes',
      '/api/health'
    ]
  });
});

// Serve frontend in production (Vite generates dist/client folder)
const clientDistPath = path.join(process.cwd(), 'dist', 'client');
const rootDistPath = path.join(process.cwd(), 'dist');

let staticPath = '';
if (fs.existsSync(path.join(clientDistPath, 'index.html'))) {
  staticPath = clientDistPath;
} else if (fs.existsSync(path.join(rootDistPath, 'index.html'))) {
  staticPath = rootDistPath;
}

if (staticPath) {
  app.use(express.static(staticPath));
  app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
      return res.status(404).json({ error: 'API route not found' });
    }
    res.sendFile(path.join(staticPath, 'index.html'));
  });
} else {
  app.use((_req, res) => {
    res.status(404).json({ error: 'Not found' });
  });
}

app.listen(port, () => {
  console.log(`EduVerse API running at http://localhost:${port}/api`);
});
