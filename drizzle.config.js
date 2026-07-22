import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.js',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NETLIFY_DB_URL || process.env.VITE_NEON_DATABASE_URL || process.env.DATABASE_URL || '',
  },
});
