import { execSync } from 'child_process';

console.log('--- STEP 1: Parsing Raw Notes & Generating True Curriculum ---');
execSync('npx tsx scripts/parse_raw_notes.ts', { stdio: 'inherit' });

console.log('\n--- STEP 2: Rebuilding Database Curriculum ---');
execSync('npx tsx scripts/rebuild_curriculum.ts', { stdio: 'inherit' });

console.log('\n--- STEP 3: Relinking Notes to Database ---');
execSync('npx tsx scripts/relink_notes_perfectly.ts', { stdio: 'inherit' });

console.log('\n✅ All steps completed successfully!');
