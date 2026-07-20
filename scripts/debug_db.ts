import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

async function main() {
  const result: any = {};
  
  // Find "Atoms and Molecules"
  result.atomsTopic = await prisma.topic.findFirst({
    where: { name: { contains: 'Atoms and Molecules' } },
    include: { chapter: { include: { unit: { include: { subject: { include: { class: { include: { board: true } } } } } } } } }
  });
  
  result.atomsChapter = await prisma.chapter.findFirst({
    where: { name: { contains: 'Atoms and Molecules' } },
    include: { topics: true, unit: { include: { subject: { include: { class: { include: { board: true } } } } } } }
  });

  // Find "CHEMISTRY"
  result.chemistryChapter = await prisma.chapter.findFirst({
    where: { name: { equals: 'CHEMISTRY', mode: 'insensitive' } },
    include: { topics: true, unit: { include: { subject: { include: { class: { include: { board: true } } } } } } }
  });

  fs.writeFileSync('debug_db.json', JSON.stringify(result, null, 2));
}

main().finally(() => prisma.$disconnect());
