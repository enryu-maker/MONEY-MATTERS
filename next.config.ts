import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Disable image optimizer cache so new local assets appear immediately.
    unoptimized: true,
  },
};

export default nextConfig;
