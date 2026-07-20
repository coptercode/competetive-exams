import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function parseMarkdownChapters(sourceFile: string, notesFolder: string, volumeName: string) {
  const sourceMd = path.join(process.cwd(), sourceFile);
  const content = fs.readFileSync(sourceMd, 'utf-8');
  const lines = content.split('\n');

  const notesDir = path.join(process.cwd(), notesFolder);
  if (!fs.existsSync(notesDir)) {
    fs.mkdirSync(notesDir, { recursive: true });
  }

  const chapters: any[] = [];
  let currentChapter: any = null;
  let currentLines: string[] = [];
  const globalHeader = `# Tamil Nadu State Board Class 11 ${volumeName}\n\n`;

  for (const line of lines) {
    if (line.match(/^#\s+(?:Unit|Chapter)\s+\d+:/i)) {
      if (currentChapter) {
        fs.writeFileSync(currentChapter.filepath, globalHeader + currentLines.join('\n'));
        chapters.push(currentChapter);
      }
      const rawTitle = line.replace(/^#\s*/, '').trim();
      const cleanTitle = rawTitle.includes(':') ? rawTitle.split(':')[1].trim() : rawTitle;
      
      const slug = slugify(rawTitle) + '.md';
      currentChapter = {
        title: cleanTitle,
        slug: slug,
        filepath: path.join(notesDir, slug),
        relativeUrl: `/${notesFolder.split('public/')[1]}/${slug}`,
        topics: []
      };
      currentLines = [line];
    } else if (line.match(/^#+\s+/)) {
      if (currentChapter && currentChapter.topics.length < 5) {
        const topicTitle = line.replace(/^#+\s*/, '').trim();
        if (!topicTitle.includes('PART ') && topicTitle !== topicTitle.toUpperCase()) {
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
  return chapters;
}

async function main() {
  console.log('Combining Class 11 Physics Volumes into a single Physics subject...');

  const board = await prisma.board.findFirst({ where: { code: 'TNSB' } });
  if (!board) throw new Error('Board not found');

  const cls = await prisma.class.findFirst({ where: { boardId: board.id, name: 'Class 11' } });
  if (!cls) throw new Error('Class 11 not found');

  // 1. DELETE the separate Volume 1 and Volume 2 if they exist
  await prisma.subject.deleteMany({
    where: {
      classId: cls.id,
      name: { in: ['Physics Volume 1', 'Physics Volume 2'] }
    }
  });
  console.log('Cleaned up old separate Volume 1 and Volume 2 subjects.');

  // 2. Parse chapters from both volumes
  const vol1Chapters = parseMarkdownChapters(
    'stateboard notes/State Board class 11 Physics Volume 1.md',
    'public/notes/class-11-physics',
    'Physics'
  );
  const vol2Chapters = parseMarkdownChapters(
    'stateboard notes/State Board class 11 Physics Volume 2.md',
    'public/notes/class-11-physics',
    'Physics'
  );

  const allChapters = [...vol1Chapters, ...vol2Chapters];
  console.log(`Parsed a total of ${allChapters.length} combined chapters.`);

  // 3. Create SINGLE Physics subject
  const dbSubject = await prisma.subject.upsert({
    where: { classId_name: { classId: cls.id, name: 'Physics' } },
    update: {},
    create: {
      name: 'Physics',
      code: 'PHYSICS-11-TNSB',
      classId: cls.id,
      sortOrder: 1, 
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

  for (let c = 0; c < allChapters.length; c++) {
    const chapterData = allChapters[c];
    
    const dbChapter = await prisma.chapter.upsert({
      where: { unitId_name: { unitId: dbUnit.id, name: chapterData.title } },
      update: {},
      create: {
        name: chapterData.title,
        unitId: dbUnit.id,
        sortOrder: c + 1, // Sort order continues seamlessly from Vol 1 to Vol 2!
      },
    });

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

      const noteCount = await prisma.courseNote.count({ where: { topicId: dbTopic.id } });
      if (noteCount === 0) {
        await prisma.courseNote.create({
          data: {
            title: `Comprehensive Notes: ${dbTopic.name}`,
            fileUrl: chapterData.relativeUrl,
            topicId: dbTopic.id,
            sortOrder: 1,
            subjectTitle: 'Physics',
          },
        });
      } else {
        await prisma.courseNote.updateMany({
          where: { topicId: dbTopic.id },
          data: { fileUrl: chapterData.relativeUrl }
        });
      }
      topicsInjected++;
    }
  }
  
  console.log(`Successfully injected a single Unified Physics subject with ${topicsInjected} topics flawlessly!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
