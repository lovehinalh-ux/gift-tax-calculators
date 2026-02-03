/**
 * OptionButton 組件
 * 問卷選項按鈕，支援單選/多選、選中狀態、動畫效果
 */

'use client'

import { motion } from 'framer-motion'
import type { Option } from '../types'

interface OptionButtonProps {
  option: Option
  isSelected: boolean
  isMultiple: boolean
  onClick: () => void
}

export function OptionButton({
  option,
  isSelected,
  isMultiple,
  onClick
}: OptionButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`
        relative w-full text-left p-4 rounded-lg border-2 transition-all duration-200
        ${
          isSelected
            ? 'border-primary-500 bg-primary-50'
            : 'border-neutral-200 bg-white hover:border-primary-300 hover:bg-neutral-50'
        }
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-pressed={isSelected}
      role={isMultiple ? 'checkbox' : 'radio'}
    >
      {/* 選中指示器 */}
      <div className="flex items-start gap-3">
        {/* 勾選框或單選圈 */}
        <div
          className={`
            flex-shrink-0 mt-0.5 w-5 h-5 rounded-${isMultiple ? 'md' : 'full'} border-2
            flex items-center justify-center transition-all
            ${
              isSelected
                ? 'border-primary-500 bg-primary-500'
                : 'border-neutral-300 bg-white'
            }
          `}
        >
          {isSelected && (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3 h-3 text-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </motion.svg>
          )}
        </div>

        {/* 選項內容 */}
        <div className="flex-1">
          <div
            className={`font-medium ${
              isSelected ? 'text-primary-900' : 'text-neutral-900'
            }`}
          >
            {option.text}
          </div>

          {option.description && (
            <div className="mt-1 text-sm text-neutral-600">
              {option.description}
            </div>
          )}
        </div>
      </div>

      {/* 選中時的背景光暈效果 */}
      {isSelected && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-primary-100 opacity-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.button>
  )
}
