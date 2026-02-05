/**
 * Gift Tax Calculation Tests
 * 贈與稅計算測試
 */

import { describe, it, expect } from 'vitest'
import { calculateGiftTax, findApplicableBracket } from '@/lib/calculators/gift-tax'
import { TAX_FREE_AMOUNT } from '@/lib/calculators/gift-tax.constants'

describe('findApplicableBracket', () => {
  it('should return null for zero taxable amount', () => {
    const result = findApplicableBracket(0)
    expect(result).toBeNull()
  })

  it('should return null for negative taxable amount', () => {
    const result = findApplicableBracket(-1000)
    expect(result).toBeNull()
  })

  it('should return first bracket (10%) for amounts up to 28,110,000', () => {
    const result1 = findApplicableBracket(1_000_000)
    expect(result1?.rate).toBe(0.10)
    expect(result1?.progressiveDifference).toBe(0)

    const result2 = findApplicableBracket(28_110_000)
    expect(result2?.rate).toBe(0.10)
  })

  it('should return second bracket (15%) for amounts 28,110,001 to 56,210,000', () => {
    const result1 = findApplicableBracket(28_110_001)
    expect(result1?.rate).toBe(0.15)
    expect(result1?.progressiveDifference).toBe(1_405_500)

    const result2 = findApplicableBracket(40_000_000)
    expect(result2?.rate).toBe(0.15)

    const result3 = findApplicableBracket(56_210_000)
    expect(result3?.rate).toBe(0.15)
  })

  it('should return third bracket (20%) for amounts above 56,210,000', () => {
    const result1 = findApplicableBracket(56_210_001)
    expect(result1?.rate).toBe(0.20)
    expect(result1?.progressiveDifference).toBe(4_216_000)

    const result2 = findApplicableBracket(100_000_000)
    expect(result2?.rate).toBe(0.20)
  })
})

