import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const board = await prisma.board.findFirst({ where: { code: 'TNSB' } });
  const cls = await prisma.class.findFirst({ where: { boardId: board!.id, name: 'Class 10' } });
  const subjects = await prisma.subject.findMany({ where: { classId: cls!.id } });
  
  console.log(subjects.map(s => s.name));
}

main().catch(console.error).finally(() => prisma.$disconnect());
