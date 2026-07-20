import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function count() {
  const c = await prisma.topic.count();
  console.log("==> TOTAL TOPICS:", c);
  process.exit(0);
}
count();
