import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'

import blueHue from '../assets/optimized/blue-hue.webp'

function Home() {
  return (
    <main dir="rtl" className="relative min-h-screen overflow-x-hidden text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[rgba(14,14,17,1)]" />
      <img
        src={blueHue}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="low"
        decoding="async"
        width={1600}
        height={1575}
        className="pointer-events-none absolute left-1/2 w-[min(1600px,140vw)] max-w-none -translate-x-1/2 motion-shimmer"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="motion-float absolute -top-20 right-[2%] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(34,167,217,0.38)_0%,rgba(34,167,217,0.05)_72%,rgba(2,6,23,0)_100%)] blur-[90px]" />
        <span className="motion-float-reverse absolute left-[-90px] top-[34%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(93,46,192,0.32)_0%,rgba(93,46,192,0.05)_72%,rgba(2,6,23,0)_100%)] blur-[110px]" />
        <span className="motion-float-soft absolute bottom-[13%] right-[8%] h-[220px] w-[220px] rounded-full border border-cyan-300/15 bg-[radial-gradient(circle,rgba(66,100,202,0.3)_0%,rgba(2,6,23,0)_74%)] blur-[80px]" />
      </div>
      <div className="relative z-10">
        <div className="relative mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-0">
          <Navbar />
          <Section1 />
        </div>

        <Section2 />
        <div className="motion-section-reveal is-visible cv-auto">
          <Section3 />
        </div>
        <div className="motion-section-reveal is-visible cv-auto">
          <Section4 />
        </div>
        <div className="motion-section-reveal is-visible cv-auto">
          <Section5 />
        </div>
        <div className="motion-section-reveal is-visible cv-auto">
          <Section6 />
        </div>
        <div className="motion-section-reveal is-visible cv-auto">
          <Footer />
        </div>
      </div>
    </main>
  )
}

export default Home
