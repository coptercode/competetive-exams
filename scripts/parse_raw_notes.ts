import fs from 'fs';
import path from 'path';

function getSubject(filename: string) {
  const lc = filename.toLowerCase();
  if (lc.includes('physics')) return 'Physics';
  if (lc.includes('chemistry')) return 'Chemistry';
  if (lc.includes('biology')) return 'Biology';
  if (lc.includes('math')) return 'Mathematics';
  if (lc.includes('science')) return 'Science';
  return 'Unknown';
}

function getClass(filename: string) {
  const match = filename.match(/class\s*(\d+)/i);
  return match ? parseInt(match[1]) : 0;
}

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function parseBoard(boardId: string, boardCode: string, folderName: string, outFolder: string, dataFilename: string, boardTitle: string) {
  const dirPath = path.join(process.cwd(), folderName);
  const outPath = path.join(process.cwd(), 'public/notes', outFolder);
  ensureDir(outPath);

  // Clear existing notes
  const existing = fs.readdirSync(outPath);
  for (const f of existing) {
    if (f.endsWith('.md')) fs.unlinkSync(path.join(outPath, f));
  }

  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
  
  const classes: number[] = [9, 10, 11, 12];
  const result: any[] = [];

  for (const cls of classes) {
    const classObj = {
      id: `class-${cls}`,
      title: `Class ${cls}`,
      subjects: [] as any[]
    };

    const subjects = ['Mathematics', 'Science', 'Physics', 'Chemistry', 'Biology'];
    for (const sub of subjects) {
      const subFiles = files.filter(f => getClass(f) === cls && getSubject(f) === sub);
      if (subFiles.length === 0) continue;

      let color = "from-sky-600 to-blue-700";
      if (sub === 'Biology') color = "from-emerald-600 to-teal-700";
      if (sub === 'Physics') color = "from-violet-600 to-purple-700";
      if (sub === 'Chemistry') color = "from-rose-600 to-pink-700";

      const subjectObj = {
        id: `${sub.toLowerCase()}-${cls}-${boardCode}`,
        title: sub,
        color: color,
        chapters: [] as any[]
      };

      // Ensure volume 1 comes before volume 2
      subFiles.sort((a, b) => a.localeCompare(b));

      let globalChapterIndex = 1;

      for (const file of subFiles) {
        const content = fs.readFileSync(path.join(dirPath, file), 'utf-8');
        // split by # Chapter
        // Sometimes it's # Chapter 1: or # Chapter 1.
        // We can split by /^#\s*Chapter\s+\d+/gm
        
        const chapterChunks = content.split(/^#\s*Chapter\s+\d+/gm);
        // The first chunk is preamble. We need the actual headers to get titles.
        // A better way is to use regex match to find all headers, then slice string
        const regex = /^#\s*Chapter\s+(\d+)\s*[:\-\.]?\s*(.*)$/gm;
        let match;
        const matches: any[] = [];
        while ((match = regex.exec(content)) !== null) {
          matches.push({
             num: parseInt(match[1]),
             title: match[2].trim() || 'Untitled',
             index: match.index
          });
        }

        for (let i = 0; i < matches.length; i++) {
          const current = matches[i];
          const nextIndex = i + 1 < matches.length ? matches[i+1].index : content.length;
          
          let chapterText = content.substring(current.index, nextIndex);
          // Re-add the header since we substring from it, but wait, the regex match starts at #
          // So chapterText already includes `# Chapter X: Y`

          const chNum = globalChapterIndex++;
          const outFilename = `${boardCode}_class_${cls}_${sub}__Chapter_${chNum}.md`;
          
          // Actually replace the chapter number in the text so it is contiguous (e.g. if volumes reset chapter numbers)
          chapterText = chapterText.replace(/^#\s*Chapter\s+\d+/, `# Chapter ${chNum}`);

          fs.writeFileSync(path.join(outPath, outFilename), chapterText);

          const chId = `${boardCode}-${sub.charAt(0).toLowerCase()}${cls}-ch${chNum}`;
          const lines = chapterText.split('\n');
          const subtopics: string[] = [];
          for (const line of lines) {
            if (line.trim().startsWith('#')) {
              if (line.toLowerCase().includes('# chapter ')) continue;
              let text = line.replace(/^#+\s*/, '').replace(/^[A-Z0-9\.]+\s+/, '').trim();
              if (text.length > 0 && !subtopics.includes(text)) {
                subtopics.push(text);
              }
            }
          }

          const fallbacks = ["Key Concepts", "Detailed Mechanisms", "Practical Applications", "Advanced Analysis", "Summary and Review"];
          while (subtopics.length < 5) {
            subtopics.push(fallbacks[subtopics.length]);
          }
          const finalSubtopics = subtopics.slice(0, 5);

          const topicObjs = finalSubtopics.map((tTitle, idx) => ({
            id: `${chId}-t${idx + 1}`,
            title: tTitle,
            content: "Study material for " + tTitle,
            duration: "15 mins",
            videoUrl: "https://www.w3schools.com/html/movie.mp4"
          }));

          subjectObj.chapters.push({
             id: chId,
             title: `Chapter ${chNum} : ${current.title}`,
             topics: topicObjs
          });
        }
      }

      if (subjectObj.chapters.length > 0) {
         classObj.subjects.push(subjectObj);
      }
    }

    if (classObj.subjects.length > 0) {
       result.push(classObj);
    }
  }

  const finalObj = {
    id: boardId,
    title: boardTitle,
    classes: result
  };

  const tsCode = `export const ${boardCode}BoardComplete = ${JSON.stringify(finalObj, null, 2)};\n`;
  fs.writeFileSync(path.join(process.cwd(), 'prisma', dataFilename), tsCode);
  console.log(`Processed ${boardId} -> ${dataFilename}`);
}

parseBoard('cbse', 'cbse', 'cbse notes', 'cbse', 'cbse-data.ts', 'CBSE Board');
parseBoard('icse', 'icse', 'icse_ise notes', 'icse_ise', 'icse-data.ts', 'ICSE & ISC Board');
parseBoard('tnsb', 'tnsb', 'stateboard notes', 'stateboard', 'tnsb-data.ts', 'Tamil Nadu State Board');
