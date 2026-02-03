/**
 * ProgressIndicator 組件
 * 問卷進度指示器（使用現有 ProgressBar 組件）
 */

'use client'

import { ProgressBar } from '@/components/ui/ProgressBar'
import { Badge } from '@/components/ui/Badge'

interface ProgressIndicatorProps {
  currentSection: string
  currentQuestionNumber: number
  totalQuestions: number
  answeredCount: number
}

export function ProgressIndicator({
  currentSection,
  currentQuestionNumber,
  totalQuestions,
  answeredCount
}: ProgressIndicatorProps) {
  const progress = (answeredCount / totalQuestions) * 100
  const estimatedMinutes = Math.ceil((totalQuestions - answeredCount) * 0.4)

  return (
    <div className="mb-8">
      {/* 區域標籤與題數 */}
      <div className="flex items-center justify-between mb-3">
        <Badge variant="primary" size="md">
          {currentSection}
        </Badge>
        <span className="text-sm text-neutral-600">
          第 {currentQuestionNumber} 題 / 共 {totalQuestions} 題
        </span>
      </div>

      {/* 進度條 */}
      <ProgressBar value={progress} size="lg" variant="default" animated />

      {/* 預估時間 */}
      <div className="mt-2 text-xs text-neutral-500 text-center">
        {answeredCount > 0 && answeredCount < totalQuestions && (
          <>預計剩餘 {estimatedMinutes} 分鐘</>
        )}
        {answeredCount === 0 && <>預計需時 {Math.ceil(totalQuestions * 0.4)} 分鐘</>}
        {answeredCount === totalQuestions && <>已完成所有問題</>}
      </div>
    </div>
  )
}
