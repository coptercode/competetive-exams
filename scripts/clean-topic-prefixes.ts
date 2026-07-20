import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

async function main() {
  console.log('Cleaning up all ugly topic prefixes (A), A:, PART A, etc.) across the entire database...');
  
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
        .replace(/^(PART|SECTION)\s+[A-Z]+\s*[:\-\)]?\s*/i, '')
        // Remove "A: ", "B) ", "A. ", "A - " etc.
        .replace(/^[A-Z]\s*[:\-\.\)]\s*/i, '')
        // Remove numbers like "1. ", "2) " etc.
        .replace(/^\d+\s*[\.\)]\s*/, '')
        .trim();

      // If it is ALL CAPS, convert to proper Title Case
      if (cleanTitle === cleanTitle.toUpperCase() && cleanTitle.length > 2) {
         cleanTitle = toTitleCase(cleanTitle);
      }

      const lowerClean = cleanTitle.toLowerCase();

      // Ensure we don't accidentally wipe out a topic completely if the regex was too aggressive
      if (cleanTitle.length === 0) continue;

      if (seen.has(lowerClean)) {
        // We handle duplicates carefully. Only delete if it's an exact collision in the SAME chapter.
        try {
          await prisma.topic.delete({ where: { id: topic.id } });
          console.log(`Deleted exact duplicate topic: "${topic.name}"`);
          deleteCount++;
        } catch(e) {
          console.log(`Could not delete duplicate topic: ${topic.name}`);
        }
      } else {
        seen.add(lowerClean);
        if (topic.name !== cleanTitle) {
          try {
            await prisma.topic.update({
              where: { id: topic.id },
              data: { name: cleanTitle }
            });
            console.log(`Renamed: '${topic.name}' -> '${cleanTitle}'`);
            renameCount++;
          } catch(e) {
            console.log(`Collision prevented renaming: '${topic.name}' -> '${cleanTitle}'`);
          }
        }
      }
    }
  }

  console.log(`\nSuccessfully renamed ${renameCount} topics and removed ${deleteCount} exact duplicates!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
