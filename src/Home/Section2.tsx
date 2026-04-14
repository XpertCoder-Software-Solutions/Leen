import { FaPlay } from 'react-icons/fa'
import videoImage from '../assets/Video.png'

function Section2() {
  return (
    <section id="about" className="mx-auto w-full max-w-[1240px] scroll-mt-28 mb-[120px]">
      <div className="overflow-hidden rounded-[30px] border border-transparent [background:linear-gradient(rgba(15,23,42,0.7),rgba(15,23,42,0.7))_padding-box,linear-gradient(90deg,#5D2EC0_0.39%,#4264CA_44.78%,#22A7D9_99.66%)_border-box]">
        <div className="relative overflow-hidden rounded-[24px]">
          <img
            src={videoImage}
            alt="رائد أعمال يستخدم هاتفه"
            className="h-[240px] w-full object-cover sm:h-[340px] md:h-[420px] lg:h-[520px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050812]/70 via-[#050812]/20 to-transparent" />
          <button
            type="button"
            className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-cyan-200/70 bg-white/90 px-4 py-2 text-[11px] font-bold text-slate-900 sm:px-5 sm:text-xs"
          >
            Play Video
            <FaPlay className="h-3 w-3" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Section2
