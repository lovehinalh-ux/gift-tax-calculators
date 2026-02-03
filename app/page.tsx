import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <section className="container-fluid section-spacing">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-hero font-bold text-neutral-900 mb-6">
            讓財富管理變簡單
          </h1>
          <p className="text-body-lg text-neutral-600 mb-8">
            整合會計、保險、不動產的專業家族辦公室服務
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/assessment" className="btn-primary">
              開始免費評估
            </Link>
            <Link href="/services" className="btn-secondary">
              了解服務
            </Link>
          </div>
        </div>
      </section>

      {/* 服務價值主張 */}
      <section className="container-fluid section-spacing bg-white">
        <div className="grid md:grid-cols-3 gap-8">
          {/* 價值主張 1 */}
          <div className="card text-center">
            <div className="text-primary-500 text-5xl mb-4">🔗</div>
            <h3 className="text-h3 font-semibold mb-3">整合管理，省時省心</h3>
            <p className="text-neutral-600">
              一站式整合會計、保險、不動產服務，告別多頭溝通的困擾
            </p>
          </div>

          {/* 價值主張 2 */}
          <div className="card text-center">
            <div className="text-primary-500 text-5xl mb-4">👥</div>
            <h3 className="text-h3 font-semibold mb-3">專業團隊，值得信賴</h3>
            <p className="text-neutral-600">
              20+ 年經驗的專業顧問團隊，提供量身定制的財富規劃
            </p>
          </div>

          {/* 價值主張 3 */}
          <div className="card text-center">
            <div className="text-primary-500 text-5xl mb-4">⚙️</div>
            <h3 className="text-h3 font-semibold mb-3">靈活彈性，持續優化</h3>
            <p className="text-neutral-600">
              根據家族需求設計專屬方案，定期檢視持續優化
            </p>
          </div>
        </div>
      </section>

      {/* 服務流程 */}
      <section className="container-fluid section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-h2 font-bold text-neutral-900 mb-4">
            簡單四步驟，開始您的財富規劃
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '1', title: '免費諮詢', desc: '了解您的需求與目標' },
            { step: '2', title: '專業評估', desc: '多領域專家聯合分析' },
            { step: '3', title: '執行協調', desc: '整合會計、保險、不動產專家' },
            { step: '4', title: '持續優化', desc: '定期檢視與調整' },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                {item.step}
              </div>
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-neutral-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-fluid section-spacing bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl">
        <div className="text-center py-16">
          <h2 className="text-h2 font-bold mb-4">
            準備好優化您的財富管理了嗎？
          </h2>
          <p className="text-body-lg mb-8 opacity-90">
            讓我們幫您找到最適合的解決方案
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/assessment"
              className="bg-white text-primary-500 px-8 py-4 rounded-button font-semibold hover:bg-neutral-50 transition-colors"
            >
              開始免費評估
            </Link>
            <Link
              href="/consultation"
              className="border-2 border-white px-8 py-4 rounded-button font-semibold hover:bg-white/10 transition-colors"
            >
              預約諮詢
            </Link>
          </div>
        </div>
      </section>

      {/* Temporary Notice */}
      <section className="container-fluid py-8 text-center text-neutral-500 text-sm">
        <p>
          🚧 網站正在建設中 | 專案基礎架構已完成 | 核心功能開發進行中
        </p>
      </section>
    </div>
  )
}
