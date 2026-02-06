/**
 * Gift Tax Calculator Main Component
 * 贈與稅計算機主組件
 */

'use client'

import { useState, useMemo, useCallback } from 'react'
import { GiftTaxForm } from './GiftTaxForm'
import { GiftTaxSidebar } from './GiftTaxSidebar'
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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Form Section */}
      <div className="lg:col-span-7 xl:col-span-8 transition-all duration-500 ease-in-out">
        <GiftTaxForm
          giftAmount={giftAmount}
          onAmountChange={handleAmountChange}
          error={validationError}
        />
      </div>

      {/* Right Column: Sticky Sidebar (Result + Table) */}
      <div className="lg:col-span-5 xl:col-span-4 transition-all duration-500 ease-in-out">
        <div className="sticky top-8">
          <GiftTaxSidebar result={result} />
        </div>
      </div>
    </div>
  )
}
