/**
 * QuestionCard 組件
 * 顯示單一問題及其選項
 */

'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import type { Question } from '../types'
import { OptionButton } from './OptionButton'

interface QuestionCardProps {
  question: Question
  selectedOptionIds: string[]
  onSelectOption: (optionIds: string[]) => void
}

export function QuestionCard({
  question,
  selectedOptionIds,
  onSelectOption
}: QuestionCardProps) {
  const handleOptionClick = (optionId: string) => {
    if (question.type === 'single') {
      // 單選：直接替換
      onSelectOption([optionId])
    } else {
      // 多選：切換選中狀態
      const newSelection = selectedOptionIds.includes(optionId)
        ? selectedOptionIds.filter((id) => id !== optionId)
        : [...selectedOptionIds, optionId]

      onSelectOption(newSelection)
    }
  }

  return (
    <Card variant="elevated" padding="lg" hover={false}>
      <CardHeader>
        <div className="flex items-start justify-between mb-3">
          <div className="flex gap-2">
            <Badge variant="primary" size="md">
              {question.type === 'multiple' ? '多選題' : '單選題'}
            </Badge>

            {question.isOptional && (
              <Badge variant="default" size="sm">
                可跳過
              </Badge>
            )}
          </div>

          <div className="text-sm text-neutral-500">
            {question.sectionTitle}
          </div>
        </div>

        <CardTitle className="text-2xl mb-3">{question.text}</CardTitle>

        {question.description && (
          <CardDescription className="text-base">
            {question.description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="space-y-3 mt-6">
        <div
          role={question.type === 'single' ? 'radiogroup' : 'group'}
          aria-required={!question.isOptional}
          aria-label={question.text}
        >
          {question.options.map((option) => (
            <div key={option.id} className="mb-3 last:mb-0">
              <OptionButton
                option={option}
                isSelected={selectedOptionIds.includes(option.id)}
                isMultiple={question.type === 'multiple'}
                onClick={() => handleOptionClick(option.id)}
              />
            </div>
          ))}
        </div>

        {/* 多選題提示 */}
        {question.type === 'multiple' && (
          <div className="mt-4 text-sm text-neutral-500 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                clipRule="evenodd"
              />
            </svg>
            可複選，請勾選所有適用選項
          </div>
        )}
      </CardContent>
    </Card>
  )
}
