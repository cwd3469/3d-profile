/** @type {import('next').NextConfig} */
const path = require('path');
const intercept = require('intercept-stdout');

function interceptStdout(text) {
  if (text.includes('Duplicate atom key')) {
    return '';
  }
  return text;
}
intercept(interceptStdout);

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/todo': { page: '/todo' },
      '/career': { page: '/career' },
    };
  },

  webpack(config, { webpack }) {
    config.resolve = {
      alias: {
        '@core': path.resolve(__dirname, './src/core'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@components': path.resolve(__dirname, './src/components'),
      },
      ...config.resolve,
    };
    return config;
  },
};

module.exports = nextConfig;
