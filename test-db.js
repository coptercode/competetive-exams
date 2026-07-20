const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const boards = await prisma.board.findMany();
    console.log("Success! Found boards:", boards.length);
  } catch (e) {
    console.error("Failed:", e.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
