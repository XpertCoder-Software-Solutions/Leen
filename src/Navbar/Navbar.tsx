import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import logo from '../assets/White Leen 2.png'
import Vision from '../assets/Vision.png'

const navItems = ['الرئيسية', 'من نحن', 'خدماتنا', 'اعمالنا', 'الحلول', 'تواصل معنا']

function Navbar() {
  const [activeItem, setActiveItem] = useState(navItems[0])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleItemClick = (item: string) => {
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
            className="h-[64px] w-[45px] object-contain sm:h-[78px] sm:w-[55px] lg:h-[90px] lg:w-[63px]"
          />
        </div>
        <div className="hidden items-center rounded-[16px] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] p-3 shadow-[0_0_35px_-18px_rgba(56,189,248,0.95)] backdrop-blur md:flex lg:p-[16px]">
          <nav className="flex items-center">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setActiveItem(item)}
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
                href="#"
                onClick={() => handleItemClick(item)}
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
