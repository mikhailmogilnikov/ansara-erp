/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
