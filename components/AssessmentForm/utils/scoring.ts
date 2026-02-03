/**
 * 評分算法核心
 * 計算用戶分類、服務推薦、風險等級
 */

import type {
  Question,
  RecommendationResult,
  UserSegment,
  ServiceScore
} from '../types'

interface RiskIndicators {
  legal: number
  tax: number
  succession: number
  family: number
}

interface SegmentWeights {
  highPriority: number
  mediumPotential: number
  lowUrgency: number
}

interface AnswersMap {
  [questionId: string]: string[]
}

/**
 * 計算推薦結果
 */
export function calculateRecommendation(
  answers: AnswersMap,
  questions: Question[]
): RecommendationResult {
  // 初始化累加器
  const totalSegmentWeights: SegmentWeights = {
    highPriority: 0,
    mediumPotential: 0,
    lowUrgency: 0
  }

  const totalServiceScores: ServiceScore = {
    accounting: 0,
    insurance: 0,
    realEstate: 0
  }

  const totalRiskIndicators: RiskIndicators = {
    legal: 0,
    tax: 0,
    succession: 0,
    family: 0
  }

  // ========== 步驟 1：遍歷所有答案，累加分數 ==========
  Object.entries(answers).forEach(([questionId, optionIds]) => {
    const question = questions.find((q) => q.id === questionId)
    if (!question) return

    optionIds.forEach((optionId) => {
      const option = question.options.find((o) => o.id === optionId)
      if (!option) return

      // 累加用戶分類權重
      if (option.segmentWeight) {
        totalSegmentWeights.highPriority += option.segmentWeight.highPriority
        totalSegmentWeights.mediumPotential += option.segmentWeight.mediumPotential
        totalSegmentWeights.lowUrgency += option.segmentWeight.lowUrgency
      }

      // 累加服務推薦分數
      if (option.serviceScore) {
        totalServiceScores.accounting += option.serviceScore.accounting
        totalServiceScores.insurance += option.serviceScore.insurance
        totalServiceScores.realEstate += option.serviceScore.realEstate
      }

      // 累加風險指標
      if (option.riskIndicators) {
        totalRiskIndicators.legal += option.riskIndicators.legal
        totalRiskIndicators.tax += option.riskIndicators.tax
        totalRiskIndicators.succession += option.riskIndicators.succession
        totalRiskIndicators.family += option.riskIndicators.family
      }
    })
  })

  // ========== 步驟 2：判斷用戶分類 ==========
  const segment = determineSegment(totalSegmentWeights)

  // ========== 步驟 3：判斷主要推薦服務 ==========
  const primaryService = determinePrimaryService(totalServiceScores)

  // ========== 步驟 4：計算風險等級 ==========
  const riskLevel = calculateRiskLevel(totalRiskIndicators)

  // ========== 步驟 5：生成個性化建議 ==========
  const { segmentTitle, segmentDescription } = getSegmentInfo(segment)
  const recommendedActions = generateRecommendedActions(
    segment,
    primaryService,
    riskLevel,
    answers
  )
  const nextSteps = generateNextSteps(segment, riskLevel)
  const ctaStrategy = generateCTAStrategy(segment, riskLevel)

  // ========== 步驟 6：獲取資產範圍（從 Q12） ==========
  const assetRange = getAssetRange(answers)

  return {
    segment,
    segmentTitle,
    segmentDescription,
    primaryService,
    serviceScores: totalServiceScores,
    recommendedActions,
    nextSteps,
    ctaStrategy,
    riskLevel,
    assetRange
  }
}

/**
 * 判斷用戶分類
 */
function determineSegment(weights: SegmentWeights): UserSegment {
  const maxWeight = Math.max(
    weights.highPriority,
    weights.mediumPotential,
    weights.lowUrgency
  )

  // 閾值判定（可根據業務需求微調）
  if (weights.highPriority === maxWeight && weights.highPriority > 40) {
    return 'high-priority'
  } else if (weights.mediumPotential === maxWeight && weights.mediumPotential > 30) {
    return 'medium-potential'
  } else {
    return 'low-urgency'
  }
}

/**
 * 判斷主要推薦服務
 */
function determinePrimaryService(
  scores: ServiceScore
): 'accounting' | 'insurance' | 'realEstate' | 'integrated' {
  const serviceRanking = [
    { service: 'accounting' as const, score: scores.accounting },
    { service: 'insurance' as const, score: scores.insurance },
    { service: 'realEstate' as const, score: scores.realEstate }
  ].sort((a, b) => b.score - a.score)

  const topScore = serviceRanking[0].score

  // 如果前三名分數差距小於 20%，推薦整合服務
  const isBalanced = serviceRanking.every((s) => s.score / topScore > 0.8)

  if (isBalanced) {
    return 'integrated'
  } else {
    return serviceRanking[0].service
  }
}

