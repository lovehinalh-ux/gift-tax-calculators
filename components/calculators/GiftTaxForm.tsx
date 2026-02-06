'use client'

interface GiftTaxFormProps {
  inputWan: string
  onInputChange: (value: string) => void
  onQuickPick: (value: string) => void
  error?: string
}

export function GiftTaxForm({ inputWan, onInputChange, onQuickPick, error }: GiftTaxFormProps) {
  const quickOptions = [
    { label: '3055萬', value: '3055' },
    { label: '5865萬', value: '5865' },
    { label: '清除', value: '' },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>

      <h2 className="text-[22px] font-bold text-textMain mb-6 flex items-center gap-2">
        <span className="bg-orange-50 p-2 rounded text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
        </span>
        資產與扣除額設定
      </h2>

      <div className="space-y-6">
        <section>
          <h3 className="text-base font-bold text-textMain mb-2">本次贈與金額（萬元）</h3>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              value={inputWan}
              onChange={(e) => onInputChange(e.target.value)}
              placeholder="請輸入本次贈與金額"
              className={`w-full rounded-lg border bg-white py-3 pl-4 pr-20 text-xl text-textMain placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all ${error ? 'border-red-500' : 'border-cardBorder'}`}
              aria-label="本次贈與金額（萬元）"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-textSub font-medium">萬元</span>
          </div>
          {error ? (
            <p className="text-base text-red-500 mt-2">{error}</p>
          ) : (
            <p className="text-sm text-gray-500 mt-2">超過免稅額 244 萬元才開始課稅</p>
          )}
        </section>

        <section>
          <div className="flex flex-wrap gap-2 mt-2">
            {quickOptions.map((option) => (
              <button
                key={option.label}
                onClick={() => onQuickPick(option.value)}
                className={`px-3 py-1.5 text-base rounded-md transition-colors border ${option.label === '清除'
                  ? 'bg-gray-100 text-red-500 hover:bg-gray-200 border-gray-200 font-medium'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200'
                  }`}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
