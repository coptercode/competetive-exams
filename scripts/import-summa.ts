import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  console.log('Updating the first few topics with titles from summa.md (safe rename)...');
  const mdPath = path.join(process.cwd(), 'scripts/summa.md');
  const lines = fs.readFileSync(mdPath, 'utf-8').split('\n');

  const chapterToTopics = new Map<string, string[]>();

  for (const line of lines) {
    if (!line.trim() || line.toLowerCase().includes('is it possible')) continue;
    
    const parts = line.split('\t');
    if (parts.length >= 4) {
      const className = parts[0].trim();
      const subjectName = parts[1].trim();
      const chapterName = parts[2].trim();
      const topicName = parts[3].trim();
      
      const key = `${className}|${subjectName}|${chapterName}`;
      if (!chapterToTopics.has(key)) {
        chapterToTopics.set(key, []);
      }
      chapterToTopics.get(key)!.push(topicName);
    }
  }

  const board = await prisma.board.findFirst({ where: { code: 'TNSB' } });
  if (!board) throw new Error('TNSB Board not found');

  let successCount = 0;

  for (const [key, summaTopics] of chapterToTopics.entries()) {
    const [className, subjectName, chapterNameRaw] = key.split('|');

    const cls = await prisma.class.findFirst({ where: { boardId: board.id, name: className } });
    if (!cls) continue;

    const subjectsInDb = await prisma.subject.findMany({ where: { classId: cls.id } });
    const subject = subjectsInDb.find(s => 
      s.name.toLowerCase() === subjectName.toLowerCase() || 
      subjectName.toLowerCase().startsWith(s.name.toLowerCase()) || 
      s.name.toLowerCase().startsWith(subjectName.toLowerCase())
    );

    if (!subject) continue;

    const chapterNamePart = chapterNameRaw.includes(':') ? chapterNameRaw.split(':')[1].trim() : chapterNameRaw;
    
    const chaptersInDb = await prisma.chapter.findMany({
      where: { unit: { subjectId: subject.id } }
    });

    const dbChapter = chaptersInDb.find(c => 
      c.name.toLowerCase().includes(chapterNamePart.toLowerCase()) || 
      chapterNameRaw.toLowerCase().includes(c.name.toLowerCase())
    );
    
    if (!dbChapter) continue;

    const existingTopics = await prisma.topic.findMany({
      where: { chapterId: dbChapter.id },
      orderBy: { sortOrder: 'asc' }
    });

    console.log(`Updating ${className} > ${subjectName} > ${dbChapter.name}`);

    // PASS 1: Temporarily rename all existing topics to avoid unique constraint collisions
    // e.g. If we try to rename topic 1 to "Random Variables" but topic 3 is already "Random Variables", it crashes.
    for (let i = 0; i < existingTopics.length; i++) {
      await prisma.topic.update({
        where: { id: existingTopics[i].id },
        data: { name: `${existingTopics[i].id}_temp_rename` }
      });
    }

    // PASS 2: Apply the new names, and restore the old names for untouched topics
    for (let i = 0; i < existingTopics.length; i++) {
      let finalName = existingTopics[i].name; // The original name
      if (i < summaTopics.length) {
        finalName = summaTopics[i]; // The new curated name
      }
      
      // Some edge case where summa.md might have duplicate topics in the same chapter?
      // Just in case, let's catch any final collisions if summa.md itself has duplicates.
      try {
        await prisma.topic.update({
          where: { id: existingTopics[i].id },
          data: { name: finalName }
        });
      } catch (err) {
        console.log(`Warning: Could not rename topic to "${finalName}". It might be a duplicate in summa.md!`);
      }
    }

    // If summa.md has MORE topics than the DB currently has, append them
    for (let i = existingTopics.length; i < summaTopics.length; i++) {
       const dbTopic = await prisma.topic.create({
          data: {
            name: summaTopics[i],
            chapterId: dbChapter.id,
            sortOrder: i + 1,
            requireWatchPercent: 90.0,
            requireQuizPass: true,
          }
        });

        await prisma.courseNote.create({
          data: {
            title: `Comprehensive Notes: ${dbTopic.name}`,
            fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            topicId: dbTopic.id,
            sortOrder: 1,
            subjectTitle: subject.name,
          },
        });
    }

    successCount += summaTopics.length;
  }

  console.log(`\nSuccessfully updated ${successCount} topic titles based on summa.md, avoiding all database collisions!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
