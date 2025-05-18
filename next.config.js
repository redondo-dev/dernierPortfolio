// const createNextIntlPlugin = require('next-intl/plugin');
// const withNextIntl = createNextIntlPlugin('./app/i18n.ts');
// const path = require('path');

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'standalone',
//   images: {
//     domains: [
//       'flagcdn.com',
//       'images.pexels.com',
//       'localhost',
//       'cdn.pixabay.com',
//       'bestl0-app.vercel.app',
//       'cabinet-medical-gray.vercel.app',
//       'riad-cofee.vercel.app',
//       'weather-app-redondo-dev.vercel.app',
//       'amvtc13.com',
//       'panier-e-commerce-en-react.firebaseapp.com'
//     ],
//     // remotePatterns: [
//     //   {
//     //     protocol: 'https',
//     //     hostname: '**',
//     //   },
//     //   {
//     //     protocol: 'http',
//     //     hostname: '**',
//     //   },
//     // ],
//      unoptimized: process.env.NODE_ENV !== 'production',
//   },
//   webpack: (config, { isServer }) => {
//     // Add file-loader for image files
//     config.module.rules.push({
//       test: /\.(png|jpe?g|gif|svg|webp)$/i,
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             publicPath: '/_next/static/images',
//             outputPath: 'static/images',
//             name: '[name]-[hash].[ext]',
//           },
//         },
//       ],
//     });

//     // Add public directory alias
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@public': path.join(__dirname, 'public'),
//     };

//     return config;
//   },
//   async headers() {
//     return [
//       {
//         source: '/assets/:path*',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000, immutable',
//           },
//         ],
//       },
//     ];
//   },
//   // Enable React strict mode to catch potential issues
//   reactStrictMode: true,
// };

// module.exports = withNextIntl(nextConfig);
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin('./app/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'flagcdn.com',
      'images.pexels.com',
      'localhost',
      'cdn.pixabay.com',
      'bestl0-app.vercel.app',
      'cabinet-medical-gray.vercel.app',
      'riad-cofee.vercel.app',
      'weather-app-redondo-dev.vercel.app',
      'amvtc13.com',
      'panier-e-commerce-en-react.firebaseapp.com'
    ],
    // Configuration simplifiée pour les images
    unoptimized: true, // Désactive l'optimisation des images pour le développement
  },
  // Supprimez complètement la section webpack si elle ne contient que la configuration file-loader
  // Gardez uniquement les configurations personnalisées nécessaires
  webpack: (config) => {
    // Ajoutez ici uniquement les configurations webpack personnalisées nécessaires
    return config;
  },
  // Activez le mode strict pour React
  reactStrictMode: true,
};

module.exports = withNextIntl(nextConfig);