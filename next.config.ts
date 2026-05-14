import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      { pathname: '/gallery/**' },
      { pathname: '/*.png' },
    ],
  },
}

export default nextConfig
