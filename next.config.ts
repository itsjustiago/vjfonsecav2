import type { NextConfig } from "next";

// GitHub Pages serves the site at https://itsjustiago.github.io/vjfonsecav2/
// — set NEXT_PUBLIC_BASE_PATH=/vjfonsecav2 in the deploy workflow so all asset
// URLs (including the inline-CSS hero background) resolve correctly.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
