'use client'

import { useMemo, useState } from 'react'
import { calculateGiftTax } from '@/lib/calculators/gift-tax'
import { parseWanInput } from '@/lib/utils/format'
import { GiftTaxForm } from './GiftTaxForm'
import { GiftTaxSidebar } from './GiftTaxSidebar'
import { TaxBracketTable } from './TaxBracketTable'

export function GiftTaxCalculator() {
  const [inputWan, setInputWan] = useState('')
  const [isUpdating, setIsUpdating] = useState(false)

  const parsedWan = useMemo(() => parseWanInput(inputWan), [inputWan])

  const error = useMemo(() => {
    if (inputWan.trim().length === 0) {
      return undefined
    }
    return parsedWan === null ? '請輸入有效的萬元金額（不可為負數）' : undefined
  }, [inputWan, parsedWan])

  const result = useMemo(() => {
    if (parsedWan === null) {
      return null
    }
    const giftAmount = Math.floor(parsedWan * 10000)
    return calculateGiftTax({ giftAmount })
  }, [parsedWan])

  const handleChange = (value: string) => {
    setInputWan(value)
    setIsUpdating(true)
    window.setTimeout(() => setIsUpdating(false), 280)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-8 space-y-6">
        <GiftTaxForm
          inputWan={inputWan}
          onInputChange={handleChange}
          onQuickPick={handleChange}
          error={error}
        />
        <TaxBracketTable />
      </div>

      <div className="lg:col-span-4">
        <GiftTaxSidebar result={result} isUpdating={isUpdating} />
      </div>
    </div>
  )
}
