/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: 'build',
  output: 'standalone',
  experimental: {},
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
