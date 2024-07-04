/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ansaratracker.store',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
