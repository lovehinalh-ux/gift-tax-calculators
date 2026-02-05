/**
 * Gift Tax Input Component
 * 贈與稅輸入組件
 */

'use client'

import { useState, useCallback } from 'react'
import { Input } from '@/components/ui/Input'
import { formatCurrency, parseCurrencyInput } from '@/lib/utils/format'

interface GiftTaxInputProps {
  readonly value: number
  readonly onChange: (value: number) => void
  readonly error?: string
}

/**
 * Input field for gift amount with currency formatting
 * 贈與金額輸入欄位（含貨幣格式化）
 */
export function GiftTaxInput({ value, onChange, error }: GiftTaxInputProps) {
  const [displayValue, setDisplayValue] = useState(value > 0 ? formatCurrency(value) : '')

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value

      // Allow only numbers and commas
      const cleaned = rawValue.replace(/[^\d,]/g, '')

      const numericValue = parseCurrencyInput(cleaned)
      setDisplayValue(cleaned)
      onChange(numericValue)
    },
    [onChange]
  )

  const handleBlur = useCallback(() => {
    if (value > 0) {
      setDisplayValue(formatCurrency(value))
    } else {
      setDisplayValue('')
    }
  }, [value])

  const handleFocus = useCallback(() => {
    if (value === 0) {
      setDisplayValue('')
    }
  }, [value])

  return (
    <Input
      label="贈與總額 (TWD)"
      placeholder="請輸入贈與金額，例如：10,000,000"
      value={displayValue}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      error={error}
      inputMode="numeric"
      helperText="輸入完整的贈與金額，系統將自動計算應繳納的贈與稅"
    />
  )
}
