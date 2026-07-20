import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const raw1 = fs.readFileSync(path.join(__dirname, 'cbse_raw.txt'), 'utf8');
const lines1 = raw1.split('\n').map(l => l.trim()).filter(l => l.length > 0);

const raw2 = fs.readFileSync(path.join(__dirname, 'cbse_biology.txt'), 'utf8');
const lines2 = raw2.split('\n').map(l => l.trim()).filter(l => l.length > 0);

const raw3 = fs.readFileSync(path.join(__dirname, 'cbse_maths.txt'), 'utf8');
const lines3 = raw3.split('\n').map(l => l.trim()).filter(l => l.length > 0);

const raw4 = fs.readFileSync(path.join(__dirname, 'cbse_chemistry.txt'), 'utf8');
const lines4 = raw4.split('\n').map(l => l.trim()).filter(l => l.length > 0);

const raw5 = fs.readFileSync(path.join(__dirname, 'cbse_physics.txt'), 'utf8');
const lines5 = raw5.split('\n').map(l => l.trim()).filter(l => l.length > 0);

const lines = [...lines1, ...lines2, ...lines3, ...lines4, ...lines5];

const board = {
  id: "cbse",
  title: "CBSE Board",
  classes: []
};

let currentClass = null;
let currentSubject = null;
let currentChapter = null;
let topicCounter = 1;

for (const line of lines) {
  if (line.startsWith('Class ')) {
    const classNameMatch = line.match(/Class (\d+)/);
    const num = classNameMatch ? classNameMatch[1] : 'Unknown';
    
    // Check if class already exists
    let existingClass = board.classes.find(c => c.id === `class-${num}`);
    if (existingClass) {
      currentClass = existingClass;
    } else {
      currentClass = {
        id: `class-${num}`,
        title: `Class ${num}`,
        subjects: []
      };
      board.classes.push(currentClass);
    }
    currentSubject = null;
  } else if (line === 'Mathematics' || line === 'Physics' || line === 'Chemistry' || line === 'Biology' || line === 'Science') {
    let color = "from-sky-600 to-blue-700";
    if (line === 'Physics') color = "from-violet-600 to-purple-700";
    if (line === 'Chemistry') color = "from-rose-600 to-pink-700";
    if (line === 'Biology' || line === 'Science') color = "from-emerald-600 to-teal-700";
    
    currentSubject = {
      id: `${line.toLowerCase()}-${currentClass.id.replace('class-', '')}-cbse`,
      title: line,
      color: color,
      chapters: []
    };
    currentClass.subjects.push(currentSubject);
    currentChapter = null;
  } else if (line.startsWith('Chapter ')) {
    const chMatch = line.match(/Chapter (\d+): (.*)/);
    const num = chMatch ? chMatch[1] : 'X';
    currentChapter = {
      id: `cbse-${currentSubject.id}-ch${num}`,
      title: line,
      topics: []
    };
    currentSubject.chapters.push(currentChapter);
    topicCounter = 1;
  } else {
    // Topic
    if (currentChapter) {
      currentChapter.topics.push({
        id: `cbse-${currentSubject.id}-ch${currentChapter.id.split('-ch')[1]}-t${topicCounter}`,
        title: line,
        content: line + " fundamentals and concepts.",
        duration: "15m",
        videoUrl: "https://www.w3schools.com/html/movie.mp4"
      });
      topicCounter++;
    }
  }
}

const output = `export const cbseBoard = ${JSON.stringify(board, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, '../prisma/cbse-data.ts'), output);
console.log('Successfully generated prisma/cbse-data.ts');
