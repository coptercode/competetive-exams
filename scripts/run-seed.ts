import 'dotenv/config';
import { startDatabase } from '../server/lib/db.js';
import { execSync } from 'child_process';

async function run() {
  try {
    console.log('[seed-runner] Initializing database server...');
    await startDatabase();

    console.log('[seed-runner] Executing Prisma DB Push...');
    execSync('node node_modules/prisma/build/index.js db push --accept-data-loss', { stdio: 'inherit' });

    console.log('[seed-runner] Executing Seed Script (prisma/seed.ts)...');
    execSync('node node_modules/tsx/dist/cli.mjs prisma/seed.ts', { stdio: 'inherit' });

    console.log('[seed-runner] ✅ Database push and seed completed with 0 errors!');
    process.exit(0);
  } catch (err: any) {
    console.error('[seed-runner] ❌ Seed failed:', err.message || err);
    process.exit(1);
  }
}

run();
