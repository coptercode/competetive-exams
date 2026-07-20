import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  console.log('Nuking old incorrectly linked notes...');
  await prisma.courseNote.deleteMany({});

  const notesDirs = [
    { path: 'public/notes/cbse', boardCode: 'cbse' },
    { path: 'public/notes/stateboard', boardCode: 'tnsb' },
    { path: 'public/notes/icse_ise', boardCode: 'icse' },
  ];

  let linkedCount = 0;

  const allChapters = await prisma.chapter.findMany({
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

  for (const dirInfo of notesDirs) {
    const dirPath = path.join(process.cwd(), dirInfo.path);
    if (!fs.existsSync(dirPath)) continue;

    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
    for (const file of files) {
       let className = '';
       const classMatch = file.match(/class_(\d+)/i);
       if (classMatch) {
         className = classMatch[1];
       } else continue;

       let subjectName = '';
       if (file.toLowerCase().includes('physics')) subjectName = 'physics';
       else if (file.toLowerCase().includes('chemistry')) subjectName = 'chemistry';
       else if (file.toLowerCase().includes('biology')) subjectName = 'biology';
       else if (file.toLowerCase().includes('mathematics') || file.toLowerCase().includes('maths')) subjectName = 'math';
       else if (file.toLowerCase().includes('science')) subjectName = 'science';

       if (!subjectName) continue;

       const chapterMatch = file.match(/Chapter_(\d+)/i);
       if (!chapterMatch) continue;
       const chapterNum = chapterMatch[1];

       const dbChapter = allChapters.find(c => {
          const cBoard = c.unit?.subject?.class?.board?.code?.toLowerCase() || '';
          const cClass = c.unit?.subject?.class?.name?.toLowerCase() || '';
          const cSubject = c.unit?.subject?.name?.toLowerCase() || '';
          
          if (cBoard !== dirInfo.boardCode.toLowerCase()) return false;
          if (!cClass.includes(className)) return false;
          if (!cSubject.includes(subjectName)) return false;
          
          const regex = new RegExp(`^Chapter\\s+${chapterNum}\\b`, 'i');
          return regex.test(c.name);
       });

       if (dbChapter) {
         for (const topic of dbChapter.topics) {
            const existing = await prisma.courseNote.findFirst({
               where: { topicId: topic.id, sortOrder: 1 }
            });
            if (existing) continue;

            await prisma.courseNote.create({
              data: {
                title: `Study Notes: ${topic.name}`,
                fileUrl: `/${dirInfo.path.replace('public/', '')}/${file}`,
                topicId: topic.id,
                sortOrder: 1,
              }
            });
            linkedCount++;
         }
       } else {
         console.warn(`Could not find DB Chapter for file: ${file}`);
       }
    }
  }

  console.log(`Successfully perfectly linked ${linkedCount} notes!`);
}

main().finally(() => prisma.$disconnect());
