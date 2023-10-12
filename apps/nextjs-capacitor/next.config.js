/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  transpilePackages: ["@ionic/react", "ionicons"], // 💁 Load your internal packages here
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
