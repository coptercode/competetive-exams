import { prisma } from './prisma.js';

/**
 * Migration that adds instructor chapter access permissions and
 * target_student_id column for individual student publishing.
 */
export async function runChapterAccessMigration() {
  try {
    // Step 1: Create instructor_chapter_access table
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS instructor_chapter_access (
        id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        instructor_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        chapter_id    UUID NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
        granted_by    UUID,
        granted_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        CONSTRAINT instructor_chapter_access_unique UNIQUE (instructor_id, chapter_id)
      );
    `);
    console.log('[migration] instructor_chapter_access table: OK');

    // Step 2: Add target_student_id column to course_notes and course_videos
    await prisma.$executeRawUnsafe(`
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_name = 'course_notes' AND column_name = 'target_student_id'
        ) THEN
          ALTER TABLE course_notes ADD COLUMN target_student_id UUID REFERENCES users(id) ON DELETE CASCADE;
        END IF;

        IF NOT EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_name = 'course_videos' AND column_name = 'target_student_id'
        ) THEN
          ALTER TABLE course_videos ADD COLUMN target_student_id UUID REFERENCES users(id) ON DELETE CASCADE;
        END IF;
      END $$;
    `);
    console.log('[migration] target_student_id columns on course_notes & course_videos: OK');
  } catch (err: any) {
    console.error('[migration] ❌ Chapter access migration failed:', err.message);
  }
}
