/** @type {import('next').NextConfig} */
import crypto from "crypto-browserify";
import stream from "stream-browserify";
import assert from "assert/";
import http from "stream-http";
import https from "https-browserify";
import os from "os-browserify/browser";
import url from "url/";

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
        crypto,
        stream,
        assert,
        http,
        https,
        os,
        url,
      };
    }
    return config;
  },
};

export default nextConfig;
