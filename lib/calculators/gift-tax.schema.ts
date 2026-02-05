/**
 * Gift Tax Validation Schema
 * 贈與稅驗證模式
 */

import { z } from 'zod'

/**
 * Validation schema for gift tax input
 * 贈與稅輸入驗證模式
 */
export const giftTaxInputSchema = z.object({
  giftAmount: z
    .number({
      message: '請輸入有效的數字',
    })
    .int({ message: '金額必須為整數' })
    .min(0, { message: '金額不能為負數' })
    .max(100_000_000_000, { message: '金額超出計算範圍（最大值：1,000億元）' }),
})

/**
 * Type inference from schema
 * 從模式推斷的類型
 */
export type GiftTaxInputSchema = z.infer<typeof giftTaxInputSchema>
