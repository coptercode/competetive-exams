import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding subjects to ICSE Board...');
  
  const board = await prisma.board.findUnique({
    where: { code: 'ICSE' }
  });
  
  if (!board) {
    console.error('ICSE Board not found!');
    return;
  }
  
  // Helper to safely upsert Subject, Unit, Chapter, Topic, Video
  async function addSubject(classLevelId: string, subjectName: string, subjectCode: string, sortOrder: number, chapterName: string, topicName: string) {
    const subject = await prisma.subject.upsert({
      where: { classId_name: { classId: classLevelId, name: subjectName } },
      update: {},
      create: { name: subjectName, code: subjectCode, sortOrder, classId: classLevelId }
    });
    const unit = await prisma.unit.upsert({
      where: { subjectId_name: { subjectId: subject.id, name: 'Core Syllabus' } },
      update: {},
      create: { name: 'Core Syllabus', sortOrder: 1, subjectId: subject.id }
    });
    const chapter = await prisma.chapter.upsert({
      where: { unitId_name: { unitId: unit.id, name: chapterName } },
      update: {},
      create: { name: chapterName, sortOrder: 1, unitId: unit.id }
    });
    const topic = await prisma.topic.upsert({
      where: { chapterId_name: { chapterId: chapter.id, name: topicName } },
      update: {},
      create: { name: topicName, sortOrder: 1, chapterId: chapter.id, requireWatchPercent: 90.0, requireQuizPass: true }
    });
    if ((await prisma.courseVideo.count({ where: { topicId: topic.id } })) === 0) {
      await prisma.courseVideo.create({ data: { title: `Video: ${topicName}`, videoUrl: 'https://www.w3schools.com/html/movie.mp4', duration: 900, topicId: topic.id, sortOrder: 1 } });
    }
  }

  // ================= CLASS 10 =================
  const class10 = await prisma.class.findUnique({
    where: { boardId_name: { boardId: board.id, name: 'Class 10' } }
  });
  if (class10) {
    await addSubject(class10.id, 'Physics', 'PHYSICS-10-ICSE', 3, 'Chapter 1: Force and Work', 'Turning Forces');
    await addSubject(class10.id, 'Chemistry', 'CHEMISTRY-10-ICSE', 4, 'Chapter 1: Periodic Table', 'Periodic Properties');
    console.log('Added Physics & Chemistry to Class 10 ICSE.');
  }

  // ================= CLASS 11 =================
  const class11 = await prisma.class.findUnique({
    where: { boardId_name: { boardId: board.id, name: 'Class 11' } }
  });
  if (class11) {
    await addSubject(class11.id, 'Biology', 'BIOLOGY-11-ICSE', 2, 'Chapter 1: The Living World', 'Diversity in the Living World');
    console.log('Added Biology to Class 11 ICSE.');
  }

  // ================= CLASS 12 =================
  const class12 = await prisma.class.findUnique({
    where: { boardId_name: { boardId: board.id, name: 'Class 12' } }
  });
  if (class12) {
    await addSubject(class12.id, 'Physics', 'PHYSICS-12-ICSE', 3, 'Chapter 1: Physical World', 'Scope and Excitement of Physics');
    await addSubject(class12.id, 'Chemistry', 'CHEMISTRY-12-ICSE', 4, 'Chapter 1: Solid State', 'Introduction to Solid State');
    await addSubject(class12.id, 'Biology', 'BIOLOGY-12-ICSE', 2, 'Chapter 1: Reproduction', 'Reproduction in Organisms');
    console.log('Added Physics, Chemistry & Biology to Class 12 ICSE.');
  }

  console.log('Successfully completed ICSE Board setup!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
