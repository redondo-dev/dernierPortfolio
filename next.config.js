const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./app/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['flagcdn.com', 'images.pexels.com'],
  },
  output: 'standalone'
};

module.exports = withNextIntl(nextConfig);
