import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const boards = await prisma.board.findMany();
  console.log(boards);
}

main().finally(() => prisma.$disconnect());
