import { useEffect, useRef } from 'react'
import { BsStars } from 'react-icons/bs'
import { RiStarSFill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import logo from '../assets/Logo.svg'
import logo1 from '../assets/Logo-1.svg'
import logo2 from '../assets/Logo-2.svg'
import logo3 from '../assets/Logo-3.svg'
import logo4 from '../assets/Logo-4.svg'
import logo5 from '../assets/Logo-5.svg'
import videoImage from '../assets/Video.png'

const partnerLogos = [logo, logo1, logo2, logo3, logo4, logo5 , logo, logo1, logo2, logo3, logo4, logo5 , logo, logo1, logo2, logo3, logo4, logo5 , logo, logo1, logo2, logo3, logo4, logo5]

function Section1() {
  const logosScrollerRef = useRef<HTMLDivElement | null>(null)

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
    <section className="relative pb-16 pt-[200px] text-center w-[1240px] mx-auto items-center">
      <span className="inline-flex items-center w-[167px] rounded-full border border-[rgba(62,78,145,1)] bg-[rgba(62,78,145,0.5)] px-[8px] py-[10px] text-xs text-[#FDFDFD] text-[16px] gap-2">
       <BsStars className=""/> لين للحلول الذكية
      </span>

      <h1 className="mx-auto mt-[40px] w-[994px] text-[74px] font-bold leading-tight text-white md:text-[74px]">
        حلول تقنية ذكية تدفع أعمالك نحو المستقبل
      </h1>

      <p className="mx-auto mt-[30px] max-w-[994px] text-[24px]">
       في لين للحلول الذكية نقدم حلولًا رقمية متكاملة تساعد الشركات على التطور والنمو من خلال أحدث تقنيات البرمجة، التصميم، الشبكات، والتسويق الإلكتروني.</p>

      <div className="mt-[40px] flex flex-wrap items-center justify-center gap-4">
        <button className="h-[53px] w-[160px] appearance-none rounded-[12px] border-none bg-[linear-gradient(180deg,#0073FF_0%,#0DA2FF_100%)] text-[20px] font-bold text-white outline-none transition hover:brightness-110 focus:outline-none [box-shadow:0px_0px_0px_5px_rgba(255,255,255,1),0px_0px_0px_4px_rgba(224,233,242,1),0px_3.71px_4.85px_0px_rgba(87,177,255,0.15),0px_10.27px_13.4px_0px_rgba(87,177,255,0.22),0px_24.72px_32.26px_0px_rgba(87,177,255,0.19),0px_42px_107px_0px_rgba(87,177,255,0.34),inset_0px_1px_4px_2px_rgba(210,234,255,1),inset_0px_1px_18px_2px_rgba(210,234,255,1)]">
         خدمتنا
        </button>
        <button className="rounded-[12px] w-[160px] h-[53px] border border-cyan-300/30 bg-[#FDFDFD] text-[20px] font-bold transition hover:border-cyan-300/70 [box-shadow:0px_0px_0px_5px_rgba(255,255,255,1),0px_0px_0px_4px_rgba(224,233,242,1),0px_3.71px_4.85px_0px_rgba(87,177,255,0.15),0px_10.27px_13.4px_0px_rgba(87,177,255,0.22),0px_24.72px_32.26px_0px_rgba(87,177,255,0.19),0px_42px_107px_0px_rgba(87,177,255,0.34),inset_0px_1px_4px_2px_rgba(210,234,255,1),inset_0px_1px_18px_2px_rgba(210,234,255,1)]">
          <span className="bg-[linear-gradient(90deg,#5D2EC0_0.39%,#4264CA_44.78%,#22A7D9_99.66%)] bg-clip-text text-transparent">
            تواصل معنا
          </span>
        </button>
      </div>
      <div className='w-[1240px]'>
      <div className="mt-[138px] flex items-center justify-center gap-[4px] text-[#E6B919]">
        <RiStarSFill className='w-[16px] h-[16px]' />
        <RiStarSFill className='w-[16px] h-[16px]' />
        <RiStarSFill className='w-[16px] h-[16px]' />
        <RiStarSFill className='w-[16px] h-[16px]' />
        <RiStarSFill className='w-[16px] h-[16px]' />
      </div>
      <p className="mt-[20px] text-[24px] font-bold text-[#FDFDFD]">4.9/5 من 3,940 عميل</p>
      <div ref={logosScrollerRef} className="no-scrollbar mt-6 w-full max-w-[1240px] overflow-x-auto">
        <div className="mx-auto flex w-max min-w-full items-center gap-8 px-2 py-1">
          {partnerLogos.map((logoSrc, index) => (
            <img
              key={`${logoSrc}-${index}`}
              src={logoSrc}
              alt={`Partner logo ${index + 1}`}
              className="h-[53px] w-[160px] shrink-0 object-contain"
            />
          ))}
        </div>
      </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-[30px] border border-transparent p-[10px] [background:linear-gradient(rgba(15,23,42,0.7),rgba(15,23,42,0.7))_padding-box,linear-gradient(90deg,#5D2EC0_0.39%,#4264CA_44.78%,#22A7D9_99.66%)_border-box]">
        <div className="relative overflow-hidden rounded-[24px]">
          <img
            src={videoImage}
            alt="رائد أعمال يستخدم هاتفه"
            className="h-[420px] w-full object-cover md:h-[520px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050812]/70 via-[#050812]/20 to-transparent" />
          <button className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-cyan-200/70 bg-white/90 px-5 py-2 text-xs font-bold text-slate-900">
            Play Video
            <FaPlay className="h-3 w-3" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Section1
