import fs from 'fs';
import path from 'path';

function generateIcseData(classes: number[]) {
  const dirPath = path.join(process.cwd(), 'public/notes/icse_ise');
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));

  const result: any[] = [];

  for (const cls of classes) {
    const classObj = {
      id: `class-${cls}`,
      title: `Class ${cls}`,
      subjects: [] as any[]
    };

    const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology'];
    for (const sub of subjects) {
      const subFiles = files.filter(f => {
        const classMatch = f.match(/class_(\d+)/i);
        if (!classMatch || parseInt(classMatch[1]) !== cls) return false;
        
        let subName = '';
        if (f.toLowerCase().includes('physics')) subName = 'Physics';
        else if (f.toLowerCase().includes('chemistry')) subName = 'Chemistry';
        else if (f.toLowerCase().includes('biology')) subName = 'Biology';
        else if (f.toLowerCase().includes('mathematics') || f.toLowerCase().includes('maths')) subName = 'Mathematics';
        
        return subName === sub;
      });

      if (subFiles.length === 0) continue;

      let color = "from-sky-600 to-blue-700";
      if (sub === 'Biology') color = "from-emerald-600 to-teal-700";
      if (sub === 'Physics') color = "from-violet-600 to-purple-700";
      if (sub === 'Chemistry') color = "from-rose-600 to-pink-700";

      const subjectObj = {
        id: `${sub.toLowerCase()}-${cls}-icse`,
        title: sub,
        color: color,
        chapters: [] as any[]
      };

      // Sort files by chapter number
      subFiles.sort((a, b) => {
        const ma = a.match(/Chapter_(\d+)/i);
        const mb = b.match(/Chapter_(\d+)/i);
        const numA = ma ? parseInt(ma[1]) : 0;
        const numB = mb ? parseInt(mb[1]) : 0;
        return numA - numB;
      });

      for (const file of subFiles) {
        const fullPath = path.join(dirPath, file);
        const content = fs.readFileSync(fullPath, 'utf-8');
        const lines = content.split('\n');
        const h1Line = lines.find(l => l.startsWith('# Chapter '));
        
        let chapterNum = "1";
        const match = file.match(/Chapter_(\d+)/i);
        if (match) chapterNum = match[1];

        let contentName = "Various Topics";
        if (h1Line) {
           const clean = h1Line.replace(/^#\s*/, '').trim(); // e.g. "Chapter 1: Sets"
           if (clean.includes(':')) {
              contentName = clean.split(':')[1].trim();
           } else {
              contentName = clean;
           }
        }

        const chId = `icse-${sub.charAt(0).toLowerCase()}${cls}-ch${chapterNum}`;
        subjectObj.chapters.push({
          id: chId,
          title: `Unit ${chapterNum}`,
          topics: [
            {
              id: `${chId}-t1`,
              title: `Unit ${chapterNum}`,
              content: contentName,
              duration: "30m",
              videoUrl: "https://www.w3schools.com/html/movie.mp4"
            }
          ]
        });
      }

      classObj.subjects.push(subjectObj);
    }
    
    if (classObj.subjects.length > 0) {
      result.push(classObj);
    }
  }

  const generatedStr = JSON.stringify(result, null, 2);
  // Remove the outermost brackets [ ] and indent
  const innerClasses = generatedStr.substring(2, generatedStr.length - 2).trim();

  const icseFile = path.join(process.cwd(), 'prisma/icse-data.ts');
  const icseContent = fs.readFileSync(icseFile, 'utf-8');

  // Insert before the last `  ]\n};`
  const insertIndex = icseContent.lastIndexOf('    }\n  ]\n};');
  if (insertIndex !== -1) {
    const newContent = icseContent.substring(0, insertIndex + 5) + ',\n    ' + innerClasses + '\n  ]\n};\n';
    fs.writeFileSync(icseFile, newContent);
    console.log('Successfully injected Class 11 and 12 into prisma/icse-data.ts!');
  } else {
    console.log('Could not find insert point in icse-data.ts');
  }
}

generateIcseData([11, 12]);
