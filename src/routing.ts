const ROUTE_CHANGE_EVENT = 'leen:route-change'

const normalizePath = (path: string) => {
  const trimmedPath = path.replace(/\/+$/, '')
  return trimmedPath === '' ? '/' : trimmedPath
}

export const getCurrentPath = () => normalizePath(window.location.pathname)

export const navigateTo = (path: string) => {
  const nextPath = normalizePath(path)

  if (nextPath === getCurrentPath()) return

  window.history.pushState({}, '', nextPath)
  window.dispatchEvent(new Event(ROUTE_CHANGE_EVENT))
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export const listenToRouteChanges = (onRouteChange: () => void) => {
  window.addEventListener('popstate', onRouteChange)
  window.addEventListener(ROUTE_CHANGE_EVENT, onRouteChange)

  return () => {
    window.removeEventListener('popstate', onRouteChange)
    window.removeEventListener(ROUTE_CHANGE_EVENT, onRouteChange)
  }
}
