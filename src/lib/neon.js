import { neon } from '@neondatabase/serverless';

// Retrieve Database URL from Netlify DB or custom environment variables
const databaseUrl = 
  import.meta.env.VITE_NEON_DATABASE_URL || 
  import.meta.env.NETLIFY_DB_URL || 
  import.meta.env.DATABASE_URL || 
  (typeof process !== 'undefined' && process.env ? (process.env.VITE_NEON_DATABASE_URL || process.env.NETLIFY_DB_URL || process.env.DATABASE_URL) : null);


// Initialize Neon SQL query helper if database URL is provided
export const sql = databaseUrl ? neon(databaseUrl) : null;

export const isNeonConnected = () => {
  return Boolean(databaseUrl);
};
