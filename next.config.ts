import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Next.js 16 uses Turbopack by default - no webpack config needed

  // Optimize package imports for better performance
  experimental: {
    optimizePackageImports: [
      '@payloadcms/next',
      '@payloadcms/db-postgres',
      '@payloadcms/richtext-lexical',
      'payload',
      '@payloadcms/plugin-cloudinary',
      '@pemol/payload-cloudinary',
    ],
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },


  // Ensure images are properly optimized
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // Enable strict TypeScript mode
  typescript: {
    ignoreBuildErrors: false,
  },

  // Set powered by header (optional, can be disabled)
  poweredByHeader: false,

  // Compress responses
  compress: true,

  // Generate ETags for caching
  generateEtags: true,

  // Enable React strict mode
  reactStrictMode: true,

  // Trailing slash for consistent routing
  trailingSlash: false,

  // Canonical non-locale URLs; keep old locale routes as redirects.
  async redirects() {
    return [
      {
        source: '/en',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ml',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/ml/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
