/** @type {import('next').NextConfig} */
// const removeImports = require('next-remove-imports');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['storage.cloud.google.com', 'storage.googleapis.com'],
  },
  experimental: {
    serverActions: true,
  },
};
