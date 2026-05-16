import { useRef, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import { BsStars } from 'react-icons/bs'
import leenFinalVideo from '../assets/leen final.mp4'
import videoCover from '../assets/optimized/VideoCover.webp'

function Section2() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleTogglePlayback = async () => {
    const videoElement = videoRef.current
    if (!videoElement) return

    if (videoElement.paused) {
      try {
        await videoElement.play()
      } catch {
        // Ignore autoplay/play promise errors triggered by browser policies.
      }
      return
    }

    videoElement.pause()
  }

  return (
    <section id="about" className="relative mx-auto mb-[120px] mt-[40px] w-full max-w-[1240px] overflow-visible scroll-mt-28">
      <div className="mx-auto mb-8 max-w-[920px] px-4 text-center sm:mb-10 sm:px-6 lg:px-0">
          <div className="motion-glow-pulse inline-flex items-center gap-2 rounded-full border border-[#6d8bd5] bg-[#2f3d73]/65 px-4 py-1.5 text-[9px] text-[#e6ecff] shadow-[0_0_22px_-10px_rgba(125,160,255,0.95)] sm:px-6 sm:py-2 sm:text-[16px] lg:text-[16px]">
            <BsStars className="h-3 w-3 text-[#d5defa] sm:h-5 sm:w-5" />
            <span>من نحن</span>
            <BsStars className="h-3 w-3 text-[#d5defa] sm:h-5 sm:w-5" />
          </div>
        <h2 className="mt-8 text-[30px] font-black leading-[1.2] text-white sm:text-[42px] lg:text-[52px]">
          نصنع حلول رقمية تواكب رؤية أعمالك
        </h2>
        <p className="mx-auto mt-3 max-w-[780px] text-[14px] leading-7 text-slate-300 sm:text-[17px] lg:text-[19px]">
          نطوّر منتجات رقمية عالية الجودة تجمع بين الأداء، التصميم، وتجربة الاستخدام الفعلية لمساعدة
          شركتك على النمو بثقة.
        </p>
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-[8%] h-[110px] w-[110px] rounded-full bg-[radial-gradient(circle,rgba(93,46,192,0.35)_0%,rgba(93,46,192,0.06)_72%,rgba(2,6,23,0)_100%)] blur-[55px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-14 left-[6%] h-[120px] w-[120px] rounded-full bg-[radial-gradient(circle,rgba(34,167,217,0.38)_0%,rgba(34,167,217,0.08)_70%,rgba(2,6,23,0)_100%)] blur-[58px]"
      />
      <div className="glass-card overflow-hidden rounded-[30px] border border-transparent">
        <div className="relative overflow-hidden rounded-[24px]">
          <video
            ref={videoRef}
            src={leenFinalVideo}
            playsInline
            preload="none"
            poster={videoCover}
            width={1400}
            height={934}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            tabIndex={0}
            onClick={() => {
              void handleTogglePlayback()
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                void handleTogglePlayback()
              }
            }}
            aria-label="Video player, press to play or pause"
            className="h-[240px] w-full cursor-pointer bg-[#050812] object-cover sm:h-[340px] md:h-[420px] lg:h-[520px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050812]/45 via-[#050812]/10 to-transparent"
          />
          <span aria-hidden="true" className="pointer-events-none motion-sheen-bar" />
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              void handleTogglePlayback()
            }}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            className="motion-glow-pulse absolute left-1/2 top-1/2 inline-flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-[#0b1024]/70 text-white shadow-[0_0_30px_-8px_rgba(34,167,217,0.9)] backdrop-blur-md transition hover:scale-105 sm:h-14 sm:w-14"
          >
            {isPlaying ? <FaPause className="h-4 w-4 sm:h-5 sm:w-5" /> : <FaPlay className="h-4 w-4 sm:h-5 sm:w-5" />}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Section2
