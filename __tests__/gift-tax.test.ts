import { describe, expect, it } from 'vitest'
import { calculateGiftTax } from '@/lib/calculators/gift-tax'

function calcFromWan(wan: number) {
  return calculateGiftTax({ giftAmount: Math.floor(wan * 10000) })
}

describe('gift tax calculation', () => {
  it('returns zero tax at 244 wan', () => {
    const result = calcFromWan(244)
    expect(result.finalTax).toBe(0)
    expect(result.taxableNetAmount).toBe(0)
  })

  it('stays in 10 percent bracket at 3055 wan', () => {
    const result = calcFromWan(3055)
    expect(result.taxableNetAmount).toBe(28_110_000)
    expect(result.appliedRate).toBe(0.1)
  })

  it('stays in 15 percent bracket at 5865 wan', () => {
    const result = calcFromWan(5865)
    expect(result.taxableNetAmount).toBe(56_210_000)
    expect(result.appliedRate).toBe(0.15)
  })

  it('moves to 20 percent bracket at 5865.0001 wan', () => {
    const result = calcFromWan(5865.0001)
    expect(result.taxableNetAmount).toBeGreaterThan(56_210_000)
    expect(result.appliedRate).toBe(0.2)
  })

  it('applies floor rounding for tax amount', () => {
    const result = calcFromWan(244.0001)
    expect(result.taxableNetAmount).toBe(1)
    expect(result.finalTax).toBe(0)
  })

  it('keeps effective rate at zero when gift amount is zero', () => {
    const result = calculateGiftTax({ giftAmount: 0 })
    expect(result.effectiveRate).toBe(0)
  })

  it('never produces negative tax', () => {
    const result = calcFromWan(10)
    expect(result.finalTax).toBeGreaterThanOrEqual(0)
  })
})
