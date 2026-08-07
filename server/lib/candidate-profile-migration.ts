import { prisma } from './prisma.js';

/**
 * Runs safe, idempotent schema migrations for Candidate & Student profiles,
 * study hours tracking, daily activity logs, instructor remarks, and total validation tables.
 */
export async function runCandidateProfileMigration() {
  try {
    // Step 1: Add new profile columns to users table
    await prisma.$executeRawUnsafe(`
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_name = 'users' AND column_name = 'avatar_url'
        ) THEN
          ALTER TABLE users
            ADD COLUMN avatar_url TEXT,
            ADD COLUMN medium TEXT,
            ADD COLUMN target_exam TEXT,
            ADD COLUMN qualification TEXT,
            ADD COLUMN total_hours_spent DOUBLE PRECISION DEFAULT 34.5,
            ADD COLUMN today_hours_spent DOUBLE PRECISION DEFAULT 2.8;
        END IF;

        IF NOT EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_name = 'users' AND column_name = 'is_blocked'
        ) THEN
          ALTER TABLE users
            ADD COLUMN is_blocked BOOLEAN NOT NULL DEFAULT FALSE,
            ADD COLUMN blocked_reason TEXT,
            ADD COLUMN consecutive_low_activity_days INT NOT NULL DEFAULT 0,
            ADD COLUMN apology_note TEXT,
            ADD COLUMN apology_submitted_at TIMESTAMPTZ,
            ADD COLUMN unblocked_by TEXT,
            ADD COLUMN unblocked_at TIMESTAMPTZ;
        END IF;
      END $$;
    `);
    console.log('[migration] candidate profile & account blocking columns: OK');

    // Step 2: Create daily_activity_logs table
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS daily_activity_logs (
        id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id           UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        date              TEXT NOT NULL,
        day_name          TEXT NOT NULL,
        hours_spent       DOUBLE PRECISION NOT NULL DEFAULT 0.0,
        quizzes_completed INT NOT NULL DEFAULT 0,
        topics_completed  INT NOT NULL DEFAULT 0,
        score_percentage  DOUBLE PRECISION NOT NULL DEFAULT 0.0,
        created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        CONSTRAINT daily_activity_logs_user_date_unique UNIQUE (user_id, date)
      );
    `);
    console.log('[migration] daily_activity_logs table: OK');

    // Step 3: Create instructor_remarks table
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS instructor_remarks (
        id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        instructor_id   UUID,
        instructor_name TEXT NOT NULL,
        date            TEXT NOT NULL,
        text            TEXT NOT NULL,
        category        TEXT NOT NULL,
        type            TEXT NOT NULL DEFAULT 'positive',
        created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    console.log('[migration] instructor_remarks table: OK');

    // Step 4: Create candidate_validations table
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS candidate_validations (
        id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id      UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        title        TEXT NOT NULL,
        description  TEXT NOT NULL,
        is_validated BOOLEAN NOT NULL DEFAULT FALSE,
        category     TEXT NOT NULL,
        validated_by TEXT,
        validated_at TEXT,
        created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    console.log('[migration] candidate_validations table: OK');

    // Step 5: Create daily_tasks table
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS daily_tasks (
        id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title           TEXT NOT NULL,
        description     TEXT,
        target_batch    TEXT,
        student_id      UUID REFERENCES users(id) ON DELETE CASCADE,
        instructor_name TEXT NOT NULL DEFAULT 'Faculty Lead',
        due_date        TEXT NOT NULL,
        task_type       TEXT NOT NULL DEFAULT 'Daily Test',
        is_completed    BOOLEAN NOT NULL DEFAULT FALSE,
        created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    console.log('[migration] daily_tasks table: OK');

    console.log('[migration] ✅ Candidate profile & validation database migration complete.');
  } catch (err: any) {
    console.error('[migration] ❌ Candidate profile migration failed:', err.message);
  }
}
