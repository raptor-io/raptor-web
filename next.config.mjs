import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

if (process.env.NODE_ENV === 'development') {
  await import('@cloudflare/next-on-pages/next-dev').then(mod => mod.setupDevPlatform());
}

export default nextConfig;