const url = new URL(process.env.CMS_IMAGE_PATTERN);
console.log('[config] url:', url);

/** @type {import('next').NextConfig} */
module.exports = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: url.protocol.replace(':', ''),
        hostname: url.hostname,
        port: url.port,
        pathname: url.pathname,
      },
    ],
  },
};
