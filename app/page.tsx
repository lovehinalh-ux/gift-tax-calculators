import { GiftTaxCalculator } from '@/components/calculators/GiftTaxCalculator'

export default function GiftTaxPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '贈與稅計算機的輸入單位是什麼？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '本工具輸入單位為萬元，系統會自動換算為元後再計算應納贈與稅額。',
        },
      },
      {
        '@type': 'Question',
        name: '免稅額是多少？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '本工具免稅額固定採用 2,440,000 元，超過免稅額後才開始計算贈與稅。',
        },
      },
      {
        '@type': 'Question',
        name: '此試算結果可以直接作為報稅結果嗎？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '本工具為試算用途，實際稅額仍以國稅局核定為準。',
        },
      },
    ],
  }

  const webAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Mr. Three 贈與稅計算機',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    inLanguage: 'zh-TW',
    description:
      '依民國114年後贈與稅級距，提供萬元輸入與即時稅額摘要的贈與稅試算工具。',
  }

  return (
    <div className="min-h-screen bg-secondary flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />

      <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-orange-100 py-4 px-4 md:px-12 flex justify-between items-center w-full shadow-sm transition-all duration-300">
        <div className="flex items-center gap-1 max-w-7xl mx-auto w-full justify-between">
          <p className="text-xl md:text-2xl font-bold text-textMain tracking-tight">
            Mr. Three 贈與稅計算機
          </p>

          <div className="flex items-center space-x-8 text-sm font-medium text-textMain">
            <a
              href="https://personal-intro-blue.zeabur.app/"
             
             
              className="bg-primary hover:bg-[#B06A25] text-white px-5 py-2 rounded shadow-sm transition-all transform hover:-translate-y-0.5 font-medium flex items-center gap-2"
            >
              <span>回到Mr. Three保險工具箱</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-12 py-12 mobile-summary-spacer">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            專業工具庫
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-textMain mb-4">
            贈與稅計算機 - 2026 最新版
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            依據 民國114年(2025) 最新稅法，協助您快速試算本次贈與應納稅額。
            <br className="hidden md:inline" />
            透過右側即時試算面板，精準掌握課稅淨額與預估稅負。
          </p>
        </div>

        <GiftTaxCalculator />

        <section className="mt-12 bg-white rounded-2xl border border-orange-100 p-6 md:p-8 text-textMain">
          <h2 className="text-2xl font-bold mb-4">贈與稅試算說明</h2>
          <p className="text-base leading-8 text-gray-700">
            本頁為贈與稅計算機，採用「輸入萬元、計算轉換為元」的方式進行試算。
            計算流程為：本次贈與總額扣除免稅額（2,440,000 元）後，取得課稅贈與淨額，
            再依適用稅率與累進差額計算本次應納贈與稅額。
          </p>
          <p className="text-base leading-8 text-gray-700 mt-3">
            本工具適用民國 114 年 1 月 1 日（含）後之贈與稅率級距。試算結果僅供規劃參考，
            實際申報與核定結果仍以主管機關公告及國稅局核定為準。
          </p>
        </section>
      </main>

      <footer className="py-8 text-center text-gray-400 text-sm border-t border-gray-200/50 mt-12">
        <p>&copy; 2024 Mr. Three 保險工具箱. All rights reserved.</p>
        <p className="mt-2 text-xs">本試算結果僅供參考，實際稅額以國稅局核定為準。</p>
      </footer>
    </div>
  )
}
