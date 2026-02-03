import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: '家族辦公室 | 整合式財富管理服務',
  description: '專業的會計、保險、不動產整合服務，為高淨值家族提供量身定制的財富規劃。',
  keywords: '家族辦公室,財富管理,稅務規劃,保險規劃,不動產管理',
  openGraph: {
    title: '家族辦公室 | 整合式財富管理服務',
    description: '專業的會計、保險、不動產整合服務',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" className={inter.variable}>
      <body className="antialiased">
        {/* Header 將在後續添加 */}
        <main className="min-h-screen">
          {children}
        </main>
        {/* Footer 將在後續添加 */}
      </body>
    </html>
  )
}
