/**
 * NavigationControls 組件
 * 問卷導航控制（上一步 / 下一步）
 */

'use client'

import { Button } from '@/components/ui/Button'

interface NavigationControlsProps {
  onBack: () => void
  onNext: () => void
  canGoBack: boolean
  canGoNext: boolean
  isLastStep: boolean
}

export function NavigationControls({
  onBack,
  onNext,
  canGoBack,
  canGoNext,
  isLastStep
}: NavigationControlsProps) {
  return (
    <div className="mt-8 flex items-center justify-between gap-4">
      {/* 上一步按鈕 */}
      <Button
        variant="outline"
        size="lg"
        onClick={onBack}
        disabled={!canGoBack}
        className="min-w-[120px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
            clipRule="evenodd"
          />
        </svg>
        上一題
      </Button>

      {/* 下一步 / 完成按鈕 */}
      <Button
        variant="primary"
        size="lg"
        onClick={onNext}
        disabled={!canGoNext}
        className="min-w-[120px]"
      >
        {isLastStep ? '查看結果' : '下一題'}
        {!isLastStep && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </Button>
    </div>
  )
}
