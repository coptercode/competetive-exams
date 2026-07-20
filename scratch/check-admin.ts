import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function checkLogin() {
  const user = await prisma.user.findUnique({
    where: { email: 'admin@nexoralearning.com' }
  });

  if (!user) {
    console.log('User not found!');
    return;
  }

  console.log('User found:', user.email, 'Role:', user.role);
  const isValid = await bcrypt.compare('password123', user.passwordHash);
  console.log('Password valid:', isValid);
}

checkLogin().finally(() => prisma.$disconnect());
