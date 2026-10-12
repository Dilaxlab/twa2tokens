import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/index.html",
        destination: "/",
      },
      {
        source: "/:path*.html",
        destination: "/:path*",
      },
    ];
  },
};

export default nextConfig;
