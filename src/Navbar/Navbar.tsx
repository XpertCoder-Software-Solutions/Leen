import { useEffect, useState, type MouseEvent } from 'react'
import { FiMenu } from 'react-icons/fi'
import logo from '../assets/optimized/white-leen.webp'
import Vision from '../assets/optimized/vision.webp'
import { getCurrentPath, navigateTo } from '../routing'

const navItems = ['الرئيسية', 'من نحن', 'خدماتنا', 'اعمالنا', 'لماذا نحن', 'تواصل معنا']
const navItemAnchors: Record<string, string> = {
  'الرئيسية': '#home',
  'من نحن': '#about',
  'خدماتنا': '#services',
  'اعمالنا': '#projects',
  'لماذا نحن': '#why-choose-us',
  'تواصل معنا': '#contact',
}

function Navbar() {
  const [activeItem, setActiveItem] = useState(navItems[0])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToAnchor = (targetAnchor: string) => {
    const targetSection = document.querySelector<HTMLElement>(targetAnchor)
    if (!targetSection) return false

    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', targetAnchor)
    return true
  }

  const navigateHomeAndScroll = (targetAnchor: string) => {
    navigateTo('/')

    let attempts = 0
    const maxAttempts = 60

    const tryScroll = () => {
      if (scrollToAnchor(targetAnchor)) return

      attempts += 1
      if (attempts < maxAttempts) {
        window.requestAnimationFrame(tryScroll)
      }
    }

    window.requestAnimationFrame(tryScroll)
  }

  useEffect(() => {
    const sectionEntries = navItems
      .map((item) => {
        const sectionSelector = navItemAnchors[item]
        if (!sectionSelector) return null

        const sectionElement = document.querySelector<HTMLElement>(sectionSelector)
        if (!sectionElement) return null

        return { item, sectionElement }
      })
      .filter((entry): entry is { item: string; sectionElement: HTMLElement } => entry !== null)

    if (!sectionEntries.length) return

    const updateActiveOnScroll = () => {
      const triggerPosition = window.scrollY + window.innerHeight * 0.35
      let currentItem = sectionEntries[0].item

      for (const entry of sectionEntries) {
        if (entry.sectionElement.offsetTop <= triggerPosition) {
          currentItem = entry.item
        }
      }

      setActiveItem((prev) => (prev === currentItem ? prev : currentItem))
    }

    updateActiveOnScroll()
    window.addEventListener('scroll', updateActiveOnScroll, { passive: true })
    window.addEventListener('resize', updateActiveOnScroll)

    return () => {
      window.removeEventListener('scroll', updateActiveOnScroll)
      window.removeEventListener('resize', updateActiveOnScroll)
    }
  }, [])

  const handleItemClick = (event: MouseEvent<HTMLAnchorElement>, item: string) => {
    const targetAnchor = navItemAnchors[item]

    if (!targetAnchor) {
      event.preventDefault()
      setActiveItem(item)
      setIsMenuOpen(false)
      return
    }

    event.preventDefault()

    if (getCurrentPath() === '/') {
      scrollToAnchor(targetAnchor)
    } else {
      navigateHomeAndScroll(targetAnchor)
    }

    setActiveItem(item)
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-4 pb-3 pt-3 sm:px-6 sm:pt-4 lg:px-0 lg:pt-5">
        <div className="flex items-center gap-4 sm:gap-5">
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-[rgba(255,255,255,0.22)] bg-[rgba(255,255,255,0.12)] text-white backdrop-blur transition md:hidden ${
              isMenuOpen ? 'bg-[rgba(47,153,207,0.22)]' : ''
            }`}
            aria-expanded={isMenuOpen}
            aria-label="فتح القائمة"
          >
            <FiMenu className="h-5 w-5" />
          </button>
          <img
            src={logo}
            alt="Leen logo"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-[64px] w-[45px] object-contain sm:h-[78px] sm:w-[55px] lg:h-[90px] lg:w-[63px]"
          />
        </div>
        <div className="hidden items-center rounded-[16px] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] p-3 shadow-[0_0_35px_-18px_rgba(56,189,248,0.95)] backdrop-blur md:flex lg:p-[16px]">
          <nav className="flex items-center">
            {navItems.map((item) => (
              <a
                key={item}
                href={navItemAnchors[item] ?? '#'}
                onClick={(event) => handleItemClick(event, item)}
                className={`inline-flex items-center rounded-[8px] px-2.5 py-2 text-xs transition lg:px-4 lg:text-sm ${
                  activeItem === item
                    ? 'bg-[rgba(15,14,22,1)] text-white'
                    : 'text-slate-200 hover:bg-sky-500/15 hover:text-cyan-200'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={Vision}
            alt="Vision logo"
            loading="eager"
            decoding="async"
            className="h-[60px] w-auto object-contain sm:h-[72px] lg:h-[90px]"
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 md:hidden">
        <div
          className={`overflow-hidden rounded-[16px] border border-[rgba(255,255,255,0.2)] bg-[rgba(15,14,22,0.88)] backdrop-blur transition-all ${
            isMenuOpen ? 'max-h-[340px] p-3 opacity-100' : 'max-h-0 border-transparent p-0 opacity-0'
          }`}
        >
          <nav className="grid gap-2 text-right">
            {navItems.map((item) => (
              <a
                key={item}
                href={navItemAnchors[item] ?? '#'}
                onClick={(event) => handleItemClick(event, item)}
                className={`rounded-[10px] px-3 py-2 text-sm transition ${
                  activeItem === item
                    ? 'bg-[rgba(47,153,207,0.22)] text-white'
                    : 'text-slate-200 hover:bg-sky-500/15 hover:text-cyan-200'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
