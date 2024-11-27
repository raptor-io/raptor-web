import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // 添加错误页面配置
  async redirects() {
    return [
      {
        source: '/404',
        destination: '/404.html',
        permanent: true,
      },
    ];
  },
};

if (process.env.NODE_ENV === 'development') {
  await import('@cloudflare/next-on-pages/next-dev').then(mod => mod.setupDevPlatform());
}

export default nextConfig;