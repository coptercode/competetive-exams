import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const topics = await prisma.topic.findMany({
    where: {
      name: { contains: '$180' }
    }
  });

  console.log(`Found ${topics.length} topics to update.`);

  for (const topic of topics) {
    const newName = topic.name.replace(/\$180\^\{\\circ\}\$/g, '180°');
    
    await prisma.topic.update({
      where: { id: topic.id },
      data: {
        name: newName
      }
    });
    console.log(`Updated topic: ${topic.id}`);
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
