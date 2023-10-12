/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  transpilePackages: [], // 💁 Load your internal packages here
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
