import { useEffect, useState, type MouseEvent } from 'react'
import { FiMenu } from 'react-icons/fi'
import logo from '../assets/optimized/white-leen.webp'
import Vision from '../assets/optimized/vision.webp'
import { navigateToSection } from '../routing'

const navItems = ['الرئيسية', 'من نحن', 'خدماتنا', 'اعمالنا', 'لماذا نحن', 'تواصل معنا']
const navItemAnchors: Record<string, string> = {
  'الرئيسية': '#home',
  'من نحن': '#about',
  'خدماتنا': '#services',
  'اعمالنا': '#projects',
  'لماذا نحن': '#why-choose-us',
  'تواصل معنا': '#contact',
}
const ACTIVE_TRIGGER_OFFSET = 140

function Navbar() {
  const [activeItem, setActiveItem] = useState(navItems[0])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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

    let animationFrameId = 0

    const updateActiveOnScroll = () => {
      const nextScrolledState = window.scrollY > 18
      setIsScrolled((previousValue) => (previousValue === nextScrolledState ? previousValue : nextScrolledState))

      const triggerPosition = ACTIVE_TRIGGER_OFFSET
      let currentItem = sectionEntries[0].item
      let bestMatchedItem = sectionEntries[0].item
      let bestDistance = Number.POSITIVE_INFINITY

      for (const entry of sectionEntries) {
        const sectionRect = entry.sectionElement.getBoundingClientRect()

        if (sectionRect.top <= triggerPosition) {
          currentItem = entry.item
        }

        const sectionDistance = Math.abs(sectionRect.top - triggerPosition)
        if (sectionDistance < bestDistance) {
          bestDistance = sectionDistance
          bestMatchedItem = entry.item
        }
      }

      if (window.scrollY < 10) {
        currentItem = sectionEntries[0].item
      } else if (bestDistance !== Number.POSITIVE_INFINITY && currentItem === sectionEntries[0].item) {
        currentItem = bestMatchedItem
      }

      setActiveItem((prev) => (prev === currentItem ? prev : currentItem))
    }

    const scheduleActiveUpdate = () => {
      if (animationFrameId) return

      animationFrameId = window.requestAnimationFrame(() => {
        animationFrameId = 0
        updateActiveOnScroll()
      })
    }

    updateActiveOnScroll()
    window.addEventListener('scroll', scheduleActiveUpdate, { passive: true })
    window.addEventListener('resize', scheduleActiveUpdate)

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId)
      }
      window.removeEventListener('scroll', scheduleActiveUpdate)
      window.removeEventListener('resize', scheduleActiveUpdate)
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

    navigateToSection(targetAnchor)

    setActiveItem(item)
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`motion-nav-enter fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-cyan-400/20 bg-[rgba(4,8,22,0.82)] shadow-[0_16px_44px_-28px_rgba(34,167,217,0.9)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div
        data-navbar-main
        className={`mx-auto flex w-full max-w-[1240px] items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-0 ${
          isScrolled ? 'pb-2 pt-2 sm:pb-2.5 sm:pt-2.5 lg:pt-3' : 'pb-3 pt-3 sm:pt-4 lg:pt-5'
        }`}
      >
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
            width={640}
            height={567}
            className="h-[58px] w-auto max-w-[84px] object-contain sm:h-[70px] sm:max-w-[100px] lg:h-[82px] lg:max-w-[116px]"
          />
        </div>
        <div
          className={`hidden items-center rounded-[16px] border p-3 backdrop-blur transition-all duration-300 md:flex lg:p-[16px] ${
            isScrolled
              ? 'border-cyan-300/35 bg-[rgba(12,20,39,0.78)] shadow-[0_10px_36px_-20px_rgba(34,167,217,0.85)]'
              : 'border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] shadow-[0_0_35px_-18px_rgba(56,189,248,0.95)]'
          }`}
        >
          <nav className="flex items-center">
            {navItems.map((item) => (
              <a
                key={item}
                href={navItemAnchors[item] ? `/${navItemAnchors[item]}` : '#'}
                onClick={(event) => handleItemClick(event, item)}
                className={`inline-flex items-center rounded-[8px] px-2.5 py-2 text-xs transition lg:px-4 lg:text-sm ${
                  activeItem === item
                    ? isScrolled
                      ? 'bg-white/18 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.32)]'
                      : 'bg-[rgba(15,14,22,1)] text-white'
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
            width={539}
            height={360}
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
                href={navItemAnchors[item] ? `/${navItemAnchors[item]}` : '#'}
                onClick={(event) => handleItemClick(event, item)}
                className={`rounded-[10px] px-3 py-2 text-sm transition ${
                  activeItem === item
                    ? isScrolled
                      ? 'bg-white/20 text-white'
                      : 'bg-[rgba(47,153,207,0.22)] text-white'
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
