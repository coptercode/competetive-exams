import { PrismaClient } from '@prisma/client';

if (process.env.CONFIRM_DESTRUCTIVE !== 'yes') {
  console.error('ERROR: This is a destructive script. You must set CONFIRM_DESTRUCTIVE=yes to run it.');
  process.exit(1);
}

const prisma = new PrismaClient();

function getBaseName(name: string) {
  // Removes prefixes like "Chapter 1 : ", "Unit 1: ", etc.
  return name.replace(/^(?:Chapter|Unit)\s*\d+\s*[:-]?\s*/i, '').trim().toLowerCase();
}

async function main() {
  console.log('Scanning for duplicate chapters across the database and cleaning them up...\n');
  
  const units = await prisma.unit.findMany({
    include: {
      chapters: { include: { topics: true } }
    }
  });

  let fixedCount = 0;

  for (const unit of units) {
    const chapterGroups = new Map<string, any[]>();

    for (const chapter of unit.chapters) {
      const baseName = getBaseName(chapter.name);
      if (!chapterGroups.has(baseName)) {
        chapterGroups.set(baseName, []);
      }
      chapterGroups.get(baseName)!.push(chapter);
    }

    for (const [baseName, chapters] of chapterGroups.entries()) {
      if (chapters.length > 1) {
        // We have duplicates!
        // We want to find the one with the best prefix (e.g. "Chapter X : ")
        let bestNameChapter = chapters.find(c => c.name.toLowerCase().startsWith('chapter') || c.name.toLowerCase().startsWith('unit'));
        
        // If neither has a prefix, just pick the first one
        if (!bestNameChapter) bestNameChapter = chapters[0];

        // Find the chapter that has the most topics (the one we injected recently)
        let mostTopicsChapter = chapters[0];
        for (const chap of chapters) {
          if (chap.topics.length > mostTopicsChapter.topics.length) {
            mostTopicsChapter = chap;
          }
        }

        const targetName = bestNameChapter.name; // This is the name we want to keep
        const targetIdToKeep = mostTopicsChapter.id; // This is the ID we want to keep because it has the real topics

        for (const chap of chapters) {
          if (chap.id !== targetIdToKeep) {
            // Delete the redundant chapter
            await prisma.chapter.delete({ where: { id: chap.id } });
            console.log(`Deleted redundant chapter: "${chap.name}"`);
          }
        }

        // Rename the kept chapter to the best name
        if (mostTopicsChapter.name !== targetName) {
          await prisma.chapter.update({
            where: { id: targetIdToKeep },
            data: { name: targetName }
          });
          console.log(`Renamed preserved chapter to: "${targetName}"`);
        }

        fixedCount++;
      }
    }
  }

  console.log(`\nSuccessfully cleaned up ${fixedCount} duplicate chapter sets!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
