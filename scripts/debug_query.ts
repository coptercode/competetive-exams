import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const dbChapter = await prisma.chapter.findFirst({
    where: {
      name: { startsWith: 'Chapter 1 :' },
      unit: {
        subject: {
          name: { contains: 'Math', mode: 'insensitive' },
          class: {
            name: { contains: '11', mode: 'insensitive' },
            board: {
              code: 'cbse'
            }
          }
        }
      }
    },
    include: { topics: true }
  });

  if (dbChapter) {
    console.log("Found:", dbChapter.name);
  } else {
    console.log("Not found!");
    // let's debug: Find all chapters for this subject
    const all = await prisma.chapter.findMany({
      where: {
        unit: {
          subject: {
            name: { contains: 'Math', mode: 'insensitive' },
            class: { name: { contains: '11', mode: 'insensitive' } }
          }
        }
      }
    });
    console.log("All Math 11 chapters:", all.map(c => c.name));
  }
}

main().finally(() => prisma.$disconnect());
