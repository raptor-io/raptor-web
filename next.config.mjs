/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' chrome-extension: https: http: blob:",
              "script-src-elem 'self' 'unsafe-inline' 'unsafe-eval' chrome-extension: https: http: blob:",
              "connect-src 'self' wss: https: http: chrome-extension:",
              "style-src 'self' 'unsafe-inline' https:",
              "img-src 'self' data: https: http: chrome-extension:",
              "frame-src 'self' chrome-extension:",
            ].join("; "),
          },
        ],
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: false,
        stream: false,
        assert: false,
        http: false,
        https: false,
        os: false,
        url: false,
      };
    }
    return config;
  },
};

export default nextConfig;
