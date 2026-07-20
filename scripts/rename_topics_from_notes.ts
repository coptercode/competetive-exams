import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  console.log('Forcefully cleaning up all topics (removing 1., Part A, etc)...');

  const chapters = await prisma.chapter.findMany({
    include: {
      topics: {
        orderBy: { sortOrder: 'asc' },
        include: {
          notes: true
        }
      }
    }
  });

  const ignoredWords = [
    'introduction', 'summary', 'conclusion', 'overview', 'definition',
    'part a', 'part b', 'part c', 'part 1', 'part 2', 'questions',
    'formula', 'mistake', 'example', 'exercise', 'note', 'what is',
    'review', 'objective', 'learning', 'table of contents'
  ];

  const cleanHeading = (h: string) => {
    // Remove leading numbers, e.g., "1. ", "(A) ", "A. "
    let cleaned = h.replace(/^(\d+\.|[a-zA-Z]\.|\([a-zA-Z0-9]\)|-|\*)\s+/, '');
    // Also remove "PART A: " prefix if present
    cleaned = cleaned.replace(/^part\s+[a-z0-9]+[:\-]?\s*/i, '');
    cleaned = cleaned.replace(/\*\*/g, '').replace(/\*/g, '');
    cleaned = cleaned.replace(/[:\-]+$/, '');
    return cleaned.trim();
  };

  const isValidHeading = (h: string) => {
    const lower = h.toLowerCase();
    if (h.length < 3) return false;
    if (h.length > 55) return false;
    if (lower.startsWith('part ')) return false;
    for (const word of ignoredWords) {
      if (lower.includes(word)) return false;
    }
    return true;
  };

  let updatedCount = 0;

  for (const chapter of chapters) {
    let fileUrl = null;
    for (const topic of chapter.topics) {
      if (topic.notes && topic.notes.length > 0 && topic.notes[0].fileUrl) {
        fileUrl = topic.notes[0].fileUrl;
        break;
      }
    }

    // Try to find the file directly if the notes are still missing somehow
    if (!fileUrl) {
      // guess the file from chapter name
      const match = chapter.name.match(/Chapter\s+(\d+)/i);
      if (match) {
        // We don't know the board/class easily, but we can search the public/notes dir
        // This is complex, so let's just stick to the fileUrl if available
      }
    }

    if (fileUrl) {
      const relativePath = fileUrl.startsWith('/') ? fileUrl.slice(1) : fileUrl;
      const diskPath = path.join(process.cwd(), 'public', relativePath);
      
      if (fs.existsSync(diskPath)) {
        const content = fs.readFileSync(diskPath, 'utf-8');
        const lines = content.split('\n').map(l => l.trim());

        const h1s: string[] = [];
        const h2s: string[] = [];
        const h3s: string[] = [];
        const tocItems: string[] = [];

        let inToc = false;
        for (const line of lines) {
          if (line.toLowerCase().includes('table of contents')) {
            inToc = true;
            continue;
          }
          if (inToc) {
            if (line.startsWith('---') || line.startsWith('#')) inToc = false;
            else {
              const match = line.match(/^(\d+\.|-|\*)\s+(.*)/);
              if (match) tocItems.push(match[2].trim());
            }
          }
          if (!inToc) {
            if (line.startsWith('# ') && !line.includes('Chapter')) h1s.push(line.replace(/^#\s*/, '').trim());
            else if (line.startsWith('## ')) h2s.push(line.replace(/^##\s*/, '').trim());
            else if (line.startsWith('### ')) h3s.push(line.replace(/^###\s*/, '').trim());
          }
        }

        let allCandidates = [...tocItems, ...h1s, ...h2s, ...h3s]
          .map(cleanHeading)
          .filter(isValidHeading);

        const uniqueCandidates = Array.from(new Set(allCandidates));
        let finalTopics = uniqueCandidates.slice(0, 5);

        const fallbacks = ["Core Principles", "Key Mechanisms", "Applications & Examples", "Advanced Concepts", "Practical Analysis"];
        while (finalTopics.length < 5) finalTopics.push(fallbacks[finalTopics.length]);
        
        for (let i = 0; i < chapter.topics.length; i++) {
          const newTopicName = finalTopics[i];
          const currentTopic = chapter.topics[i];
          
          if (currentTopic.name !== newTopicName) {
             await prisma.topic.update({
               where: { id: currentTopic.id },
               data: { name: newTopicName }
             });
             
             for (const note of currentTopic.notes) {
               await prisma.courseNote.update({
                  where: { id: note.id },
                  data: { title: `Study Notes: ${newTopicName}` }
               });
             }
             updatedCount++;
          }
        }
      }
    }

    // Fallback: forcefully clean any remaining bad topic names even if we didn't process the file
    for (const topic of chapter.topics) {
       let currentName = topic.name;
       // e.g. "1. Animal Tissue" -> "Animal Tissue"
       currentName = currentName.replace(/^(\d+\.|[a-zA-Z]\.|\([a-zA-Z0-9]\)|-|\*)\s+/, '');
       // e.g. "PART A: ANIMAL TISSUES" -> "ANIMAL TISSUES"
       currentName = currentName.replace(/^part\s+[a-z0-9]+[:\-]?\s*/i, '');
       currentName = currentName.trim();
       
       // If it is just "Definition", rename it to "Key Concepts"
       if (currentName.toLowerCase() === 'definition') currentName = 'Key Concepts';
       if (currentName.toLowerCase() === 'introduction') currentName = 'Overview';

       if (currentName !== topic.name) {
          await prisma.topic.update({
            where: { id: topic.id },
            data: { name: currentName }
          });
          updatedCount++;
       }
    }
  }

  console.log(`Successfully forcefully cleaned ${updatedCount} topics!`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
}).finally(() => prisma.$disconnect());
