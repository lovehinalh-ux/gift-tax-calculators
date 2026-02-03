/**
 * 問卷評估 Phase 2 頁面
 * /assessment/phase2 路由
 */

'use client'

import { useEffect } from 'react'
import { useAssessmentStore } from '@/lib/stores/useAssessmentStore'
import { AssessmentPhase2 } from '@/components/AssessmentForm/containers/AssessmentPhase2'

export default function AssessmentPhase2Page() {
  const { startPhase2 } = useAssessmentStore()

  // 初始化 Phase 2
  useEffect(() => {
    startPhase2()
  }, [startPhase2])

  return <AssessmentPhase2 />
}
