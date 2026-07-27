import { PrismaClient } from '@prisma/client';

if (process.env.CONFIRM_DESTRUCTIVE !== 'yes') {
  console.error('ERROR: This is a destructive script. You must set CONFIRM_DESTRUCTIVE=yes to run it.');
  process.exit(1);
}

const prisma = new PrismaClient();

function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

async function main() {
  console.log('Cleaning up all topic titles in the database...');
  
  const chapters = await prisma.chapter.findMany({
    include: { topics: { orderBy: { sortOrder: 'asc' } } }
  });

  let renameCount = 0;
  let deleteCount = 0;

  for (const chapter of chapters) {
    const seen = new Set<string>();
    
    for (const topic of chapter.topics) {
      let cleanTitle = topic.name
        // Remove "PART A:", "SECTION B-", etc.
        .replace(/^(PART|SECTION)\s+[A-Z]+\s*[:\-]?\s*/i, '')
        // Remove "A: ", "B - ", "A. " etc.
        .replace(/^[A-Z]\s*[:\-\.]\s*/, '')
        // Remove "1. ", "2. ", etc.
        .replace(/^\d+\.\s*/, '')
        .trim();

      // If it was ALL CAPS, convert to proper Title Case
      if (cleanTitle === cleanTitle.toUpperCase() && cleanTitle.length > 2) {
         cleanTitle = toTitleCase(cleanTitle);
      }

      const lowerClean = cleanTitle.toLowerCase();

      if (seen.has(lowerClean)) {
        // It's a duplicate in this chapter, delete it to prevent repetition
        await prisma.topic.delete({ where: { id: topic.id } });
        console.log(`Deleted duplicate topic: ${topic.name}`);
        deleteCount++;
      } else {
        seen.add(lowerClean);
        if (topic.name !== cleanTitle) {
          await prisma.topic.update({
            where: { id: topic.id },
            data: { name: cleanTitle }
          });
          console.log(`Renamed: '${topic.name}' -> '${cleanTitle}'`);
          renameCount++;
        }
      }
    }
  }

  console.log(`Finished! Renamed ${renameCount} topics, and removed ${deleteCount} duplicates.`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
