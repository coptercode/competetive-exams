import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function processVolume(
  volumeName: string, 
  sourceFile: string, 
  subjectCode: string, 
  notesFolder: string,
  classId: string,
  sortOrder: number
) {
  console.log(`\nProcessing ${volumeName}...`);
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

  // 1. Parse markdown into Chapters and Topics
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
  console.log(`Parsed ${chapters.length} chapters.`);

  // 2. Inject into Database
  const dbSubject = await prisma.subject.upsert({
    where: { classId_name: { classId: classId, name: volumeName } },
    update: {},
    create: {
      name: volumeName,
      code: subjectCode,
      classId: classId,
      sortOrder: sortOrder,
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

      const dbRelativeUrl = `/${notesFolder.split('public/')[1]}/${chapterData.slug}`;
      const noteCount = await prisma.courseNote.count({ where: { topicId: dbTopic.id } });
      if (noteCount === 0) {
        await prisma.courseNote.create({
          data: {
            title: `Comprehensive Notes: ${dbTopic.name}`,
            fileUrl: dbRelativeUrl,
            topicId: dbTopic.id,
            sortOrder: 1,
            subjectTitle: volumeName,
          },
        });
      } else {
        await prisma.courseNote.updateMany({
          where: { topicId: dbTopic.id },
          data: { fileUrl: dbRelativeUrl }
        });
      }
      topicsInjected++;
    }
  }
  console.log(`Successfully injected ${volumeName} with ${topicsInjected} perfectly linked topics!`);
}

async function main() {
  const board = await prisma.board.findFirst({ where: { code: 'TNSB' } });
  if (!board) throw new Error('Board not found');

  const cls = await prisma.class.findFirst({ where: { boardId: board.id, name: 'Class 11' } });
  if (!cls) throw new Error('Class 11 not found');

  await processVolume(
    'Physics Volume 1',
    'stateboard notes/State Board class 11 Physics Volume 1.md',
    'PHYSICS-V1-11-TNSB',
    'public/notes/class-11-physics-v1',
    cls.id,
    1
  );

  await processVolume(
    'Physics Volume 2',
    'stateboard notes/State Board class 11 Physics Volume 2.md',
    'PHYSICS-V2-11-TNSB',
    'public/notes/class-11-physics-v2',
    cls.id,
    2
  );
}

main().catch(console.error).finally(() => prisma.$disconnect());
