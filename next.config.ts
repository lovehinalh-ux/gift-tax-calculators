import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* 基本配置 */
  reactStrictMode: true,
  output: 'export',

  /* 圖片優化 */
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [],
  },

  /* 實驗性功能 */
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
}

export default nextConfig
