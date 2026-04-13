import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Section1 from './Section1'
import blueHue from '../assets/BLUE HUE.png'

function Home() {
  return (
    <main dir="rtl" className="relative min-h-screen overflow-x-hidden text-slate-100">
      <div className="pointer-events-none absolute inset-0 rgba(14, 14, 17, 1)" />
      <img
        src={blueHue}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 w-[min(1600px,140vw)] max-w-none -translate-x-1/2 "
      />
      <div className="relative mx-auto max-w-[1240px]">
        <Navbar />
        <Section1 />
      </div>

      {/* <Section2 /> */}
      {/* <Section3 /> */}
      {/* <Section4 /> */}
      {/* <Section5 /> */}
      {/* <Section6 /> */}
      <Footer />
    </main>
  )
}

export default Home
