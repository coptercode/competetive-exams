import { PrismaClient } from '@prisma/client';
import { initialBoards } from '../prisma/boards-data';

const prisma = new PrismaClient();

async function main() {
  console.log('Cleaning up old CBSE and ICSE topics...');

  // 1. Delete all topics for CBSE and ICSE
  // Note: We don't touch TNSB because the user was happy with it before.
  const boardsToDelete = await prisma.board.findMany({
    where: {
      code: { in: ['CBSE', 'ICSE'] }
    },
    include: {
      classes: {
        include: {
          subjects: {
            include: {
              units: {
                include: {
                  chapters: true
                }
              }
            }
          }
        }
      }
    }
  });

  for (const board of boardsToDelete) {
    for (const cls of board.classes) {
      for (const sub of cls.subjects) {
        for (const unit of sub.units) {
          for (const chapter of unit.chapters) {
            await prisma.topic.deleteMany({
              where: { chapterId: chapter.id }
            });
            await prisma.chapter.delete({
              where: { id: chapter.id }
            });
          }
        }
      }
    }
  }

  console.log('Cleaned up old chapters and topics!');

  console.log('Re-seeding with the correct (5-topic) syllabus version...');

  try {
    for (const boardData of initialBoards) {
      if (boardData.id.toUpperCase() === 'TNSB') continue; // skip tnsb, already correct
      
      console.log(`Processing Board: ${boardData.title}`);
      const dbBoard = await prisma.board.upsert({
        where: { code: boardData.id.toUpperCase() },
        update: {},
        create: { name: boardData.title, code: boardData.id.toUpperCase() },
      });

      for (let classIndex = 0; classIndex < boardData.classes.length; classIndex++) {
        const classData = boardData.classes[classIndex];
        const dbClass = await prisma.class.upsert({
          where: { boardId_name: { boardId: dbBoard.id, name: classData.title } },
          update: { name: classData.title },
          create: {
            name: classData.title,
            boardId: dbBoard.id,
            sortOrder: classIndex + 1,
          },
        });

        for (let subjectIndex = 0; subjectIndex < classData.subjects.length; subjectIndex++) {
          const subjectData = classData.subjects[subjectIndex];
          const dbSubject = await prisma.subject.upsert({
            where: { classId_name: { classId: dbClass.id, name: subjectData.title } },
            update: {
              name: subjectData.title,
            },
            create: {
              name: subjectData.title,
              code: subjectData.id.toUpperCase(),
              classId: dbClass.id,
              sortOrder: subjectIndex + 1,
            },
          });

          const dbUnit = await prisma.unit.upsert({
            where: { subjectId_name: { subjectId: dbSubject.id, name: 'Core Syllabus' } },
            update: { name: 'Core Syllabus' },
            create: {
              name: 'Core Syllabus',
              subjectId: dbSubject.id,
              sortOrder: 1,
            },
          });

          for (let chapterIndex = 0; chapterIndex < subjectData.chapters.length; chapterIndex++) {
            const chapterData = subjectData.chapters[chapterIndex];
            const dbChapter = await prisma.chapter.upsert({
              where: { unitId_name: { unitId: dbUnit.id, name: chapterData.title } },
              update: { name: chapterData.title },
              create: {
                name: chapterData.title,
                unitId: dbUnit.id,
                sortOrder: chapterIndex + 1,
              },
            });

            for (let topIndex = 0; topIndex < chapterData.topics.length; topIndex++) {
              const topicData = chapterData.topics[topIndex];
              
              if (topicData.title === chapterData.title) continue;

              try {
                await prisma.topic.upsert({
                  where: { chapterId_name: { chapterId: dbChapter.id, name: topicData.title } },
                  update: {
                    sortOrder: topIndex + 1,
                  },
                  create: {
                    name: topicData.title,
                    chapterId: dbChapter.id,
                    sortOrder: topIndex + 1,
                    requireWatchPercent: 90.0,
                    requireQuizPass: true,
                  },
                });
              } catch (err: any) {
                console.error(`[SEED ERROR] Failed to upsert Topic: "${topicData.title}" in Chapter: "${chapterData.title}"`);
              }
            }
          }
        }
      }
    }
    console.log('Successfully reverted to the 5-topic version!');
  } catch (error) {
    console.error('Failed to seed missing boards:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
