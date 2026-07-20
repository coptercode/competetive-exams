const fs = require('fs');
const path = require('path');

// Compile the ts file to js in memory or just use regex.
// Wait, to require the TS file, we can just compile it or read it and eval it.
const icseDataTs = fs.readFileSync(path.join(__dirname, 'prisma', 'icse-data.ts'), 'utf8');
const jsCode = icseDataTs.replace('export const icseBoardComplete =', 'const icseBoardComplete =') + '\nmodule.exports = { icseBoardComplete };';
fs.writeFileSync(path.join(__dirname, 'prisma', 'icse-data.js'), jsCode);

const { icseBoardComplete } = require('./prisma/icse-data.js');

const class9 = icseBoardComplete.classes.find(c => c.id === 'class-9');

if (class9) {
  const maths = class9.subjects.find(s => s.id === 'mathematics-9-icse');
  const biology = class9.subjects.find(s => s.id === 'biology-9-icse');
  const physics = class9.subjects.find(s => s.id === 'physics-9-icse');
  const chemistry = class9.subjects.find(s => s.id === 'chemistry-9-icse');

  if (maths && biology && physics && chemistry) {
    const scienceChapters = [
      ...biology.chapters.map(ch => ({ ...ch, title: 'Biology - ' + ch.title })),
      ...physics.chapters.map(ch => ({ ...ch, title: 'Physics - ' + ch.title })),
      ...chemistry.chapters.map(ch => ({ ...ch, title: 'Chemistry - ' + ch.title }))
    ];
    
    // Sort chapters properly (optional, let's keep them sequentially)
    scienceChapters.forEach((ch, idx) => {
      // Re-number chapters? No, the ID and title are fine.
      // Maybe clean up the title to not be "Biology - Chapter 1: Basic Biology" but just "Biology: Basic Biology"?
      ch.title = ch.title.replace('Chapter \\d+: ', '');
    });
    
    const science = {
      id: 'science-9-icse',
      title: 'Science',
      color: 'from-emerald-600 to-teal-700',
      chapters: scienceChapters
    };
    
    class9.subjects = [maths, science];
  }
}

const fileContent = 'export const icseBoardComplete = ' + JSON.stringify(icseBoardComplete, null, 2) + ';\n';
fs.writeFileSync(path.join(__dirname, 'prisma', 'icse-data.ts'), fileContent);
fs.unlinkSync(path.join(__dirname, 'prisma', 'icse-data.js'));

console.log('Done modifying icse-data.ts!');
