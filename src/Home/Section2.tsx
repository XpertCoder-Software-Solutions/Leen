import { FaPlay } from 'react-icons/fa'
import videoImage from '../assets/optimized/video.webp'

function Section2() {
  return (
    <section id="about" className="relative mx-auto mb-[120px] w-full max-w-[1240px] scroll-mt-28">
      <span
        aria-hidden="true"
        className="motion-float pointer-events-none absolute -top-10 right-[8%] h-[110px] w-[110px] rounded-full bg-[radial-gradient(circle,rgba(93,46,192,0.35)_0%,rgba(93,46,192,0.06)_72%,rgba(2,6,23,0)_100%)] blur-[55px]"
      />
      <span
        aria-hidden="true"
        className="motion-float-reverse pointer-events-none absolute -bottom-14 left-[6%] h-[120px] w-[120px] rounded-full bg-[radial-gradient(circle,rgba(34,167,217,0.38)_0%,rgba(34,167,217,0.08)_70%,rgba(2,6,23,0)_100%)] blur-[58px]"
      />
      <div className="overflow-hidden rounded-[30px] border border-transparent [background:linear-gradient(rgba(15,23,42,0.7),rgba(15,23,42,0.7))_padding-box,linear-gradient(90deg,#5D2EC0_0.39%,#4264CA_44.78%,#22A7D9_99.66%)_border-box]">
        <div className="relative overflow-hidden rounded-[24px]">
          <img
            src={videoImage}
            alt="رائد أعمال يستخدم هاتفه"
            loading="lazy"
            decoding="async"
            className="h-[240px] w-full object-cover sm:h-[340px] md:h-[420px] lg:h-[520px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050812]/70 via-[#050812]/20 to-transparent" />
          <span aria-hidden="true" className="motion-sheen-bar" />
          <button
            type="button"
            className="motion-glow-pulse absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-cyan-200/70 bg-white/90 px-4 py-2 text-[11px] font-bold text-slate-900 sm:px-5 sm:text-xs"
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
