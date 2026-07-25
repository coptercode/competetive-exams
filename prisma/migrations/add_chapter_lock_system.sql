-- Migration: add_chapter_lock_system
-- Adds is_unlocked, unlocked_at, unlocked_by to chapters table
-- Creates chapter_student_overrides table for per-student access overrides

-- Step 1: Add lock fields to chapters table
ALTER TABLE chapters 
  ADD COLUMN IF NOT EXISTS is_unlocked BOOLEAN NOT NULL DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS unlocked_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS unlocked_by UUID;

-- Step 2: Set first chapter per (unit's subject) to unlocked = true
-- We identify the first chapter by sort_order within each unit
-- and the first unit by sort_order within each subject
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
);

-- Step 3: Create the chapter_student_overrides table
CREATE TABLE IF NOT EXISTS chapter_student_overrides (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  chapter_id  UUID NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
  student_id  UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  is_unlocked BOOLEAN NOT NULL,
  set_by      UUID NOT NULL,
  set_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT chapter_student_overrides_unique UNIQUE (chapter_id, student_id)
);

-- Step 4: Create indexes
CREATE INDEX IF NOT EXISTS idx_cso_chapter_id ON chapter_student_overrides(chapter_id);
CREATE INDEX IF NOT EXISTS idx_cso_student_id ON chapter_student_overrides(student_id);
