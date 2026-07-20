import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { cbseBoardComplete } from '../prisma/cbse-data';
import { tnsbBoardComplete } from '../prisma/tnsb-data';
import { icseBoardComplete } from '../prisma/icse-data';

const prisma = new PrismaClient();

const allBoards = [cbseBoardComplete, tnsbBoardComplete, icseBoardComplete];

async function main() {
  console.log('Nuking old corrupted curriculum data...');
  await prisma.courseNote.deleteMany({});
  await prisma.topic.deleteMany({});
  await prisma.chapter.deleteMany({});
  await prisma.unit.deleteMany({});
  await prisma.subject.deleteMany({});

  console.log('Rebuilding perfectly formatted curriculum...');

  for (const boardData of allBoards) {
    let dbBoard = await prisma.board.findFirst({
      where: {
        OR: [ { code: boardData.id }, { name: boardData.title } ]
      }
    });
    if (!dbBoard) {
      dbBoard = await prisma.board.create({
        data: { code: boardData.id, name: boardData.title }
      });
    } else if (dbBoard.code !== boardData.id) {
      dbBoard = await prisma.board.update({
        where: { id: dbBoard.id },
        data: { code: boardData.id }
      });
    }

    for (const classData of boardData.classes) {
      let dbClass = await prisma.class.findFirst({
        where: { boardId: dbBoard.id, name: classData.title }
      });
      if (!dbClass) {
        dbClass = await prisma.class.create({
          data: { name: classData.title, boardId: dbBoard.id, sortOrder: 1 }
        });
      }

      for (let subjectIndex = 0; subjectIndex < classData.subjects.length; subjectIndex++) {
        const subjectData = classData.subjects[subjectIndex];
        let dbSubject = await prisma.subject.findFirst({
          where: { classId: dbClass.id, name: subjectData.title }
        });
        if (!dbSubject) {
          dbSubject = await prisma.subject.create({
            data: {
              name: subjectData.title,
              code: subjectData.id,
              classId: dbClass.id,
              sortOrder: subjectIndex + 1,
            }
          });
        }

        const dbUnit = await prisma.unit.create({
          data: {
            name: 'Core Syllabus',
            subjectId: dbSubject.id,
            sortOrder: 1,
          }
        });

        for (let chapterIndex = 0; chapterIndex < subjectData.chapters.length; chapterIndex++) {
          const chapterData = subjectData.chapters[chapterIndex];
          
          let trueChapterName = chapterData.title;
          let subtopicsToUse: any[] = [];
          
          // Fix naming convention: Extract chapter name from first topic if it's named "Chapter X"
          if (chapterData.topics.length > 0) {
            const firstTopic = chapterData.topics[0];
            if (firstTopic.title.toLowerCase().includes('chapter') || firstTopic.title === chapterData.title) {
               trueChapterName = `${chapterData.title} : ${firstTopic.content}`;
               subtopicsToUse = chapterData.topics.slice(1); // skip the first topic since it's the chapter name
            } else {
               subtopicsToUse = [...chapterData.topics];
            }
          }

          // Clean up "Chapter 1 : Chapter 1 : Name" edge cases
          trueChapterName = trueChapterName.replace(/(Chapter \d+)\s*:\s*\1\s*:/i, '$1 :');
          
          const dbChapter = await prisma.chapter.create({
            data: {
              name: trueChapterName,
              unitId: dbUnit.id,
              sortOrder: chapterIndex + 1,
            }
          });

          // Ensure exactly 5 subtopics
          const finalTopics: string[] = [];
          for (const st of subtopicsToUse) {
             if (st.title && !st.title.toLowerCase().includes('chapter') && st.title !== trueChapterName) {
                if (!finalTopics.includes(st.title)) {
                   finalTopics.push(st.title);
                }
             }
          }
          
          const fallbacks = ["Key Concepts", "Detailed Mechanisms", "Practical Applications", "Advanced Analysis", "Summary and Review"];
          while (finalTopics.length < 5) {
             finalTopics.push(fallbacks[finalTopics.length]);
          }
          const exactly5 = finalTopics.slice(0, 5);

          for (let topIndex = 0; topIndex < 5; topIndex++) {
            await prisma.topic.create({
              data: {
                name: exactly5[topIndex],
                chapterId: dbChapter.id,
                sortOrder: topIndex + 1,
                requireWatchPercent: 90.0,
                requireQuizPass: true,
              }
            });
          }
        }
      }
    }
  }

  console.log('Curriculum rebuilt with EXACTLY 5 subtopics per chapter!');
  console.log('Now linking notes...');

  // Simple note linker
  const notesDirs = [
    { path: 'public/notes/cbse' },
    { path: 'public/notes/stateboard' },
    { path: 'public/notes/icse_ise' },
  ];

  const linkedTopics = new Set<string>();

  for (const dirInfo of notesDirs) {
    const dirPath = path.join(process.cwd(), dirInfo.path);
    if (!fs.existsSync(dirPath)) continue;

    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
    for (const file of files) {
       const fullPath = path.join(dirPath, file);
       const content = fs.readFileSync(fullPath, 'utf-8');
       const lines = content.split('\n');
       
       let extractedChapter = '';
       const h1Line = lines.find(l => l.startsWith('# Chapter '));
       if (h1Line) {
         extractedChapter = h1Line.replace(/^#\s*/, '').trim();
       } else {
         const match = file.match(/Chapter_(\d+)/i);
         if (match) extractedChapter = `Chapter ${match[1]}`;
       }
       
       if (!extractedChapter) continue;

       // Find the chapter in DB that contains this string
       const dbChapter = await prisma.chapter.findFirst({
         where: { name: { contains: extractedChapter, mode: 'insensitive' } },
         include: { topics: true }
       });

       if (dbChapter) {
         // Link this file to ALL 5 topics of this chapter
         for (const topic of dbChapter.topics) {
            if (linkedTopics.has(topic.id)) continue;
            linkedTopics.add(topic.id);

            await prisma.courseNote.create({
              data: {
                title: `Study Notes: ${topic.name}`,
                fileUrl: `/${dirInfo.path.replace('public/', '')}/${file}`,
                topicId: topic.id,
                sortOrder: 1,
              }
            });
         }
       }
    }
  }

  console.log('Database perfectly restored and notes linked!');
}

main().finally(() => prisma.$disconnect());
