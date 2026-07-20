const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const stateBoard = await prisma.board.findFirst({ where: { code: 'STATE' } });
  if (!stateBoard) return console.log('State board not found');
  
  const class9 = await prisma.class.findFirst({ where: { boardId: stateBoard.id, name: 'Class 9' } });
  if (!class9) return console.log('Class 9 not found');
  
  const subject = await prisma.subject.findFirst({ where: { classId: class9.id } });
  if (!subject) return console.log('Subject not found');
  
  const unit = await prisma.unit.findFirst({ where: { subjectId: subject.id } });
  const chapter = await prisma.chapter.findFirst({ where: { unitId: unit?.id } });
  const topic = await prisma.topic.findFirst({ where: { chapterId: chapter?.id } });
  
  if (!topic) return console.log('Topic not found');

  const assignment = await prisma.assignment.create({
    data: {
      title: 'State Board Test Assignment',
      description: 'This should show up for State Board 9',
      maxMarks: 100,
      passingMarks: 40,
      deadline: new Date(Date.now() + 86400000 * 7),
      topicId: topic.id,
    }
  });
  
  const note = await prisma.courseNote.create({
    data: {
      title: 'State Board Test Note',
      fileUrl: '/uploads/test.pdf',
      topicId: topic.id,
      sortOrder: 1,
      isRequiredForComplete: false,
      uploadedByUserId: 'system',
      uploadedByName: 'System',
      subjectTitle: subject.name,
    }
  });

  console.log('Created assignment:', assignment.id);
  console.log('Created note:', note.id);
  process.exit(0);
}

main().catch(console.error);
