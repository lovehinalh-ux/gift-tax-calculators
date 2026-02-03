import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 合併 Tailwind CSS class names
 * 使用 clsx 處理條件邏輯，tw-merge 解決衝突
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
