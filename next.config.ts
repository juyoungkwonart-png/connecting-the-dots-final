import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Lenis + GSAP are sensitive to double-mount; avoids proxy/raf overlap in dev. */
  reactStrictMode: false,
};

export default nextConfig;
