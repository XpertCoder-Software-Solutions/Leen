const ROUTE_CHANGE_EVENT = 'leen:route-change'
const SECTION_SCROLL_MAX_ATTEMPTS = 60
const NAVBAR_SELECTOR = 'header.motion-nav-enter'
const SECTION_TOP_GAP = 20
const HASH_ROUTE_PREFIX = '#/'

export const APP_ROUTES = {
  home: '/',
  allProjects: '/all-projects',
} as const

type AppRoute = (typeof APP_ROUTES)[keyof typeof APP_ROUTES]

const KNOWN_ROUTES = new Set<AppRoute>(Object.values(APP_ROUTES) as AppRoute[])

const normalizePath = (path: string) => {
  const trimmedPath = path.replace(/\/+$/, '')
  return trimmedPath === '' ? '/' : trimmedPath
}

const normalizeAnchor = (anchor: string) => (anchor.startsWith('#') ? anchor : `#${anchor}`)

const parseHashRoute = (hash: string): string | null => {
  if (!hash.startsWith(HASH_ROUTE_PREFIX)) return null

  const hashPath = hash.slice(1).split('?')[0] ?? APP_ROUTES.home
  return normalizePath(hashPath)
}

const getRawCurrentPath = () => {
  const hashRoute = parseHashRoute(window.location.hash)
  if (hashRoute) return hashRoute

  // Backward compatibility for direct path loads.
  return normalizePath(window.location.pathname)
}

const getNavbarOffset = () => {
  const navbar = document.querySelector<HTMLElement>(NAVBAR_SELECTOR)
  if (!navbar) return 0

  const mainNavbarRow = navbar.querySelector<HTMLElement>('[data-navbar-main]')
  const offsetSource = mainNavbarRow ?? navbar
  return Math.ceil(offsetSource.getBoundingClientRect().height)
}

const scrollToSection = (targetAnchor: string) => {
  const targetSection = document.querySelector<HTMLElement>(targetAnchor)
  if (!targetSection) return false

  const sectionTopPosition = window.scrollY + targetSection.getBoundingClientRect().top
  const targetTopPosition = Math.max(0, sectionTopPosition - getNavbarOffset() - SECTION_TOP_GAP)

  window.scrollTo({ top: targetTopPosition, behavior: 'smooth' })
  window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${targetAnchor}`)
  window.dispatchEvent(new Event(ROUTE_CHANGE_EVENT))
  return true
}

export const resolvePath = (path: string): AppRoute => {
  const normalizedPath = normalizePath(path)
  return KNOWN_ROUTES.has(normalizedPath as AppRoute) ? (normalizedPath as AppRoute) : APP_ROUTES.home
}

export const getCurrentPath = (): AppRoute => resolvePath(getRawCurrentPath())

export const navigateTo = (
  path: string,
  options: {
    replace?: boolean
    scrollToTop?: boolean
  } = {},
) => {
  const { replace = false, scrollToTop = true } = options
  const nextPath = resolvePath(path)
  const currentPath = getRawCurrentPath()
  const hasSectionHash = window.location.hash.length > 0 && !window.location.hash.startsWith(HASH_ROUTE_PREFIX)

  if (nextPath === currentPath && !hasSectionHash) return

  const nextHash = `#${nextPath}`

  if (replace) {
    window.history.replaceState({}, '', `${window.location.pathname}${window.location.search}${nextHash}`)
    window.dispatchEvent(new Event(ROUTE_CHANGE_EVENT))
  } else {
    window.location.hash = nextPath
  }

  if (scrollToTop) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

export const navigateToSection = (anchor: string) => {
  const targetAnchor = normalizeAnchor(anchor)
  const alreadyOnHome = getCurrentPath() === APP_ROUTES.home

  if (!alreadyOnHome) {
    navigateTo(APP_ROUTES.home, { scrollToTop: false })
  }

  let attempts = 0

  const tryScroll = () => {
    if (scrollToSection(targetAnchor)) return

    attempts += 1
    if (attempts < SECTION_SCROLL_MAX_ATTEMPTS) {
      window.requestAnimationFrame(tryScroll)
    }
  }

  window.requestAnimationFrame(tryScroll)
}

export const listenToRouteChanges = (onRouteChange: () => void) => {
  window.addEventListener('hashchange', onRouteChange)
  window.addEventListener(ROUTE_CHANGE_EVENT, onRouteChange)

  return () => {
    window.removeEventListener('hashchange', onRouteChange)
    window.removeEventListener(ROUTE_CHANGE_EVENT, onRouteChange)
  }
}
