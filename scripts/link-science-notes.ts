import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  console.log('Linking Class 9 Science notes...');

  // 1. Ensure the public/notes directory exists
  const publicNotesDir = path.join(process.cwd(), 'public/notes');
  if (!fs.existsSync(publicNotesDir)) {
    fs.mkdirSync(publicNotesDir, { recursive: true });
  }

  // 2. Copy the massive Markdown file into the public directory so the frontend can fetch it
  const sourceMd = path.join(process.cwd(), 'stateboard notes/State Board class 9 Science.md');
  const destMd = path.join(publicNotesDir, 'class-9-science.md');
  
  if (!fs.existsSync(sourceMd)) {
    throw new Error('Could not find the Science markdown notes file!');
  }
  
  fs.copyFileSync(sourceMd, destMd);
  console.log('Successfully copied notes to public folder.');

  // 3. Find Class 9 Science in the DB
  const board = await prisma.board.findFirst({ where: { code: 'TNSB' } });
  if (!board) throw new Error('Board not found');

  const cls = await prisma.class.findFirst({ where: { boardId: board.id, name: 'Class 9' } });
  if (!cls) throw new Error('Class 9 not found');

  const subject = await prisma.subject.findFirst({ where: { classId: cls.id, name: 'Science' } });
  if (!subject) throw new Error('Science subject not found');

  // 4. Update ALL CourseNotes for this subject to point to the real Markdown file instead of dummy.pdf
  // Find all chapters
  const chapters = await prisma.chapter.findMany({
    where: { unit: { subjectId: subject.id } }
  });

  let updatedCount = 0;

  for (const chapter of chapters) {
    const topics = await prisma.topic.findMany({ where: { chapterId: chapter.id } });
    
    for (const topic of topics) {
      await prisma.courseNote.updateMany({
        where: { topicId: topic.id },
        data: {
          fileUrl: '/notes/class-9-science.md' // The frontend will dynamically fetch and render this Markdown!
        }
      });
      updatedCount++;
    }
  }

  console.log(`Successfully linked real Markdown notes to ${updatedCount} Science topics!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
