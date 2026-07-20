import fs from 'fs';
import path from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const oldPublicDir = 'C:\\Users\\dhars\\OneDrive\\Desktop\\-lms-website-jun26-main\\-lms-website-jun26-main\\-lms-website-jun26-main\\public';
const newNotesDir = path.join(process.cwd(), 'public/notes/tnsb');

if (!fs.existsSync(newNotesDir)) {
  fs.mkdirSync(newNotesDir, { recursive: true });
}

async function withRetry(operation: () => Promise<any>, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await operation();
    } catch (error) {
      if (i === retries - 1) throw error;
      console.log(`Retrying DB operation (attempt ${i + 1})...`);
      await new Promise(res => setTimeout(res, 1000));
    }
  }
}

async function main() {
  console.log('Copying stateboard PDFs and linking to database...');
  const files = fs.readdirSync(oldPublicDir).filter(f => f.toLowerCase().endsWith('.pdf'));

  for (const file of files) {
    const sourcePath = path.join(oldPublicDir, file);
    const destPath = path.join(newNotesDir, file);
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied ${file}`);

    const fileUrl = `/notes/tnsb/${file}`;
    
    // We'll try to find matching chapters based on the file name. 
    // This is a rough fuzzy match since naming conventions vary.
    let chapterQuery = "";
    
    const lowerFile = file.toLowerCase();
    const chMatch = lowerFile.match(/ch(\d+)/) || lowerFile.match(/chapter(\d+)/);
    const unitMatch = lowerFile.match(/unit_?(\d+)/);
    
    // If it has Ch1 or Unit_1, let's find chapters that start with "Chapter 1:" or "Unit 1:"
    if (chMatch) {
        chapterQuery = `Chapter ${chMatch[1]}`;
    } else if (unitMatch) {
        chapterQuery = `Unit ${unitMatch[1]}`;
    } else {
        // e.g., Science_Physics_Motion_Notes.pdf -> "Motion"
        const parts = file.replace('_Notes.pdf', '').split('_');
        chapterQuery = parts[parts.length - 1]; // "Motion", "Energy", etc.
    }

    if (chapterQuery) {
        await withRetry(async () => {
            const dbChapters = await prisma.chapter.findMany({
                where: {
                    name: {
                        contains: chapterQuery,
                        mode: 'insensitive'
                    },
                    unit: {
                      subject: {
                        class: {
                          board: {
                            code: 'TNSB'
                          }
                        }
                      }
                    }
                },
                include: {
                    topics: true
                }
            });

            for (const dbChapter of dbChapters) {
                for (const topic of dbChapter.topics) {
                    const existingNote = await prisma.courseNote.findFirst({
                        where: { topicId: topic.id }
                    });
                    
                    if (existingNote) {
                        await prisma.courseNote.update({
                            where: { id: existingNote.id },
                            data: { fileUrl, title: `Notes: ${file.replace('.pdf', '')}` }
                        });
                    } else {
                        await prisma.courseNote.create({
                            data: {
                                title: `Notes: ${file.replace('.pdf', '')}`,
                                fileUrl,
                                topicId: topic.id,
                                sortOrder: 1,
                                subjectTitle: "Stateboard PDF Notes"
                            }
                        });
                    }
                }
            }
        });
    }
  }
  console.log("Stateboard PDFs integration completed!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
