import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const subjects = await prisma.subject.findMany({
    where: { 
      name: { contains: 'Science' },
      class: { name: { contains: 'Class 10' } }
    },
    include: {
      board: true,
      units: {
        include: {
          chapters: {
            include: { topics: true }
          }
        }
      }
    }
  });

  for (const subject of subjects) {
    console.log(`\nBoard: ${subject.board.name}, Class: ${subject.classId}, Subject: ${subject.name}`);
    for (const unit of subject.units) {
      console.log(`  Unit: ${unit.name}`);
      for (const chapter of unit.chapters) {
        console.log(`    Chapter: ${chapter.name}`);
        for (const topic of chapter.topics) {
          console.log(`      Topic: ${topic.name}`);
        }
      }
    }
  }
}

main().finally(() => prisma.$disconnect());
