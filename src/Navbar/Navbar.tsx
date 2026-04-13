import { useState } from 'react'
import logo from '../assets/White Leen 2.png'
import Vision from '../assets/Vision.png'

const navItems = ['الرئيسية', 'من نحن', 'خدماتنا', 'اعمالنا', 'الحلول', 'تواصل معنا']

function Navbar() {
  const [activeItem, setActiveItem] = useState(navItems[0])

  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-[1240px] items-center justify-between pt-5">
      <div className="flex items-center">
        <img src={logo} alt="Leen logo" className="h-[90px] w-[63px] object-contain" />
      </div>
      <div className="hidden rounded-[16px] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] p-[16px] shadow-[0_0_35px_-18px_rgba(56,189,248,0.95)] backdrop-blur lg:flex items-center">
        <nav className="flex items-center">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setActiveItem(item)}
              className={`inline-flex items-center rounded-[8px] px-4 py-2 text-sm transition ${
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
      <div className="text-left">
        <img src={Vision} alt="Leen logo" className="h-[90px] w-auto object-contain" />
      </div>
    </header>
  )
}

export default Navbar
