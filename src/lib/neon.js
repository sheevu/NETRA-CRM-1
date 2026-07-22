import { neon } from '@neondatabase/serverless';

// Retrieve Database URL from environment variables
const databaseUrl = import.meta.env.VITE_NEON_DATABASE_URL || process.env.VITE_NEON_DATABASE_URL;

// Initialize Neon SQL query helper if database URL is provided
export const sql = databaseUrl ? neon(databaseUrl) : null;

export const isNeonConnected = () => {
  return Boolean(databaseUrl);
};
