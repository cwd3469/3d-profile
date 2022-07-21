/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "https://example.com/myaccount/",
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      "/": { page: "/" },
      "/todo": { page: "/todo" },
      "/carrer": { page: "/carrer" },
    };
  },
  webpack(config, { webpack }) {
    config.resolve = {
      alias: {
        "@core": path.resolve(__dirname, "./src/core"),
        "@utils": path.resolve(__dirname, "./src/utils"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@components": path.resolve(__dirname, "./src/components"),
      },
      ...config.resolve,
    };
    return config;
  },
};

module.exports = nextConfig;
