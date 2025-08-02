import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1aeya7jd2fyco.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
