import * as fs from 'fs';
import * as path from 'path';

// This script reads a markdown file with the CBSE syllabus and outputs a TypeScript file
// matching the schema of cbseBoardComplete.

const inputFile = path.join(process.cwd(), 'syllubus.md');
const outputFile = path.join(process.cwd(), 'prisma/cbse-data-parsed.ts');

if (!fs.existsSync(inputFile)) {
  console.error(`Please create ${inputFile} and paste your syllabus into it.`);
  process.exit(1);
}

const content = fs.readFileSync(inputFile, 'utf-8');
const lines = content.split('\n');

// Types to build the structure
type Topic = { id: string; title: string; content: string; duration: string; videoUrl: string };
type Chapter = { id: string; title: string; topics: Topic[] };
type Subject = { id: string; title: string; color: string; chapters: Chapter[] };
type Class = { id: string; title: string; subjects: Subject[] };

let currentClass: Class | null = null;
let currentSubject: Subject | null = null;
let currentChapter: Chapter | null = null;

const classes: Class[] = [];

// Colors map to keep some variety, you can adjust these later
const colors = [
  "from-sky-600 to-blue-700",
  "from-emerald-600 to-teal-700",
  "from-violet-600 to-purple-700",
  "from-rose-600 to-pink-700",
  "from-amber-500 to-orange-600"
];
let colorIndex = 0;

let topicIndex = 1;
let chapterIndex = 1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;

  // Match class and subject: e.g. # CBSE — Class 9 — Mathematics
  const classMatch = line.match(/^# CBSE\s*(—|-)\s*Class\s*(\d+)\s*(—|-)\s*(.+)$/i);
  if (classMatch) {
    const classNum = classMatch[2];
    const subjectName = classMatch[4].trim();

    const classId = `class-${classNum}`;
    let existingClass = classes.find(c => c.id === classId);
    if (!existingClass) {
      existingClass = { id: classId, title: `Class ${classNum}`, subjects: [] };
      classes.push(existingClass);
    }
    currentClass = existingClass;

    const subjectId = `${subjectName.toLowerCase().replace(/\s+/g, '-')}-${classNum}-cbse`;
    currentSubject = {
      id: subjectId,
      title: subjectName,
      color: colors[colorIndex % colors.length],
      chapters: []
    };
    colorIndex++;
    currentClass.subjects.push(currentSubject);
    
    chapterIndex = 1;
    continue;
  }

  // Match chapter: e.g. ## 1. Number Systems
  const chapterMatch = line.match(/^##\s*(\d+)\.\s*(.+)$/);
  if (chapterMatch && currentSubject && currentClass) {
    chapterIndex = parseInt(chapterMatch[1], 10);
    const chapterName = chapterMatch[2].trim();
    
    const chapterId = `cbse-${currentSubject.title.charAt(0).toLowerCase()}${currentClass.id.replace('class-', '')}-ch${chapterIndex}`;
    
    currentChapter = {
      id: chapterId,
      title: `Chapter ${chapterIndex}: ${chapterName}`,
      topics: []
    };
    currentSubject.chapters.push(currentChapter);
    topicIndex = 1; // start from 1
    continue;
  }

  // Match topics: e.g. - Rational and irrational numbers identification
  const topicMatch = line.match(/^-\s+(.+)$/);
  if (topicMatch && currentChapter) {
    const topicText = topicMatch[1].trim();
    let shortTitle = topicText;
    if (shortTitle.length > 50) {
       shortTitle = shortTitle.substring(0, 47) + '...';
    }

    currentChapter.topics.push({
      id: `${currentChapter.id}-t${topicIndex}`,
      title: shortTitle,
      content: topicText,
      duration: "15m",
      videoUrl: "https://www.w3schools.com/html/movie.mp4"
    });
    topicIndex++;
  }
}

const cbseBoardComplete = {
  id: "cbse",
  title: "CBSE Board",
  classes: classes
};

const fileContent = `export const cbseBoardComplete = ${JSON.stringify(cbseBoardComplete, null, 2)};\n`;

fs.writeFileSync(outputFile, fileContent, 'utf-8');
console.log(`Parsed syllabus written to ${outputFile}`);
