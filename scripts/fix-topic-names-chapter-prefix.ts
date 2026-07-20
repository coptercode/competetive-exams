import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Cleaning up "Chapter X :" or "Unit X :" from inside subtopic names...');

  const topics = await prisma.topic.findMany();

  let renameCount = 0;
  let deleteCount = 0;

  for (const topic of topics) {
    // Regex to find "Chapter 7 : " or "Unit 1: " anywhere in the string
    const chapterPrefixRegex = /(?:Chapter|Unit)\s*\d+\s*[:-]?\s*/i;
    
    if (chapterPrefixRegex.test(topic.name)) {
      const cleanName = topic.name.replace(chapterPrefixRegex, '').trim();
      
      // Example: "Introduction to Chapter 7 : Integrals" -> "Introduction to Integrals"
      
      // Check if a topic with this new name already exists in the same chapter to avoid collisions
      const existing = await prisma.topic.findFirst({
        where: {
          chapterId: topic.chapterId,
          name: { equals: cleanName, mode: 'insensitive' }
        }
      });

      if (existing && existing.id !== topic.id) {
        // If the clean one already exists, this one is redundant
        await prisma.topic.delete({
          where: { id: topic.id }
        });
        console.log(`Deleted redundant topic: '${topic.name}'`);
        deleteCount++;
      } else {
        await prisma.topic.update({
          where: { id: topic.id },
          data: { name: cleanName }
        });
        console.log(`Renamed: '${topic.name}' -> '${cleanName}'`);
        renameCount++;
      }
    }
  }

  console.log(`\nSuccessfully renamed ${renameCount} topics and cleaned up ${deleteCount} duplicates!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
