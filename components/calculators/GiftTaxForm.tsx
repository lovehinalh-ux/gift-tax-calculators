'use client'

import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { GiftTaxInput } from './GiftTaxInput'

interface GiftTaxFormProps {
    giftAmount: number
    onAmountChange: (value: number) => void
    error?: string
}

export function GiftTaxForm({ giftAmount, onAmountChange, error }: GiftTaxFormProps) {
    return (
        <Card className="h-full border-border bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-4 border-b border-border/50">
                <CardTitle className="text-xl font-bold text-secondary flex items-center gap-2">
                    <span>📝</span> 試算設定
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-8 p-6 md:p-8">
                <section>
                    <GiftTaxInput
                        label="年度贈與總額"
                        value={giftAmount === 0 ? '' : giftAmount}
                        onChange={(v) => onAmountChange(Number(v))}
                        error={error}
                        helperText="請輸入您本年度預計贈與的總金額"
                    />
                </section>

                <section className="bg-secondary/5 rounded-xl p-6 border border-secondary/10">
                    <h3 className="text-sm font-bold text-secondary mb-3 flex items-center gap-2">
                        💡 稅務知識小幫手
                    </h3>
                    <ul className="space-y-2 text-sm text-secondary/80">
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span>每人每年贈與免稅額為 <span className="font-bold text-secondary">244 萬元</span>。</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span>贈與淨額 2,500 萬元以下，稅率為 10%。</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span>這是一個快速試算工具，實際稅額以國稅局核定為準。</span>
                        </li>
                    </ul>
                </section>
            </CardContent>
        </Card>
    )
}
