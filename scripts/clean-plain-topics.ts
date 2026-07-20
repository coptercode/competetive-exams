import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Scanning entire database to clean up plain "Introduction" and "Definition" topics...');

  const topics = await prisma.topic.findMany({
    include: {
      chapter: true
    }
  });

  let updatedCount = 0;

  for (const topic of topics) {
    const cleanName = topic.name.trim().toLowerCase();
    let newName = null;

    if (cleanName === 'introduction') {
      newName = `Introduction to ${topic.chapter.name}`;
    } else if (cleanName === 'definition') {
      newName = `Definition of ${topic.chapter.name}`;
    }

    if (newName) {
      // Check if a topic with this new name already exists in the same chapter to avoid unique constraint errors
      const existing = await prisma.topic.findFirst({
        where: {
          chapterId: topic.chapterId,
          name: newName
        }
      });

      if (existing) {
        // If it already exists, it's safer to just delete the plain one since it's redundant
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

  console.log(`\nSuccessfully cleaned up ${updatedCount} plain topics across the entire platform!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
