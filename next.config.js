const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./app/[locale]/messages.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['flagcdn.com'],
  }
};

module.exports = withNextIntl(nextConfig);
