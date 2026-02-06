import { TAX_BRACKETS, TAX_FREE_AMOUNT } from './gift-tax.constants'
import type { GiftTaxInput, GiftTaxResult, TaxBracket } from './gift-tax.types'

export function findApplicableBracket(taxableAmount: number): TaxBracket {
  return (
    TAX_BRACKETS.find((bracket) => {
      const withinLowerBound = taxableAmount >= bracket.minAmount
      const withinUpperBound = bracket.maxAmount === null || taxableAmount <= bracket.maxAmount
      return withinLowerBound && withinUpperBound
    }) ?? TAX_BRACKETS[0]
  )
}

export function calculateGiftTax(input: GiftTaxInput): GiftTaxResult {
  const taxableNetAmount = Math.max(0, input.giftAmount - TAX_FREE_AMOUNT)
  const applicableBracket = findApplicableBracket(taxableNetAmount)

  const rawTax = taxableNetAmount * applicableBracket.rate - applicableBracket.progressiveDifference
  const finalTax = Math.max(0, Math.floor(rawTax))

  return {
    giftAmount: input.giftAmount,
    taxFreeAmount: TAX_FREE_AMOUNT,
    taxableNetAmount,
    appliedRate: applicableBracket.rate,
    progressiveDifference: applicableBracket.progressiveDifference,
    finalTax,
    effectiveRate: input.giftAmount > 0 ? finalTax / input.giftAmount : 0,
  }
}
