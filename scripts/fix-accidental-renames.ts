import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Fixing a few accidental renames...');
  
  const fixes = [
    { bad: 'Block Elements', good: 'd-Block Elements' },
    { bad: 'axis', good: 'X-axis' },
    { bad: '(Internal Division)', good: 'Section Formula (Internal Division)' },
    { bad: 'in 3D', good: 'Section Formula in 3D' }
  ];

  for (const fix of fixes) {
    const topics = await prisma.topic.findMany({
      where: { name: fix.bad }
    });

    for (const topic of topics) {
      await prisma.topic.update({
        where: { id: topic.id },
        data: { name: fix.good }
      });
      console.log(`Reverted: '${fix.bad}' -> '${fix.good}'`);
    }
  }

  console.log('Successfully reverted the accidental renames!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
