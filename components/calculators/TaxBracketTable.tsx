import { TAX_BRACKETS } from '@/lib/calculators/gift-tax.constants'
import { formatCurrency, formatPercentage } from '@/lib/utils/format'

export function TaxBracketTable() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#f1e2cf] p-8 md:p-12">
      <h2 className="text-2xl font-bold text-textMain mb-8 flex items-center gap-2">
        <span className="inline-block w-1 h-6 bg-primary rounded-full" aria-hidden="true"></span>
        六.稅率表及計算公式
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-[#f3e4d0]">
              <th className="py-6 text-lg font-bold text-[#0f172a]">課稅贈與淨額(元)</th>
              <th className="py-6 text-lg font-bold text-[#0f172a] text-center">稅率%</th>
              <th className="py-6 text-lg font-bold text-[#0f172a] text-right">累進差額(元)</th>
            </tr>
          </thead>
          <tbody>
            {TAX_BRACKETS.map((bracket, index) => {
              const rangeLabel =
                bracket.maxAmount === null
                  ? `${formatCurrency(bracket.minAmount)}以上`
                  : index === 0
                    ? `${formatCurrency(bracket.maxAmount)}以下`
                    : `${formatCurrency(bracket.minAmount)}-${formatCurrency(bracket.maxAmount)}`

              return (
                <tr key={rangeLabel} className="border-b border-[#f3e4d0] last:border-b-0">
                  <td className="py-7 text-lg font-semibold text-[#111827]">{rangeLabel}</td>
                  <td className="py-7 text-lg text-center font-semibold text-[#111827]">{formatPercentage(bracket.rate).replace('%', '')}</td>
                  <td className="py-7 text-lg text-right font-semibold text-[#111827]">{formatCurrency(bracket.progressiveDifference)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
