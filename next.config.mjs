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
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' chrome-extension: https: http: blob:",
              "script-src-elem 'self' 'unsafe-inline' 'unsafe-eval' chrome-extension: https: http: blob:",
              "connect-src 'self' wss: https: http: chrome-extension:",
              "style-src 'self' 'unsafe-inline' https:",
              "img-src 'self' data: https: http: chrome-extension:",
              "frame-src 'self' chrome-extension:"
            ].join('; ')
          }
        ]
      }
    ]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        assert: require.resolve('assert/'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        url: require.resolve('url/'),
      }
    }
    return config
  }
};

export default nextConfig;