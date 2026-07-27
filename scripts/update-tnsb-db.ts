import { PrismaClient } from '@prisma/client';
import { tnsbBoardComplete } from '../prisma/tnsb-data';

const prisma = new PrismaClient();

async function main() {
  console.log('Connecting to database to update TNSB curriculum...');

  const boardId = 'TNSB';
  
  // Find the board
  const board = await prisma.board.findUnique({
    where: { code: boardId }
  });

  if (!board) {
    console.error('Board not found. Please make sure the database is seeded first.');
    process.exit(1);
  }

  // To avoid deleting the classes (and thus causing FK restrict errors for existing students),
  // we will update classes if they exist, or create if they don't.
  // But we will wipe out all Subjects (and cascading down to chapters/topics) for these classes 
  // to insert the fresh data without conflict.
  
  console.log('Fetching classes for TNSB...');
  const existingClasses = await prisma.class.findMany({
    where: { boardId: board.id }
  });
  
  for (const cls of existingClasses) {
    console.log(`Deleting existing subjects for ${cls.name}...`);
    await prisma.subject.deleteMany({
      where: { classId: cls.id }
    });
  }

  console.log('Inserting new curriculum...');
  
  let classSortOrder = 1;
  for (const c of tnsbBoardComplete.classes) {
    let classRecord = await prisma.class.findFirst({
      where: { boardId: board.id, name: c.title }
    });

    if (!classRecord) {
      classRecord = await prisma.class.create({
        data: {
          name: c.title,
          sortOrder: classSortOrder,
          boardId: board.id,
        }
      });
    }
    
    let subjectSortOrder = 1;
    for (const s of c.subjects) {
      const subjectRecord = await prisma.subject.create({
        data: {
          name: s.title,
          code: s.id.toUpperCase(),
          sortOrder: subjectSortOrder,
          classId: classRecord.id,
        }
      });

      // Default unit since the JSON doesn't specify units
      const unitRecord = await prisma.unit.create({
        data: {
          name: 'Core Syllabus',
          sortOrder: 1,
          subjectId: subjectRecord.id,
        }
      });

      let chapterSortOrder = 1;
      for (const ch of s.chapters) {
        const chapterRecord = await prisma.chapter.create({
          data: {
            name: ch.title,
            sortOrder: chapterSortOrder,
            unitId: unitRecord.id,
          }
        });

        let topicSortOrder = 1;
        for (const t of ch.topics) {
          const topicRecord = await prisma.topic.create({
            data: {
              name: t.title,
              sortOrder: topicSortOrder,
              chapterId: chapterRecord.id,
            }
          });
          
          // Seed dummy video
          await prisma.courseVideo.create({
            data: {
              title: `Video: ${topicRecord.name}`,
              videoUrl: t.videoUrl || 'https://www.w3schools.com/html/movie.mp4',
              duration: 900,
              topicId: topicRecord.id,
              sortOrder: 1,
            }
          });
          
          // Seed dummy note
          await prisma.courseNote.create({
            data: {
              title: `Comprehensive Notes: ${topicRecord.name}`,
              fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
              topicId: topicRecord.id,
              sortOrder: 1,
            }
          });
          
          topicSortOrder++;
        }
        chapterSortOrder++;
      }
      subjectSortOrder++;
    }
    classSortOrder++;
  }

  console.log('Successfully updated TNSB curriculum in the database!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
