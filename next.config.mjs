/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-inline' 'unsafe-eval' chrome-extension: https: http:; object-src 'self'; style-src 'self' 'unsafe-inline' https:;"
          }
        ]
      }
    ]
  }
};

export default nextConfig;