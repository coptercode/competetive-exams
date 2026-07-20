import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function getCleanChapterName(chapterName: string) {
  // Remove prefixes like "Chapter 1 : " so the new title looks beautiful (e.g. "Examples of Measurement" instead of "Examples of Chapter 1 : Measurement")
  return chapterName.replace(/^(?:Chapter|Unit)\s*\d+\s*[:-]?\s*/i, '').trim();
}

async function main() {
  console.log('Scanning entire database to clean up plain "Example" and "Examples" topics...');

  const topics = await prisma.topic.findMany({
    include: {
      chapter: true
    }
  });

  let updatedCount = 0;

  for (const topic of topics) {
    const cleanName = topic.name.trim().toLowerCase();
    
    // Check if the name is just "example" or "examples"
    if (cleanName === 'example' || cleanName === 'examples') {
      const chapterBaseName = getCleanChapterName(topic.chapter.name);
      const newName = `Examples of ${chapterBaseName}`;

      // Check if a topic with this new name already exists in the same chapter to avoid collisions
      const existing = await prisma.topic.findFirst({
        where: {
          chapterId: topic.chapterId,
          name: { equals: newName, mode: 'insensitive' }
        }
      });

      if (existing) {
        // If it already exists, delete the plain one since it's redundant
        await prisma.topic.delete({
          where: { id: topic.id }
        });
        console.log(`Deleted redundant plain topic '${topic.name}' in Chapter: ${topic.chapter.name}`);
      } else {
        await prisma.topic.update({
          where: { id: topic.id },
          data: { name: newName }
        });
        console.log(`Renamed: '${topic.name}' -> '${newName}'`);
      }
      updatedCount++;
    }
  }

  console.log(`\nSuccessfully cleaned up ${updatedCount} plain example topics across the entire platform!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
