import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    token: process.env.token,
  },
};

export default nextConfig;
