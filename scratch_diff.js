const fs = require('fs');

try {
  const cData = fs.readFileSync('C:\\\\Users\\\\dhars\\\\OneDrive\\\\Desktop\\\\-lms-website-jun26-main\\\\lms-website-jun26-main\\\\prisma\\\\tnsb-data.ts', 'utf8');
  const hDataTnsb = fs.readFileSync('H:\\\\-lms-website-jun26\\\\-lms-website-jun26\\\\prisma\\\\tnsb-data.ts', 'utf8');
  const hDataBoards = fs.readFileSync('H:\\\\-lms-website-jun26\\\\-lms-website-jun26\\\\prisma\\\\boards-data.ts', 'utf8');
  
  const result = {
    cDataLength: cData.length,
    hDataTnsbLength: hDataTnsb.length,
    hDataBoardsLength: hDataBoards.length,
  };
  fs.writeFileSync('H:\\\\-lms-website-jun26\\\\-lms-website-jun26\\\\scratch_output.json', JSON.stringify(result, null, 2));
} catch (e) {
  fs.writeFileSync('H:\\\\-lms-website-jun26\\\\-lms-website-jun26\\\\scratch_error.txt', e.toString());
}
