/**
 * Gift Tax Calculator Types
 * 贈與稅計算機類型定義
 */

/**
 * Tax bracket definition for progressive tax calculation
 * 稅率級距定義
 */
export interface TaxBracket {
  readonly minAmount: number
  readonly maxAmount: number | null
  readonly rate: number
  readonly progressiveDifference: number
}

/**
 * Input for gift tax calculation
 * 贈與稅計算輸入
 */
export interface GiftTaxInput {
  readonly giftAmount: number
}

/**
 * Result of gift tax calculation with detailed breakdown
 * 贈與稅計算結果（含詳細明細）
 */
export interface GiftTaxResult {
  readonly giftAmount: number
  readonly taxFreeAmount: number
  readonly taxableNetAmount: number
  readonly applicableBracket: TaxBracket | null
  readonly taxBeforeDeduction: number
  readonly progressiveDifference: number
  readonly finalTax: number
  readonly effectiveRate: number
}
