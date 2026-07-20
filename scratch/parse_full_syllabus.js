import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read file handling possible UTF-16
const rawBuffer = fs.readFileSync(path.join(__dirname, '..', 'full_syllabus.txt'));
let raw = rawBuffer.toString('utf16le');
if (!raw.includes('###') && !raw.includes('Mathematics')) {
    raw = rawBuffer.toString('utf8');
}

const lines = raw.split('\n').map(l => l.trim()).filter(l => l.length > 0 && !l.startsWith('---'));

const boards = {
  cbse: {
    id: "cbse",
    title: "CBSE Board",
    classes: {}
  },
  icse: {
    id: "icse",
    title: "ICSE & ISC Board",
    classes: {}
  }
};

let currentBoard = null;
let currentClassNum = null;
let currentSubject = null;
let currentChapterCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Detect Board and Class
  // e.g. "### Mathematics (ICSE Class 9)" or "### Class 10 (CBSE)" or "Mathematics (ICSE Class 10)"
  const lowerLine = line.toLowerCase();
  
  let boardMatch = null;
  if (lowerLine.includes('icse')) boardMatch = 'icse';
  else if (lowerLine.includes('cbse')) boardMatch = 'cbse';
  
  let classMatch = lowerLine.match(/class\s+(\d+)/);
  let classNum = classMatch ? classMatch[1] : null;

  // Extract Subject if it's in a header or bold
  let subjectMatch = null;
  if (lowerLine.includes('mathematics')) subjectMatch = 'Mathematics';
  else if (lowerLine.includes('physics')) subjectMatch = 'Physics';
  else if (lowerLine.includes('chemistry')) subjectMatch = 'Chemistry';
  else if (lowerLine.includes('biology')) subjectMatch = 'Biology';
  else if (lowerLine.includes('science') && !lowerLine.includes('computer')) subjectMatch = 'Science';

  // State transitions for Board/Class
  if (boardMatch && classNum) {
    currentBoard = boards[boardMatch];
    currentClassNum = classNum;
    if (!currentBoard.classes[`class-${currentClassNum}`]) {
      currentBoard.classes[`class-${currentClassNum}`] = {
        id: `class-${currentClassNum}`,
        title: `Class ${currentClassNum}`,
        subjects: []
      };
    }
  }

  // State transitions for Subject
  // If the line defines a subject (e.g. "**Mathematics**" or "### Mathematics (ICSE Class 9)")
  if (subjectMatch && (line.startsWith('###') || line.startsWith('**') || line.includes(`(ICSE Class`))) {
    if (currentBoard && currentClassNum) {
      let color = "from-sky-600 to-blue-700";
      if (subjectMatch === 'Physics') color = "from-violet-600 to-purple-700";
      if (subjectMatch === 'Chemistry') color = "from-rose-600 to-pink-700";
      if (subjectMatch === 'Biology' || subjectMatch === 'Science') color = "from-emerald-600 to-teal-700";

      let existingSubject = currentBoard.classes[`class-${currentClassNum}`].subjects.find(s => s.title === subjectMatch);
      if (!existingSubject) {
        currentSubject = {
          id: `${subjectMatch.toLowerCase()}-${currentClassNum}-${currentBoard.id}`,
          title: subjectMatch,
          color: color,
          chapters: []
        };
        currentBoard.classes[`class-${currentClassNum}`].subjects.push(currentSubject);
      } else {
        currentSubject = existingSubject;
      }
      currentChapterCount = currentSubject.chapters.length;
      continue; // Skip processing this as a topic
    }
  }

  // Detect Chapter / Unit
  if (currentSubject) {
    const isChapter = line.toLowerCase().includes('chapter') || line.toLowerCase().startsWith('unit ');
    const isTopicHeader = line.startsWith('* **') && line.includes(':'); // "* **Pure Arithmetic:** This covers..."
    
    if (isChapter || isTopicHeader) {
      currentChapterCount++;
      
      let title = line.replace(/^\*\s*/, '').replace(/\*\*/g, '').trim();
      let content = title;
      
      // If "* **Topic:** content"
      if (title.includes(':')) {
        const parts = title.split(':');
        title = parts[0].trim();
        content = parts.slice(1).join(':').trim();
      }

      if (!title.toLowerCase().includes('chapter') && !title.toLowerCase().includes('unit')) {
         title = `Chapter ${currentChapterCount}: ${title}`;
      }
      
      const prefix = currentSubject.title.substring(0, 1).toLowerCase();
      const chId = `${currentBoard.id}-${prefix}${currentClassNum}-ch${currentChapterCount}`;
      
      const newChapter = {
        id: chId,
        title: title,
        topics: []
      };
      
      if (content && content !== title && content.length > 3) {
        newChapter.topics.push({
          id: `${chId}-t1`,
          title: title.replace(`Chapter ${currentChapterCount}: `, ''),
          content: content,
          duration: "30m",
          videoUrl: "https://www.w3schools.com/html/movie.mp4"
        });
      }
      
      currentSubject.chapters.push(newChapter);
    } else if (line.startsWith('* ') || line.length > 5) {
      // It's a topic under the current chapter
      if (currentSubject.chapters.length === 0) {
        // Create a dummy chapter if none exists
        currentChapterCount++;
        const prefix = currentSubject.title.substring(0, 1).toLowerCase();
        const chId = `${currentBoard.id}-${prefix}${currentClassNum}-ch${currentChapterCount}`;
        currentSubject.chapters.push({
          id: chId,
          title: `Chapter ${currentChapterCount}: General`,
          topics: []
        });
      }
      
      const lastChapter = currentSubject.chapters[currentSubject.chapters.length - 1];
      const cleanLine = line.replace(/^\*\s*/, '').replace(/\*\*/g, '').trim();
      
      if (cleanLine.length > 3) {
        lastChapter.topics.push({
          id: `${lastChapter.id}-t${lastChapter.topics.length + 1}`,
          title: cleanLine.length > 50 ? cleanLine.substring(0, 47) + '...' : cleanLine,
          content: cleanLine,
          duration: "15m",
          videoUrl: "https://www.w3schools.com/html/movie.mp4"
        });
      }
    }
  }
}

