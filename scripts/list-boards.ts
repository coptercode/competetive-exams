import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const boards = await prisma.board.findMany({ include: { classes: { include: { subjects: true } } } });
  for (const b of boards) {
    console.log(`Board: ${b.name} (${b.code}) - classes: ${b.classes.length}`);
    for (const c of b.classes) {
      console.log(`  - ${c.name} (subjects: ${c.subjects.length})`);
    }
  }
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
