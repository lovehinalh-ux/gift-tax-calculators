/**
 * Gift Tax Calculation Logic
 * 贈與稅計算邏輯
 *
 * Based on Taiwan tax law effective from January 1, 2025 (114年1月1日)
 */

import type { GiftTaxInput, GiftTaxResult, TaxBracket } from './gift-tax.types'
import { TAX_FREE_AMOUNT, TAX_BRACKETS } from './gift-tax.constants'

/**
 * Find the applicable tax bracket for a given taxable amount
 * 根據應稅金額找到適用的稅率級距
 *
 * @param taxableAmount - The taxable net amount after deducting tax-free amount
 * @returns The applicable tax bracket, or null if no tax applies
 *
 * @example
 * findApplicableBracket(10_000_000) // Returns 10% bracket
 * findApplicableBracket(30_000_000) // Returns 15% bracket
 * findApplicableBracket(0) // Returns null
 */
export function findApplicableBracket(taxableAmount: number): TaxBracket | null {
  if (taxableAmount <= 0) {
    return null
  }

  return (
    TAX_BRACKETS.find((bracket) => {
      const aboveMin = taxableAmount >= bracket.minAmount
      const belowMax = bracket.maxAmount === null || taxableAmount <= bracket.maxAmount
      return aboveMin && belowMax
    }) ?? null
  )
}

/**
 * Calculate gift tax based on gift amount
 * 根據贈與金額計算贈與稅
 *
 * Formula: Tax = (Taxable Net Amount × Rate) - Progressive Difference
 * 公式：應納稅額 = (應稅淨額 × 稅率) - 累進差額
 *
 * @param input - Gift tax input containing the gift amount
 * @returns Detailed calculation result
 *
 * @example
 * // Gift of 10 million TWD
 * calculateGiftTax({ giftAmount: 10_000_000 })
 * // Returns: finalTax = 756,000 TWD
 *
 * @example
 * // Gift below tax-free amount
 * calculateGiftTax({ giftAmount: 2_000_000 })
 * // Returns: finalTax = 0 TWD
 */
export function calculateGiftTax(input: GiftTaxInput): GiftTaxResult {
  const { giftAmount } = input

  // Calculate taxable net amount (應稅淨額)
  const taxableNetAmount = Math.max(0, giftAmount - TAX_FREE_AMOUNT)

  // Find applicable tax bracket
  const applicableBracket = findApplicableBracket(taxableNetAmount)

  // If no bracket applies (amount below tax-free threshold)
  if (applicableBracket === null) {
    return {
      giftAmount,
      taxFreeAmount: TAX_FREE_AMOUNT,
      taxableNetAmount: 0,
      applicableBracket: null,
      taxBeforeDeduction: 0,
      progressiveDifference: 0,
      finalTax: 0,
      effectiveRate: 0,
    }
  }

  // Calculate tax before progressive difference deduction
  const taxBeforeDeduction = taxableNetAmount * applicableBracket.rate

  // Calculate final tax after progressive difference
  const finalTax = Math.max(0, taxBeforeDeduction - applicableBracket.progressiveDifference)

  // Calculate effective tax rate
  const effectiveRate = giftAmount > 0 ? finalTax / giftAmount : 0

  return {
    giftAmount,
    taxFreeAmount: TAX_FREE_AMOUNT,
    taxableNetAmount,
    applicableBracket,
    taxBeforeDeduction,
    progressiveDifference: applicableBracket.progressiveDifference,
    finalTax,
    effectiveRate,
  }
}
