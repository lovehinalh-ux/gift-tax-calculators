'use client'

import { GiftTaxResultDisplay } from './GiftTaxResult'
import { TaxBracketTable } from './TaxBracketTable'
import type { GiftTaxResult } from '@/lib/calculators/gift-tax.types'

interface GiftTaxSidebarProps {
    result: GiftTaxResult | null
}

export function GiftTaxSidebar({ result }: GiftTaxSidebarProps) {
    return (
        <div className="space-y-6 sticky top-8">
            {result && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <GiftTaxResultDisplay result={result} />
                </div>
            )}

            <TaxBracketTable />
        </div>
    )
}
