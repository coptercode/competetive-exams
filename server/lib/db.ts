import fs, { existsSync } from 'fs';
import path from 'path';
import EmbeddedPostgres from 'embedded-postgres';
import pg from 'pg';
import { isProduction } from './env.js';

const root = process.cwd();
const pgDir = path.join(root, '.pgdata2');

async function canConnect(url: string): Promise<boolean> {
  try {
    const client = new pg.Client({ connectionString: url, ssl: url.includes('supabase.com') ? { rejectUnauthorized: false } : undefined });
    await client.connect();
    await client.end();
    return true;
  } catch (err: any) {
    console.warn('canConnect failed:', err.message);
    return false;
  }
}

function parseDatabaseUrl(urlStr: string) {
  try {
    const parsed = new URL(urlStr);
    return {
      user: parsed.username || 'postgres',
      password: parsed.password || 'postgres',
      port: parseInt(parsed.port) || 5432,
      database: parsed.pathname.slice(1) || 'lms_db',
    };
  } catch (e) {
    return {
      user: 'postgres',
      password: 'postgres',
      port: 5432,
      database: 'lms_db',
    };
  }
}

export async function startDatabase() {
  const databaseUrl = process.env.DATABASE_URL;

  if (isProduction()) {
    if (!databaseUrl) {
      throw new Error('DATABASE_URL environment variable is required in production');
    }
    if (!(await canConnect(databaseUrl))) {
      throw new Error('Cannot reach DATABASE_URL. Production requires a real, reachable Postgres instance — the embedded-postgres dev fallback is disabled in production.');
    }
    console.log('Database reachable at DATABASE_URL.');
    return;
  }

  const effectiveUrl = databaseUrl || 'postgresql://postgres:postgres@127.0.0.1:5432/lms_db';
  const dbParams = parseDatabaseUrl(effectiveUrl);

  if (await canConnect(effectiveUrl)) {
    console.log('Database already reachable at DATABASE_URL.');
    return;
  }

  if (effectiveUrl.includes('supabase.com') || effectiveUrl.includes('rds.amazonaws.com') || effectiveUrl.includes('aws')) {
    if (effectiveUrl.includes('[YOUR-PROJECT-REF]') || effectiveUrl.includes('[YOUR-PASSWORD]')) {
      console.log('[db] Remote Supabase URL contains placeholder tokens in .env. Falling back to local PostgreSQL server for database persistence...');
    } else {
      console.warn('Remote database is unreachable, skipping embedded-postgres fallback.');
      return;
    }
  }

  console.log('Starting local PostgreSQL database...');
  try {
    const embedded = new EmbeddedPostgres({
      databaseDir: pgDir,
      user: dbParams.user,
      password: dbParams.password,
      port: dbParams.port,
      persistent: true,
    });
    
    if (!existsSync(pgDir)) {
      console.log('Initializing database storage...');
      await embedded.initialise();
    } else {
      const pgNotifyDir = path.join(pgDir, 'pg_notify');
      if (!existsSync(pgNotifyDir)) {
        try { fs.mkdirSync(pgNotifyDir, { recursive: true }); } catch (e) {}
      }
      const pidFile = path.join(pgDir, 'postmaster.pid');
      if (existsSync(pidFile)) {
        try { fs.unlinkSync(pidFile); } catch (e) {}
      }
    }
    
    try {
      await embedded.start();
    } catch (startErr) {
      console.log('Re-initializing clean database storage directory...');
      try { fs.rmSync(pgDir, { recursive: true, force: true }); } catch (e) {}
      await embedded.initialise();
      await embedded.start();
    }
    console.log('Local PostgreSQL database started successfully.');

    // Reconcile password if necessary
    if (!(await canConnect(effectiveUrl))) {
      const fallbackUrl = `postgresql://${dbParams.user}:postgres@127.0.0.1:${dbParams.port}/postgres`;
      try {
        const client = new pg.Client({ connectionString: fallbackUrl });
        await client.connect();
        await client.query(`ALTER USER ${dbParams.user} WITH PASSWORD '${dbParams.password.replace(/'/g, "''")}';`);
        await client.end();
        console.log(`Successfully reconciled PostgreSQL password to match DATABASE_URL.`);
      } catch (err) {
        console.warn('Failed to reconcile postgres password (it may already match or be external):', err);
      }
    }

    // Ensure database exists
    const adminUrl = effectiveUrl.replace(`/${dbParams.database}`, '/postgres');
    try {
      const client = new pg.Client({ connectionString: adminUrl });
      await client.connect();
      const res = await client.query('SELECT 1 FROM pg_database WHERE datname = $1', [dbParams.database]);
      if (res.rowCount === 0) {
        await client.query(`CREATE DATABASE ${dbParams.database}`);
        console.log(`Created database ${dbParams.database}`);
      }
      await client.end();
    } catch (err) {
      console.error(`Failed to ensure database ${dbParams.database} exists:`, err);
    }
    
    // Handle clean shutdown on exit
    const stopDb = async () => {
      console.log('Stopping local PostgreSQL database...');
      try {
        await embedded.stop();
      } catch (e) {
        // ignore
      }
      process.exit(0);
    };

    process.on('SIGINT', stopDb);
    process.on('SIGTERM', stopDb);
  } catch (err) {
    console.error('Failed to start local database:', err);
  }
}
