import type { TaxBracket } from './gift-tax.types'

export const TAX_FREE_AMOUNT = 2_440_000

export const TAX_BRACKETS: TaxBracket[] = [
  {
    minAmount: 0,
    maxAmount: 28_110_000,
    rate: 0.1,
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
    maxAmount: null,
    rate: 0.2,
    progressiveDifference: 4_216_000,
  },
]
