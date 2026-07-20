import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Fetching all chapters...');

  const chapters = await prisma.chapter.findMany({
    include: {
      topics: {
        orderBy: { sortOrder: 'asc' },
        include: {
          notes: { orderBy: { sortOrder: 'asc' } },
          videos: { orderBy: { sortOrder: 'asc' } }
        }
      }
    }
  });

  console.log(`Found ${chapters.length} chapters.`);

  for (const chapter of chapters) {
    const topics = chapter.topics;
    
    // CASE 1: More than 5 topics -> Trim excess topics
    if (topics.length > 5) {
      console.log(`Chapter '${chapter.name}' has ${topics.length} topics. Trimming excess...`);
      for (let i = 5; i < topics.length; i++) {
        await prisma.topic.delete({
          where: { id: topics[i].id }
        });
      }
    } 
    // CASE 2: Less than 5 topics -> Create missing topics
    else if (topics.length < 5) {
      console.log(`Chapter '${chapter.name}' has ${topics.length} topics. Adding fillers...`);
      
      // Determine what notes/videos we can clone. We take from the first topic if it exists.
      const baseTopic = topics.length > 0 ? topics[0] : null;
      const baseNote = baseTopic && baseTopic.notes.length > 0 ? baseTopic.notes[0] : null;
      const baseVideo = baseTopic && baseTopic.videos.length > 0 ? baseTopic.videos[0] : null;

      for (let i = topics.length; i < 5; i++) {
        // Create new filler topic
        const newTopic = await prisma.topic.create({
          data: {
            name: `Topic ${i + 1}`,
            chapterId: chapter.id,
            sortOrder: i + 1,
            requireWatchPercent: 90.0,
            requireQuizPass: true,
          }
        });

        // Clone Note if available
        if (baseNote) {
          await prisma.courseNote.create({
            data: {
              title: baseNote.title,
              fileUrl: baseNote.fileUrl,
              subjectTitle: baseNote.subjectTitle,
              topicId: newTopic.id,
              sortOrder: 1
            }
          });
        }

        // Clone Video if available
        if (baseVideo) {
          await prisma.courseVideo.create({
            data: {
              title: baseVideo.title,
              videoUrl: baseVideo.videoUrl,
              duration: baseVideo.duration,
              topicId: newTopic.id,
              sortOrder: 1
            }
          });
        }
      }
    }
  }

  console.log('Successfully enforced exactly 5 topics per chapter across the database!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
