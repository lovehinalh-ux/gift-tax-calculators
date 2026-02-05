/**
 * Gift Tax Constants
 * 贈與稅常數定義
 *
 * Based on Taiwan tax law effective from January 1, 2025 (114年1月1日)
 */

import type { TaxBracket } from './gift-tax.types'

/**
 * Tax-free amount for gift tax (免稅額)
 * 114年適用：244萬元
 */
export const TAX_FREE_AMOUNT = 2_440_000

/**
 * Progressive tax brackets for gift tax
 * 累進稅率級距表
 *
 * Formula: Tax = (Taxable Net Amount × Rate) - Progressive Difference
 * 公式：應納稅額 = (應稅淨額 × 稅率) - 累進差額
 */
export const TAX_BRACKETS: readonly TaxBracket[] = [
  {
    minAmount: 0,
    maxAmount: 28_110_000,
    rate: 0.10,
    progressiveDifference: 0,
  },
  {
    minAmount: 28_110_001,
    maxAmount: 56_210_000,
    rate: 0.15,
    progressiveDifference: 1_405_500,
  },
  {
    minAmount: 56_210_001,
    maxAmount: null, // No upper limit
    rate: 0.20,
    progressiveDifference: 4_216_000,
  },
] as const
