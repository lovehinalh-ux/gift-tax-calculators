/**
 * Gift Tax Result Component
 * 贈與稅計算結果組件
 */

'use client'

import React from 'react'
import type { GiftTaxResult } from '@/lib/calculators/gift-tax.types'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { formatCurrency, formatPercentage } from '@/lib/utils/format'

interface GiftTaxResultProps {
  readonly result: GiftTaxResult
}

/**
 * Display detailed calculation results with breakdown
 * 顯示詳細的計算結果與明細
 */
export function GiftTaxResultDisplay({ result }: GiftTaxResultProps) {
  const {
    giftAmount,
    taxFreeAmount,
    taxableNetAmount,
    applicableBracket,
    finalTax,
    effectiveRate,
  } = result

  const ratePercent = applicableBracket ? formatPercentage(applicableBracket.rate, 0) : '-'

  return (
    <Card className="w-full border-border bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <CardHeader className="bg-primary/5 border-b border-primary/10 pb-4">
        <CardTitle className="text-lg font-bold text-primary flex items-center gap-2">
          <span>📊</span> 試算結果
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <div className="divide-y divide-border/50">
          <ResultRow label="贈與總額" value={giftAmount} />
          <ResultRow label="免稅額" value={taxFreeAmount} isDeduction />
          <ResultRow label="應稅淨額" value={taxableNetAmount} isHighlight />

          <div className="p-6 bg-primary/5 flex flex-col items-center justify-center gap-2">
            <span className="text-primary/80 font-medium text-sm">預估應納贈與稅</span>
            <span className="text-4xl font-bold text-primary tracking-tight font-mono">
              ${formatCurrency(finalTax)}
            </span>
            {applicableBracket && (
              <div className="mt-2 text-xs font-medium px-3 py-1 bg-white rounded-full border border-primary/20 text-primary">
                適用稅率 {ratePercent} | 實質稅率 {formatPercentage(effectiveRate, 2)}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ResultRow({ label, value, isDeduction = false, isHighlight = false }: { label: string, value: number, isDeduction?: boolean, isHighlight?: boolean }) {
  return (
    <div className={`flex justify-between items-center p-4 ${isHighlight ? 'bg-secondary/5' : ''}`}>
      <span className={`text-sm font-medium ${isHighlight ? 'text-secondary font-bold' : 'text-secondary/70'}`}>
        {label}
      </span>
      <span className={`font-mono text-base ${isDeduction ? 'text-green-600' : 'text-secondary'} ${isHighlight ? 'font-bold' : ''}`}>
        {isDeduction ? '-' : ''}${formatCurrency(value)}
      </span>
    </div>
  )
}
