import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function main() {
  console.log('Splitting Science notes into separate files for each chapter...');

  const sourceMd = path.join(process.cwd(), 'stateboard notes/State Board class 9 Science.md');
  const content = fs.readFileSync(sourceMd, 'utf-8');
  const lines = content.split('\n');

  const notesDir = path.join(process.cwd(), 'public/notes/class-9-science');
  if (!fs.existsSync(notesDir)) {
    fs.mkdirSync(notesDir, { recursive: true });
  }

  // 1. Split the markdown into chapters
  const chapterFiles = new Map<string, string>(); // Maps chapter DB name -> slugified filename
  let currentTitle = null;
  let currentLines: string[] = [];
  
  // Keep the very first header to append to all files if we want, or just skip it.
  const globalHeader = "# Tamil Nadu State Board Class 9 Science\n\n";

  for (const line of lines) {
    if (line.match(/^#\s+.*Chapter\s+\d+:/i) || line.match(/^#\s+Chapter\s+\d+/i) || line.match(/^#\s+.*–\s+Chapter\s+\d+:/i)) {
      // Save the previous chapter
      if (currentTitle) {
        const slug = slugify(currentTitle) + '.md';
        const filepath = path.join(notesDir, slug);
        fs.writeFileSync(filepath, globalHeader + currentLines.join('\n'));
        chapterFiles.set(currentTitle, slug);
      }
      // Start new chapter
      currentTitle = line.replace(/^#\s*/, '').trim();
      currentLines = [line]; // Include the chapter header itself
    } else {
      if (currentTitle) {
        currentLines.push(line);
      }
    }
  }
  // Save the final chapter
  if (currentTitle) {
    const slug = slugify(currentTitle) + '.md';
    const filepath = path.join(notesDir, slug);
    fs.writeFileSync(filepath, globalHeader + currentLines.join('\n'));
    chapterFiles.set(currentTitle, slug);
  }

  console.log(`Successfully split the massive document into ${chapterFiles.size} individual chapter files!`);

  // 2. Link them in the database
  const board = await prisma.board.findFirst({ where: { code: 'TNSB' } });
  if (!board) throw new Error('Board not found');

  const cls = await prisma.class.findFirst({ where: { boardId: board.id, name: 'Class 9' } });
  if (!cls) throw new Error('Class 9 not found');

  const subject = await prisma.subject.findFirst({ where: { classId: cls.id, name: 'Science' } });
  if (!subject) throw new Error('Science subject not found');

  const chapters = await prisma.chapter.findMany({
    where: { unit: { subjectId: subject.id } }
  });

  let linkedCount = 0;

  for (const chapter of chapters) {
    // The DB chapter name matches the currentTitle because they were parsed using the exact same logic!
    // But let's do a safe include match just in case
    let targetSlug = null;
    for (const [title, slug] of chapterFiles.entries()) {
      if (title === chapter.name || title.includes(chapter.name) || chapter.name.includes(title)) {
        targetSlug = slug;
        break;
      }
    }

    if (targetSlug) {
      const topics = await prisma.topic.findMany({ where: { chapterId: chapter.id } });
      for (const topic of topics) {
        await prisma.courseNote.updateMany({
          where: { topicId: topic.id },
          data: {
            fileUrl: `/notes/class-9-science/${targetSlug}`
          }
        });
      }
      linkedCount++;
    } else {
      console.log(`Warning: Could not find matching split file for DB chapter: ${chapter.name}`);
    }
  }

  console.log(`Successfully linked ${linkedCount} chapters to their dedicated, isolated markdown files!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
