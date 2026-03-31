import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // For Vercel deployment - use standalone for serverless functions
  // For static export (GoDaddy) - change to output: "export"
  output: "standalone",
  
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
      },
    ],
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  reactStrictMode: false,
  
  allowedDevOrigins: [
    'preview-chat-e68f14b9-8b57-40c6-9396-74deca57ba3e.space.z.ai',
    '.space.z.ai',
  ],
  
  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
