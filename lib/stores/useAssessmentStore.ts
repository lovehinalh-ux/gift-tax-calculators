/**
 * 引導式問卷系統 - Zustand Store
 * 管理問卷狀態、答案追蹤、進度計算、localStorage 持久化
 */

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Answer, RecommendationResult } from '@/components/AssessmentForm/types'

interface AssessmentStore {
  // ========== 狀態 ==========
  currentPhase: 1 | 2 | 'result'
  currentQuestionIndex: number
  phase1Answers: Record<string, string[]> // questionId -> optionIds
  phase2Answers: Record<string, string[]>
  startedAt: number | null
  phase1CompletedAt: number | null
  completedAt: number | null
  cachedResult: RecommendationResult | null

  // ========== Actions ==========
  startAssessment: () => void
  setAnswer: (questionId: string, optionIds: string[]) => void
  nextQuestion: () => void
  previousQuestion: () => void
  completePhase1: () => void
  startPhase2: () => void
  completeAssessment: (result: RecommendationResult) => void
  resetAssessment: () => void

  // ========== Selectors ==========
  getProgress: () => number
  isQuestionAnswered: (questionId: string) => boolean
  canProceed: () => boolean
  getTotalQuestions: () => number
  getAnsweredCount: () => number
}

export const useAssessmentStore = create<AssessmentStore>()(
  persist(
    (set, get) => ({
      // ========== 初始狀態 ==========
      currentPhase: 1,
      currentQuestionIndex: 0,
      phase1Answers: {},
      phase2Answers: {},
      startedAt: null,
      phase1CompletedAt: null,
      completedAt: null,
      cachedResult: null,

      // ========== Actions ==========
      startAssessment: () =>
        set({
          startedAt: Date.now(),
          currentPhase: 1,
          currentQuestionIndex: 0,
          phase1Answers: {},
          phase2Answers: {},
          phase1CompletedAt: null,
          completedAt: null,
          cachedResult: null
        }),

      setAnswer: (questionId, optionIds) => {
        const { currentPhase } = get()
        const answersKey = currentPhase === 1 ? 'phase1Answers' : 'phase2Answers'

        set((state) => ({
          [answersKey]: {
            ...state[answersKey],
            [questionId]: optionIds
          }
        }))
      },

      nextQuestion: () =>
        set((state) => ({
          currentQuestionIndex: state.currentQuestionIndex + 1
        })),

      previousQuestion: () =>
        set((state) => ({
          currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1)
        })),

      completePhase1: () =>
        set({
          phase1CompletedAt: Date.now(),
          currentPhase: 'result' // 顯示中期結果
        }),

      startPhase2: () =>
        set({
          currentPhase: 2,
          currentQuestionIndex: 0
        }),

      completeAssessment: (result) =>
        set({
          completedAt: Date.now(),
          currentPhase: 'result',
          cachedResult: result
        }),

      resetAssessment: () =>
        set({
          currentPhase: 1,
          currentQuestionIndex: 0,
          phase1Answers: {},
          phase2Answers: {},
          startedAt: null,
          phase1CompletedAt: null,
          completedAt: null,
          cachedResult: null
        }),

      // ========== Selectors ==========
      getProgress: () => {
        const { currentPhase, phase1Answers, phase2Answers } = get()

        const phase1Count = Object.keys(phase1Answers).length
        const phase2Count = Object.keys(phase2Answers).length

        if (currentPhase === 1) {
          return (phase1Count / 12) * 100
        } else if (currentPhase === 2) {
          return ((12 + phase2Count) / 21) * 100
        }
        return 100
      },

      isQuestionAnswered: (questionId) => {
        const { currentPhase, phase1Answers, phase2Answers } = get()
        const answers = currentPhase === 1 ? phase1Answers : phase2Answers

        return questionId in answers && answers[questionId].length > 0
      },

      canProceed: () => {
        const { currentQuestionIndex, currentPhase } = get()

        // 這裡需要導入問題配置來判斷當前問題是否可選
        // 暫時簡化：只要回答了就能繼續
        // TODO: 實作完整驗證邏輯
        return true
      },

      getTotalQuestions: () => {
        const { currentPhase } = get()
        return currentPhase === 1 ? 12 : 21
      },

      getAnsweredCount: () => {
        const { currentPhase, phase1Answers, phase2Answers } = get()

        const phase1Count = Object.keys(phase1Answers).length
        const phase2Count = Object.keys(phase2Answers).length

        if (currentPhase === 1) {
          return phase1Count
        } else if (currentPhase === 2) {
          return phase1Count + phase2Count
        }
        return phase1Count + phase2Count
      }
    }),
    {
      name: 'assessment-storage', // localStorage key
      version: 1,
      // 只持久化答案和時間戳，不持久化 UI 狀態
      partialize: (state) => ({
        phase1Answers: state.phase1Answers,
        phase2Answers: state.phase2Answers,
        startedAt: state.startedAt,
        phase1CompletedAt: state.phase1CompletedAt,
        completedAt: state.completedAt,
        cachedResult: state.cachedResult
      })
    }
  )
)
