import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Cleaning up duplicate temp rename topics...');
  
  const tempTopics = await prisma.topic.findMany({
    where: {
      name: {
        endsWith: '_temp_rename'
      }
    }
  });

  for (const topic of tempTopics) {
    await prisma.topic.delete({
      where: { id: topic.id }
    });
    console.log(`Deleted leftover duplicate topic: ${topic.id}`);
  }

  console.log('Successfully cleaned up all leftover topics!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
