import fs from 'fs';
import path from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const directoriesToProcess = [
  {
    inputDir: path.join(process.cwd(), 'cbse notes'),
    outputDir: path.join(process.cwd(), 'public/notes/cbse'),
    urlPrefix: '/notes/cbse',
    boardCode: 'CBSE'
  },
  {
    inputDir: path.join(process.cwd(), 'icse_ise notes'),
    outputDir: path.join(process.cwd(), 'public/notes/icse_ise'),
    urlPrefix: '/notes/icse_ise',
    boardCode: 'ICSE'
  }
];

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
  for (const config of directoriesToProcess) {
    if (!fs.existsSync(config.inputDir)) {
      console.log(`Directory not found: ${config.inputDir}`);
      continue;
    }

    if (!fs.existsSync(config.outputDir)) {
      fs.mkdirSync(config.outputDir, { recursive: true });
    }

    const files = fs.readdirSync(config.inputDir).filter(f => f.endsWith('.md'));

    for (const file of files) {
      console.log(`Processing ${file}...`);
      const content = fs.readFileSync(path.join(config.inputDir, file), 'utf-8');
      
      // Extract class and subject from filename
      const fileMatch = file.match(/class\s+(\d+)\s+([A-Za-z]+)/i);
      let className = '';
      let subjectName = '';
      if (fileMatch) {
        className = fileMatch[1];
        subjectName = fileMatch[2];
      }

      // Split by "# Chapter 1:" or "# Unit 1:" (Strictly requiring the word Chapter or Unit)
      const chapters = content.split(/^# (?:Chapter |Unit )(?=\d+[:.])/mi);
      
      for (let i = 1; i < chapters.length; i++) {
        const chapterContent = chapters[i];
        const chapterMatch = chapterContent.match(/^(\d+)[:.]\s+(.+)/);
        
        if (chapterMatch) {
          const chapterNumber = chapterMatch[1];
          const chapterName = chapterMatch[2].trim();
          
          const fileName = `${file.replace('.md', '')}_Chapter_${chapterNumber}.md`.replace(/ /g, '_');
          const outputPath = path.join(config.outputDir, fileName);
          
          const bodyContent = chapterContent.replace(/^(\d+)[:.]\s+(.+)\r?\n?/, '');
          const finalContent = `# Chapter ${chapterNumber}: ${chapterName}\n\n${bodyContent}`;
          fs.writeFileSync(outputPath, finalContent);
          
          const fileUrl = `${config.urlPrefix}/${fileName}`;
          
          await withRetry(async () => {
            const dbChapters = await prisma.chapter.findMany({
              where: {
                name: {
                  contains: chapterName,
                  mode: 'insensitive'
                },
                ...(subjectName && className ? {
                  unit: {
                    subject: {
                      name: { contains: subjectName, mode: 'insensitive' },
                      class: {
                        name: { contains: className, mode: 'insensitive' },
                        board: { code: config.boardCode }
                      }
                    }
                  }
                } : {
                  unit: {
                    subject: {
                      class: {
                        board: { code: config.boardCode }
                      }
                    }
                  }
                })
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
                    data: { fileUrl }
                  });
                } else {
                  await prisma.courseNote.create({
                    data: {
                      title: `Study Notes: ${topic.name}`,
                      fileUrl,
                      topicId: topic.id,
                      sortOrder: 1,
                      subjectTitle: file.replace('.md', '')
                    }
                  });
                }
              }
            }
          });
          
          console.log(`Saved ${fileName} and updated DB for Chapter: ${chapterName}`);
        }
      }
    }
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
