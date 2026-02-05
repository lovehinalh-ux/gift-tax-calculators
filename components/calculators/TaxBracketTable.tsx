/**
 * Tax Bracket Table Component
 * 稅率級距表組件
 */

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { TAX_BRACKETS } from '@/lib/calculators/gift-tax.constants'
import { formatCurrency, formatPercentage } from '@/lib/utils/format'

/**
 * Display tax bracket reference table
 * 顯示稅率級距參考表
 */
export function TaxBracketTable() {
  return (
    <Card variant="bordered">
      <CardHeader>
        <CardTitle>贈與稅稅率表（114年1月1日起適用）</CardTitle>
        <p className="text-sm text-neutral-600 mt-2">
          累進稅率說明：應納稅額 = (應稅淨額 × 稅率) - 累進差額
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-neutral-50 border-b-2 border-neutral-200">
                <th className="text-left py-3 px-4 font-semibold text-neutral-700">
                  贈與淨額（元）
                </th>
                <th className="text-center py-3 px-4 font-semibold text-neutral-700">
                  稅率
                </th>
                <th className="text-right py-3 px-4 font-semibold text-neutral-700">
                  累進差額（元）
                </th>
              </tr>
            </thead>
            <tbody>
              {TAX_BRACKETS.map((bracket, index) => (
                <tr
                  key={index}
                  className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors"
                >
                  <td className="py-3 px-4 text-neutral-800">
                    {bracket.maxAmount === null ? (
                      <>
                        {formatCurrency(bracket.minAmount)} <span className="text-neutral-500">以上</span>
                      </>
                    ) : index === 0 ? (
                      <>
                        {formatCurrency(bracket.maxAmount)} <span className="text-neutral-500">以下</span>
                      </>
                    ) : (
                      <>
                        {formatCurrency(bracket.minAmount)} - {formatCurrency(bracket.maxAmount)}
                      </>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center font-semibold text-primary-600">
                    {formatPercentage(bracket.rate, 0)}
                  </td>
                  <td className="py-3 px-4 text-right text-neutral-800">
                    {formatCurrency(bracket.progressiveDifference)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            <span className="font-semibold">💡 說明：</span>
            免稅額為 2,440,000 元，超過免稅額的部分才需要課徵贈與稅。
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
