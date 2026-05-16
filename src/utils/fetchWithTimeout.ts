const DEFAULT_TIMEOUT_MS = 12000

type FetchInput = Parameters<typeof fetch>[0]
type FetchInit = Parameters<typeof fetch>[1]

export async function fetchWithTimeout(
  input: FetchInput,
  init?: FetchInit,
  timeoutMs: number = DEFAULT_TIMEOUT_MS,
) {
  const requestController = new AbortController()
  const originalSignal = init?.signal
  let timeoutTriggered = false

  const onOriginalAbort = () => {
    requestController.abort()
  }

  if (originalSignal) {
    if (originalSignal.aborted) {
      requestController.abort()
    } else {
      originalSignal.addEventListener('abort', onOriginalAbort, { once: true })
    }
  }

  const timeoutId = window.setTimeout(() => {
    timeoutTriggered = true
    requestController.abort()
  }, timeoutMs)

  try {
    return await fetch(input, { ...init, signal: requestController.signal })
  } catch (error) {
    if (timeoutTriggered) {
      throw new Error('TimeoutError')
    }

    throw error
  } finally {
    window.clearTimeout(timeoutId)
    if (originalSignal) {
      originalSignal.removeEventListener('abort', onOriginalAbort)
    }
  }
}
