import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const raw = fs.readFileSync(path.join(__dirname, 'icse_raw.txt'), 'utf8');
const lines = raw.split('\n').map(l => l.trim()).filter(l => l.length > 0);

let currentSubject = null;
const subjects = [];

for (const line of lines) {
  if (line.includes('(Class 9)')) {
    const subjectName = line.replace(' (Class 9)', '').trim();
    let color = "from-sky-600 to-blue-700";
    if (subjectName === 'Physics') color = "from-violet-600 to-purple-700";
    if (subjectName === 'Chemistry') color = "from-rose-600 to-pink-700";
    if (subjectName === 'Biology') color = "from-emerald-600 to-teal-700";

    currentSubject = {
      id: `${subjectName.toLowerCase()}-9-icse`,
      title: subjectName,
      color,
      chapters: []
    };
    subjects.push(currentSubject);
  } else {
    if (currentSubject) {
      const splitIdx = line.indexOf(':');
      if (splitIdx !== -1) {
        const title = line.substring(0, splitIdx).trim();
        const content = line.substring(splitIdx + 1).trim();
        const chId = `icse-${currentSubject.title[0].toLowerCase()}9-ch${currentSubject.chapters.length + 1}`;
        
        currentSubject.chapters.push({
          id: chId,
          title: `Chapter ${currentSubject.chapters.length + 1}: ${title}`,
          topics: [
            {
              id: `${chId}-t1`,
              title: title,
              content: content,
              duration: "30m"
            }
          ]
        });
      }
    }
  }
}

// Generate the TypeScript string for Class 9
let class9String = `    {
      id: "class-9",
      title: "Class 9",
      subjects: [\n`;

for (let i = 0; i < subjects.length; i++) {
  const subj = subjects[i];
  class9String += `        {
          id: "${subj.id}",
          title: "${subj.title}",
          color: "${subj.color}",
          chapters: [\n`;
  
  for (let j = 0; j < subj.chapters.length; j++) {
    const ch = subj.chapters[j];
    class9String += `            {
              id: "${ch.id}",
              title: "${ch.title}",
              topics: [\n`;
              
    for (let k = 0; k < ch.topics.length; k++) {
      const top = ch.topics[k];
      class9String += `                { id: "${top.id}", title: ${JSON.stringify(top.title)}, content: ${JSON.stringify(top.content)}, duration: "${top.duration}", videoUrl: "https://www.w3schools.com/html/movie.mp4" }${k < ch.topics.length - 1 ? ',' : ''}\n`;
    }
    class9String += `              ]\n            }${j < subj.chapters.length - 1 ? ',' : ''}\n`;
  }
  class9String += `          ]\n        }${i < subjects.length - 1 ? ',' : ''}\n`;
}
class9String += `      ]\n    }`;

// Inject into icse-data.ts
const icsePath = path.join(__dirname, '..', 'prisma', 'icse-data.ts');
let tsContent = fs.readFileSync(icsePath, 'utf8');

const class9Start = tsContent.indexOf('    {\n      id: "class-9",');
const class10Start = tsContent.indexOf('    {\n      id: "class-10",');

if (class9Start !== -1 && class10Start !== -1) {
  tsContent = tsContent.substring(0, class9Start) + class9String + ",\n" + tsContent.substring(class10Start);
  fs.writeFileSync(icsePath, tsContent);
  console.log("Successfully updated ICSE Class 9 data without affecting existing data!");
} else {
  console.error("Could not find class-9 or class-10 markers in icse-data.ts");
}
