import { cbseBoardComplete } from '../prisma/cbse-data.js';

const class11 = cbseBoardComplete.classes.find(c => c.title.includes('11'));
if (class11) {
  const math = class11.subjects.find(s => s.title.includes('Math'));
  if (math) {
    console.log(JSON.stringify(math.chapters.slice(0, 2), null, 2));
  } else {
    console.log("Math not found");
  }
} else {
  console.log("Class 11 not found");
}
