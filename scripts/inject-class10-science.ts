import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function main() {
  console.log('Injecting Class 10 Science into DB and splitting notes...');

  const sourceMd = path.join(process.cwd(), 'stateboard notes/State Board class 10 Science.md');
  const content = fs.readFileSync(sourceMd, 'utf-8');
  const lines = content.split('\n');

  const notesDir = path.join(process.cwd(), 'public/notes/class-10-science');
  if (!fs.existsSync(notesDir)) {
    fs.mkdirSync(notesDir, { recursive: true });
  }

  const chapters: any[] = [];
  let currentChapter: any = null;
  let currentLines: string[] = [];
  const globalHeader = "# Tamil Nadu State Board Class 10 Science\n\n";

  // 1. Parse markdown into Chapters and Topics, and save the split files
  for (const line of lines) {
    if (line.match(/^#\s+.*Chapter\s+\d+:/i) || line.match(/^#\s+Chapter\s+\d+/i) || line.match(/^#\s+.*–\s+Chapter\s+\d+:/i)) {
      if (currentChapter) {
        // Save previous chapter file
        fs.writeFileSync(currentChapter.filepath, globalHeader + currentLines.join('\n'));
        chapters.push(currentChapter);
      }
      const rawTitle = line.replace(/^#\s*/, '').trim();
      const cleanTitle = rawTitle.includes(':') ? rawTitle.split(':')[1].trim() : rawTitle; // e.g. "Laws of Motion"
      
      const slug = slugify(rawTitle) + '.md';
      currentChapter = {
        title: cleanTitle,
        slug: slug,
        filepath: path.join(notesDir, slug),
        topics: []
      };
      currentLines = [line];
    } else if (line.match(/^#+\s+/)) {
      if (currentChapter && currentChapter.topics.length < 5) {
        const topicTitle = line.replace(/^#+\s*/, '').trim();
        // Skip purely uppercase titles or "PART A" if we want to clean it up, or just add it
        if (!topicTitle.includes('PART ') && topicTitle !== topicTitle.toUpperCase()) {
          // Clean out numbers like "1. Force"
          const finalTopicName = topicTitle.replace(/^\d+\.\s*/, '').trim();
          if (finalTopicName.length > 0 && !currentChapter.topics.includes(finalTopicName)) {
            currentChapter.topics.push(finalTopicName);
          }
        }
      }
      if (currentChapter) {
        currentLines.push(line);
      }
    } else {
      if (currentChapter) {
        currentLines.push(line);
      }
    }
  }
  if (currentChapter) {
    fs.writeFileSync(currentChapter.filepath, globalHeader + currentLines.join('\n'));
    chapters.push(currentChapter);
  }

  console.log(`Successfully parsed ${chapters.length} chapters from markdown!`);

  // 2. Inject into Database
  const board = await prisma.board.findFirst({ where: { code: 'TNSB' } });
  if (!board) throw new Error('Board not found');

  const cls = await prisma.class.findFirst({ where: { boardId: board.id, name: 'Class 10' } });
  if (!cls) throw new Error('Class 10 not found');

  const dbSubject = await prisma.subject.upsert({
    where: { classId_name: { classId: cls.id, name: 'Science' } },
    update: {},
    create: {
      name: 'Science',
      code: 'SCIENCE-10-TNSB',
      classId: cls.id,
      sortOrder: 2, // Assuming Science is 2nd subject after Math
    },
  });

  const dbUnit = await prisma.unit.upsert({
    where: { subjectId_name: { subjectId: dbSubject.id, name: 'Core Syllabus' } },
    update: {},
    create: {
      name: 'Core Syllabus',
      subjectId: dbSubject.id,
      sortOrder: 1,
    },
  });

  let topicsInjected = 0;

  for (let c = 0; c < chapters.length; c++) {
    const chapterData = chapters[c];
    
    const dbChapter = await prisma.chapter.upsert({
      where: { unitId_name: { unitId: dbUnit.id, name: chapterData.title } },
      update: {},
      create: {
        name: chapterData.title,
        unitId: dbUnit.id,
        sortOrder: c + 1,
      },
    });

    // Ensure we inject at least 1 topic if none were parsed
    const topicsToInject = chapterData.topics.length > 0 ? chapterData.topics : [chapterData.title];

    for (let t = 0; t < topicsToInject.length; t++) {
      const topicTitle = topicsToInject[t];
      
      const dbTopic = await prisma.topic.upsert({
        where: { chapterId_name: { chapterId: dbChapter.id, name: topicTitle } },
        update: {},
        create: {
          name: topicTitle,
          chapterId: dbChapter.id,
          sortOrder: t + 1,
          requireWatchPercent: 90.0,
          requireQuizPass: true,
        },
      });

      // Assign the markdown slice to this topic!
      const noteCount = await prisma.courseNote.count({ where: { topicId: dbTopic.id } });
      if (noteCount === 0) {
        await prisma.courseNote.create({
          data: {
            title: `Comprehensive Notes: ${dbTopic.name}`,
            fileUrl: `/notes/class-10-science/${chapterData.slug}`,
            topicId: dbTopic.id,
            sortOrder: 1,
            subjectTitle: 'Science',
          },
        });
      } else {
        await prisma.courseNote.updateMany({
          where: { topicId: dbTopic.id },
          data: { fileUrl: `/notes/class-10-science/${chapterData.slug}` }
        });
      }
      topicsInjected++;
    }
  }

  console.log(`Successfully injected Science subject for Class 10 with ${topicsInjected} perfectly linked topics!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
