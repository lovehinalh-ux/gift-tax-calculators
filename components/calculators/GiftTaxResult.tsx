'use client'

import type { GiftTaxResult } from '@/lib/calculators/gift-tax.types'
import { formatCurrency, formatPercentage } from '@/lib/utils/format'

interface GiftTaxResultProps {
  readonly result: GiftTaxResult
  readonly isUpdating: boolean
}

function Row({ label, value, isTax = false }: { label: string; value: string; isTax?: boolean }) {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="text-gray-600 text-base">▸ {label}</span>
      <span className={isTax ? 'text-primary font-bold text-lg' : 'text-textMain font-medium text-lg'}>{value}</span>
    </div>
  )
}

export function GiftTaxResultDisplay({ result, isUpdating }: GiftTaxResultProps) {
  return (
    <div className="space-y-4">
      <Row label="本次贈與總額" value={`$${formatCurrency(result.giftAmount)}`} />
      <div className="flex justify-between items-center py-1 text-[#10b981] font-medium">
        <span className="text-base">▸ 扣除免稅額</span>
        <span className="text-lg">-${formatCurrency(result.taxFreeAmount)}</span>
      </div>
      <Row label="課稅贈與淨額" value={`$${formatCurrency(result.taxableNetAmount)}`} />
      <Row label="適用稅率" value={formatPercentage(result.appliedRate)} />
      <Row label="累進差額" value={`$${formatCurrency(result.progressiveDifference)}`} />

      <div className={`bg-[#FAF5EF] -mx-6 md:-mx-8 px-6 md:px-8 py-4 mt-4 border-t border-b border-orange-100 tax-result ${isUpdating ? 'updating' : ''}`}>
        <div className="flex flex-col items-center justify-center text-[#d97706]">
          <span className="font-bold text-xl mb-1">本次應納贈與稅額</span>
          <span className="font-bold" style={{ fontSize: '2.125rem' }}>
            ${formatCurrency(result.finalTax)}
          </span>
        </div>
      </div>

      <div className="p-3 bg-gray-50 rounded text-sm text-gray-500 leading-relaxed">
        <span className="font-bold text-gray-600">提醒：</span>
        本試算採用「本次贈與」口徑，僅供規劃參考，實際仍以國稅局核定為準。
      </div>

    </div>
  )
}
