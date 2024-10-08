import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */

const nextConfig = {
  headers: () => [
    {
      source: '/products/:id*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spica.onrender.com',
      },
      {
        protocol: 'https',
        hostname: 'spica-z4du.onrender.com',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
