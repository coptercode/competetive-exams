import { PrismaClient } from '@prisma/client';
import { execSync } from 'child_process';

const prisma = new PrismaClient();

async function main() {
  console.log('Cleaning up all existing CourseNotes to prevent cross-board contamination...');
  await prisma.courseNote.deleteMany({});
  console.log('Cleaned up CourseNotes.');
  
  console.log('Running parse_cbse_notes.ts...');
  execSync('npx tsx scripts/parse_cbse_notes.ts', { stdio: 'inherit' });
  
  console.log('Running import_tnsb_pdfs.ts...');
  execSync('npx tsx scripts/import_tnsb_pdfs.ts', { stdio: 'inherit' });

  console.log('All notes have been cleanly re-imported and assigned to their correct boards!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
