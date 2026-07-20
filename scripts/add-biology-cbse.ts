import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding Biology to CBSE Class 11...');
  
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
  
  // Upsert Subject
  const subject = await prisma.subject.upsert({
    where: { classId_name: { classId: classLevel.id, name: 'Biology' } },
    update: {},
    create: {
      name: 'Biology',
      code: 'BIOLOGY-11-CBSE',
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
    where: { unitId_name: { unitId: unit.id, name: 'Chapter 1: The Living World' } },
    update: {},
    create: {
      name: 'Chapter 1: The Living World',
      sortOrder: 1,
      unitId: unit.id,
    }
  });
  console.log(`Upserted Chapter: ${chapter.name}`);
  
  // Upsert Topic
  const topic = await prisma.topic.upsert({
    where: { chapterId_name: { chapterId: chapter.id, name: 'Diversity in the Living World' } },
    update: {},
    create: {
      name: 'Diversity in the Living World',
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
        title: `Video: Diversity in the Living World`,
        videoUrl: 'https://www.w3schools.com/html/movie.mp4',
        duration: 900,
        topicId: topic.id,
        sortOrder: 1,
      }
    });
    console.log('Created placeholder video.');
  }
  
  console.log('Successfully added Biology to CBSE Class 11!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
