import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enables static export
  distDir: 'dist', // Changes build directory
  // Optional: Add trailing slashes for better compatibility
  trailingSlash: true,
  images: {
    domains: ['via.placeholder.com'],
  },
};

export default nextConfig;
