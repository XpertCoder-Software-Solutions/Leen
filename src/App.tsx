import { Suspense, lazy, useEffect, useState } from 'react'
import { APP_ROUTES, getCurrentPath, listenToRouteChanges, navigateTo } from './routing'
import { applyRouteSeo } from './seo'

const Home = lazy(() => import('./Home/Home'))
const Projects = lazy(() => import('./Projects/Projects'))
const PERFORMANCE_LITE_CLASS = 'perf-lite'
const SCROLLING_CLASS = 'is-scrolling'

function App() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath)

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(getCurrentPath())
    }

    return listenToRouteChanges(handleRouteChange)
  }, [])

  useEffect(() => {
    // Keep home route on hash format (/#/) to match static-host refresh behavior.
    if (currentPath === APP_ROUTES.home && window.location.hash.length === 0) {
      navigateTo(APP_ROUTES.home, { replace: true, scrollToTop: false })
    }
  }, [currentPath])

  useEffect(() => {
    applyRouteSeo(currentPath)
  }, [currentPath])

  useEffect(() => {
    const rootElement = document.documentElement
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updatePerformanceMode = () => {
      rootElement.classList.toggle(PERFORMANCE_LITE_CLASS, reducedMotionQuery.matches)
    }

    const addQueryListener = (query: MediaQueryList, handler: () => void) => {
      const listener = () => handler()
      const legacyQuery = query as MediaQueryList & {
        addListener?: (callback: () => void) => void
        removeListener?: (callback: () => void) => void
      }

      if (typeof query.addEventListener === 'function') {
        query.addEventListener('change', listener)
        return () => query.removeEventListener('change', listener)
      }

      if (typeof legacyQuery.addListener === 'function' && typeof legacyQuery.removeListener === 'function') {
        legacyQuery.addListener(listener)
        return () => legacyQuery.removeListener?.(listener)
      }

      return () => {}
    }

    const removeReducedMotionListener = addQueryListener(reducedMotionQuery, updatePerformanceMode)
    updatePerformanceMode()

    return () => {
      removeReducedMotionListener()
      rootElement.classList.remove(PERFORMANCE_LITE_CLASS)
    }
  }, [])

  useEffect(() => {
    const rootElement = document.documentElement
    let scrollingResetTimeout = 0

    const handleScroll = () => {
      rootElement.classList.add(SCROLLING_CLASS)

      if (scrollingResetTimeout) {
        window.clearTimeout(scrollingResetTimeout)
      }

      scrollingResetTimeout = window.setTimeout(() => {
        rootElement.classList.remove(SCROLLING_CLASS)
      }, 120)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollingResetTimeout) {
        window.clearTimeout(scrollingResetTimeout)
      }
      rootElement.classList.remove(SCROLLING_CLASS)
    }
  }, [])

  return (
    <Suspense fallback={<main className="min-h-screen bg-[#040816]" aria-busy="true" />}>
      {currentPath === APP_ROUTES.allProjects ? <Projects /> : <Home />}
    </Suspense>
  )
}

export default App
