export interface TaxBracket {
  minAmount: number
  maxAmount: number | null
  rate: number
  progressiveDifference: number
}

export interface GiftTaxInput {
  giftAmount: number
}

export interface GiftTaxResult {
  giftAmount: number
  taxFreeAmount: number
  taxableNetAmount: number
  appliedRate: number
  progressiveDifference: number
  finalTax: number
  effectiveRate: number
}
