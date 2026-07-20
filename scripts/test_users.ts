import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    const users = await prisma.user.findMany({
      include: {
        studentProfile: {
          include: {
            class: true,
            board: true,
            subscriptions: {
              include: {
                payments: true
              },
              orderBy: { createdAt: 'desc' },
              take: 1
            }
          }
        },
        teacherProfile: true,
        adminProfile: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    console.log(`Successfully fetched ${users.length} users!`);
    console.log(JSON.stringify(users[0], null, 2));
  } catch (err: any) {
    console.error("Failed with error:", err.message);
  }
}

main().finally(() => prisma.$disconnect());
