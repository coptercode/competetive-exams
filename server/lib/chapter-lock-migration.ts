import { prisma } from './prisma.js';

/**
 * Runs the chapter lock system schema migration if it hasn't been applied yet.
 * This is a safe, idempotent migration using IF NOT EXISTS / IF EXISTS guards.
 */
export async function runChapterLockMigration() {
  try {
    // Step 1: Add lock columns to chapters table (idempotent — uses IF NOT EXISTS)
    await prisma.$executeRawUnsafe(`
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_name = 'chapters' AND column_name = 'is_unlocked'
        ) THEN
          ALTER TABLE chapters
            ADD COLUMN is_unlocked BOOLEAN NOT NULL DEFAULT FALSE,
            ADD COLUMN unlocked_at TIMESTAMPTZ,
            ADD COLUMN unlocked_by UUID;
        END IF;
      END $$;
    `);
    console.log('[migration] chapter lock columns: OK');

    // Step 2: Set the first chapter (lowest sort_order) of the first unit
    // per subject to is_unlocked = true (seed initial state)
    await prisma.$executeRawUnsafe(`
      UPDATE chapters c
      SET is_unlocked = TRUE
      WHERE c.sort_order = (
        SELECT MIN(c2.sort_order)
        FROM chapters c2
        WHERE c2.unit_id = c.unit_id
      )
      AND c.unit_id IN (
        SELECT u.id
        FROM units u
        WHERE u.sort_order = (
          SELECT MIN(u2.sort_order)
          FROM units u2
          WHERE u2.subject_id = u.subject_id
        )
      )
      AND c.is_unlocked = FALSE;
    `);
    console.log('[migration] chapter seed (first chapter unlocked): OK');

    // Step 3: Create the chapter_student_overrides table
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS chapter_student_overrides (
        id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        chapter_id  UUID NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
        student_id  UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
        is_unlocked BOOLEAN NOT NULL,
        set_by      UUID NOT NULL,
        set_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        CONSTRAINT chapter_student_overrides_unique UNIQUE (chapter_id, student_id)
      );
    `);
    console.log('[migration] chapter_student_overrides table: OK');

    // Step 4: Create indexes
    await prisma.$executeRawUnsafe(`
      CREATE INDEX IF NOT EXISTS idx_cso_chapter_id ON chapter_student_overrides(chapter_id);
    `);
    await prisma.$executeRawUnsafe(`
      CREATE INDEX IF NOT EXISTS idx_cso_student_id ON chapter_student_overrides(student_id);
    `);
    console.log('[migration] chapter_student_overrides indexes: OK');

    console.log('[migration] ✅ Chapter lock system migration complete.');
  } catch (err: any) {
    console.error('[migration] ❌ Chapter lock migration failed:', err.message);
    // Don't crash the server — the feature will gracefully degrade
  }
}
