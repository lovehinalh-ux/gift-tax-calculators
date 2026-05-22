import type { Metadata } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Mr. Three 贈與稅計算機',
  description:
    'Mr. Three 贈與稅計算機，依民國114年後稅率快速試算贈與稅。支援萬元輸入、即時稅額摘要與課稅級距對照。',
  applicationName: 'Mr. Three 贈與稅計算機',
  keywords: [
    '贈與稅',
    '贈與稅計算機',
    '贈與稅試算',
    '贈與稅率',
    '稅額試算',
    'Mr. Three',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: '/',
    siteName: 'Mr. Three 贈與稅計算機',
    title: 'Mr. Three 贈與稅計算機',
    description:
      '依民國114年後稅率快速試算贈與稅，清楚掌握課稅贈與淨額、適用稅率與本次應納贈與稅額。',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mr. Three 贈與稅計算機',
    description:
      '輸入萬元，立即試算贈與稅。依最新級距快速查看課稅淨額、累進差額與應納稅額。',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
