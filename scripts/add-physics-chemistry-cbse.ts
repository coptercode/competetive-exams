import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding Physics and Chemistry to CBSE Class 11...');
  
  // Find CBSE Board
  const board = await prisma.board.findUnique({
    where: { code: 'CBSE' }
  });
  
  if (!board) {
    console.error('CBSE Board not found!');
    return;
  }
  
  // Find Class 11 in CBSE
  const classLevel = await prisma.class.findUnique({
    where: { boardId_name: { boardId: board.id, name: 'Class 11' } }
  });
  
  if (!classLevel) {
    console.error('Class 11 not found in CBSE board!');
    return;
  }
  
  console.log(`Found Class 11 ID: ${classLevel.id}`);
  
  // ================= PHYSICS =================
  const physicsSubject = await prisma.subject.upsert({
    where: { classId_name: { classId: classLevel.id, name: 'Physics' } },
    update: {},
    create: {
      name: 'Physics',
      code: 'PHYSICS-11-CBSE',
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
    where: { unitId_name: { unitId: phyUnit.id, name: 'Chapter 1: Physical World' } },
    update: {},
    create: {
      name: 'Chapter 1: Physical World',
      sortOrder: 1,
      unitId: phyUnit.id,
    }
  });
  
  const phyTopic = await prisma.topic.upsert({
    where: { chapterId_name: { chapterId: phyChapter.id, name: 'Scope and Excitement of Physics' } },
    update: {},
    create: {
      name: 'Scope and Excitement of Physics',
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
        title: `Video: Scope and Excitement of Physics`,
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
      code: 'CHEMISTRY-11-CBSE',
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
    where: { unitId_name: { unitId: chemUnit.id, name: 'Chapter 1: Some Basic Concepts of Chemistry' } },
    update: {},
    create: {
      name: 'Chapter 1: Some Basic Concepts of Chemistry',
      sortOrder: 1,
      unitId: chemUnit.id,
    }
  });
  
  const chemTopic = await prisma.topic.upsert({
    where: { chapterId_name: { chapterId: chemChapter.id, name: 'Importance of Chemistry' } },
    update: {},
    create: {
      name: 'Importance of Chemistry',
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
        title: `Video: Importance of Chemistry`,
        videoUrl: 'https://www.w3schools.com/html/movie.mp4',
        duration: 900,
        topicId: chemTopic.id,
        sortOrder: 1,
      }
    });
    console.log('Created placeholder video for Chemistry.');
  }
  
  console.log('Successfully added Physics and Chemistry to CBSE Class 11!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
