import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Scanning for duplicate subjects (e.g. Physics vs Physics Volume 1)...');

  const classes = await prisma.class.findMany({
    include: {
      subjects: true
    }
  });

  let deletedCount = 0;

  for (const cls of classes) {
    const subjectNames = cls.subjects.map(s => s.name.toLowerCase());

    const hasPhyVol1 = subjectNames.includes('physics volume 1');
    const hasChemVol1 = subjectNames.includes('chemistry volume 1');
    const hasMathVol1 = subjectNames.includes('mathematics volume 1');

    for (const subject of cls.subjects) {
      const name = subject.name.toLowerCase();
      
      // If the class has Volume 1 for Physics, we don't need the generic "Physics"
      if (hasPhyVol1 && name === 'physics') {
        console.log(`Deleting generic 'Physics' from Class '${cls.name}' because Volume 1 exists.`);
        await prisma.subject.delete({ where: { id: subject.id } });
        deletedCount++;
      }
      
      // Same for Chemistry
      if (hasChemVol1 && name === 'chemistry') {
        console.log(`Deleting generic 'Chemistry' from Class '${cls.name}' because Volume 1 exists.`);
        await prisma.subject.delete({ where: { id: subject.id } });
        deletedCount++;
      }

      // Same for Mathematics
      if (hasMathVol1 && name === 'mathematics') {
        console.log(`Deleting generic 'Mathematics' from Class '${cls.name}' because Volume 1 exists.`);
        await prisma.subject.delete({ where: { id: subject.id } });
        deletedCount++;
      }
    }
  }

  console.log(`Cleanup complete! Deleted ${deletedCount} redundant generic subjects.`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
