import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Finding topics that are missing notes and safely adding them...');
  
  // Find all topics across all boards and classes
  const allTopics = await prisma.topic.findMany({
    include: {
      notes: true,
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

  let addedNotesCount = 0;

  for (const topic of allTopics) {
    if (topic.notes.length === 0) {
      // Create a dummy note for this topic
      await prisma.courseNote.create({
        data: {
          title: `Comprehensive Notes: ${topic.name}`,
          fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
          topicId: topic.id,
          sortOrder: 1,
          subjectTitle: topic.chapter.unit.subject.name,
        },
      });
      addedNotesCount++;
    }
  }

  console.log(`Successfully added notes to ${addedNotesCount} topics that were missing them!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
