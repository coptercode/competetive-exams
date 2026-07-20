import fs from 'fs';
import path from 'path';

function main() {
  console.log('Permanently saving summa.md titles to tnsb-data.ts...');
  
  // 1. Read summa.md
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

  // 2. Read tnsb-data.ts
  const tnsbPath = path.join(process.cwd(), 'prisma/tnsb-data.ts');
  let tnsbContent = fs.readFileSync(tnsbPath, 'utf-8');

  // Instead of importing the TS file which can be tricky without compiling,
  // we will use a quick regex approach to parse the massive tnsbBoardComplete object,
  // modify it in memory, and stringify it back.
  
  const extractRegex = /export const tnsbBoardComplete = (\{[\s\S]+\});?/m;
  const match = tnsbContent.match(extractRegex);
  
  if (!match) {
    console.error("Could not find tnsbBoardComplete in tnsb-data.ts!");
    return;
  }

  // Safely parse the object
  // Since the file is actually a TS file exporting a JSON-like object, JSON.parse works 
  // as long as there are no trailing commas or single quotes. The original file looks like pure JSON.
  let boardObj;
  try {
     // The regex matches the object literal. 
     let jsonStr = match[1];
     // Handle trailing commas if any exist
     jsonStr = jsonStr.replace(/,\s*([\]}])/g, '$1');
     boardObj = JSON.parse(jsonStr);
  } catch (err) {
     console.error("Failed to parse tnsbBoardComplete as JSON. It might contain TS-specific syntax.");
     return;
  }

  // 3. Apply the changes to the object
  for (const classObj of boardObj.classes) {
    const className = classObj.title;

    for (const subjectObj of classObj.subjects) {
      const subjectName = subjectObj.title;

      for (const chapterObj of subjectObj.chapters) {
        const chapterNameRaw = chapterObj.title;

        // Try to find a match in summa.md map
        let matchedKey = null;
        let summaTopics = null;

        for (const [key, topics] of chapterToTopics.entries()) {
           const [kClass, kSubject, kChapter] = key.split('|');
           
           if (kClass === className && 
              (subjectName.toLowerCase() === kSubject.toLowerCase() || subjectName.toLowerCase().startsWith(kSubject.toLowerCase()) || kSubject.toLowerCase().startsWith(subjectName.toLowerCase()))
           ) {
              const chapterNamePart = kChapter.includes(':') ? kChapter.split(':')[1].trim() : kChapter;
              if (chapterNameRaw.toLowerCase().includes(chapterNamePart.toLowerCase()) || kChapter.toLowerCase().includes(chapterNameRaw.toLowerCase())) {
                 matchedKey = key;
                 summaTopics = topics;
                 break;
              }
           }
        }

        if (summaTopics) {
           // Rename the first N topics
           for (let i = 0; i < summaTopics.length; i++) {
              if (i < chapterObj.topics.length) {
                 chapterObj.topics[i].title = summaTopics[i];
              }
           }
        }
      }
    }
  }

  // 4. Write back to file
  const newJsonStr = JSON.stringify(boardObj, null, 2);
  // We need to match exactly what we replaced.
  const newContent = tnsbContent.replace(extractRegex, `export const tnsbBoardComplete = ${newJsonStr};`);
  
  fs.writeFileSync(tnsbPath, newContent);
  console.log('Successfully saved summa.md titles permanently to tnsb-data.ts in your codebase!');
}

main();
