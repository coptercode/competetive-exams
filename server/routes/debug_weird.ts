import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getWeirdChapters = async (req: Request, res: Response) => {
  try {
    const chapters = await prisma.chapter.findMany({
      where: {
        name: { in: ['CHEMISTRY', 'PHYSICS', 'BIOLOGY', 'Chemistry', 'Physics', 'Biology'] }
      },
      include: {
        topics: true,
        unit: {
          include: {
            subject: {
              include: {
                class: {
                  include: { board: true }
                }
              }
            }
          }
        }
      }
    });
    res.json(chapters);
  } catch (error) {
    res.status(500).json({ error: String(error) });
  }
};
