import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Cleaning up existing Class 9 Science subject to prepare for clean titles...');
  
  const board = await prisma.board.findFirst({ where: { code: 'TNSB' } });
  if (!board) return;
  
  const cls = await prisma.class.findFirst({ where: { boardId: board.id, name: 'Class 9' } });
  if (!cls) return;

  const existingSubject = await prisma.subject.findFirst({ where: { classId: cls.id, name: 'Science' } });
  
  if (existingSubject) {
    // This will cascade delete units, chapters, topics, and dummy course notes for Science
    await prisma.subject.delete({ where: { id: existingSubject.id } });
    console.log('Successfully deleted the old Science subject.');
  } else {
    console.log('No existing Science subject found.');
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
