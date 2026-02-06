'use client'

import type { GiftTaxResult } from '@/lib/calculators/gift-tax.types'
import { GiftTaxResultDisplay } from './GiftTaxResult'

interface GiftTaxSidebarProps {
  result: GiftTaxResult | null
  isUpdating: boolean
}

export function GiftTaxSidebar({ result, isUpdating }: GiftTaxSidebarProps) {
  return (
    <div className="lg:sticky lg:top-6">
      <div className="bg-white rounded-xl shadow-lg border border-primary/20 p-6 md:p-8 summary-panel">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 pb-2 border-b border-gray-100">
          即時計算摘要
        </h3>
        {result ? (
          <GiftTaxResultDisplay result={result} isUpdating={isUpdating} />
        ) : (
          <div className="text-center py-10 text-gray-400 text-base">
            請輸入本次贈與金額以查看結果
          </div>
        )}
      </div>
    </div>
  )
}
