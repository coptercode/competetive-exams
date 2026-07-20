const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync(path.join(__dirname, 'icse_raw.txt'), 'utf8');
const lines = raw.split('\n').map(l => l.trim()).filter(l => l.length > 0);

const board = {
  id: "icse",
  title: "ICSE & ISC Board",
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
    currentClass = {
      id: `class-${num}`,
      title: `Class ${num}`,
      subjects: []
    };
    board.classes.push(currentClass);
    currentSubject = null;
  } else if (line === 'Mathematics' || line === 'Physics' || line === 'Chemistry' || line === 'Biology' || line === 'Science') {
    let color = "from-sky-600 to-blue-700";
    if (line === 'Physics') color = "from-violet-600 to-purple-700";
    if (line === 'Chemistry') color = "from-rose-600 to-pink-700";
    if (line === 'Biology' || line === 'Science') color = "from-emerald-600 to-teal-700";
    
    currentSubject = {
      id: `${line.toLowerCase()}-${currentClass.id.replace('class-', '')}-icse`,
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
      id: `icse-${currentSubject.id}-ch${num}`,
      title: line,
      topics: []
    };
    currentSubject.chapters.push(currentChapter);
    topicCounter = 1;
  } else {
    // Topic
    if (currentChapter) {
      currentChapter.topics.push({
        id: `icse-${currentSubject.id}-ch${currentChapter.id.split('-ch')[1]}-t${topicCounter}`,
        title: line,
        content: line + " fundamentals and concepts.",
        duration: "15m",
        videoUrl: "https://www.w3schools.com/html/movie.mp4"
      });
      topicCounter++;
    }
  }
}

const output = `export const icseBoard = ${JSON.stringify(board, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, '../prisma/icse-data.ts'), output);
console.log('Done!');
