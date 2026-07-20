import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  console.log('Scanning all notes to forcefully link them to their respective chapters...');

  const notesDirs = [
    { board: 'CBSE', path: 'public/notes/cbse' },
    { board: 'TNSB', path: 'public/notes/stateboard' },
    { board: 'ICSE', path: 'public/notes/icse_ise' },
  ];

  let linkedCount = 0;

  for (const dirInfo of notesDirs) {
    const dirPath = path.join(process.cwd(), dirInfo.path);
    if (!fs.existsSync(dirPath)) continue;

    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));

    for (const file of files) {
      const fullPath = path.join(dirPath, file);
      const content = fs.readFileSync(fullPath, 'utf-8');
      const lines = content.split('\n').map(l => l.trim());

      // Try to extract the true chapter name from the file
      let trueChapterName = '';
      const h1Line = lines.find(l => l.startsWith('# Chapter '));
      
      if (h1Line) {
        // e.g. "# Chapter 4: Carbon and its Compounds" -> "Carbon and its Compounds"
        const parts = h1Line.split(':');
        if (parts.length > 1) {
          trueChapterName = parts.slice(1).join(':').trim();
        } else {
          // Fallback if no colon
          trueChapterName = h1Line.replace(/^#\s*Chapter\s*\d+\s*/i, '').trim();
        }
      } else {
        // If no Chapter heading, try to find any top level heading
        const altHeading = lines.find(l => l.startsWith('# ') && !l.toLowerCase().includes('table of contents'));
        if (altHeading) {
           trueChapterName = altHeading.replace(/^#\s*/, '').trim();
        }
      }

      if (!trueChapterName) {
        // Fallback to parsing from filename if we couldn't find a heading
        const match = file.match(/Chapter_(\d+)/i);
        if (match) {
          trueChapterName = `Chapter ${match[1]}`;
        }
      }

      if (!trueChapterName) continue;

      // Now, let's find ANY chapter in the database whose name contains this true chapter name
      // Because we want to ignore Subject mismatches (e.g. Science vs Chemistry)
      
      // First, get all chapters
      const dbChapters = await prisma.chapter.findMany({
        where: {
          name: {
            contains: trueChapterName,
            mode: 'insensitive'
          }
        },
        include: {
          topics: {
            include: { notes: true }
          }
        }
      });

      if (dbChapters.length === 0) {
        // Try fallback: match by exact "Chapter X" if available
        const chapMatch = file.match(/Chapter_(\d+)/i);
        if (chapMatch) {
           const chapNum = chapMatch[1];
           const fallbackChapters = await prisma.chapter.findMany({
             where: {
               name: {
                 startsWith: `Chapter ${chapNum}`,
                 mode: 'insensitive'
               }
             },
             include: {
               topics: { include: { notes: true } }
             }
           });
           
           // This is risky, but if we filter by class we can be safer.
           // For now, we only trust the true name match.
        }
        continue;
      }

      // Link the file to all topics in all matching chapters
      // The fileUrl should be relative to public
      const fileUrl = `/${dirInfo.path.replace('public/', '')}/${file}`;

      for (const dbChapter of dbChapters) {
        for (const topic of dbChapter.topics) {
          if (topic.notes.length === 0) {
            // Create the note
            await prisma.courseNote.create({
              data: {
                title: `Study Notes: ${topic.name}`,
                fileUrl: fileUrl,
                topicId: topic.id,
                sortOrder: 1,
                subjectTitle: file.replace('.md', '')
              }
            });
            linkedCount++;
          } else {
            // Update the note if it points to a wrong generic file or if we want to ensure correctness
            const existingNote = topic.notes[0];
            if (!existingNote.fileUrl || existingNote.fileUrl.includes('generic_chapter') || existingNote.fileUrl !== fileUrl) {
              await prisma.courseNote.update({
                where: { id: existingNote.id },
                data: { fileUrl: fileUrl }
              });
              linkedCount++;
            }
          }
        }
      }
    }
  }

  console.log(`Successfully fixed and linked ${linkedCount} topic notes!`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
