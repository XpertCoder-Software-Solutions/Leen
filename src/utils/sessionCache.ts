type SessionCacheEnvelope<T> = {
  expiresAt: number
  value: T
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

export function readSessionCache<T>(key: string): T | null {
  if (typeof window === 'undefined') return null

  try {
    const rawValue = window.sessionStorage.getItem(key)
    if (!rawValue) return null

    const parsedValue: unknown = JSON.parse(rawValue)
    if (!isRecord(parsedValue)) return null

    const expiresAt = parsedValue.expiresAt
    const hasValue = Object.prototype.hasOwnProperty.call(parsedValue, 'value')

    if (typeof expiresAt !== 'number' || !hasValue) {
      window.sessionStorage.removeItem(key)
      return null
    }

    if (Date.now() >= expiresAt) {
      window.sessionStorage.removeItem(key)
      return null
    }

    return (parsedValue as SessionCacheEnvelope<T>).value
  } catch {
    return null
  }
}

export function writeSessionCache<T>(key: string, value: T, ttlMs: number): void {
  if (typeof window === 'undefined') return

  try {
    const payload: SessionCacheEnvelope<T> = {
      expiresAt: Date.now() + Math.max(ttlMs, 0),
      value,
    }

    window.sessionStorage.setItem(key, JSON.stringify(payload))
  } catch {
    // Ignore quota and serialization errors.
  }
}
