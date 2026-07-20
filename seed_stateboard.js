const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const stateBoard = await prisma.board.findFirst({ where: { code: 'STATE' } });
    if (!stateBoard) {
      console.log('State board not found');
      return;
    }
    
    const topic = await prisma.topic.findFirst({
      where: {
        chapter: {
          unit: {
            subject: {
              class: {
                boardId: stateBoard.id,
                name: 'Class 9'
              }
            }
          }
        }
      },
      include: {
        chapter: {
          include: {
            unit: {
              include: {
                subject: true
              }
            }
          }
        }
      }
    });

    if (!topic) {
      console.log('Topic not found');
      return;
    }

    const existingNotesCount = await prisma.courseNote.count({ where: { topicId: topic.id } });
    const note = await prisma.courseNote.create({
      data: {
        title: 'State Board Auto Seeded Note',
        fileUrl: '/uploads/test.pdf',
        topicId: topic.id,
        sortOrder: existingNotesCount + 1,
        isRequiredForComplete: false,
        uploadedByUserId: 'system',
        uploadedByName: 'System Bot',
        subjectTitle: topic.chapter.unit.subject.name,
      }
    });

    const assignment = await prisma.assignment.create({
      data: {
        title: 'State Board Auto Seeded Assignment',
        description: 'Testing if it shows up!',
        maxMarks: 100,
        passingMarks: 40,
        deadline: new Date(Date.now() + 86400000 * 7),
        topicId: topic.id,
      }
    });

    console.log('SUCCESS! Note:', note.id, 'Assignment:', assignment.id);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
