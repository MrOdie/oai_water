/** @type {import('next').NextConfig} */
const path = require('path');
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'"
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  }
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}

module.exports = nextConfig;
