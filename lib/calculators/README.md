# Gift Tax Calculator (贈與稅計算機)

Taiwan gift tax calculator built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- ✅ **Accurate Calculations** - Based on Taiwan tax law (114年1月1日起適用)
- ✅ **Progressive Tax Rates** - Supports all three tax brackets (10%, 15%, 20%)
- ✅ **Real-time Validation** - Input validation with clear error messages
- ✅ **Currency Formatting** - Automatic thousand separators
- ✅ **Detailed Breakdown** - Shows complete calculation steps
- ✅ **Responsive Design** - Works on all device sizes
- ✅ **Type-Safe** - Full TypeScript coverage
- ✅ **Well-Tested** - 19 unit tests, 100% coverage on core logic

## Tax Rules

### Tax-Free Amount (免稅額)
- **2,440,000 TWD**

### Tax Brackets (稅率級距)

| Taxable Net Amount | Rate | Progressive Difference |
|-------------------|------|----------------------|
| ≤ 28,110,000 | 10% | 0 |
| 28,110,001 - 56,210,000 | 15% | 1,405,500 |
| > 56,210,000 | 20% | 4,216,000 |

### Formula

```
應納稅額 = (應稅淨額 × 稅率) - 累進差額
```

Where:
- **應稅淨額** = Gift Amount - Tax-Free Amount (2,440,000)

## Architecture

### Core Files

```
lib/calculators/
├── gift-tax.ts                 # Core calculation logic
├── gift-tax.types.ts           # TypeScript interfaces
├── gift-tax.constants.ts       # Tax brackets and constants
└── gift-tax.schema.ts          # Zod validation schema

components/calculators/
├── GiftTaxCalculator.tsx       # Main component
├── GiftTaxInput.tsx            # Input with formatting
├── GiftTaxResult.tsx           # Result display
└── TaxBracketTable.tsx         # Reference table

app/calculators/gift-tax/
└── page.tsx                    # Next.js page

__tests__/lib/calculators/
└── gift-tax.test.ts            # Unit tests
```

### Design Principles

1. **Immutability** - All functions are pure, no mutations
2. **Type Safety** - Strict TypeScript, no `any` types
3. **Separation of Concerns** - Business logic separate from UI
4. **Test-Driven Development** - Tests written first
5. **Accessibility** - ARIA labels, keyboard navigation

## Usage

### Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3000/calculators/gift-tax

### Run Tests

```bash
npm run test         # Watch mode
npm run test:run     # Single run
npm run test:ui      # UI mode
```

### Type Check

```bash
npm run type-check
```

## Examples

### Example 1: Below Tax-Free Amount

- **Gift Amount**: 2,000,000 TWD
- **Tax**: 0 TWD

### Example 2: First Bracket (10%)

- **Gift Amount**: 10,000,000 TWD
- **Taxable Net**: 7,560,000 TWD (10,000,000 - 2,440,000)
- **Tax**: 756,000 TWD (7,560,000 × 10% - 0)

### Example 3: Second Bracket (15%)

- **Gift Amount**: 50,000,000 TWD
- **Taxable Net**: 47,560,000 TWD
- **Tax**: 5,728,500 TWD (47,560,000 × 15% - 1,405,500)

### Example 4: Third Bracket (20%)

- **Gift Amount**: 100,000,000 TWD
- **Taxable Net**: 97,560,000 TWD
- **Tax**: 15,296,000 TWD (97,560,000 × 20% - 4,216,000)

## API Reference

### `calculateGiftTax(input: GiftTaxInput): GiftTaxResult`

Calculate gift tax for a given amount.

**Parameters:**
- `input.giftAmount` - Gift amount in TWD (integer)

**Returns:**
- `giftAmount` - Original gift amount
- `taxFreeAmount` - Tax-free threshold (2,440,000)
- `taxableNetAmount` - Amount subject to tax
- `applicableBracket` - Tax bracket applied
- `taxBeforeDeduction` - Tax before progressive difference
- `progressiveDifference` - Amount deducted from tax
- `finalTax` - Final tax amount
- `effectiveRate` - Actual tax rate (final tax / gift amount)

**Example:**

```typescript
import { calculateGiftTax } from '@/lib/calculators/gift-tax'

const result = calculateGiftTax({ giftAmount: 10_000_000 })
console.log(result.finalTax) // 756,000
```

### `findApplicableBracket(taxableAmount: number): TaxBracket | null`

Find the tax bracket for a given taxable amount.

**Parameters:**
- `taxableAmount` - Amount after deducting tax-free threshold

**Returns:**
- Tax bracket object or `null` if no tax applies

## Disclaimer

此計算機提供的結果僅供參考，實際應納稅額請以財政部國稅局核定為準。

The results provided by this calculator are for reference only. Actual tax amounts should be confirmed with the National Taxation Bureau of the Ministry of Finance.
