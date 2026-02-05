/**
 * Gift Tax Calculator Main Component
 * 贈與稅計算機主組件
 */

'use client'

import { useState, useMemo, useCallback } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { GiftTaxInput } from './GiftTaxInput'
import { GiftTaxResultDisplay } from './GiftTaxResult'
import { TaxBracketTable } from './TaxBracketTable'
import { calculateGiftTax } from '@/lib/calculators/gift-tax'
import { giftTaxInputSchema } from '@/lib/calculators/gift-tax.schema'

/**
 * Main gift tax calculator component
 * 主贈與稅計算機組件
 *
 * Orchestrates input, calculation, and result display
 * 統籌輸入、計算與結果顯示
 */
export function GiftTaxCalculator() {
  const [giftAmount, setGiftAmount] = useState(0)
  const [validationError, setValidationError] = useState<string | undefined>()

  const handleAmountChange = useCallback((value: number) => {
    setGiftAmount(value)

    const validation = giftTaxInputSchema.safeParse({ giftAmount: value })
    if (!validation.success) {
      const firstError = validation.error.issues[0]
      setValidationError(firstError?.message)
    } else {
      setValidationError(undefined)
    }
  }, [])

  const result = useMemo(() => {
    if (validationError || giftAmount <= 0) {
      return null
    }
    return calculateGiftTax({ giftAmount })
  }, [giftAmount, validationError])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">贈與稅計算機</CardTitle>
          <p className="text-neutral-600 mt-2">
            依據中華民國 114 年 1 月 1 日起適用之贈與稅率計算
          </p>
        </CardHeader>
        <CardContent>
          <GiftTaxInput value={giftAmount} onChange={handleAmountChange} error={validationError} />

          <div className="mt-6 p-4 bg-neutral-50 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-2">計算說明</h4>
            <ul className="text-sm text-neutral-600 space-y-1">
              <li>• 免稅額：2,440,000 元</li>
              <li>• 應稅淨額 = 贈與總額 - 免稅額</li>
              <li>• 應納稅額 = (應稅淨額 × 稅率) - 累進差額</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {result !== null && <GiftTaxResultDisplay result={result} />}

      <TaxBracketTable />
    </div>
  )
}
