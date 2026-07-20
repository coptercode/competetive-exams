import fs from 'fs';
import path from 'path';

const mdPath = path.join(process.cwd(), 'stateboard notes/State Board class 9 Science.md');
const content = fs.readFileSync(mdPath, 'utf-8');
const lines = content.split('\n');

const chapters: any[] = [];
let currentChapter: any = null;

for (const line of lines) {
  if (line.match(/^#\s+.*Chapter\s+\d+:/i) || line.match(/^#\s+Chapter\s+\d+/i) || line.match(/^#\s+.*–\s+Chapter\s+\d+:/i)) {
    if (currentChapter) {
      chapters.push(currentChapter);
    }
    const cleanTitle = line.replace(/^#\s*/, '').trim();
    currentChapter = {
      id: `tnsb-s9-ch${chapters.length + 1}`,
      title: cleanTitle,
      topics: []
    };
  } else if (line.match(/^#+\s+/) && currentChapter) {
    if (currentChapter.topics.length < 5) {
      const topicTitle = line.replace(/^#+\s*/, '').trim();
      
      // 1. Remove PART A:, 1., etc.
      let cleanTopic = topicTitle
        .replace(/^PART\s+[A-Z]+\s*[:\-]?\s*/i, '')
        .replace(/^\d+\.\s*/, '')
        .trim();
        
      // 2. Fix ALL CAPS (e.g., "FORCE" -> "Force")
      if (cleanTopic === cleanTopic.toUpperCase() && cleanTopic.length > 2) {
         cleanTopic = cleanTopic.charAt(0) + cleanTopic.slice(1).toLowerCase();
      }

      // 3. Ensure no duplicates in the same chapter
      const isDuplicate = currentChapter.topics.some((t: any) => t.title.toLowerCase() === cleanTopic.toLowerCase());
      
      if (!isDuplicate && cleanTopic.length > 0) {
        currentChapter.topics.push({
          id: `${currentChapter.id}-t${currentChapter.topics.length + 1}`,
          title: cleanTopic,
          content: `Study material for ${cleanTopic}`,
          duration: "15 mins",
          videoUrl: "https://www.w3schools.com/html/movie.mp4"
        });
      }
    }
  }
}
if (currentChapter) {
  chapters.push(currentChapter);
}

const scienceObj = {
  id: "science-9-tnsb",
  title: "Science",
  color: "from-emerald-600 to-teal-700",
  chapters: chapters
};

const tnsbPath = path.join(process.cwd(), 'prisma/tnsb-data.ts');
const tnsbContent = fs.readFileSync(tnsbPath, 'utf-8');

// Replace the existing science-9-tnsb object
const regex = /\{\s*"id":\s*"science-9-tnsb"[\s\S]*?\}\s*(?=\]\s*\}\s*,\s*\{\s*"id":\s*"class-10")/i;
const replacement = JSON.stringify(scienceObj, null, 10).replace(/^{/, '        {') + '\n';
const newTnsbContent = tnsbContent.replace(regex, replacement);

fs.writeFileSync(tnsbPath, newTnsbContent);
console.log('Successfully updated tnsb-data.ts with clean, non-repeating subtopics.');
