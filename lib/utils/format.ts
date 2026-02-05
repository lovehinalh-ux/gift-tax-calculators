/**
 * Number and Currency Formatting Utilities
 * 數字與貨幣格式化工具
 */

/**
 * Format a number as currency with thousand separators
 * 將數字格式化為帶千分位符號的貨幣格式
 *
 * @param value - The number to format
 * @returns Formatted string (e.g., "1,000,000")
 *
 * @example
 * formatCurrency(1000000) // "1,000,000"
 * formatCurrency(0) // "0"
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('zh-TW', {
    style: 'decimal',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(value)
}

/**
 * Parse a currency input string to a number
 * 將貨幣輸入字串解析為數字
 *
 * Removes commas, spaces, and other non-numeric characters
 * 移除逗號、空格等非數字字元
 *
 * @param value - The string to parse
 * @returns Parsed number, or 0 if invalid
 *
 * @example
 * parseCurrencyInput("1,000,000") // 1000000
 * parseCurrencyInput("1 000 000") // 1000000
 * parseCurrencyInput("abc") // 0
 */
export function parseCurrencyInput(value: string): number {
  const cleaned = value.replace(/[,\s]/g, '')
  const parsed = parseInt(cleaned, 10)
  return Number.isNaN(parsed) ? 0 : parsed
}

/**
 * Format a percentage with specified decimal places
 * 格式化百分比
 *
 * @param value - The decimal value (e.g., 0.15 for 15%)
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted percentage string
 *
 * @example
 * formatPercentage(0.15) // "15.00%"
 * formatPercentage(0.1, 0) // "10%"
 */
export function formatPercentage(value: number, decimals: number = 2): string {
  return `${(value * 100).toFixed(decimals)}%`
}
