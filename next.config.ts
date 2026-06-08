import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static Site Generation: emit a fully pre-rendered, host-anywhere site.
  output: "export",
  trailingSlash: true,
  images: {
    // next/image optimization is unavailable on a static export.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
