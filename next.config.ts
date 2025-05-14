import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // remotePatterns: [new URL("https://cms.mantis-185.ru/")],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.mantis-185.ru",
      },
    ],
  },
};

export default nextConfig;
