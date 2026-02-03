/**
 * 階段 1：快速風險篩查問卷（12 題）
 * 資產傳承風險評估 - 完整權重配置
 */

import type { Question } from '../types'

export const questionsPhase1: Question[] = [
  // ========================================
  // 區域 1：資產結構與家庭狀況（3 題）
  // ========================================
  {
    id: 'q1-assets',
    text: '您的主要資產包含以下哪些？',
    description: '請勾選所有適用項目，這將幫助我們了解您的資產結構複雜度',
    type: 'multiple',
    section: 'asset-structure',
    sectionTitle: '資產結構與家庭狀況',
    isOptional: false,
    options: [
      {
        id: 'q1-opt-1',
        text: '不動產（自用或投資）',
        description: '包含住宅、商業不動產、土地等',
        segmentWeight: { highPriority: 3, mediumPotential: 5, lowUrgency: 2 },
        serviceScore: { accounting: 2, insurance: 3, realEstate: 10 },
        riskIndicators: { legal: 4, tax: 6, succession: 5, family: 3 }
      },
      {
        id: 'q1-opt-2',
        text: '股票 / 基金 / ETF',
        description: '金融投資商品',
        segmentWeight: { highPriority: 2, mediumPotential: 6, lowUrgency: 2 },
        serviceScore: { accounting: 5, insurance: 8, realEstate: 1 },
        riskIndicators: { legal: 2, tax: 5, succession: 3, family: 2 }
      },
      {
        id: 'q1-opt-3',
        text: '公司股權',
        description: '家族企業或未上市公司股權',
        segmentWeight: { highPriority: 8, mediumPotential: 2, lowUrgency: 0 },
        serviceScore: { accounting: 10, insurance: 7, realEstate: 3 },
        riskIndicators: { legal: 9, tax: 10, succession: 8, family: 7 }
      },
      {
        id: 'q1-opt-4',
        text: '海外資產',
        description: '海外房產、帳戶、投資等',
        segmentWeight: { highPriority: 7, mediumPotential: 3, lowUrgency: 0 },
        serviceScore: { accounting: 10, insurance: 5, realEstate: 6 },
        riskIndicators: { legal: 7, tax: 9, succession: 7, family: 4 }
      },
      {
        id: 'q1-opt-5',
        text: '高額保單（保額 > 3000 萬）',
        description: '大額壽險或儲蓄險',
        segmentWeight: { highPriority: 6, mediumPotential: 4, lowUrgency: 0 },
        serviceScore: { accounting: 4, insurance: 10, realEstate: 1 },
        riskIndicators: { legal: 3, tax: 8, succession: 6, family: 2 }
      }
    ]
  },

  {
    id: 'q2-family',
    text: '您是否已婚或有子女 / 繼承人？',
    description: '了解您的家庭傳承結構',
    type: 'single',
    section: 'asset-structure',
    sectionTitle: '資產結構與家庭狀況',
    isOptional: false,
    options: [
      {
        id: 'q2-opt-1',
        text: '已婚且有子女',
        description: '傳承需求明確',
        segmentWeight: { highPriority: 5, mediumPotential: 5, lowUrgency: 0 },
        serviceScore: { accounting: 7, insurance: 8, realEstate: 6 },
        riskIndicators: { legal: 5, tax: 6, succession: 7, family: 5 }
      },
      {
        id: 'q2-opt-2',
        text: '單身但計劃傳承',
        description: '有傳承對象（如父母、手足、慈善）',
        segmentWeight: { highPriority: 4, mediumPotential: 4, lowUrgency: 2 },
        serviceScore: { accounting: 6, insurance: 7, realEstate: 5 },
        riskIndicators: { legal: 4, tax: 5, succession: 6, family: 4 }
      },
      {
        id: 'q2-opt-3',
        text: '未考慮傳承對象',
        description: '尚未規劃',
        segmentWeight: { highPriority: 1, mediumPotential: 4, lowUrgency: 5 },
        serviceScore: { accounting: 3, insurance: 4, realEstate: 3 },
        riskIndicators: { legal: 2, tax: 3, succession: 4, family: 2 }
      }
    ]
  },

  {
    id: 'q3-business',
    text: '您是否擁有共同持股企業，或家族企業？',
    description: '家族企業傳承風險評估',
    type: 'single',
    section: 'asset-structure',
    sectionTitle: '資產結構與家庭狀況',
    isOptional: false,
    options: [
      {
        id: 'q3-opt-1',
        text: '是，目前仍營運',
        description: '活躍的家族企業',
        segmentWeight: { highPriority: 9, mediumPotential: 1, lowUrgency: 0 },
        serviceScore: { accounting: 10, insurance: 8, realEstate: 4 },
        riskIndicators: { legal: 8, tax: 10, succession: 9, family: 7 }
      },
      {
        id: 'q3-opt-2',
        text: '曾有但已退出',
        description: '已無經營負擔',
        segmentWeight: { highPriority: 2, mediumPotential: 5, lowUrgency: 3 },
        serviceScore: { accounting: 5, insurance: 6, realEstate: 4 },
        riskIndicators: { legal: 3, tax: 4, succession: 3, family: 3 }
      },
      {
        id: 'q3-opt-3',
        text: '否',
        description: '無企業持股',
        segmentWeight: { highPriority: 0, mediumPotential: 5, lowUrgency: 5 },
        serviceScore: { accounting: 3, insurance: 5, realEstate: 5 },
        riskIndicators: { legal: 2, tax: 3, succession: 2, family: 2 }
      }
    ]
  },

  // ========================================
  // 區域 2：風險意識與法律準備（3 題）
  // ========================================
  {
    id: 'q4-will',
    text: '您是否已立遺囑或設計信託安排？',
    description: '法律準備程度評估',
    type: 'single',
    section: 'risk-awareness',
    sectionTitle: '風險意識與法律準備',
    isOptional: false,
    options: [
      {
        id: 'q4-opt-1',
        text: '有，已透過律師規劃',
        description: '已有專業規劃',
        segmentWeight: { highPriority: 2, mediumPotential: 6, lowUrgency: 2 },
        serviceScore: { accounting: 7, insurance: 7, realEstate: 6 },
        riskIndicators: { legal: 2, tax: 3, succession: 2, family: 2 }
      },
      {
        id: 'q4-opt-2',
        text: '尚在評估中',
        description: '有意識但未執行',
        segmentWeight: { highPriority: 6, mediumPotential: 4, lowUrgency: 0 },
        serviceScore: { accounting: 8, insurance: 8, realEstate: 7 },
        riskIndicators: { legal: 6, tax: 7, succession: 7, family: 5 }
      },
      {
        id: 'q4-opt-3',
        text: '沒有',
        description: '尚未規劃',
        segmentWeight: { highPriority: 8, mediumPotential: 2, lowUrgency: 0 },
        serviceScore: { accounting: 9, insurance: 9, realEstate: 8 },
        riskIndicators: { legal: 9, tax: 8, succession: 9, family: 7 }
      }
    ]
  },

  {
    id: 'q5-insurance-tax',
    text: '您是否了解壽險金是否納入遺產稅課稅？',
    description: '保險與稅務知識測試',
    type: 'single',
    section: 'risk-awareness',
    sectionTitle: '風險意識與法律準備',
    isOptional: false,
    options: [
      {
        id: 'q5-opt-1',
        text: '了解，已規劃避稅方案',
        description: '具備專業知識',
        segmentWeight: { highPriority: 1, mediumPotential: 6, lowUrgency: 3 },
        serviceScore: { accounting: 5, insurance: 8, realEstate: 3 },
        riskIndicators: { legal: 1, tax: 2, succession: 2, family: 1 }
      },
      {
        id: 'q5-opt-2',
        text: '聽過但不熟',
        description: '知識落差',
        segmentWeight: { highPriority: 5, mediumPotential: 5, lowUrgency: 0 },
        serviceScore: { accounting: 6, insurance: 8, realEstate: 1 },
        riskIndicators: { legal: 4, tax: 6, succession: 5, family: 3 }
      },
      {
        id: 'q5-opt-3',
        text: '完全不了解',
        description: '高風險',
        segmentWeight: { highPriority: 7, mediumPotential: 3, lowUrgency: 0 },
        serviceScore: { accounting: 8, insurance: 10, realEstate: 2 },
        riskIndicators: { legal: 3, tax: 10, succession: 6, family: 2 }
      }
    ]
  },

  {
    id: 'q6-distribution',
    text: '若發生突發事故，您是否明確知道資產會如何分配？',
    description: '情境模擬：損失規避觸發',
    type: 'single',
    section: 'risk-awareness',
    sectionTitle: '風險意識與法律準備',
    isOptional: false,
    options: [
      {
        id: 'q6-opt-1',
        text: '有完整規劃與安排',
        description: '清晰明確',
        segmentWeight: { highPriority: 1, mediumPotential: 5, lowUrgency: 4 },
        serviceScore: { accounting: 6, insurance: 7, realEstate: 5 },
        riskIndicators: { legal: 1, tax: 2, succession: 1, family: 1 }
      },
      {
        id: 'q6-opt-2',
        text: '大致清楚但未書面',
        description: '有風險',
        segmentWeight: { highPriority: 6, mediumPotential: 4, lowUrgency: 0 },
        serviceScore: { accounting: 8, insurance: 8, realEstate: 7 },
        riskIndicators: { legal: 6, tax: 6, succession: 7, family: 5 }
      },
      {
        id: 'q6-opt-3',
        text: '不清楚 / 尚未處理',
        description: '高風險',
        segmentWeight: { highPriority: 9, mediumPotential: 1, lowUrgency: 0 },
        serviceScore: { accounting: 10, insurance: 10, realEstate: 9 },
        riskIndicators: { legal: 9, tax: 8, succession: 10, family: 8 }
      }
    ]
  },

  // ========================================
  // 區域 3：意願與動機誘發（3 題）
  // ========================================
  {
    id: 'q7-tax-saving',
    text: '若有合法方法可讓您節省數百萬遺產稅，您會...？',
    description: '動機測試',
    type: 'single',
    section: 'motivation',
    sectionTitle: '意願與動機誘發',
    isOptional: false,
    options: [
      {
        id: 'q7-opt-1',
        text: '儘快了解並規劃',
        description: '高行動意願',
        segmentWeight: { highPriority: 8, mediumPotential: 2, lowUrgency: 0 },
        serviceScore: { accounting: 10, insurance: 8, realEstate: 7 },
        riskIndicators: { legal: 5, tax: 8, succession: 6, family: 4 }
      },
      {
        id: 'q7-opt-2',
        text: '有興趣但需要可信專家',
        description: '中度意願',
        segmentWeight: { highPriority: 5, mediumPotential: 5, lowUrgency: 0 },
        serviceScore: { accounting: 8, insurance: 7, realEstate: 6 },
        riskIndicators: { legal: 4, tax: 6, succession: 5, family: 3 }
      },
      {
        id: 'q7-opt-3',
        text: '傾向先觀望',
        description: '低迫切性',
        segmentWeight: { highPriority: 1, mediumPotential: 5, lowUrgency: 4 },
        serviceScore: { accounting: 5, insurance: 5, realEstate: 4 },
        riskIndicators: { legal: 3, tax: 4, succession: 4, family: 2 }
      }
    ]
  },

  {
    id: 'q8-social-proof',
    text: '您是否聽過他人因傳承糾紛或稅務誤判，導致家庭分裂或資產縮水？',
    description: '社會認同 + 風險對照',
    type: 'single',
    section: 'motivation',
    sectionTitle: '意願與動機誘發',
    isOptional: false,
    options: [
      {
        id: 'q8-opt-1',
        text: '有親友經歷過',
        description: '直接經驗觸發',
        segmentWeight: { highPriority: 7, mediumPotential: 3, lowUrgency: 0 },
        serviceScore: { accounting: 9, insurance: 8, realEstate: 7 },
        riskIndicators: { legal: 7, tax: 7, succession: 8, family: 6 }
      },
      {
        id: 'q8-opt-2',
        text: '僅聽過新聞案例',
        description: '間接經驗',
        segmentWeight: { highPriority: 4, mediumPotential: 6, lowUrgency: 0 },
        serviceScore: { accounting: 7, insurance: 7, realEstate: 6 },
        riskIndicators: { legal: 5, tax: 5, succession: 6, family: 4 }
      },
      {
        id: 'q8-opt-3',
        text: '沒有注意過',
        description: '低意識',
        segmentWeight: { highPriority: 2, mediumPotential: 4, lowUrgency: 4 },
        serviceScore: { accounting: 5, insurance: 5, realEstate: 4 },
        riskIndicators: { legal: 3, tax: 3, succession: 3, family: 2 }
      }
    ]
  },

  {
    id: 'q9-lead-magnet',
    text: '若能透過匿名方式，免費獲得一份「傳承風險檢視報告」，您願意...？',
    description: 'Lead Magnet 測試',
    type: 'single',
    section: 'motivation',
    sectionTitle: '意願與動機誘發',
    isOptional: false,
    options: [
      {
        id: 'q9-opt-1',
        text: '立即填寫評估',
        description: '高轉換意願',
        segmentWeight: { highPriority: 8, mediumPotential: 2, lowUrgency: 0 },
        serviceScore: { accounting: 9, insurance: 8, realEstate: 8 },
        riskIndicators: { legal: 6, tax: 7, succession: 7, family: 5 }
      },
      {
        id: 'q9-opt-2',
        text: '有興趣下載參考',
        description: '中度意願',
        segmentWeight: { highPriority: 3, mediumPotential: 7, lowUrgency: 0 },
        serviceScore: { accounting: 7, insurance: 7, realEstate: 6 },
        riskIndicators: { legal: 4, tax: 5, succession: 5, family: 3 }
      },
      {
        id: 'q9-opt-3',
        text: '不需要',
        description: '低意願',
        segmentWeight: { highPriority: 0, mediumPotential: 3, lowUrgency: 7 },
        serviceScore: { accounting: 4, insurance: 4, realEstate: 3 },
        riskIndicators: { legal: 2, tax: 2, succession: 2, family: 1 }
      }
    ]
  },

  // ========================================
  // 區域 4：補充問題（可選填）（3 題）
  // ========================================
  {
    id: 'q10-advisors',
    text: '您是否已諮詢過相關律師 / 會計師 / 保險顧問？',
    description: '判斷是否可成為二次切入對象',
    type: 'single',
    section: 'supplementary',
    sectionTitle: '補充問題',
    isOptional: true,
    options: [
      {
        id: 'q10-opt-1',
        text: '有並已執行部分規劃',
        description: '已有專業協助',
        segmentWeight: { highPriority: 3, mediumPotential: 6, lowUrgency: 1 },
        serviceScore: { accounting: 7, insurance: 7, realEstate: 6 },
        riskIndicators: { legal: 3, tax: 4, succession: 3, family: 3 }
      },
      {
        id: 'q10-opt-2',
        text: '諮詢過但尚未動作',
        description: '有意識未執行',
        segmentWeight: { highPriority: 6, mediumPotential: 4, lowUrgency: 0 },
        serviceScore: { accounting: 8, insurance: 8, realEstate: 7 },
        riskIndicators: { legal: 5, tax: 6, succession: 6, family: 4 }
      },
      {
        id: 'q10-opt-3',
        text: '沒有',
        description: '空白市場',
        segmentWeight: { highPriority: 7, mediumPotential: 3, lowUrgency: 0 },
        serviceScore: { accounting: 9, insurance: 9, realEstate: 8 },
        riskIndicators: { legal: 7, tax: 8, succession: 8, family: 6 }
      }
    ]
  },

  {
    id: 'q11-offshore',
    text: '您是否考慮設立境外架構（如海外信託）以保護資產？',
    description: '辨識高階資產防禦族群',
    type: 'single',
    section: 'supplementary',
    sectionTitle: '補充問題',
    isOptional: true,
    options: [
      {
        id: 'q11-opt-1',
        text: '已設立',
        description: '高階規劃',
        segmentWeight: { highPriority: 4, mediumPotential: 5, lowUrgency: 1 },
        serviceScore: { accounting: 10, insurance: 6, realEstate: 7 },
        riskIndicators: { legal: 4, tax: 5, succession: 4, family: 3 }
      },
      {
        id: 'q11-opt-2',
        text: '評估中',
        description: '高淨值潛力',
        segmentWeight: { highPriority: 7, mediumPotential: 3, lowUrgency: 0 },
        serviceScore: { accounting: 10, insurance: 7, realEstate: 8 },
        riskIndicators: { legal: 6, tax: 8, succession: 7, family: 5 }
      },
      {
        id: 'q11-opt-3',
        text: '無規劃',
        description: '標準族群',
        segmentWeight: { highPriority: 3, mediumPotential: 5, lowUrgency: 2 },
        serviceScore: { accounting: 6, insurance: 7, realEstate: 6 },
        riskIndicators: { legal: 4, tax: 5, succession: 5, family: 3 }
      }
    ]
  },

  {
    id: 'q12-asset-range',
    text: '請問您的大致資產淨值（匿名選填）',
    description: '自動分類依據',
    type: 'single',
    section: 'supplementary',
    sectionTitle: '補充問題',
    isOptional: true,
    options: [
      {
        id: 'q12-opt-1',
        text: '5,000 萬以下',
        description: '中產族群',
        segmentWeight: { highPriority: 2, mediumPotential: 6, lowUrgency: 2 },
        serviceScore: { accounting: 6, insurance: 7, realEstate: 6 },
        riskIndicators: { legal: 3, tax: 4, succession: 4, family: 3 }
      },
      {
        id: 'q12-opt-2',
        text: '5,000 萬 ~ 1 億',
        description: '高淨值',
        segmentWeight: { highPriority: 6, mediumPotential: 4, lowUrgency: 0 },
        serviceScore: { accounting: 8, insurance: 8, realEstate: 7 },
        riskIndicators: { legal: 5, tax: 7, succession: 6, family: 5 }
      },
      {
        id: 'q12-opt-3',
        text: '1 億 ~ 3 億',
        description: '超高淨值',
        segmentWeight: { highPriority: 8, mediumPotential: 2, lowUrgency: 0 },
        serviceScore: { accounting: 10, insurance: 9, realEstate: 8 },
        riskIndicators: { legal: 7, tax: 9, succession: 8, family: 6 }
      },
      {
        id: 'q12-opt-4',
        text: '3 億以上',
        description: 'UHNW',
        segmentWeight: { highPriority: 9, mediumPotential: 1, lowUrgency: 0 },
        serviceScore: { accounting: 10, insurance: 10, realEstate: 9 },
        riskIndicators: { legal: 8, tax: 10, succession: 9, family: 7 }
      }
    ]
  }
]
