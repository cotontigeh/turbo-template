import baseConfig from "twconfig/nextjs.config"; // 🔗 See https://github.com/cotontigeh/turbo-template/blob/main/packages/twconfig/nextjs.config.ts

// 💁 If you don't want to use this tailwind config as a base, you can use tailwind.default.ts instead
// import baseConfig from "./tailwind.default.ts";

const config = { ...baseConfig, darkMode: "media" };
export default config;
