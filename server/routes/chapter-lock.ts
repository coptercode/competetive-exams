import { Router, type Request, type Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { requireAuth, requireAdminOrTeacher } from '../middleware/auth.js';

const router = Router();

// ─────────────────────────────────────────────────────────────────────────────
// NOTE: This file uses raw SQL ($executeRawUnsafe / $queryRawUnsafe) to interact
// with the chapter_student_overrides table since it was added via a runtime migration
// rather than a Prisma generate cycle. The chapter fields (is_unlocked etc.) on the
// chapters table are also read via raw SQL for the same reason. All other models
// (Unit, Subject, Student, etc.) use the regular Prisma client.
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/teacher/chapters?subjectId=...
// Returns all chapters for a subject with class-wide lock state + overrideCount
// Auth: Teacher or Admin
// ─────────────────────────────────────────────────────────────────────────────
router.get('/teacher/chapters', requireAuth, requireAdminOrTeacher, async (req: Request, res: Response) => {
  const { subjectId } = req.query as { subjectId?: string };
  if (!subjectId) {
    return res.status(400).json({ error: 'subjectId query param is required' });
  }

  try {
    // 1. Resolve Subject UUID safely (handles subjectId passed as UUID or code or title)
    let targetSubjectId = subjectId;
    const isUuid = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(subjectId);

    if (!isUuid) {
      const subject = await prisma.subject.findFirst({
        where: {
          OR: [
            { code: subjectId },
            { name: subjectId },
          ],
        },
      });
      if (subject) {
        targetSubjectId = subject.id;
      } else {
        return res.json({ chapters: [] });
      }
    }

    // 2. Fetch units and chapters safely
    const units = await prisma.unit.findMany({
      where: { subjectId: targetSubjectId },
      orderBy: { sortOrder: 'asc' },
      include: {
        chapters: {
          orderBy: { sortOrder: 'asc' },
        },
      },
    });

    if (!units || units.length === 0) {
      return res.json({ chapters: [] });
    }

    // 3. Get override counts per chapter (if table exists)
    let overrideCounts: Record<string, number> = {};
    try {
      const tableCheck = await prisma.$queryRawUnsafe<Array<{ table_name: string }>>(
        `SELECT table_name FROM information_schema.tables WHERE table_name = 'chapter_student_overrides'`
      );
      if (tableCheck.length > 0) {
        const counts = await prisma.$queryRawUnsafe<Array<{ chapter_id: string; cnt: bigint }>>(
          `SELECT chapter_id, COUNT(*) as cnt FROM chapter_student_overrides GROUP BY chapter_id`
        );
        counts.forEach(row => {
          overrideCounts[row.chapter_id] = Number(row.cnt);
        });
      }
    } catch (e) {
      console.warn('[chapter-lock] Raw SQL overrides count fallback:', e);
    }

    // 4. Get lock state per chapter (if columns exist)
    let lockStates: Record<string, { isUnlocked: boolean; unlockedAt: Date | null; unlockedBy: string | null }> = {};
    try {
      const colCheck = await prisma.$queryRawUnsafe<Array<{ column_name: string }>>(
        `SELECT column_name FROM information_schema.columns WHERE table_name = 'chapters' AND column_name = 'is_unlocked'`
      );
      if (colCheck.length > 0) {
        const chapterIds = units.flatMap(u => u.chapters.map(c => c.id));
        if (chapterIds.length > 0) {
          const placeholders = chapterIds.map((_, i) => `$${i + 1}::uuid`).join(',');
          const rows = await prisma.$queryRawUnsafe<Array<{
            id: string;
            is_unlocked: boolean;
            unlocked_at: Date | null;
            unlocked_by: string | null;
          }>>(`SELECT id, is_unlocked, unlocked_at, unlocked_by FROM chapters WHERE id IN (${placeholders})`, ...chapterIds);
          rows.forEach(r => {
            lockStates[r.id] = {
              isUnlocked: r.is_unlocked ?? true,
              unlockedAt: r.unlocked_at,
              unlockedBy: r.unlocked_by,
            };
          });
        }
      }
    } catch (e) {
      console.warn('[chapter-lock] Raw SQL lock columns check fallback:', e);
    }

    const chapters = units.flatMap((unit) =>
      unit.chapters.map((ch) => {
        const lock = lockStates[ch.id] ?? { isUnlocked: true, unlockedAt: null, unlockedBy: null };
        return {
          id: ch.id,
          title: ch.name,
          order: ch.sortOrder,
          unitId: unit.id,
          unitName: unit.name,
          isUnlocked: lock.isUnlocked,
          unlockedAt: lock.unlockedAt ? new Date(lock.unlockedAt).toISOString() : null,
          unlockedBy: lock.unlockedBy,
          overrideCount: overrideCounts[ch.id] ?? 0,
        };
      })
    );

    return res.json({ chapters });
  } catch (err: any) {
    console.error('[chapter-lock] GET /teacher/chapters error:', err);
    return res.json({ chapters: [] });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// PATCH /api/teacher/chapters/:chapterId/lock-status
// Sets the class-wide is_unlocked value for a chapter
// Body: { isUnlocked: boolean }
// Auth: Teacher or Admin
// ─────────────────────────────────────────────────────────────────────────────
router.patch(
  '/teacher/chapters/:chapterId/lock-status',
  requireAuth,
  requireAdminOrTeacher,
  async (req: Request, res: Response) => {
    const { chapterId } = req.params;
    const { isUnlocked } = req.body as { isUnlocked?: boolean };

    if (typeof isUnlocked !== 'boolean') {
      return res.status(400).json({ error: 'isUnlocked (boolean) is required in request body' });
    }

    try {
      // Check chapter exists
      const chapters = await prisma.$queryRawUnsafe<Array<{ id: string }>>(
        `SELECT id FROM chapters WHERE id = $1::uuid`, chapterId
      );
      if (chapters.length === 0) {
        return res.status(404).json({ error: 'Chapter not found' });
      }

      const now = new Date().toISOString();
      await prisma.$executeRawUnsafe(
        `UPDATE chapters SET is_unlocked = $1::boolean, unlocked_at = $2::timestamp, unlocked_by = $3::uuid WHERE id = $4::uuid`,
        isUnlocked, now, req.auth!.userId, chapterId
      );

      return res.json({
        id: chapterId,
        isUnlocked,
        unlockedAt: now,
        unlockedBy: req.auth!.userId,
      });
    } catch (err: any) {
      console.error('[chapter-lock] PATCH lock-status error:', err);
      return res.status(500).json({ error: 'Failed to update chapter lock status' });
    }
  }
);

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/teacher/chapters/:chapterId/student-overrides
// Returns the full roster of students in the chapter's class, with their
// effective access mode (inherit / unlock / lock) and effective is_unlocked value
// Auth: Teacher or Admin
// ─────────────────────────────────────────────────────────────────────────────
router.get(
  '/teacher/chapters/:chapterId/student-overrides',
  requireAuth,
  requireAdminOrTeacher,
  async (req: Request, res: Response) => {
    const { chapterId } = req.params;

    try {
      // Get chapter with lock state
      const chapterRows = await prisma.$queryRawUnsafe<Array<{
        id: string;
        unit_id: string;
        is_unlocked: boolean;
      }>>(`SELECT id, unit_id, COALESCE(is_unlocked, true) as is_unlocked FROM chapters WHERE id = $1::uuid`, chapterId);

      if (chapterRows.length === 0) {
        return res.status(404).json({ error: 'Chapter not found' });
      }
      const chapter = chapterRows[0];
      const classWideDefault = chapter.is_unlocked;

      // Get the class_id for this chapter's subject
      const classResult = await prisma.$queryRawUnsafe<Array<{ class_id: string }>>(
        `SELECT s.class_id FROM units u JOIN subjects s ON s.id = u.subject_id WHERE u.id = $1::uuid`,
        chapter.unit_id
      );
      if (classResult.length === 0) {
        return res.status(404).json({ error: 'Class not found for chapter' });
      }
      const classId = classResult[0].class_id;

      // Get all students in this class with user info
      const students = await prisma.$queryRawUnsafe<Array<{
        student_id: string;
        first_name: string;
        last_name: string;
        email: string;
      }>>(
        `SELECT st.id as student_id, u.first_name, u.last_name, u.email
         FROM students st
         JOIN users u ON u.id = st.id
         WHERE st.class_id = $1::uuid
         ORDER BY u.first_name, u.last_name`,
        classId
      );

      // Get existing overrides for this chapter
      let overridesMap: Record<string, boolean> = {};
      try {
        const overrides = await prisma.$queryRawUnsafe<Array<{
          student_id: string;
          is_unlocked: boolean;
        }>>(
          `SELECT student_id, is_unlocked FROM chapter_student_overrides WHERE chapter_id = $1::uuid`,
          chapterId
        );
        overrides.forEach(ov => { overridesMap[ov.student_id] = ov.is_unlocked; });
      } catch {}

      const result = students.map(student => {
        const hasOverride = student.student_id in overridesMap;
        let mode: 'inherit' | 'unlock' | 'lock';
        let effectiveIsUnlocked: boolean;

        if (!hasOverride) {
          mode = 'inherit';
          effectiveIsUnlocked = classWideDefault;
        } else if (overridesMap[student.student_id]) {
          mode = 'unlock';
          effectiveIsUnlocked = true;
        } else {
          mode = 'lock';
          effectiveIsUnlocked = false;
        }

        return {
          studentId: student.student_id,
          name: `${student.first_name} ${student.last_name}`,
          email: student.email,
          mode,
          effectiveIsUnlocked,
        };
      });

      return res.json({ classWideDefault, students: result });
    } catch (err: any) {
      console.error('[chapter-lock] GET student-overrides error:', err);
      return res.status(500).json({ error: 'Failed to fetch student overrides' });
    }
  }
);

// ─────────────────────────────────────────────────────────────────────────────
// PATCH /api/teacher/chapters/:chapterId/students/:studentId/override
// Body: { mode: 'inherit' | 'unlock' | 'lock' }
// Auth: Teacher or Admin
// ─────────────────────────────────────────────────────────────────────────────
router.patch(
  '/teacher/chapters/:chapterId/students/:studentId/override',
  requireAuth,
  requireAdminOrTeacher,
  async (req: Request, res: Response) => {
    const { chapterId, studentId } = req.params;
    const { mode } = req.body as { mode?: string };

    if (!['inherit', 'unlock', 'lock'].includes(mode ?? '')) {
      return res.status(400).json({ error: 'mode must be one of: inherit, unlock, lock' });
    }

    try {
      // Verify chapter exists
      const chapterRows = await prisma.$queryRawUnsafe<Array<{ id: string; is_unlocked: boolean }>>(
        `SELECT id, COALESCE(is_unlocked, true) as is_unlocked FROM chapters WHERE id = $1::uuid`, chapterId
      );
      if (chapterRows.length === 0) return res.status(404).json({ error: 'Chapter not found' });

      // Verify student exists
      const studentRows = await prisma.$queryRawUnsafe<Array<{ id: string }>>(
        `SELECT id FROM students WHERE id = $1::uuid`, studentId
      );
      if (studentRows.length === 0) return res.status(404).json({ error: 'Student not found' });

      const chapterDefault = chapterRows[0].is_unlocked;

      if (mode === 'inherit') {
        // Delete override — student follows class default
        try {
          await prisma.$executeRawUnsafe(
            `DELETE FROM chapter_student_overrides WHERE chapter_id = $1::uuid AND student_id = $2::uuid`,
            chapterId, studentId
          );
        } catch {}
        return res.json({ studentId, mode: 'inherit', effectiveIsUnlocked: chapterDefault });
      }

      // Upsert override
      const isUnlocked = mode === 'unlock';
      const now = new Date().toISOString();
      await prisma.$executeRawUnsafe(
        `INSERT INTO chapter_student_overrides (chapter_id, student_id, is_unlocked, set_by, set_at)
         VALUES ($1::uuid, $2::uuid, $3::boolean, $4::uuid, $5::timestamp)
         ON CONFLICT (chapter_id, student_id)
         DO UPDATE SET is_unlocked = EXCLUDED.is_unlocked, set_by = EXCLUDED.set_by, set_at = EXCLUDED.set_at`,
        chapterId, studentId, isUnlocked, req.auth!.userId, now
      );

      return res.json({ studentId, mode, effectiveIsUnlocked: isUnlocked });
    } catch (err: any) {
      console.error('[chapter-lock] PATCH override error:', err);
      return res.status(500).json({ error: 'Failed to update student override' });
    }
  }
);

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/student/chapters/access?subjectId=...
// Returns resolved (effective) chapter access for the authenticated student.
// Students ONLY see the final boolean — never raw class-wide or override internals.
// Auth: Student
// ─────────────────────────────────────────────────────────────────────────────
router.get('/student/chapters/access', requireAuth, async (req: Request, res: Response) => {
  const { subjectId } = req.query as { subjectId?: string };
  if (!subjectId) {
    return res.status(400).json({ error: 'subjectId query param is required' });
  }

  const userId = req.auth!.userId;

  try {
    let targetSubjectId = subjectId;
    const isUuid = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(subjectId);

    if (!isUuid) {
      const subject = await prisma.subject.findFirst({
        where: {
          OR: [{ code: subjectId }, { name: subjectId }],
        },
      });
      if (subject) {
        targetSubjectId = subject.id;
      } else {
        return res.json({ chapters: [] });
      }
    }

    // Get student ID from user ID
    const studentRows = await prisma.$queryRawUnsafe<Array<{ id: string }>>(
      `SELECT id FROM students WHERE id = $1::uuid`, userId
    ).catch(() => []);

    // If not a student account, return all chapters as unlocked
    if (studentRows.length === 0) {
      const units = await prisma.unit.findMany({
        where: { subjectId: targetSubjectId },
        orderBy: { sortOrder: 'asc' },
        include: { chapters: { orderBy: { sortOrder: 'asc' } } },
      });
      const chapters = units.flatMap(u => u.chapters.map(ch => ({
        id: ch.id, title: ch.name, order: ch.sortOrder, isUnlocked: true
      })));
      return res.json({ chapters });
    }

    const studentId = studentRows[0].id;

    // Check if lock columns exist
    const colCheck = await prisma.$queryRawUnsafe<Array<{ column_name: string }>>(
      `SELECT column_name FROM information_schema.columns WHERE table_name = 'chapters' AND column_name = 'is_unlocked'`
    ).catch(() => []);
    const lockColumnsExist = colCheck.length > 0;

    const units = await prisma.unit.findMany({
      where: { subjectId: targetSubjectId },
      orderBy: { sortOrder: 'asc' },
      include: { chapters: { orderBy: { sortOrder: 'asc' } } },
    });

    if (!lockColumnsExist) {
      // Migration not applied yet — treat all chapters as unlocked
      const chapters = units.flatMap(u => u.chapters.map(ch => ({
        id: ch.id, title: ch.name, order: ch.sortOrder, isUnlocked: true
      })));
      return res.json({ chapters });
    }

    // Get all chapter IDs for this subject
    const chapterIds = units.flatMap(u => u.chapters.map(c => c.id));

    if (chapterIds.length === 0) {
      return res.json({ chapters: [] });
    }

    // Fetch class-wide lock states
    const placeholders = chapterIds.map((_, i) => `$${i + 1}::uuid`).join(',');
    const lockRows = await prisma.$queryRawUnsafe<Array<{
      id: string;
      is_unlocked: boolean;
    }>>(`SELECT id, is_unlocked FROM chapters WHERE id IN (${placeholders})`, ...chapterIds).catch(() => []);
    
    const lockMap: Record<string, boolean> = {};
    lockRows.forEach(r => { lockMap[r.id] = r.is_unlocked; });

    // Fetch per-student overrides for these chapters
    let overrideMap: Record<string, boolean> = {};
    try {
      const studentPlaceholders = chapterIds.map((_, i) => `$${i + 2}::uuid`).join(',');
      const overrideRows = await prisma.$queryRawUnsafe<Array<{
        chapter_id: string;
        is_unlocked: boolean;
      }>>(
        `SELECT chapter_id, is_unlocked FROM chapter_student_overrides WHERE student_id = $1::uuid AND chapter_id IN (${studentPlaceholders})`,
        studentId, ...chapterIds
      );
      overrideRows.forEach(r => { overrideMap[r.chapter_id] = r.is_unlocked; });
    } catch {}

    // Compute effective access for each chapter
    const chapters = units.flatMap(u =>
      u.chapters.map(ch => {
        const hasOverride = ch.id in overrideMap;
        const isUnlocked = hasOverride ? overrideMap[ch.id] : (lockMap[ch.id] ?? true);
        return { id: ch.id, title: ch.name, order: ch.sortOrder, isUnlocked };
      })
    );

    return res.json({ chapters });
  } catch (err: any) {
    console.error('[chapter-lock] GET student access error:', err);
    return res.json({ chapters: [] });
  }
});

export default router;
