/**
 * AssessmentResult 容器組件
 * 顯示問卷評估結果
 */

'use client'

import { useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useAssessmentStore } from '@/lib/stores/useAssessmentStore'
import { questionsPhase1 } from '../constants/questionsPhase1'
import { calculateRecommendation } from '../utils/scoring'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

export function AssessmentResult() {
  const router = useRouter()
  const { phase1Answers, cachedResult, completeAssessment, resetAssessment } =
    useAssessmentStore()

  // 計算或使用緩存的結果
  const result = useMemo(() => {
    if (cachedResult) return cachedResult

    // 檢查是否已完成問卷
    if (Object.keys(phase1Answers).length === 0) {
      return null
    }

    // 計算結果
    const newResult = calculateRecommendation(phase1Answers, questionsPhase1)
    completeAssessment(newResult)
    return newResult
  }, [phase1Answers, cachedResult, completeAssessment])

  // 如果沒有結果，重定向到問卷首頁
  useEffect(() => {
    if (!result) {
      router.push('/assessment')
    }
  }, [result, router])

  if (!result) {
    return null
  }

  // 風險等級對應的樣式
  const riskLevelConfig = {
    high: {
      variant: 'danger' as const,
      label: '高風險',
      emoji: '🔴'
    },
    medium: {
      variant: 'warning' as const,
      label: '中風險',
      emoji: '🟡'
    },
    low: {
      variant: 'success' as const,
      label: '低風險',
      emoji: '🟢'
    }
  }

  const riskConfig = riskLevelConfig[result.riskLevel]

  // 服務類型對應的標題
  const serviceTypeLabels = {
    accounting: '會計稅務服務',
    insurance: '保險規劃服務',
    realEstate: '不動產管理服務',
    integrated: '整合財富管理服務'
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto max-w-4xl px-4">
        {/* 結果標題 */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-neutral-900 mb-3">
            評估結果
          </h1>
          <p className="text-lg text-neutral-600">
            感謝您完成問卷，以下是您的個人化評估報告
          </p>
        </div>

        {/* 用戶分類卡片 */}
        <Card variant="elevated" padding="lg" className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-3">
              <CardTitle className="text-2xl">{result.segmentTitle}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-700 text-lg">
              {result.segmentDescription}
            </p>
          </CardContent>
        </Card>

        {/* 風險等級與主要推薦服務 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* 風險等級 */}
          <Card variant="elevated" padding="lg">
            <CardHeader>
              <CardTitle className="text-xl mb-3">風險等級</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{riskConfig.emoji}</span>
                <Badge variant={riskConfig.variant} size="lg">
                  {riskConfig.label}
                </Badge>
              </div>
              <div className="space-y-2 text-sm text-neutral-600">
                <div className="flex justify-between">
                  <span>法律風險</span>
                  <span className="font-medium">
                    {result.serviceScores.accounting}分
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>稅務風險</span>
                  <span className="font-medium">
                    {result.serviceScores.insurance}分
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>傳承風險</span>
                  <span className="font-medium">
                    {result.serviceScores.realEstate}分
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 主要推薦服務 */}
          <Card variant="elevated" padding="lg">
            <CardHeader>
              <CardTitle className="text-xl mb-3">推薦服務</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Badge variant="primary" size="lg">
                  {serviceTypeLabels[result.primaryService]}
                </Badge>
              </div>
              <p className="text-neutral-700">
                根據您的回答，我們建議優先考慮
                {serviceTypeLabels[result.primaryService]}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 建議行動 */}
        <Card variant="elevated" padding="lg" className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">建議行動</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {result.recommendedActions.map((action, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-neutral-700"
                >
                  <span className="text-primary-500 font-bold">•</span>
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* 下一步驟 */}
        <Card variant="elevated" padding="lg" className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">下一步驟</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-6">
              {result.nextSteps.map((step, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-neutral-700"
                >
                  <span className="text-neutral-400 font-bold">
                    {index + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* CTA 行動呼籲 */}
        <Card variant="elevated" padding="lg" className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl mb-2">
              {result.ctaStrategy.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-700 mb-6">
              {result.ctaStrategy.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => router.push(result.ctaStrategy.buttonLink)}
                className="flex-1"
              >
                {result.ctaStrategy.buttonText}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  resetAssessment()
                  router.push('/assessment')
                }}
                className="flex-1"
              >
                重新評估
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 資產範圍（如果有） */}
        {result.assetRange && (
          <div className="text-center text-sm text-neutral-500">
            您的資產範圍：{result.assetRange}
          </div>
        )}
      </div>
    </div>
  )
}
