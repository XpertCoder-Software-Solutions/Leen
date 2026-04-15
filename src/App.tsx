import { Suspense, lazy, useEffect, useState } from 'react'
import { getCurrentPath, listenToRouteChanges } from './routing'

const Home = lazy(() => import('./Home/Home'))
const Projects = lazy(() => import('./Projects/Projects'))

function App() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath)

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(getCurrentPath())
    }

    return listenToRouteChanges(handleRouteChange)
  }, [])

  return (
    <Suspense fallback={<main className="min-h-screen bg-[#040816]" aria-busy="true" />}>
      {currentPath === '/all-projects' ? <Projects /> : <Home />}
    </Suspense>
  )
}

export default App
