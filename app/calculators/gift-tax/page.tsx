/**
 * Gift Tax Calculator Page
 * 贈與稅計算機頁面
 */

import type { Metadata } from 'next'
import { GiftTaxCalculator } from '@/components/calculators/GiftTaxCalculator'

export const metadata: Metadata = {
  title: '贈與稅計算機 | Gift Tax Calculator - 家族辦公室',
  description:
    '台灣贈與稅試算工具，依據 114 年最新稅率計算。輸入贈與金額，立即計算應繳納的贈與稅額。',
  keywords:
    '贈與稅,贈與稅計算,贈與稅試算,稅務規劃,財富傳承,gift tax,gift tax calculator,Taiwan tax',
  openGraph: {
    title: '贈與稅計算機 | Gift Tax Calculator',
    description: '台灣贈與稅試算工具，依據 114 年最新稅率計算',
    type: 'website',
  },
}

export default function GiftTaxPage() {
  return (
    <main className="min-h-screen bg-neutral-50 py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <GiftTaxCalculator />

        <footer className="mt-12 text-center text-sm text-neutral-500">
          <p>
            此計算機提供的結果僅供參考，實際應納稅額請以財政部國稅局核定為準。
          </p>
          <p className="mt-2">
            資料來源：財政部賦稅署（114 年 1 月 1 日起適用稅率）
          </p>
        </footer>
      </div>
    </main>
  )
}
