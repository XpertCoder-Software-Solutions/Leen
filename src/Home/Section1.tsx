import { useEffect, useRef } from 'react'
import { BsStars } from 'react-icons/bs'
import { RiStarSFill } from 'react-icons/ri'
import logo from '../assets/Logo.svg'
import logo1 from '../assets/Logo-1.svg'
import logo2 from '../assets/Logo-2.svg'
import logo3 from '../assets/Logo-3.svg'
import logo4 from '../assets/Logo-4.svg'
import logo5 from '../assets/Logo-5.svg'

const partnerLogos = [
  logo,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
]

function Section1() {
  const logosScrollerRef = useRef<HTMLDivElement | null>(null)

  const scrollToContactSection = () => {
    const targetSection = document.querySelector<HTMLElement>('#contact')
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', '#contact')
    }
  }

  useEffect(() => {
    const scroller = logosScrollerRef.current
    if (!scroller) return

    let animationFrameId = 0
    let isPaused = false

    const step = () => {
      if (!isPaused) {
        scroller.scrollLeft += 0.8
        const endOfScroll = scroller.scrollWidth - scroller.clientWidth
        if (scroller.scrollLeft >= endOfScroll - 1) {
          scroller.scrollLeft = 0
        }
      }
      animationFrameId = window.requestAnimationFrame(step)
    }

    const pauseScroll = () => {
      isPaused = true
    }

    const resumeScroll = () => {
      isPaused = false
    }

    animationFrameId = window.requestAnimationFrame(step)
    scroller.addEventListener('mouseenter', pauseScroll)
    scroller.addEventListener('mouseleave', resumeScroll)
    scroller.addEventListener('touchstart', pauseScroll, { passive: true })
    scroller.addEventListener('touchend', resumeScroll)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      scroller.removeEventListener('mouseenter', pauseScroll)
      scroller.removeEventListener('mouseleave', resumeScroll)
      scroller.removeEventListener('touchstart', pauseScroll)
      scroller.removeEventListener('touchend', resumeScroll)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative mx-auto w-full max-w-[1240px] scroll-mt-28 px-0 mb-[120px] pt-[150px] text-center sm:px-0 sm:pt-[170px] lg:px-0 lg:pt-[200px]"
    >
      <span className="motion-glow-pulse inline-flex items-center gap-2 rounded-full border border-[rgba(62,78,145,1)] bg-[rgba(62,78,145,0.5)] px-3 py-2 text-sm text-[#FDFDFD] sm:text-base">
        <BsStars />
        لين للحلول الذكية
      </span>

      <h1 className="motion-shimmer mx-auto mt-8 max-w-[994px] text-[clamp(2rem,7vw,4.625rem)] font-bold leading-[1.2] text-white">
        حلول تقنية ذكية تدفع أعمالك نحو المستقبل
      </h1>

      <p className="mx-auto mt-5 max-w-[994px] text-[clamp(1rem,3.1vw,1.5rem)] leading-relaxed">
        في لين للحلول الذكية نقدم حلولًا رقمية متكاملة تساعد الشركات على التطور والنمو من خلال أحدث
        تقنيات البرمجة، التصميم، الشبكات، والتسويق الإلكتروني.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button className="h-12 w-[150px] appearance-none rounded-[12px] border-none bg-[linear-gradient(180deg,#0073FF_0%,#0DA2FF_100%)] text-lg font-bold text-white outline-none transition hover:brightness-110 focus:outline-none sm:h-[53px] sm:w-[160px] sm:text-[20px] [box-shadow:0px_0px_0px_5px_rgba(255,255,255,1),0px_0px_0px_4px_rgba(224,233,242,1),0px_3.71px_4.85px_0px_rgba(87,177,255,0.15),0px_10.27px_13.4px_0px_rgba(87,177,255,0.22),0px_24.72px_32.26px_0px_rgba(87,177,255,0.19),0px_42px_107px_0px_rgba(87,177,255,0.34),inset_0px_1px_4px_2px_rgba(210,234,255,1),inset_0px_1px_18px_2px_rgba(210,234,255,1)]">
          خدمتنا
        </button>
        <button
          type="button"
          onClick={scrollToContactSection}
          className="h-12 w-[150px] rounded-[12px] border border-cyan-300/30 bg-[#FDFDFD] text-lg font-bold transition hover:border-cyan-300/70 sm:h-[53px] sm:w-[160px] sm:text-[20px] [box-shadow:0px_0px_0px_5px_rgba(255,255,255,1),0px_0px_0px_4px_rgba(224,233,242,1),0px_3.71px_4.85px_0px_rgba(87,177,255,0.15),0px_10.27px_13.4px_0px_rgba(87,177,255,0.22),0px_24.72px_32.26px_0px_rgba(87,177,255,0.19),0px_42px_107px_0px_rgba(87,177,255,0.34),inset_0px_1px_4px_2px_rgba(210,234,255,1),inset_0px_1px_18px_2px_rgba(210,234,255,1)]"
        >
          <span className="bg-[linear-gradient(90deg,#5D2EC0_0.39%,#4264CA_44.78%,#22A7D9_99.66%)] bg-clip-text text-transparent">
            تواصل معنا
          </span>
        </button>
      </div>

      <div className="mx-auto mt-20 w-full lg:mt-[138px]">
        <div className="flex items-center justify-center gap-1 text-[#E6B919]">
          <RiStarSFill className="h-[16px] w-[16px]" />
          <RiStarSFill className="h-[16px] w-[16px]" />
          <RiStarSFill className="h-[16px] w-[16px]" />
          <RiStarSFill className="h-[16px] w-[16px]" />
          <RiStarSFill className="h-[16px] w-[16px]" />
        </div>
        <p className="mt-4 text-[clamp(1.1rem,3.2vw,1.5rem)] font-bold text-[#FDFDFD]">
          4.9/5 من 3,940 عميل
        </p>
        <div ref={logosScrollerRef} className="no-scrollbar mt-6 w-full overflow-x-auto">
          <div className="mx-auto flex w-max min-w-full items-center gap-5 px-2 py-1 sm:gap-8">
            {partnerLogos.map((logoSrc, index) => (
              <img
                key={`${logoSrc}-${index}`}
                src={logoSrc}
                alt={`Partner logo ${index + 1}`}
                className="h-[45px] w-[140px] shrink-0 object-contain sm:h-[53px] sm:w-[160px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1
