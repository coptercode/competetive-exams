import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding Biology to TNSB Class 10...');
  
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
  
  // Upsert Subject
  const subject = await prisma.subject.upsert({
    where: { classId_name: { classId: classLevel.id, name: 'Biology' } },
    update: {},
    create: {
      name: 'Biology',
      code: 'BIOLOGY-10-V1',
      sortOrder: 2,
      classId: classLevel.id,
    }
  });
  console.log(`Upserted Subject: ${subject.name}`);
  
  // Upsert Unit (Core Syllabus)
  const unit = await prisma.unit.upsert({
    where: { subjectId_name: { subjectId: subject.id, name: 'Core Syllabus' } },
    update: {},
    create: {
      name: 'Core Syllabus',
      sortOrder: 1,
      subjectId: subject.id,
    }
  });
  console.log(`Upserted Unit: ${unit.name}`);
  
  // Upsert Chapter
  const chapter = await prisma.chapter.upsert({
    where: { unitId_name: { unitId: unit.id, name: 'Chapter 1: Plant Anatomy and Plant Physiology' } },
    update: {},
    create: {
      name: 'Chapter 1: Plant Anatomy and Plant Physiology',
      sortOrder: 1,
      unitId: unit.id,
    }
  });
  console.log(`Upserted Chapter: ${chapter.name}`);
  
  // Upsert Topic
  const topic = await prisma.topic.upsert({
    where: { chapterId_name: { chapterId: chapter.id, name: 'Nutrition in Plants' } },
    update: {},
    create: {
      name: 'Nutrition in Plants',
      sortOrder: 1,
      chapterId: chapter.id,
      requireWatchPercent: 90.0,
      requireQuizPass: true,
    }
  });
  console.log(`Upserted Topic: ${topic.name}`);
  
  // Check if video exists
  const videoCount = await prisma.courseVideo.count({
    where: { topicId: topic.id }
  });
  
  if (videoCount === 0) {
    await prisma.courseVideo.create({
      data: {
        title: `Video: Nutrition in Plants`,
        videoUrl: 'https://www.w3schools.com/html/movie.mp4',
        duration: 900,
        topicId: topic.id,
        sortOrder: 1,
      }
    });
    console.log('Created placeholder video.');
  }
  
  console.log('Successfully added Biology to TNSB Class 10!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
