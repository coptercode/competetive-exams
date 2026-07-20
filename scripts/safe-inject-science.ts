import { PrismaClient } from '@prisma/client';
import { tnsbBoardComplete } from '../prisma/tnsb-data';

const prisma = new PrismaClient();

async function main() {
  console.log('Safely injecting Class 9 Science into the database without deleting anything else...');
  
  const board = await prisma.board.findFirst({ where: { code: 'TNSB' } });
  if (!board) throw new Error('TNSB board not found in DB');
  
  const cls = await prisma.class.findFirst({ where: { boardId: board.id, name: 'Class 9' } });
  if (!cls) throw new Error('Class 9 not found in DB');

  const existingSubject = await prisma.subject.findFirst({ where: { classId: cls.id, name: 'Science' } });
  if (existingSubject) {
    console.log('Science subject already exists in DB! (Please check if it has chapters).');
  }

  // Get Science data from the updated tnsb-data
  const class9Data = tnsbBoardComplete.classes.find(c => c.id === 'class-9');
  const scienceData = class9Data?.subjects.find(s => s.title === 'Science');

  if (!scienceData) {
    throw new Error('Science subject not found in tnsb-data.ts! Did you run update-tnsb.ts first?');
  }

  const dbSubject = await prisma.subject.upsert({
    where: { classId_name: { classId: cls.id, name: scienceData.title } },
    update: {},
    create: {
      name: scienceData.title,
      code: scienceData.id.toUpperCase(),
      classId: cls.id,
      sortOrder: 2,
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

  for (let chapterIndex = 0; chapterIndex < scienceData.chapters.length; chapterIndex++) {
    const chapterData = scienceData.chapters[chapterIndex];
    const dbChapter = await prisma.chapter.upsert({
      where: { unitId_name: { unitId: dbUnit.id, name: chapterData.title } },
      update: {},
      create: {
        name: chapterData.title,
        unitId: dbUnit.id,
        sortOrder: chapterIndex + 1,
      },
    });

    for (let topIndex = 0; topIndex < chapterData.topics.length; topIndex++) {
      const topicData = chapterData.topics[topIndex];
      
      const dbTopic = await prisma.topic.upsert({
        where: { chapterId_name: { chapterId: dbChapter.id, name: topicData.title } },
        update: {},
        create: {
          name: topicData.title,
          chapterId: dbChapter.id,
          sortOrder: topIndex + 1,
          requireWatchPercent: 90.0,
          requireQuizPass: true,
        },
      });

      // SEED DUMMY NOTES
      const noteCount = await prisma.courseNote.count({
        where: { topicId: dbTopic.id },
      });
      if (noteCount === 0) {
        await prisma.courseNote.create({
          data: {
            title: `Comprehensive Notes: ${dbTopic.name}`,
            fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            topicId: dbTopic.id,
            sortOrder: 1,
            subjectTitle: scienceData.title,
          },
        });
      }
    }
  }

  console.log('Successfully injected Science subject for Class 9!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
