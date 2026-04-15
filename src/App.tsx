import { useEffect, useState } from 'react'
import Home from './Home/Home'
import Projects from './Projects/Projects'
import { getCurrentPath, listenToRouteChanges } from './routing'

function App() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath)

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(getCurrentPath())
    }

    return listenToRouteChanges(handleRouteChange)
  }, [])

  if (currentPath === '/all-projects') {
    return <Projects />
  }

  return <Home />
}

export default App
