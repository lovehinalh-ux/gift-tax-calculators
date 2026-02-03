/**
 * 問卷評估主頁面
 * /assessment 路由
 */

'use client'

import { useEffect } from 'react'
import { useAssessmentStore } from '@/lib/stores/useAssessmentStore'
import { AssessmentPhase1 } from '@/components/AssessmentForm/containers/AssessmentPhase1'

export default function AssessmentPage() {
  const { startAssessment } = useAssessmentStore()

  // 初始化問卷
  useEffect(() => {
    startAssessment()
  }, [startAssessment])

  return <AssessmentPhase1 />
}
