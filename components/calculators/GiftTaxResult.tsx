/**
 * Gift Tax Result Component
 * 贈與稅計算結果組件
 */

'use client'

import type { GiftTaxResult } from '@/lib/calculators/gift-tax.types'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { formatCurrency, formatPercentage } from '@/lib/utils/format'

interface GiftTaxResultProps {
  readonly result: GiftTaxResult
}

interface ResultRowProps {
  readonly label: string
  readonly value: string | number
  readonly highlight?: boolean
  readonly large?: boolean
  readonly small?: boolean
  readonly formula?: boolean
}

function ResultRow({ label, value, highlight, large, small, formula }: ResultRowProps) {
  return (
    <div className="flex justify-between items-center py-2">
      <span
        className={`${small ? 'text-sm' : 'text-base'} ${
          highlight ? 'font-semibold text-neutral-900' : 'text-neutral-700'
        }`}
      >
        {label}
      </span>
      <span
        className={`${small ? 'text-sm' : large ? 'text-xl' : 'text-base'} ${
          highlight ? 'font-bold text-primary-600' : formula ? 'text-neutral-600 font-mono' : 'text-neutral-800'
        }`}
      >
        {value}
      </span>
    </div>
  )
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
    taxBeforeDeduction,
    progressiveDifference,
    finalTax,
    effectiveRate,
  } = result

  const ratePercent = applicableBracket ? formatPercentage(applicableBracket.rate, 0) : '-'

  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>計算結果</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <ResultRow label="贈與總額" value={`NT$ ${formatCurrency(giftAmount)}`} />
          <ResultRow label="免稅額" value={`- NT$ ${formatCurrency(taxFreeAmount)}`} />

          <hr className="my-3 border-neutral-200" />

          <ResultRow label="應稅淨額" value={`NT$ ${formatCurrency(taxableNetAmount)}`} highlight />

          {applicableBracket && (
            <>
              <ResultRow label="適用稅率" value={ratePercent} />

              <ResultRow
                label="稅額計算"
                value={`${formatCurrency(taxableNetAmount)} × ${ratePercent}`}
                formula
                small
              />

              <ResultRow label="稅額小計" value={`NT$ ${formatCurrency(taxBeforeDeduction)}`} small />

              <ResultRow
                label="累進差額"
                value={`- NT$ ${formatCurrency(progressiveDifference)}`}
                small
              />
            </>
          )}

          <hr className="my-3 border-neutral-200" />

          <div className="py-3 px-4 bg-primary-50 rounded-lg mt-4">
            <ResultRow label="應納贈與稅額" value={`NT$ ${formatCurrency(finalTax)}`} highlight large />
          </div>

          <ResultRow label="實質稅率" value={formatPercentage(effectiveRate, 2)} small />
        </div>

        {finalTax === 0 && (
          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-800">
              <span className="font-semibold">✓ </span>
              此贈與金額未超過免稅額，無需繳納贈與稅。
            </p>
          </div>
        )}

        {finalTax > 0 && (
          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-sm text-amber-800">
              <span className="font-semibold">ℹ️ 注意：</span>
              此計算結果僅供參考，實際應納稅額請以國稅局核定為準。
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
