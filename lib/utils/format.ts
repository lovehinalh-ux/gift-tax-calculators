export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('zh-TW').format(value)
}

export function formatPercentage(value: number): string {
  return `${(value * 100).toFixed(0)}%`
}

export function parseWanInput(raw: string): number | null {
  const cleaned = raw.replace(/,/g, '').trim()
  if (cleaned.length === 0) {
    return null
  }

  const parsed = Number(cleaned)
  if (!Number.isFinite(parsed) || parsed < 0) {
    return null
  }

  return parsed
}
