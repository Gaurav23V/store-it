import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // enable server actions
  experimental: {
    serverActions: {
      allowedOrigins: ["*"],
    },
  },
  // disable strict mode for now
  reactStrictMode: false,

  // configure header for cors
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type" },
        ],
      },
    ];
  },
  /* config options here */
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },

  // configure domain for github codespaces
  images: {
    domains: ["*.app.github.dev"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.app.github.dev",
      },
    ],
  },
};

export default nextConfig;
