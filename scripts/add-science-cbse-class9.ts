import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding Science to CBSE Class 9...');
  
  // Find CBSE Board
  const board = await prisma.board.findUnique({
    where: { code: 'CBSE' }
  });
  
  if (!board) {
    console.error('CBSE Board not found!');
    return;
  }
  
  // Find Class 9 in CBSE
  const classLevel = await prisma.class.findUnique({
    where: { boardId_name: { boardId: board.id, name: 'Class 9' } }
  });
  
  if (!classLevel) {
    console.error('Class 9 not found in CBSE board!');
    return;
  }
  
  console.log(`Found Class 9 ID: ${classLevel.id}`);
  
  // ================= SCIENCE =================
  const scienceSubject = await prisma.subject.upsert({
    where: { classId_name: { classId: classLevel.id, name: 'Science' } },
    update: {},
    create: {
      name: 'Science',
      code: 'SCIENCE-9-CBSE',
      sortOrder: 2,
      classId: classLevel.id,
    }
  });
  console.log(`Upserted Subject: ${scienceSubject.name}`);
  
  const sciUnit = await prisma.unit.upsert({
    where: { subjectId_name: { subjectId: scienceSubject.id, name: 'Core Syllabus' } },
    update: {},
    create: {
      name: 'Core Syllabus',
      sortOrder: 1,
      subjectId: scienceSubject.id,
    }
  });
  
  const sciChapter = await prisma.chapter.upsert({
    where: { unitId_name: { unitId: sciUnit.id, name: 'Chapter 1: Matter in Our Surroundings' } },
    update: {},
    create: {
      name: 'Chapter 1: Matter in Our Surroundings',
      sortOrder: 1,
      unitId: sciUnit.id,
    }
  });
  
  const sciTopic = await prisma.topic.upsert({
    where: { chapterId_name: { chapterId: sciChapter.id, name: 'Physical Nature of Matter' } },
    update: {},
    create: {
      name: 'Physical Nature of Matter',
      sortOrder: 1,
      chapterId: sciChapter.id,
      requireWatchPercent: 90.0,
      requireQuizPass: true,
    }
  });
  
  const sciVideoCount = await prisma.courseVideo.count({
    where: { topicId: sciTopic.id }
  });
  
  if (sciVideoCount === 0) {
    await prisma.courseVideo.create({
      data: {
        title: `Video: Physical Nature of Matter`,
        videoUrl: 'https://www.w3schools.com/html/movie.mp4',
        duration: 900,
        topicId: sciTopic.id,
        sortOrder: 1,
      }
    });
    console.log('Created placeholder video for Science.');
  }
  
  console.log('Successfully added Science to CBSE Class 9!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
