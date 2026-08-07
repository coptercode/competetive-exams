import { Router } from 'express';
import { prisma } from '../lib/prisma.js';
import { mapBoard, mapClassLevel, mapSubject, mapChapter, mapTopic } from '../lib/mappers.js';
import { optionalAuth } from '../middleware/auth.js';

const router = Router();

// Get distinct subject names
router.get('/subjects/distinct', async (req, res) => {
  try {
    const subjects = await prisma.subject.findMany({
      select: { name: true },
      distinct: ['name'],
      orderBy: { name: 'asc' },
    });
    res.json(subjects.map(s => s.name));
  } catch (error) {
    console.error('Failed to fetch distinct subjects:', error);
    res.status(500).json({ error: 'Failed to fetch distinct subjects' });
  }
});

const topicInclude = (studentId?: string) => ({
  orderBy: { sortOrder: 'asc' as const },
  include: {
    studentProgress: studentId
      ? { where: { studentId }, take: 1 }
      : false,
    notes: { orderBy: { sortOrder: 'asc' as const } },
    videos: { orderBy: { sortOrder: 'asc' as const } },
  },
});

const chapterInclude = (studentId?: string) => ({
  orderBy: { sortOrder: 'asc' as const },
  include: {
    topics: topicInclude(studentId),
  },
});

const unitInclude = (studentId?: string) => ({
  orderBy: { sortOrder: 'asc' as const },
  include: {
    chapters: chapterInclude(studentId),
  },
});

const subjectInclude = (studentId?: string) => ({
  orderBy: { sortOrder: 'asc' as const },
  include: {
    units: unitInclude(studentId),
  },
});

const classInclude = (studentId?: string) => ({
  orderBy: { sortOrder: 'asc' as const },
  include: {
    subjects: subjectInclude(studentId),
  },
});

router.get('/academic/structure', optionalAuth, async (req, res) => {
  const studentId = req.auth?.role === 'STUDENT' ? req.auth.userId : undefined;

  const boards = await prisma.board.findMany({
    orderBy: { name: 'asc' },
    include: {
      classes: classInclude(studentId),
    },
  });

  res.json(boards.map(mapBoard));
});

router.get('/boards', async (_req, res) => {
  const boards = await prisma.board.findMany({ orderBy: { name: 'asc' } });
  res.json(boards.map((board) => ({ id: board.id, title: board.name, code: board.code })));
});

router.get('/boards/:boardId/classes', async (req, res) => {
  const classes = await prisma.class.findMany({
    where: { boardId: req.params.boardId },
    orderBy: { sortOrder: 'asc' },
  });
  res.json(classes.map((item) => ({ id: item.id, title: item.name })));
});

router.get('/classes/:classId/subjects', async (req, res) => {
  const subjects = await prisma.subject.findMany({
    where: { classId: req.params.classId },
    orderBy: { sortOrder: 'asc' },
    include: { units: unitInclude() },
  });
  res.json(subjects.map((subject, index) => mapSubject(subject, index)));
});

router.get('/subjects/:subjectId/units', async (req, res) => {
  const units = await prisma.unit.findMany({
    where: { subjectId: req.params.subjectId },
    orderBy: { sortOrder: 'asc' },
    include: { chapters: chapterInclude() },
  });

  const chapters = units.flatMap((unit) =>
    unit.chapters.map((chapter) => ({
      ...mapChapter(chapter),
      title: (unit.name !== 'Core Syllabus') ? `${unit.name}: ${chapter.name}` : chapter.name,
    }))
  );

  res.json(chapters);
});

router.get('/chapters/:chapterId/topics', async (req, res) => {
  const topics = await prisma.topic.findMany({
    where: { chapterId: req.params.chapterId },
    orderBy: { sortOrder: 'asc' },
  });
  res.json(topics.map(mapTopic));
});

router.get('/classes/:classId/structure', async (req, res) => {
  const classLevel = await prisma.class.findUnique({
    where: { id: req.params.classId },
    include: { subjects: subjectInclude() },
  });

  if (!classLevel) {
    return res.status(404).json({ error: 'Class not found' });
  }

  res.json(mapClassLevel(classLevel));
});

// POST Admin grant / revoke instructor chapter upload permission
router.post('/admin/instructors/chapter-access', async (req: any, res: any) => {
  try {
    const { instructorId, chapterId, isAllowed } = req.body;
    if (!instructorId || !chapterId) {
      return res.status(400).json({ error: 'instructorId and chapterId are required' });
    }

    if (isAllowed) {
      await (prisma as any).$executeRawUnsafe(`
        INSERT INTO instructor_chapter_access (instructor_id, chapter_id)
        VALUES ($1, $2)
        ON CONFLICT (instructor_id, chapter_id) DO NOTHING;
      `, instructorId, chapterId);
    } else {
      await (prisma as any).$executeRawUnsafe(`
        DELETE FROM instructor_chapter_access
        WHERE instructor_id = $1 AND chapter_id = $2;
      `, instructorId, chapterId);
    }

    return res.json({ success: true, instructorId, chapterId, isAllowed });
  } catch (err: any) {
    console.error('Failed toggling instructor chapter access:', err);
    return res.status(500).json({ error: err.message });
  }
});

// GET Admin fetch instructor allowed chapter IDs
router.get('/admin/instructors/:instructorId/chapter-access', async (req: any, res: any) => {
  try {
    const instructorId = req.params.instructorId;
    const records: any[] = await (prisma as any).$queryRawUnsafe(`
      SELECT chapter_id as "chapterId" FROM instructor_chapter_access WHERE instructor_id = $1;
    `, instructorId).catch(() => []);

    return res.json({ success: true, allowedChapterIds: records.map(r => r.chapterId) });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// GET Instructor fetch their own allowed chapter IDs
router.get('/instructor/allowed-chapters', optionalAuth, async (req: any, res: any) => {
  try {
    const userId = req.auth?.userId;
    const role = req.auth?.role;

    if (!userId || role === 'ADMIN') {
      const allChapters = await prisma.chapter.findMany({ select: { id: true } });
      return res.json({ success: true, allowedChapterIds: allChapters.map(c => c.id), isFullAdmin: true });
    }

    const records: any[] = await (prisma as any).$queryRawUnsafe(`
      SELECT chapter_id as "chapterId" FROM instructor_chapter_access WHERE instructor_id = $1;
    `, userId).catch(() => []);

    return res.json({ success: true, allowedChapterIds: records.map(r => r.chapterId), isFullAdmin: false });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

export default router;
