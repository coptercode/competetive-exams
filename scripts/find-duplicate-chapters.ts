import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function getBaseName(name: string) {
  // Removes "Chapter X : ", "Unit X : ", "Chapter X: " etc.
  return name.replace(/^(?:Chapter|Unit)\s*\d+\s*[:-]?\s*/i, '').trim().toLowerCase();
}

async function main() {
  console.log('Scanning for duplicate chapters across the database...\n');
  
  const units = await prisma.unit.findMany({
    include: {
      subject: { include: { class: { include: { board: true } } } },
      chapters: { include: { topics: true } }
    }
  });

  let duplicateCount = 0;

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
        duplicateCount++;
        const subjectPath = `${unit.subject.class.board.name} > ${unit.subject.class.name} > ${unit.subject.name}`;
        console.log(`\nFound Duplicates in: ${subjectPath}`);
        
        for (const chap of chapters) {
          console.log(`  - "${chap.name}" (ID: ${chap.id}) -> Topics: ${chap.topics.length}`);
        }
      }
    }
  }

  console.log(`\nTotal duplicate chapter sets found: ${duplicateCount}`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