/**
 * 計算風險等級
 */
function calculateRiskLevel(
  indicators: RiskIndicators
): 'high' | 'medium' | 'low' {
  // 加權平均（稅務風險權重最高）
  const overallRisk =
    indicators.legal * 0.3 +
    indicators.tax * 0.35 +
    indicators.succession * 0.25 +
    indicators.family * 0.1

  // 根據總分判定風險等級
  if (overallRisk > 60) {
    return 'high'
  } else if (overallRisk > 30) {
    return 'medium'
  } else {
    return 'low'
  }
}

/**
 * 獲取用戶分類資訊
 */
function getSegmentInfo(segment: UserSegment): {
  segmentTitle: string
  segmentDescription: string
} {
  const segmentMap = {
    'high-priority': {
      segmentTitle: '✅ 高優先建議規劃者',
      segmentDescription:
        '您的傳承結構存在重大風險，我們建議您立即諮詢專人'
    },
    'medium-potential': {
      segmentTitle: '⚠️ 中度潛在族群',
      segmentDescription:
        '您正處於關鍵規劃階段，建議先自我評估並了解相關知識'
    },
    'low-urgency': {
      segmentTitle: '🟢 尚無迫切需求者',
      segmentDescription:
        '您可能尚無急迫需求，但可先訂閱我們的傳承知識週報'
    }
  }

  return segmentMap[segment]
}

/**
 * 生成個性化建議行動
 */
function generateRecommendedActions(
  segment: UserSegment,
  primaryService: string,
  riskLevel: string,
  answers: AnswersMap
): string[] {
  const actions: string[] = []

  // 根據主要服務推薦
  if (primaryService === 'accounting') {
    actions.push('安排稅務健檢諮詢')
    actions.push('準備近三年財務報表')
    actions.push('檢視現有稅務結構')
  } else if (primaryService === 'insurance') {
    actions.push('盤點現有保單')
    actions.push('評估保障缺口')
    actions.push('檢視受益人設定')
  } else if (primaryService === 'realEstate') {
    actions.push('整理不動產持有清單')
    actions.push('評估物業組合配置')
    actions.push('檢視不動產稅務負擔')
  } else {
    // integrated
    actions.push('準備完整資產負債表')
    actions.push('規劃綜合財富管理策略')
    actions.push('協調各領域專家')
  }

  // 根據風險等級補充建議
  if (riskLevel === 'high') {
    actions.push('⚠️ 建議盡速安排專業諮詢')
  }

  return actions
}

/**
 * 生成下一步驟
 */
function generateNextSteps(segment: UserSegment, riskLevel: string): string[] {
  const steps: string[] = []

  if (segment === 'high-priority') {
    steps.push('我們將於 24 小時內與您聯繫')
    steps.push('安排初次諮詢會議（30-45 分鐘）')
    steps.push('準備專屬規劃方案')
  } else if (segment === 'medium-potential') {
    steps.push('下載《家族財富健檢表》')
    steps.push('閱讀相關案例文章')
    steps.push('預約免費諮詢（可選）')
  } else {
    steps.push('訂閱傳承知識週報')
    steps.push('瀏覽教育性文章')
    steps.push('關注最新稅務法規')
  }

  return steps
}

/**
 * 生成 CTA 策略
 */
function generateCTAStrategy(
  segment: UserSegment,
  riskLevel: string
): RecommendationResult['ctaStrategy'] {
  if (segment === 'high-priority') {
    return {
      type: 'consultation',
      title: '立即預約專家諮詢',
      description:
        '您的傳承結構存在重大風險，建議盡速安排專業規劃。',
      buttonText: '預約免費諮詢',
      buttonLink: '/consultation'
    }
  } else if (segment === 'medium-potential') {
    return {
      type: 'whitepaper',
      title: '下載完整評估報告',
      description:
        '取得《2025 家族財富傳承規劃指南》，深入了解您的風險與機會。',
      buttonText: '免費下載白皮書',
      buttonLink: '/downloads/wealth-planning-guide'
    }
  } else {
    return {
      type: 'newsletter',
      title: '訂閱知識週報',
      description:
        '定期接收傳承規劃、稅務優化、資產保護等專業知識。',
      buttonText: '訂閱週報',
      buttonLink: '/newsletter'
    }
  }
}

/**
 * 獲取資產範圍（從 Q12）
 */
function getAssetRange(answers: AnswersMap): string | undefined {
  const q12Answer = answers['q12-asset-range']
  if (!q12Answer || q12Answer.length === 0) return undefined

  const assetRangeMap: Record<string, string> = {
    'q12-opt-1': '5,000 萬以下',
    'q12-opt-2': '5,000 萬 ~ 1 億',
    'q12-opt-3': '1 億 ~ 3 億',
    'q12-opt-4': '3 億以上'
  }

  return assetRangeMap[q12Answer[0]]
}
