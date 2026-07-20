import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function parseMarkdownChapters(sourceFile: string, notesFolder: string, subjectName: string, className: string) {
  const sourceMd = path.join(process.cwd(), sourceFile);
  if (!fs.existsSync(sourceMd)) {
    console.log(`Warning: File not found ${sourceMd}`);
    return [];
  }
  const content = fs.readFileSync(sourceMd, 'utf-8');
  const lines = content.split('\n');

  const notesDir = path.join(process.cwd(), notesFolder);
  if (!fs.existsSync(notesDir)) {
    fs.mkdirSync(notesDir, { recursive: true });
  }

  const chapters: any[] = [];
  let currentChapter: any = null;
  let currentLines: string[] = [];
  const globalHeader = `# Tamil Nadu State Board ${className} ${subjectName}\n\n`;

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

async function injectSubject(className: string, subjectName: string, files: string[], sortOrder: number) {
  console.log(`\n--- Injecting ${className} ${subjectName} ---`);
  const board = await prisma.board.findFirst({ where: { code: 'TNSB' } });
  if (!board) throw new Error('Board not found');

  const cls = await prisma.class.findFirst({ where: { boardId: board.id, name: className } });
  if (!cls) {
    console.log(`${className} not found in DB! Skipping...`);
    return;
  }

  // Parse all files for this subject (handles combined volumes seamlessly)
  const allChapters = [];
  for (const file of files) {
    const slugClassName = slugify(className);
    const slugSubjectName = slugify(subjectName);
    const parsed = parseMarkdownChapters(
      file,
      `public/notes/${slugClassName}-${slugSubjectName}`,
      subjectName,
      className
    );
    allChapters.push(...parsed);
  }

  if (allChapters.length === 0) {
    console.log(`No chapters parsed for ${className} ${subjectName}. Skipping...`);
    return;
  }

  // Create unified subject
  const dbSubject = await prisma.subject.upsert({
    where: { classId_name: { classId: cls.id, name: subjectName } },
    update: {},
    create: {
      name: subjectName,
      code: `${subjectName.toUpperCase().replace(/\s+/g, '-')}-${cls.name.split(' ')[1]}-TNSB`,
      classId: cls.id,
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

  for (let c = 0; c < allChapters.length; c++) {
    const chapterData = allChapters[c];
    
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

      const noteCount = await prisma.courseNote.count({ where: { topicId: dbTopic.id } });
      if (noteCount === 0) {
        await prisma.courseNote.create({
          data: {
            title: `Comprehensive Notes: ${dbTopic.name}`,
            fileUrl: chapterData.relativeUrl,
            topicId: dbTopic.id,
            sortOrder: 1,
            subjectTitle: subjectName,
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
  
  console.log(`Successfully injected ${className} ${subjectName} with ${topicsInjected} topics!`);
}

async function main() {
  console.log('Injecting remaining missing subjects for Class 11 and 12...');

  const injectionConfig = [
    {
      className: 'Class 11',
      subjectName: 'Chemistry',
      sortOrder: 2,
      files: [
        'stateboard notes/State Board class 11 Chemistry Volume 1.md',
        'stateboard notes/State Board class 11 Chemistry Volume 2.md'
      ]
    },
    {
      className: 'Class 11',
      subjectName: 'Biology',
      sortOrder: 3,
      files: [
        'stateboard notes/State Board class 11 Biology.md'
      ]
    },
    {
      className: 'Class 12',
      subjectName: 'Physics',
      sortOrder: 1,
      files: [
        'stateboard notes/State Board class 12 Physics Volume 1.md',
        'stateboard notes/State Board class 12 Physics Volume 2.md'
      ]
    },
    {
      className: 'Class 12',
      subjectName: 'Chemistry',
      sortOrder: 2,
      files: [
        'stateboard notes/State Board class 12 Chemistry Volume 1.md',
        'stateboard notes/State Board class 12 Chemistry Volume 2.md'
      ]
    },
    {
      className: 'Class 12',
      subjectName: 'Biology',
      sortOrder: 3,
      files: [
        'stateboard notes/State Board class 12 Biology.md'
      ]
    }
  ];

  for (const config of injectionConfig) {
    await injectSubject(config.className, config.subjectName, config.files, config.sortOrder);
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
