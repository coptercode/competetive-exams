import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const chapters = await prisma.chapter.findMany({
    where: { name: { contains: 'Structural Organisation in Animals' } },
    include: {
      topics: {
        orderBy: { sortOrder: 'asc' },
        include: { notes: true }
      }
    }
  });

  for (const chapter of chapters) {
    console.log(`\nChapter: ${chapter.name} (ID: ${chapter.id})`);
    for (const topic of chapter.topics) {
      console.log(`  Topic: ${topic.name}`);
      for (const note of topic.notes) {
        console.log(`    Note: ${note.title} -> ${note.fileUrl}`);
      }
    }
  }
}

main().finally(() => prisma.$disconnect());
