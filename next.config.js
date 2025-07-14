/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  // Disable HMR ping messages in development
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
  // Optimize images
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  // Better performance settings
  poweredByHeader: false,
  compress: true,
  // Skip linting during build for deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Skip TypeScript checking during build for deployment
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
