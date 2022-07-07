/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "https//3d-profile.com/myaccount",
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