describe('calculateGiftTax', () => {
  describe('Below tax-free threshold', () => {
    it('should return zero tax for amounts below tax-free threshold', () => {
      const result = calculateGiftTax({ giftAmount: 2_000_000 })
      expect(result.finalTax).toBe(0)
      expect(result.taxableNetAmount).toBe(0)
      expect(result.applicableBracket).toBeNull()
      expect(result.effectiveRate).toBe(0)
    })

    it('should return zero tax for amount exactly at tax-free threshold', () => {
      const result = calculateGiftTax({ giftAmount: TAX_FREE_AMOUNT })
      expect(result.finalTax).toBe(0)
      expect(result.taxableNetAmount).toBe(0)
    })
  })

  describe('First bracket (10%)', () => {
    it('should calculate correct tax for first bracket', () => {
      // Gift: 10,000,000
      // Taxable: 10,000,000 - 2,440,000 = 7,560,000
      // Tax: 7,560,000 * 10% - 0 = 756,000
      const result = calculateGiftTax({ giftAmount: 10_000_000 })

      expect(result.giftAmount).toBe(10_000_000)
      expect(result.taxFreeAmount).toBe(TAX_FREE_AMOUNT)
      expect(result.taxableNetAmount).toBe(7_560_000)
      expect(result.applicableBracket?.rate).toBe(0.10)
      expect(result.taxBeforeDeduction).toBe(756_000)
      expect(result.progressiveDifference).toBe(0)
      expect(result.finalTax).toBe(756_000)
      expect(result.effectiveRate).toBeCloseTo(0.0756, 4)
    })

    it('should calculate tax at upper boundary of first bracket', () => {
      // Taxable exactly at first bracket max (28,110,000 taxable)
      const giftAtFirstMax = TAX_FREE_AMOUNT + 28_110_000 // 30,550,000
      const result = calculateGiftTax({ giftAmount: giftAtFirstMax })

      expect(result.taxableNetAmount).toBe(28_110_000)
      expect(result.applicableBracket?.rate).toBe(0.10)
      expect(result.finalTax).toBe(2_811_000) // 28,110,000 * 10%
    })
  })

  describe('Second bracket (15%)', () => {
    it('should calculate correct tax for second bracket', () => {
      // Gift: 50,000,000
      // Taxable: 50,000,000 - 2,440,000 = 47,560,000
      // Tax: 47,560,000 * 15% - 1,405,500 = 5,728,500
      const result = calculateGiftTax({ giftAmount: 50_000_000 })

      expect(result.giftAmount).toBe(50_000_000)
      expect(result.taxableNetAmount).toBe(47_560_000)
      expect(result.applicableBracket?.rate).toBe(0.15)
      expect(result.taxBeforeDeduction).toBe(7_134_000)
      expect(result.progressiveDifference).toBe(1_405_500)
      expect(result.finalTax).toBe(5_728_500)
    })

    it('should calculate tax just above first bracket boundary', () => {
      // Just above first bracket (28,110,001 taxable)
      const giftAboveFirst = TAX_FREE_AMOUNT + 28_110_001 // 30,550,001
      const result = calculateGiftTax({ giftAmount: giftAboveFirst })

      expect(result.taxableNetAmount).toBe(28_110_001)
      expect(result.applicableBracket?.rate).toBe(0.15)
    })

    it('should calculate tax at upper boundary of second bracket', () => {
      // Taxable exactly at second bracket max (56,210,000 taxable)
      const giftAtSecondMax = TAX_FREE_AMOUNT + 56_210_000 // 58,650,000
      const result = calculateGiftTax({ giftAmount: giftAtSecondMax })

      expect(result.taxableNetAmount).toBe(56_210_000)
      expect(result.applicableBracket?.rate).toBe(0.15)
      expect(result.finalTax).toBe(7_026_000) // 56,210,000 * 15% - 1,405,500
    })
  })

  describe('Third bracket (20%)', () => {
    it('should calculate correct tax for third bracket', () => {
      // Gift: 100,000,000
      // Taxable: 100,000,000 - 2,440,000 = 97,560,000
      // Tax: 97,560,000 * 20% - 4,216,000 = 15,296,000
      const result = calculateGiftTax({ giftAmount: 100_000_000 })

      expect(result.giftAmount).toBe(100_000_000)
      expect(result.taxableNetAmount).toBe(97_560_000)
      expect(result.applicableBracket?.rate).toBe(0.20)
      expect(result.taxBeforeDeduction).toBe(19_512_000)
      expect(result.progressiveDifference).toBe(4_216_000)
      expect(result.finalTax).toBe(15_296_000)
    })

    it('should calculate tax just above second bracket boundary', () => {
      // Just above second bracket (56,210,001 taxable)
      const giftAboveSecond = TAX_FREE_AMOUNT + 56_210_001 // 58,650,001
      const result = calculateGiftTax({ giftAmount: giftAboveSecond })

      expect(result.taxableNetAmount).toBe(56_210_001)
      expect(result.applicableBracket?.rate).toBe(0.20)
    })
  })

  describe('Edge cases', () => {
    it('should handle zero gift amount', () => {
      const result = calculateGiftTax({ giftAmount: 0 })
      expect(result.finalTax).toBe(0)
      expect(result.effectiveRate).toBe(0)
    })

    it('should handle very large gift amounts', () => {
      const result = calculateGiftTax({ giftAmount: 1_000_000_000 })
      expect(result.finalTax).toBeGreaterThan(0)
      expect(result.applicableBracket?.rate).toBe(0.20)
    })

    it('should ensure tax is never negative', () => {
      // Edge case: if progressive difference is larger than tax before deduction
      // (should not happen with correct brackets, but testing the Math.max protection)
      const result = calculateGiftTax({ giftAmount: 100 })
      expect(result.finalTax).toBeGreaterThanOrEqual(0)
    })
  })

  describe('Effective rate calculation', () => {
    it('should calculate effective rate correctly', () => {
      const result = calculateGiftTax({ giftAmount: 10_000_000 })
      const expectedEffectiveRate = result.finalTax / result.giftAmount
      expect(result.effectiveRate).toBe(expectedEffectiveRate)
    })

    it('should have effective rate less than or equal to bracket rate', () => {
      // Due to tax-free amount and progressive difference, effective rate is always lower
      const result1 = calculateGiftTax({ giftAmount: 10_000_000 })
      expect(result1.effectiveRate).toBeLessThan(0.10)

      const result2 = calculateGiftTax({ giftAmount: 50_000_000 })
      expect(result2.effectiveRate).toBeLessThan(0.15)

      const result3 = calculateGiftTax({ giftAmount: 100_000_000 })
      expect(result3.effectiveRate).toBeLessThan(0.20)
    })
  })
})
