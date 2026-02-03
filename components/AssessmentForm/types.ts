/**
 * 引導式問卷系統 - TypeScript 型別定義
 * 用於資產傳承風險評估問卷
 */

// 問題類型
export type QuestionType = 'single' | 'multiple'

// 使用者分類類型
export type UserSegment = 'high-priority' | 'medium-potential' | 'low-urgency'

// 服務分數（會計、保險、不動產）
export interface ServiceScore {
  accounting: number
  insurance: number
  realEstate: number
}

// 風險指標
export interface RiskIndicators {
  legal: number
  tax: number
  succession: number
  family: number
}

// 問題選項
export interface Option {
  id: string
  text: string
  description?: string
  // 評分權重（用於計算使用者分類）
  segmentWeight?: {
    highPriority: number
    mediumPotential: number
    lowUrgency: number
  }
  // 服務推薦分數（用於推薦哪項服務）
  serviceScore?: ServiceScore
  // 風險指標（用於計算風險等級）
  riskIndicators?: RiskIndicators
}

// 問題定義
export interface Question {
  id: string
  text: string
  description?: string
  type: QuestionType
  section: 'asset-structure' | 'risk-awareness' | 'motivation' | 'supplementary'
  sectionTitle: string
  isOptional?: boolean
  options: Option[]
}

// 使用者答案
export interface Answer {
  questionId: string
  selectedOptionIds: string[]
}

// 推薦結果
export interface RecommendationResult {
  // 使用者分類
  segment: UserSegment
  segmentTitle: string
  segmentDescription: string

  // 主要推薦服務
  primaryService: 'accounting' | 'insurance' | 'realEstate' | 'integrated'

  // 各服務分數
  serviceScores: ServiceScore

  // 建議行動
  recommendedActions: string[]

  // 下一步驟
  nextSteps: string[]

  // CTA 策略
  ctaStrategy: {
    type: 'consultation' | 'whitepaper' | 'newsletter'
    title: string
    description: string
    buttonText: string
    buttonLink: string
  }

  // 風險等級
  riskLevel: 'high' | 'medium' | 'low'

  // 資產規模（從問題 12 取得）
  assetRange?: string
}

// 問卷狀態（Zustand store）
export interface AssessmentState {
  currentStep: number
  answers: Answer[]
  isComplete: boolean
  result: RecommendationResult | null
  startedAt: number | null
  completedAt: number | null

  // Actions
  setCurrentStep: (step: number) => void
  addAnswer: (answer: Answer) => void
  updateAnswer: (questionId: string, selectedOptionIds: string[]) => void
  resetAssessment: () => void
  completeAssessment: (result: RecommendationResult) => void
}
