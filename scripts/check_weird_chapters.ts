import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Let's find ANY chapter named "CHEMISTRY" or "PHYSICS"
  const badChapters = await prisma.chapter.findMany({
    where: {
      name: { in: ['CHEMISTRY', 'PHYSICS', 'BIOLOGY', 'Chemistry', 'Physics', 'Biology'] }
    },
    include: {
      unit: {
        include: {
          subject: {
            include: { class: { include: { board: true } } }
          }
        }
      },
      topics: true
    }
  });

  for (const c of badChapters) {
    console.log(`\nFound Chapter: "${c.name}" in Subject: "${c.unit?.subject?.name}" (Class: ${c.unit?.subject?.class?.name}, Board: ${c.unit?.subject?.class?.board?.name})`);
    console.log(`Topics in this chapter:`);
    for (const t of c.topics) {
      console.log(`  - ${t.name}`);
    }
  }
}

main().finally(() => prisma.$disconnect());
