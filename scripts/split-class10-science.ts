import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function main() {
  console.log('Splitting Class 10 Science notes into separate files for each topic...');

  const sourceMd = path.join(process.cwd(), 'stateboard notes/State Board class 10 Science.md');
  const content = fs.readFileSync(sourceMd, 'utf-8');
  const lines = content.split('\n');

  const notesDir = path.join(process.cwd(), 'public/notes/class-10-science');
  if (!fs.existsSync(notesDir)) {
    fs.mkdirSync(notesDir, { recursive: true });
  }

  // 1. Split the markdown into chapters
  // Note: For Class 10, the markdown "Chapters" actually correspond to database "Topics"
  // (because the DB Chapters are PHYSICS, CHEMISTRY, etc.)
  const chapterFiles = new Map<string, string>();
  let currentTitle = null;
  let currentLines: string[] = [];
  
  const globalHeader = "# Tamil Nadu State Board Class 10 Science\n\n";

  for (const line of lines) {
    if (line.match(/^#\s+.*Chapter\s+\d+:/i) || line.match(/^#\s+Chapter\s+\d+/i) || line.match(/^#\s+.*–\s+Chapter\s+\d+:/i)) {
      if (currentTitle) {
        const slug = slugify(currentTitle) + '.md';
        const filepath = path.join(notesDir, slug);
        fs.writeFileSync(filepath, globalHeader + currentLines.join('\n'));
        chapterFiles.set(currentTitle, slug);
      }
      currentTitle = line.replace(/^#\s*/, '').trim();
      currentLines = [line];
    } else {
      if (currentTitle) {
        currentLines.push(line);
      }
    }
  }
  if (currentTitle) {
    const slug = slugify(currentTitle) + '.md';
    const filepath = path.join(notesDir, slug);
    fs.writeFileSync(filepath, globalHeader + currentLines.join('\n'));
    chapterFiles.set(currentTitle, slug);
  }

  console.log(`Successfully split into ${chapterFiles.size} individual files!`);

  // 2. Link them in the database
  const board = await prisma.board.findFirst({ where: { code: 'TNSB' } });
  if (!board) throw new Error('Board not found');

  const cls = await prisma.class.findFirst({ where: { boardId: board.id, name: 'Class 10' } });
  if (!cls) throw new Error('Class 10 not found');

  const subject = await prisma.subject.findFirst({ where: { classId: cls.id, name: 'Science' } });
  if (!subject) throw new Error('Science subject not found');

  const chapters = await prisma.chapter.findMany({
    where: { unit: { subjectId: subject.id } }
  });

  let linkedCount = 0;

  for (const chapter of chapters) {
    const topics = await prisma.topic.findMany({ where: { chapterId: chapter.id } });
    
    for (const topic of topics) {
      let targetSlug = null;
      
      // Try to find a markdown "chapter" title that matches this DB topic's name
      for (const [title, slug] of chapterFiles.entries()) {
        if (title.toLowerCase().includes(topic.name.toLowerCase()) || topic.name.toLowerCase().includes(title.toLowerCase())) {
          targetSlug = slug;
          break;
        }
      }

      if (targetSlug) {
        await prisma.courseNote.updateMany({
          where: { topicId: topic.id },
          data: {
            fileUrl: `/notes/class-10-science/${targetSlug}`
          }
        });
        linkedCount++;
      } else {
        console.log(`Warning: Could not find matching split file for DB topic: ${topic.name}`);
      }
    }
  }

  console.log(`Successfully linked ${linkedCount} Class 10 Science topics to their dedicated markdown files!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
