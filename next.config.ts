import type { NextConfig } from "next";

/**
 * BUILD_TARGET=pages  → static export for GitHub Pages (project site /bookra1n)
 * default             → normal Next.js server build (local dev / sandbox preview)
 */
const isPages = process.env.BUILD_TARGET === "pages";

const nextConfig: NextConfig = {
  ...(isPages
    ? {
        output: "export",
        basePath: "/bookra1n",
        assetPrefix: "/bookra1n/",
        trailingSlash: false,
      }
    : {
        output: "standalone",
      }),
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
