import { prisma } from './prisma.js';

/**
 * Safe, idempotent migration to add approval workflow, creator tracking,
 * and scheduled time window columns to the `quizzes` table.
 */
export async function runMockTestMigration() {
  try {
    await prisma.$executeRawUnsafe(`
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_name = 'quizzes' AND column_name = 'approval_status'
        ) THEN
          ALTER TABLE quizzes
            ADD COLUMN approval_status TEXT NOT NULL DEFAULT 'APPROVED',
            ADD COLUMN rejection_reason TEXT,
            ADD COLUMN created_by_id UUID,
            ADD COLUMN created_by_name TEXT,
            ADD COLUMN created_by_role TEXT DEFAULT 'ADMIN',
            ADD COLUMN scheduled_start_time TIMESTAMPTZ,
            ADD COLUMN scheduled_end_time TIMESTAMPTZ;
        END IF;
      END $$;
    `);
    console.log('[migration] ✅ Mock Test approval & scheduling database columns: OK');
  } catch (err: any) {
    console.error('[migration] ❌ Mock Test migration failed:', err.message);
  }
}
