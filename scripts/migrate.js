import { neon } from '@neondatabase/serverless';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const databaseUrl = process.env.VITE_NEON_DATABASE_URL || process.env.NETLIFY_DB_URL || process.env.DATABASE_URL;

if (!databaseUrl) {
  console.error('❌ Error: No database URL found in environment variables (VITE_NEON_DATABASE_URL, NETLIFY_DB_URL, or DATABASE_URL).');
  console.log('💡 Please add your connection string to .env file or set VITE_NEON_DATABASE_URL.');
  process.exit(1);
}

const sql = neon(databaseUrl);

async function runMigration() {
  try {
    console.log('🔌 Connecting to Neon PostgreSQL...');
    const schemaPath = path.resolve(process.cwd(), 'schema.sql');
    const sqlContent = fs.readFileSync(schemaPath, 'utf8');

    // Split and execute statements
    const statements = sqlContent
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    for (const statement of statements) {
      await sql(statement);
    }

    console.log('✅ Schema migration executed successfully on Neon PostgreSQL!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

runMigration();
