import { PrismaClient } from '@prisma/client';
import fs from 'fs';
const prisma = new PrismaClient();

async function main() {
  const subjects = await prisma.subject.findMany({
    where: { 
      units: { some: { chapters: { some: { name: 'CHEMISTRY' } } } }
    },
    include: {
      units: {
        include: {
          chapters: { include: { topics: true } }
        }
      },
      class: { include: { board: true } }
    }
  });

  fs.writeFileSync('weird_chapters_output.json', JSON.stringify(subjects, null, 2));
}

main().finally(() => prisma.$disconnect());
