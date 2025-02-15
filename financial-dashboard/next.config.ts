import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'ferf1mheo22r9ira.public.blob.vercel-storage.com',
          },
      ],
  },
}

export default nextConfig;
