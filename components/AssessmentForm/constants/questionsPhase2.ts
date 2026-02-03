/**
 * Phase 2 問卷配置 - 深度心理評估（9題）
 * 分為 4 個模組：意識喚醒、資產暴露、家庭動態、行為意向
 */

import { Question } from '../types'

export const questionsPhase2: Question[] = [
  // ==========================================
  // 模組 1：意識喚醒（Consciousness Awakening）
  // ==========================================
  {
    id: 'q2-1',
    text: '關於資產傳承和繼承規劃，您目前的狀態是？',
    type: 'single',
    section: 'consciousness',
    sectionTitle: '意識喚醒',
    isOptional: false,
    options: [
      {
        id: 'q2-1-opt-1',
        text: '非常關注，已經在著手規劃',
        segmentWeight: { highPriority: 5, mediumPotential: 0, lowUrgency: 0 },
        serviceScore: { accounting: 4, insurance: 5, realEstate: 3 },
        riskIndicators: { legal: 2, tax: 2, succession: 2, family: 2 }
      },
      {
        id: 'q2-1-opt-2',
        text: '有些關注，但還沒有具體行動',
        segmentWeight: { highPriority: 2, mediumPotential: 5, lowUrgency: 0 },
        serviceScore: { accounting: 3, insurance: 4, realEstate: 2 },
        riskIndicators: { legal: 4, tax: 4, succession: 5, family: 3 }
      },
      {
        id: 'q2-1-opt-3',
        text: '偶爾想到，但不確定從何開始',
        segmentWeight: { highPriority: 0, mediumPotential: 4, lowUrgency: 3 },
        serviceScore: { accounting: 2, insurance: 3, realEstate: 2 },
        riskIndicators: { legal: 5, tax: 5, succession: 6, family: 4 }
      },
      {
        id: 'q2-1-opt-4',
        text: '不太關注，覺得現在還不需要',
        segmentWeight: { highPriority: 0, mediumPotential: 1, lowUrgency: 5 },
        serviceScore: { accounting: 1, insurance: 2, realEstate: 1 },
        riskIndicators: { legal: 6, tax: 6, succession: 7, family: 5 }
      }
    ]
  },
  {
    id: 'q2-2',
    text: '如果沒有妥善規劃，您最擔心以下哪個情況發生？',
    description: '請選擇您最關切的風險',
    type: 'single',
    section: 'consciousness',
    sectionTitle: '意識喚醒',
    isOptional: false,
    options: [
      {
        id: 'q2-2-opt-1',
        text: '遺產稅負擔過重，侵蝕家族財富',
        segmentWeight: { highPriority: 4, mediumPotential: 2, lowUrgency: 0 },
        serviceScore: { accounting: 5, insurance: 3, realEstate: 2 },
        riskIndicators: { legal: 3, tax: 8, succession: 4, family: 2 }
      },
      {
        id: 'q2-2-opt-2',
        text: '家族成員因遺產分配產生糾紛',
        segmentWeight: { highPriority: 5, mediumPotential: 1, lowUrgency: 0 },
        serviceScore: { accounting: 2, insurance: 5, realEstate: 2 },
        riskIndicators: { legal: 6, tax: 3, succession: 5, family: 8 }
      },
      {
        id: 'q2-2-opt-3',
        text: '企業經營權交接不順利，影響營運',
        segmentWeight: { highPriority: 5, mediumPotential: 1, lowUrgency: 0 },
        serviceScore: { accounting: 4, insurance: 4, realEstate: 2 },
        riskIndicators: { legal: 7, tax: 5, succession: 8, family: 6 }
      },
      {
        id: 'q2-2-opt-4',
        text: '不動產被迫變賣以支付稅款',
        segmentWeight: { highPriority: 4, mediumPotential: 2, lowUrgency: 0 },
        serviceScore: { accounting: 3, insurance: 3, realEstate: 5 },
        riskIndicators: { legal: 4, tax: 7, succession: 5, family: 3 }
      },
      {
        id: 'q2-2-opt-5',
        text: '目前沒有特別擔心',
        segmentWeight: { highPriority: 0, mediumPotential: 2, lowUrgency: 5 },
        serviceScore: { accounting: 1, insurance: 1, realEstate: 1 },
        riskIndicators: { legal: 5, tax: 5, succession: 6, family: 4 }
      }
    ]
  },

  // ==========================================
  // 模組 2：資產暴露（Asset Exposure）
  // ==========================================
  {
    id: 'q2-3',
    text: '您是否清楚了解自己/家族的完整資產規模？',
    type: 'single',
    section: 'asset-exposure',
    sectionTitle: '資產暴露',
    isOptional: false,
    options: [
      {
        id: 'q2-3-opt-1',
        text: '非常清楚，有完整的資產清冊',
        segmentWeight: { highPriority: 3, mediumPotential: 3, lowUrgency: 0 },
        serviceScore: { accounting: 4, insurance: 4, realEstate: 3 },
        riskIndicators: { legal: 2, tax: 2, succession: 2, family: 2 }
      },
      {
        id: 'q2-3-opt-2',
        text: '大致了解，但沒有詳細盤點',
        segmentWeight: { highPriority: 2, mediumPotential: 4, lowUrgency: 1 },
        serviceScore: { accounting: 5, insurance: 3, realEstate: 4 },
        riskIndicators: { legal: 4, tax: 5, succession: 4, family: 3 }
      },
      {
        id: 'q2-3-opt-3',
        text: '只知道部分，有些資產不確定價值',
        segmentWeight: { highPriority: 3, mediumPotential: 3, lowUrgency: 1 },
        serviceScore: { accounting: 5, insurance: 3, realEstate: 5 },
        riskIndicators: { legal: 5, tax: 6, succession: 5, family: 4 }
      },
      {
        id: 'q2-3-opt-4',
        text: '不太清楚，從未仔細盤點過',
        segmentWeight: { highPriority: 4, mediumPotential: 2, lowUrgency: 0 },
        serviceScore: { accounting: 5, insurance: 4, realEstate: 4 },
        riskIndicators: { legal: 6, tax: 7, succession: 6, family: 5 }
      }
    ]
  },
  {
    id: 'q2-4',
    text: '您認為目前的稅務負擔如何？',
    type: 'single',
    section: 'asset-exposure',
    sectionTitle: '資產暴露',
    isOptional: false,
    options: [
      {
        id: 'q2-4-opt-1',
        text: '非常沉重，希望合法節稅',
        segmentWeight: { highPriority: 5, mediumPotential: 0, lowUrgency: 0 },
        serviceScore: { accounting: 5, insurance: 3, realEstate: 2 },
        riskIndicators: { legal: 4, tax: 7, succession: 3, family: 2 }
      },
      {
        id: 'q2-4-opt-2',
        text: '有些負擔，但還能接受',
        segmentWeight: { highPriority: 2, mediumPotential: 4, lowUrgency: 1 },
        serviceScore: { accounting: 4, insurance: 2, realEstate: 2 },
        riskIndicators: { legal: 3, tax: 5, succession: 3, family: 2 }
      },
      {
        id: 'q2-4-opt-3',
        text: '負擔合理，已有專業協助',
        segmentWeight: { highPriority: 1, mediumPotential: 3, lowUrgency: 2 },
        serviceScore: { accounting: 2, insurance: 3, realEstate: 2 },
        riskIndicators: { legal: 2, tax: 3, succession: 2, family: 2 }
      },
      {
        id: 'q2-4-opt-4',
        text: '不確定，沒有詳細評估過',
        segmentWeight: { highPriority: 3, mediumPotential: 3, lowUrgency: 1 },
        serviceScore: { accounting: 5, insurance: 2, realEstate: 2 },
        riskIndicators: { legal: 5, tax: 6, succession: 4, family: 3 }
      }
    ]
  },

  // ==========================================
  // 模組 3：家庭動態（Family Dynamics）
  // ==========================================
  {
    id: 'q2-5',
    text: '您與家人是否曾討論過財產分配或傳承規劃？',
    type: 'single',
    section: 'family-dynamics',
    sectionTitle: '家庭動態',
    isOptional: false,
    options: [
      {
        id: 'q2-5-opt-1',
        text: '經常討論，家人都有共識',
        segmentWeight: { highPriority: 2, mediumPotential: 3, lowUrgency: 1 },
        serviceScore: { accounting: 3, insurance: 4, realEstate: 3 },
        riskIndicators: { legal: 2, tax: 2, succession: 2, family: 1 }
      },
      {
        id: 'q2-5-opt-2',
        text: '偶爾提及，但沒有深入討論',
        segmentWeight: { highPriority: 3, mediumPotential: 3, lowUrgency: 1 },
        serviceScore: { accounting: 3, insurance: 4, realEstate: 2 },
        riskIndicators: { legal: 4, tax: 3, succession: 4, family: 5 }
      },
      {
        id: 'q2-5-opt-3',
        text: '想討論但不知如何開口',
        segmentWeight: { highPriority: 4, mediumPotential: 2, lowUrgency: 0 },
        serviceScore: { accounting: 2, insurance: 5, realEstate: 2 },
        riskIndicators: { legal: 5, tax: 4, succession: 6, family: 7 }
      },
      {
        id: 'q2-5-opt-4',
        text: '從未討論過，認為時機未到',
        segmentWeight: { highPriority: 3, mediumPotential: 2, lowUrgency: 2 },
        serviceScore: { accounting: 2, insurance: 4, realEstate: 2 },
        riskIndicators: { legal: 6, tax: 5, succession: 7, family: 8 }
      }
    ]
  },
  {
    id: 'q2-6',
    text: '您的家庭狀況包含以下哪些情形？',
    description: '可複選，這將幫助我們提供更精準的建議',
    type: 'multiple',
    section: 'family-dynamics',
    sectionTitle: '家庭動態',
    isOptional: false,
    options: [
      {
        id: 'q2-6-opt-1',
        text: '再婚家庭（有前婚子女）',
        segmentWeight: { highPriority: 3, mediumPotential: 1, lowUrgency: 0 },
        serviceScore: { accounting: 2, insurance: 5, realEstate: 2 },
        riskIndicators: { legal: 6, tax: 4, succession: 6, family: 8 }
      },
      {
        id: 'q2-6-opt-2',
        text: '子女數量較多（3位以上）',
        segmentWeight: { highPriority: 2, mediumPotential: 2, lowUrgency: 0 },
        serviceScore: { accounting: 3, insurance: 4, realEstate: 3 },
        riskIndicators: { legal: 4, tax: 5, succession: 5, family: 6 }
      },
      {
        id: 'q2-6-opt-3',
        text: '有特殊需求家人（身心障礙、重病等）',
        segmentWeight: { highPriority: 4, mediumPotential: 1, lowUrgency: 0 },
        serviceScore: { accounting: 3, insurance: 5, realEstate: 2 },
        riskIndicators: { legal: 5, tax: 4, succession: 6, family: 7 }
      },
      {
        id: 'q2-6-opt-4',
        text: '家族企業涉及多位股東',
        segmentWeight: { highPriority: 4, mediumPotential: 1, lowUrgency: 0 },
        serviceScore: { accounting: 5, insurance: 4, realEstate: 3 },
        riskIndicators: { legal: 7, tax: 6, succession: 7, family: 6 }
      },
      {
        id: 'q2-6-opt-5',
        text: '以上皆無，家庭結構單純',
        segmentWeight: { highPriority: 0, mediumPotential: 3, lowUrgency: 2 },
        serviceScore: { accounting: 2, insurance: 2, realEstate: 2 },
        riskIndicators: { legal: 2, tax: 2, succession: 3, family: 2 }
      }
    ]
  },
  {
    id: 'q2-7',
    text: '您認為家族成員間對財產分配的期望是否一致？',
    type: 'single',
    section: 'family-dynamics',
    sectionTitle: '家庭動態',
    isOptional: false,
    options: [
      {
        id: 'q2-7-opt-1',
        text: '非常一致，不會有爭議',
        segmentWeight: { highPriority: 1, mediumPotential: 3, lowUrgency: 2 },
        serviceScore: { accounting: 2, insurance: 3, realEstate: 2 },
        riskIndicators: { legal: 2, tax: 2, succession: 2, family: 1 }
      },
      {
        id: 'q2-7-opt-2',
        text: '大致一致，但可能有小分歧',
        segmentWeight: { highPriority: 2, mediumPotential: 3, lowUrgency: 1 },
        serviceScore: { accounting: 2, insurance: 4, realEstate: 2 },
        riskIndicators: { legal: 3, tax: 3, succession: 4, family: 5 }
      },
      {
        id: 'q2-7-opt-3',
        text: '不確定，未曾深入了解過',
        segmentWeight: { highPriority: 3, mediumPotential: 2, lowUrgency: 1 },
        serviceScore: { accounting: 2, insurance: 4, realEstate: 2 },
        riskIndicators: { legal: 5, tax: 4, succession: 5, family: 6 }
      },
      {
        id: 'q2-7-opt-4',
        text: '可能存在明顯分歧或衝突',
        segmentWeight: { highPriority: 5, mediumPotential: 0, lowUrgency: 0 },
        serviceScore: { accounting: 2, insurance: 5, realEstate: 2 },
        riskIndicators: { legal: 7, tax: 4, succession: 6, family: 9 }
      }
    ]
  },

  // ==========================================
  // 模組 4：行為意向（Behavioral Intent）
  // ==========================================
  {
    id: 'q2-8',
    text: '如果有專業協助，您願意在多久內開始規劃？',
    type: 'single',
    section: 'behavioral-intent',
    sectionTitle: '行為意向',
    isOptional: false,
    options: [
      {
        id: 'q2-8-opt-1',
        text: '立即開始（1個月內）',
        segmentWeight: { highPriority: 5, mediumPotential: 0, lowUrgency: 0 },
        serviceScore: { accounting: 4, insurance: 4, realEstate: 3 },
        riskIndicators: { legal: 3, tax: 3, succession: 3, family: 3 }
      },
      {
        id: 'q2-8-opt-2',
        text: '近期內（3個月內）',
        segmentWeight: { highPriority: 3, mediumPotential: 3, lowUrgency: 0 },
        serviceScore: { accounting: 3, insurance: 3, realEstate: 2 },
        riskIndicators: { legal: 4, tax: 4, succession: 4, family: 4 }
      },
      {
        id: 'q2-8-opt-3',
        text: '未來半年到一年',
        segmentWeight: { highPriority: 1, mediumPotential: 4, lowUrgency: 1 },
        serviceScore: { accounting: 2, insurance: 2, realEstate: 2 },
        riskIndicators: { legal: 5, tax: 5, succession: 5, family: 5 }
      },
      {
        id: 'q2-8-opt-4',
        text: '還在觀望，先了解資訊',
        segmentWeight: { highPriority: 0, mediumPotential: 3, lowUrgency: 4 },
        serviceScore: { accounting: 2, insurance: 2, realEstate: 2 },
        riskIndicators: { legal: 6, tax: 6, succession: 6, family: 6 }
      }
    ]
  },
  {
    id: 'q2-9',
    text: '您希望透過哪些方式了解資產傳承規劃？',
    description: '可複選，我們將為您推薦合適的資源',
    type: 'multiple',
    section: 'behavioral-intent',
    sectionTitle: '行為意向',
    isOptional: false,
    options: [
      {
        id: 'q2-9-opt-1',
        text: '閱讀專業文章或白皮書',
        segmentWeight: { highPriority: 1, mediumPotential: 3, lowUrgency: 2 },
        serviceScore: { accounting: 3, insurance: 2, realEstate: 2 },
        riskIndicators: { legal: 3, tax: 3, succession: 3, family: 3 }
      },
      {
        id: 'q2-9-opt-2',
        text: '觀看影片或線上講座',
        segmentWeight: { highPriority: 1, mediumPotential: 3, lowUrgency: 2 },
        serviceScore: { accounting: 2, insurance: 3, realEstate: 2 },
        riskIndicators: { legal: 3, tax: 3, succession: 3, family: 3 }
      },
      {
        id: 'q2-9-opt-3',
        text: '參加實體講座或工作坊',
        segmentWeight: { highPriority: 3, mediumPotential: 2, lowUrgency: 0 },
        serviceScore: { accounting: 3, insurance: 3, realEstate: 2 },
        riskIndicators: { legal: 3, tax: 3, succession: 3, family: 3 }
      },
      {
        id: 'q2-9-opt-4',
        text: '直接與顧問一對一諮詢',
        segmentWeight: { highPriority: 4, mediumPotential: 1, lowUrgency: 0 },
        serviceScore: { accounting: 4, insurance: 4, realEstate: 3 },
        riskIndicators: { legal: 3, tax: 3, succession: 3, family: 3 }
      },
      {
        id: 'q2-9-opt-5',
        text: '訂閱電子報，定期接收資訊',
        segmentWeight: { highPriority: 0, mediumPotential: 2, lowUrgency: 3 },
        serviceScore: { accounting: 2, insurance: 2, realEstate: 2 },
        riskIndicators: { legal: 3, tax: 3, succession: 3, family: 3 }
      }
    ]
  }
]