// Ensure every chapter has at least one topic
for (const board of Object.values(boards)) {
    for (const cls of Object.values(board.classes)) {
        for (const subj of cls.subjects) {
            for (const ch of subj.chapters) {
                if (ch.topics.length === 0) {
                    let title = ch.title.split(':');
                    title = title.length > 1 ? title.slice(1).join(':').trim() : ch.title;
                    ch.topics.push({
                        id: `${ch.id}-t1`,
                        title: title,
                        content: `${title} fundamentals.`,
                        duration: "15m",
                        videoUrl: "https://www.w3schools.com/html/movie.mp4"
                    });
                }
            }
        }
    }
}

function generateBoardFile(boardObj, exportName, importPath) {
  let out = `export const ${exportName} = {\n`;
  out += `  id: "${boardObj.id}",\n`;
  out += `  title: "${boardObj.title}",\n`;
  out += `  classes: [\n`;
  
  const classKeys = Object.keys(boardObj.classes).sort((a,b) => {
      const numA = parseInt(a.replace('class-', ''));
      const numB = parseInt(b.replace('class-', ''));
      return numA - numB;
  });
  
  for (let i = 0; i < classKeys.length; i++) {
    const cls = boardObj.classes[classKeys[i]];
    out += `    {\n`;
    out += `      id: "${cls.id}",\n`;
    out += `      title: "${cls.title}",\n`;
    out += `      subjects: [\n`;
    
    for (let j = 0; j < cls.subjects.length; j++) {
      const subj = cls.subjects[j];
      out += `        {\n`;
      out += `          id: "${subj.id}",\n`;
      out += `          title: "${subj.title}",\n`;
      out += `          color: "${subj.color}",\n`;
      out += `          chapters: [\n`;
      
      for (let k = 0; k < subj.chapters.length; k++) {
        const ch = subj.chapters[k];
        out += `            {\n`;
        out += `              id: "${ch.id}",\n`;
        out += `              title: ${JSON.stringify(ch.title)},\n`;
        out += `              topics: [\n`;
        
        for (let t = 0; t < ch.topics.length; t++) {
          const top = ch.topics[t];
          out += `                { id: "${top.id}", title: ${JSON.stringify(top.title)}, content: ${JSON.stringify(top.content)}, duration: "${top.duration}", videoUrl: "${top.videoUrl}" }${t < ch.topics.length - 1 ? ',' : ''}\n`;
        }
        out += `              ]\n`;
        out += `            }${k < subj.chapters.length - 1 ? ',' : ''}\n`;
      }
      out += `          ]\n`;
      out += `        }${j < cls.subjects.length - 1 ? ',' : ''}\n`;
    }
    out += `      ]\n`;
    out += `    }${i < classKeys.length - 1 ? ',' : ''}\n`;
  }
  
  out += `  ]\n};\n`;
  fs.writeFileSync(path.join(__dirname, '..', 'prisma', importPath), out);
}

generateBoardFile(boards.cbse, 'cbseBoardComplete', 'cbse-data.ts');
generateBoardFile(boards.icse, 'icseBoardComplete', 'icse-data.ts');
console.log("Successfully parsed full_syllabus.txt and generated cbse-data.ts and icse-data.ts!");
