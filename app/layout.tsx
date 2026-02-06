import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mr. Three 保險工具箱 | 贈與稅試算工具',
  description: '依據最新稅率快速試算本次贈與稅，協助掌握應納稅額與課稅淨額。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
