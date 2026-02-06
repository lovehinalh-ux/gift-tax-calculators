import { GiftTaxCalculator } from '@/components/calculators/GiftTaxCalculator'

export default function GiftTaxPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">

      {/* Simple Modern Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
              G
            </div>
            <h1 className="text-xl font-bold text-secondary tracking-tight">
              贈與稅計算機
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-10">
        <GiftTaxCalculator />
      </main>

      <footer className="py-8 text-center text-muted text-sm border-t border-border mt-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p>&copy; 2025 Gift Tax Calculator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
