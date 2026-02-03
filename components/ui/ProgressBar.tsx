'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  value: number // 0-100
  max?: number
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'success' | 'warning' | 'danger'
  showLabel?: boolean
  label?: string
  animated?: boolean
}

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      className,
      value,
      max = 100,
      size = 'md',
      variant = 'default',
      showLabel = false,
      label,
      animated = true,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

    const sizes = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3',
    }

    const variants = {
      default: 'bg-primary-500',
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      danger: 'bg-red-500',
    }

    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        {(showLabel || label) && (
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-neutral-700">
              {label || '進度'}
            </span>
            <span className="text-sm font-medium text-neutral-700">
              {Math.round(percentage)}%
            </span>
          </div>
        )}

        <div
          className={cn(
            'w-full bg-neutral-200 rounded-full overflow-hidden',
            sizes[size]
          )}
        >
          {animated ? (
            <motion.div
              className={cn('h-full rounded-full', variants[variant])}
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          ) : (
            <div
              className={cn('h-full rounded-full transition-all duration-300', variants[variant])}
              style={{ width: `${percentage}%` }}
            />
          )}
        </div>
      </div>
    )
  }
)

ProgressBar.displayName = 'ProgressBar'

export { ProgressBar }
