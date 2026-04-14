import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Section1 from './Section1'
import Section6 from './Section6'
import blueHue from '../assets/BLUE HUE.png'

function Home() {
  return (
    <main dir="rtl" className="relative min-h-screen overflow-x-hidden text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[rgba(14,14,17,1)]" />
      <img
        src={blueHue}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 w-[min(1600px,140vw)] max-w-none -translate-x-1/2"
      />
      <div className="relative mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-0">
        <Navbar />
        <Section1 />
      </div>

      {/* <Section2 /> */}
      {/* <Section3 /> */}
      {/* <Section4 /> */}
      {/* <Section5 /> */}
      <Section6 />
      <Footer />
    </main>
  )
}

export default Home
