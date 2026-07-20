import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding Physics and Chemistry to TNSB Class 10...');
  
  // Find TNSB Board
  const board = await prisma.board.findUnique({
    where: { code: 'TNSB' }
  });
  
  if (!board) {
    console.error('TNSB Board not found!');
    return;
  }
  
  // Find Class 10 in TNSB
  const classLevel = await prisma.class.findUnique({
    where: { boardId_name: { boardId: board.id, name: 'Class 10' } }
  });
  
  if (!classLevel) {
    console.error('Class 10 not found in TNSB board!');
    return;
  }
  
  console.log(`Found Class 10 ID: ${classLevel.id}`);
  
  // ================= PHYSICS =================
  const physicsSubject = await prisma.subject.upsert({
    where: { classId_name: { classId: classLevel.id, name: 'Physics' } },
    update: {},
    create: {
      name: 'Physics',
      code: 'PHYSICS-10-V1',
      sortOrder: 3,
      classId: classLevel.id,
    }
  });
  console.log(`Upserted Subject: ${physicsSubject.name}`);
  
  const phyUnit = await prisma.unit.upsert({
    where: { subjectId_name: { subjectId: physicsSubject.id, name: 'Core Syllabus' } },
    update: {},
    create: {
      name: 'Core Syllabus',
      sortOrder: 1,
      subjectId: physicsSubject.id,
    }
  });
  
  const phyChapter = await prisma.chapter.upsert({
    where: { unitId_name: { unitId: phyUnit.id, name: 'Chapter 1: Laws of Motion' } },
    update: {},
    create: {
      name: 'Chapter 1: Laws of Motion',
      sortOrder: 1,
      unitId: phyUnit.id,
    }
  });
  
  const phyTopic = await prisma.topic.upsert({
    where: { chapterId_name: { chapterId: phyChapter.id, name: 'Force and Motion' } },
    update: {},
    create: {
      name: 'Force and Motion',
      sortOrder: 1,
      chapterId: phyChapter.id,
      requireWatchPercent: 90.0,
      requireQuizPass: true,
    }
  });
  
  const phyVideoCount = await prisma.courseVideo.count({
    where: { topicId: phyTopic.id }
  });
  
  if (phyVideoCount === 0) {
    await prisma.courseVideo.create({
      data: {
        title: `Video: Force and Motion`,
        videoUrl: 'https://www.w3schools.com/html/movie.mp4',
        duration: 900,
        topicId: phyTopic.id,
        sortOrder: 1,
      }
    });
    console.log('Created placeholder video for Physics.');
  }

  // ================= CHEMISTRY =================
  const chemistrySubject = await prisma.subject.upsert({
    where: { classId_name: { classId: classLevel.id, name: 'Chemistry' } },
    update: {},
    create: {
      name: 'Chemistry',
      code: 'CHEMISTRY-10-V1',
      sortOrder: 4,
      classId: classLevel.id,
    }
  });
  console.log(`Upserted Subject: ${chemistrySubject.name}`);
  
  const chemUnit = await prisma.unit.upsert({
    where: { subjectId_name: { subjectId: chemistrySubject.id, name: 'Core Syllabus' } },
    update: {},
    create: {
      name: 'Core Syllabus',
      sortOrder: 1,
      subjectId: chemistrySubject.id,
    }
  });
  
  const chemChapter = await prisma.chapter.upsert({
    where: { unitId_name: { unitId: chemUnit.id, name: 'Chapter 1: Atoms and Molecules' } },
    update: {},
    create: {
      name: 'Chapter 1: Atoms and Molecules',
      sortOrder: 1,
      unitId: chemUnit.id,
    }
  });
  
  const chemTopic = await prisma.topic.upsert({
    where: { chapterId_name: { chapterId: chemChapter.id, name: 'Structure of Atom' } },
    update: {},
    create: {
      name: 'Structure of Atom',
      sortOrder: 1,
      chapterId: chemChapter.id,
      requireWatchPercent: 90.0,
      requireQuizPass: true,
    }
  });
  
  const chemVideoCount = await prisma.courseVideo.count({
    where: { topicId: chemTopic.id }
  });
  
  if (chemVideoCount === 0) {
    await prisma.courseVideo.create({
      data: {
        title: `Video: Structure of Atom`,
        videoUrl: 'https://www.w3schools.com/html/movie.mp4',
        duration: 900,
        topicId: chemTopic.id,
        sortOrder: 1,
      }
    });
    console.log('Created placeholder video for Chemistry.');
  }
  
  console.log('Successfully added Physics and Chemistry to TNSB Class 10!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
