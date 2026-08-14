import { prisma } from './prisma.js';
import { initialBoards } from '../../prisma/boards-data.js';

/**
 * Idempotent seeder that populates all Competitive Exam categories,
 * exam streams/batches, subjects, units, chapters, and topics into the PostgreSQL database.
 */
export async function ensureCompetitiveExamsSeeded() {
  try {
    const existingBoardCount = await prisma.board.count();
    console.log(`[seeder] Checking database competitive exam structure... (existing boards: ${existingBoardCount})`);

    for (let bIdx = 0; bIdx < initialBoards.length; bIdx++) {
      const bData = initialBoards[bIdx];
      
      let board = await prisma.board.findFirst({
        where: {
          OR: [
            { code: bData.code || bData.id.toUpperCase() },
            { name: bData.title }
          ]
        }
      });
      if (!board) {
        board = await prisma.board.create({
          data: {
            name: bData.title,
            code: bData.code || bData.id.toUpperCase(),
          }
        });
      } else {
        board = await prisma.board.update({
          where: { id: board.id },
          data: { name: bData.title, code: bData.code || bData.id.toUpperCase() }
        });
      }

      for (let cIdx = 0; cIdx < bData.classes.length; cIdx++) {
        const cData = bData.classes[cIdx];
        
        const classLevel = await prisma.class.upsert({
          where: {
            boardId_name: {
              boardId: board.id,
              name: cData.title,
            },
          },
          update: { sortOrder: cIdx },
          create: {
            name: cData.title,
            sortOrder: cIdx,
            boardId: board.id,
          },
        });

        for (let sIdx = 0; sIdx < cData.subjects.length; sIdx++) {
          const sData = cData.subjects[sIdx];
          const subCode = `${cData.id.slice(0, 5)}-${sData.id.slice(0, 5)}-${sIdx + 1}`.toUpperCase();

          const subject = await prisma.subject.upsert({
            where: {
              classId_name: {
                classId: classLevel.id,
                name: sData.title,
              },
            },
            update: { sortOrder: sIdx, code: subCode },
            create: {
              name: sData.title,
              code: subCode,
              sortOrder: sIdx,
              classId: classLevel.id,
            },
          });

          // Create default Core Unit for Subject
          const unit = await prisma.unit.upsert({
            where: {
              subjectId_name: {
                subjectId: subject.id,
                name: 'Core Syllabus Unit',
              },
            },
            update: { sortOrder: 0 },
            create: {
              name: 'Core Syllabus Unit',
              sortOrder: 0,
              subjectId: subject.id,
            },
          });

          for (let chIdx = 0; chIdx < sData.chapters.length; chIdx++) {
            const chData = sData.chapters[chIdx];

            const chapter = await prisma.chapter.upsert({
              where: {
                unitId_name: {
                  unitId: unit.id,
                  name: chData.title,
                },
              },
              update: { sortOrder: chIdx },
              create: {
                name: chData.title,
                sortOrder: chIdx,
                unitId: unit.id,
                isUnlocked: true,
              },
            });

            for (let tIdx = 0; tIdx < chData.topics.length; tIdx++) {
              const tData = chData.topics[tIdx];

              const topic = await prisma.topic.upsert({
                where: {
                  chapterId_name: {
                    chapterId: chapter.id,
                    name: tData.title,
                  },
                },
                update: { sortOrder: tIdx },
                create: {
                  name: tData.title,
                  sortOrder: tIdx,
                  chapterId: chapter.id,
                  requireWatchPercent: 90.0,
                  requireQuizPass: true,
                },
              });

              // Ensure at least one reference video & note exists per topic
              const existingVideos = await prisma.courseVideo.count({ where: { topicId: topic.id } });
              if (existingVideos === 0) {
                await prisma.courseVideo.create({
                  data: {
                    topicId: topic.id,
                    title: `${tData.title} - Video Lecture`,
                    videoUrl: tData.videoUrl || 'https://www.w3schools.com/html/movie.mp4',
                    duration: 1500,
                    sortOrder: 0,
                    drmEnabled: false,
                  },
                });
              }

              const existingNotes = await prisma.courseNote.count({ where: { topicId: topic.id } });
              if (existingNotes === 0) {
                await prisma.courseNote.create({
                  data: {
                    topicId: topic.id,
                    title: `${tData.title} - Mind Map & Study Notes`,
                    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
                    uploadedByName: 'Senior Academic Faculty',
                    subjectTitle: sData.title,
                    sortOrder: 0,
                  },
                });
              }
            }
          }
        }
      }
    }
    console.log('[seeder] ✅ All Competitive Exam streams, batches, subjects, chapters & topics populated successfully.');
  } catch (err: any) {
    console.error('[seeder] ❌ Failed seeding competitive exams structure:', err.message);
  }
}
