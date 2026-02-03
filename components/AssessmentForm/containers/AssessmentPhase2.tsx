/**
 * AssessmentPhase2 容器組件
 * 整合問卷第二階段（9題）的所有子組件
 */

'use client'

import { useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useAssessmentStore } from '@/lib/stores/useAssessmentStore'
import { questionsPhase2 } from '../constants/questionsPhase2'
import { questionsPhase1 } from '../constants/questionsPhase1'
import { calculateRecommendation } from '../utils/scoring'
import { ProgressIndicator } from '../components/ProgressIndicator'
import { QuestionCard } from '../components/QuestionCard'
import { NavigationControls } from '../components/NavigationControls'

export function AssessmentPhase2() {
  const router = useRouter()
  const {
    currentQuestionIndex,
    phase1Answers,
    phase2Answers,
    setAnswer,
    nextQuestion,
    previousQuestion,
    completeAssessment
  } = useAssessmentStore()

  // 當前問題
  const currentQuestion = questionsPhase2[currentQuestionIndex]

  // 計算進度
  const answeredCount = Object.keys(phase2Answers).length
  const totalQuestions = questionsPhase2.length

  // 檢查當前問題是否已回答
  const currentAnswer = phase2Answers[currentQuestion.id] || []
  const canProceed = currentQuestion.isOptional || currentAnswer.length > 0
  const canGoBack = currentQuestionIndex > 0
  const isLastStep = currentQuestionIndex === totalQuestions - 1

  // 處理選項選擇
  const handleSelectOption = useCallback(
    (optionIds: string[]) => {
      setAnswer(currentQuestion.id, optionIds)
    },
    [currentQuestion.id, setAnswer]
  )

  // 處理下一題
  const handleNext = useCallback(() => {
    if (!canProceed) return

    if (isLastStep) {
      // 完成第二階段，合併 Phase 1 + Phase 2 答案計算最終結果
      const allAnswers = { ...phase1Answers, ...phase2Answers, [currentQuestion.id]: currentAnswer }
      const allQuestions = [...questionsPhase1, ...questionsPhase2]
      const result = calculateRecommendation(allAnswers, allQuestions)

      completeAssessment(result)
      router.push('/assessment/result')
    } else {
      // 進入下一題
      nextQuestion()
    }
  }, [
    canProceed,
    isLastStep,
    phase1Answers,
    phase2Answers,
    currentQuestion.id,
    currentAnswer,
    completeAssessment,
    nextQuestion,
    router
  ])

  // 處理上一題
  const handleBack = useCallback(() => {
    if (canGoBack) {
      previousQuestion()
    }
  }, [canGoBack, previousQuestion])

  // 動畫變體
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto max-w-4xl px-4">
        {/* 進度指示器 */}
        <ProgressIndicator
          currentSection={currentQuestion.sectionTitle}
          currentQuestionNumber={12 + currentQuestionIndex + 1}
          totalQuestions={21}
          answeredCount={12 + answeredCount}
        />

        {/* 問題卡片（帶動畫轉場） */}
        <AnimatePresence mode="wait" custom={1}>
          <motion.div
            key={currentQuestion.id}
            custom={1}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <QuestionCard
              question={currentQuestion}
              selectedOptionIds={currentAnswer}
              onSelectOption={handleSelectOption}
            />
          </motion.div>
        </AnimatePresence>

        {/* 導航控制 */}
        <NavigationControls
          onBack={handleBack}
          onNext={handleNext}
          canGoBack={canGoBack}
          canGoNext={canProceed}
          isLastStep={isLastStep}
        />
      </div>
    </div>
  )
}
