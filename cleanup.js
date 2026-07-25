import fs from 'fs';
import path from 'path';

const currentDir = process.cwd();
const unwantedDir = path.join(currentDir, 'unwanted');

// Create the 'unwanted' folder if it doesn't exist
if (!fs.existsSync(unwantedDir)) {
  fs.mkdirSync(unwantedDir);
}

const filesToMove = [
  'Tamil_Nadu_State_Board_Curriculum.md',
  'chapter_subtopics.json',
  'class9_science.json',
  'full_syllabus.txt',
  'syllubus.md',
  'assign-all-notes.ts',
  'assign-notes.ts',
  'assign-playlist.ts',
  'assign-video.ts',
  'clean_db.js',
  'clean_json.js',
  'count-subjects.ts',
  'count_topics.js',
  'count_topics.ts',
  'fix-encoding.cjs',
  'fix-encoding.js',
  'fix-supabase-md.js',
  'fix-supabase-md.ts',
  'fix_latex.ts',
  'merge-json.js',
  'rebuild_json.js',
  'restore.js',
  'scratch_diff.js',
  'split_notes.js',
  'seed_stateboard.js',
  'seed_stateboard_assignment.js',
  'test-db.js',
  'test-prisma.ts',
  'test-student.ts',
  'test-topic.ts',
  'test_admin_api.js',
  'truncate-topics.js',
  'update-tnsb.js',
  'update-urls.ts',
  'update_icse.js'
];

let movedCount = 0;

filesToMove.forEach(file => {
  const oldPath = path.join(currentDir, file);
  const newPath = path.join(unwantedDir, file);
  
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Moved: ${file}`);
    movedCount++;
  }
});

console.log(`\nSuccessfully moved ${movedCount} files to the 'unwanted' folder!`);
