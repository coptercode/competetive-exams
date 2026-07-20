import { PrismaClient } from '@prisma/client';

async function testConnection() {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });

  try {
    console.log('Testing connection to DATABASE_URL...');
    await prisma.$connect();
    console.log('Connected successfully via Prisma!');
    const users = await prisma.user.count();
    console.log('User count:', users);
  } catch (err) {
    console.error('Prisma connection failed:', err);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
