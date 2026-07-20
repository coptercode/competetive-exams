import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

async function main() {
  const chapters = await prisma.chapter.findMany({
    include: {
      unit: {
        include: {
          subject: {
            include: {
              class: {
                include: {
                  board: true
                }
              }
            }
          }
        }
      }
    }
  });

  const summary = chapters.map(c => {
     return `${c.unit?.subject?.class?.board?.code} | ${c.unit?.subject?.class?.name} | ${c.unit?.subject?.name} | ${c.name}`;
  }).slice(0, 50);

  fs.writeFileSync('db_diagnostics.txt', summary.join('\n'));
}

main().finally(() => prisma.$disconnect());
