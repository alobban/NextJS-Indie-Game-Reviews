export const getDomain = () => {
  // Check if running in a Vercel environment
  const vercelUrl = process.env.VERCEL_URL;

  // Build the full URL, defaulting to localhost for local development
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const domain = vercelUrl || 'localhost:3000';

  return `${protocol}://${domain}`;
};
