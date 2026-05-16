import { useEffect, useState, type CSSProperties } from 'react'
import { BsStars } from 'react-icons/bs'
import { navigateToSection } from '../routing'

const heroHeadingText = 'حلول تقنية ذكية تدفع أعمالك نحو المستقبل'

function Section1() {
  const shouldAnimateHeading =
    typeof window === 'undefined' ? true : !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [typedHeadingText, setTypedHeadingText] = useState(() =>
    shouldAnimateHeading ? '' : heroHeadingText,
  )

  const scrollToContactSection = () => {
    navigateToSection('#contact')
  }

  const scrollToServicesSection = () => {
    navigateToSection('#services')
  }

  useEffect(() => {
    if (!shouldAnimateHeading) {
      return
    }

    const headingCharacters = Array.from(heroHeadingText)
    let characterIndex = 0
    let typingIntervalId = 0

    const typingStartDelayId = window.setTimeout(() => {
      typingIntervalId = window.setInterval(() => {
        characterIndex += 1
        setTypedHeadingText(headingCharacters.slice(0, characterIndex).join(''))

        if (characterIndex >= headingCharacters.length) {
          window.clearInterval(typingIntervalId)
        }
      }, 85)
    }, 330)

    return () => {
      window.clearTimeout(typingStartDelayId)
      if (typingIntervalId) {
        window.clearInterval(typingIntervalId)
      }
    }
  }, [shouldAnimateHeading])

  return (
    <section
      id="home"
      className="relative mx-auto mb-[120px] mt-[40px] w-full max-w-[1240px] overflow-visible scroll-mt-28 px-0 pt-[150px] text-center sm:px-0 sm:pt-[170px] lg:px-0 lg:pt-[200px]"
    >
      <span
        style={{ '--enter-delay': '100ms' } as CSSProperties}
        className="motion-glow-pulse motion-hero-item inline-flex items-center gap-2 rounded-full border border-[rgba(62,78,145,1)] bg-[rgba(62,78,145,0.5)] px-3 py-2 text-sm text-[#FDFDFD] sm:text-base"
      >
        <BsStars />
        لين للحلول الذكية
        <BsStars />
      </span>

      <h1
        style={{ '--enter-delay': '190ms' } as CSSProperties}
        className="motion-shimmer motion-hero-item mx-auto mt-8 max-w-[994px] text-[clamp(2rem,7vw,4.625rem)] font-black leading-[1.15] text-white"
        aria-label={heroHeadingText}
        dir="rtl"
      >
        {typedHeadingText}
        <span
          aria-hidden="true"
          className={`typing-caret ${typedHeadingText === heroHeadingText ? 'is-complete' : ''}`}
        />
      </h1>

      <p
        style={{ '--enter-delay': '290ms' } as CSSProperties}
        className="motion-hero-item mx-auto mt-5 max-w-[860px] text-[clamp(1rem,3.1vw,1.45rem)] leading-relaxed text-slate-200"
      >
        في لين للحلول الذكية نقدم حلولًا رقمية متكاملة تساعد الشركات على التطور والنمو من خلال أحدث
        تقنيات البرمجة، التصميم، الشبكات، والتسويق الإلكتروني.
      </p>

      <div
        style={{ '--enter-delay': '370ms' } as CSSProperties}
        className="motion-hero-item mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <button
          type="button"
          onClick={scrollToServicesSection}
          className="brand-btn h-12 w-[150px] appearance-none rounded-[12px] border-none text-lg font-bold text-white outline-none sm:h-[53px] sm:w-[160px] sm:text-[20px]"
        >
          خدمتنا
        </button>
        <button
          type="button"
          onClick={scrollToContactSection}
          className="ghost-btn h-12 w-[150px] rounded-[12px] text-lg font-bold sm:h-[53px] sm:w-[160px] sm:text-[20px]"
        >
          <span className="bg-[linear-gradient(90deg,#5D2EC0_0.39%,#4264CA_44.78%,#22A7D9_99.66%)] bg-clip-text text-transparent">
            تواصل معنا
          </span>
        </button>
      </div>

    </section>
  )
}

export default Section1
