import { useState } from 'react'
import app6OctoberImage from '../assets/6October App.png'
import web6OctoberImage from '../assets/6October Web.png'
import dreamTechImage from '../assets/Dream Tech.png'
import mgWebsiteImage from '../assets/MG Website.png'
import mgImage from '../assets/MG.png'
import onOneImage from '../assets/On One.png'
import orangeBayImage from '../assets/Orange Bay.png'
import polloImage from '../assets/Pollo.png'
import blueHue from '../assets/Projects Hue.png'
import shagafImage from '../assets/Shagaf.png'
import videoImage from '../assets/Video.png'
import awliAlazmImage from '../assets/ouli El Azm.png'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { navigateTo } from '../routing'

type ProjectCard = {
  id: string
  title: string
  description: string
  image: string
}

const projectCards: ProjectCard[] = [
  {
    id: 'shagaf',
    title: 'تطبيق شغف',
    description: 'حل رقمي متكامل بتجربة استخدام سريعة وواجهة حديثة.',
    image: shagafImage,
  },
  {
    id: 'dream-tech',
    title: 'Dream Tech Mobile App',
    description: 'تطوير تطبيق موبايل يركز على الأداء وسهولة الوصول.',
    image: dreamTechImage,
  },
  {
    id: 'october-app',
    title: 'تطبيق مراكز 6 اكتوبر',
    description: 'منصة تطبيقات ذكية لإدارة الخدمات والعمليات اليومية.',
    image: app6OctoberImage,
  },
  {
    id: 'awli-alazm',
    title: 'تطبيق اولى العزم',
    description: 'حلول تقنية مرنة لدعم التشغيل والتوسع بثبات.',
    image: awliAlazmImage,
  },
  {
    id: 'october-web',
    title: 'موقع مراكز 6 اكتوبر',
    description: 'تصميم وتطوير موقع احترافي يعكس هوية العلامة.',
    image: web6OctoberImage,
  },
  {
    id: 'mg-web',
    title: 'MG Website',
    description: 'واجهة ويب حديثة مع تجربة تصفح واضحة وسلسة.',
    image: mgWebsiteImage,
  },
  {
    id: 'orange-bay',
    title: 'Orange Bay Platform',
    description: 'منصة رقمية متكاملة تجمع السرعة والدقة في التنفيذ.',
    image: orangeBayImage,
  },
  {
    id: 'on-one',
    title: 'On One App',
    description: 'تطبيق عملي يدعم سير العمل ويبسّط الإجراءات.',
    image: onOneImage,
  },
  {
    id: 'pollo',
    title: 'Pollo Project',
    description: 'تجربة استخدام محسنة مع بنية تقنية قابلة للتطوير.',
    image: polloImage,
  },
  {
    id: 'mg-brand',
    title: 'MG Digital Experience',
    description: 'تحسينات تقنية وبصرية لرفع كفاءة التفاعل مع المنتج.',
    image: mgImage,
  },
  {
    id: 'video',
    title: 'Video Showcase',
    description: 'محتوى بصري يدعم الهوية الرقمية ويبرز القيمة.',
    image: videoImage,
  },
  {
    id: 'portfolio',
    title: 'Portfolio Expansion',
    description: 'مشروع تطوير متكامل يركز على الجودة وقابلية النمو.',
    image: shagafImage,
  },
]

const CARDS_PER_PAGE = 9

function Projects() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(projectCards.length / CARDS_PER_PAGE)
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE
  const currentCards = projectCards.slice(startIndex, startIndex + CARDS_PER_PAGE)

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return

    setCurrentPage(page)
    const projectsSection = document.querySelector<HTMLElement>('#projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main dir="rtl" className="relative min-h-screen overflow-x-hidden bg-[rgba(14,14,17,1)] text-slate-100">
      <img
        src={blueHue}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 w-[min(1600px,90vw)] max-w-none -translate-x-1/2 motion-shimmer"
      />

      <div className="relative z-10">
        <div className="relative mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-0">
          <Navbar />
        </div>

        <section
          id="projects"
          className="mx-auto min-h-screen w-full max-w-[1240px] px-4 pb-20 pt-[150px] sm:px-6 sm:pt-[170px] lg:px-0 lg:pt-[200px]"
        >
          <div className="mb-8 flex items-center justify-center text-center sm:mb-10">
            <h1 className="shrink-0 whitespace-nowrap text-center text-[30px] font-black text-white sm:text-[44px] lg:text-[56px]">
              ابرز اعمالنا
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {currentCards.map((card) => (
              <article key={card.id} className="motion-shimmer overflow-hidden rounded-[20px] sm:rounded-[22px] xl:rounded-[24px]">
                <div className="flex h-[110px] flex-col justify-center bg-[rgba(255,255,255,0.05)] px-4 text-right sm:h-[130px] sm:px-6 xl:h-[170px] xl:px-8">
                  <h3 className="text-[16px] font-black text-white sm:text-[20px] xl:text-[24px]">{card.title}</h3>
                  <p className="mt-1 text-[12px] leading-5 text-[rgba(255,255,255,0.75)] sm:text-[14px] xl:mt-[18px] xl:text-[20px] xl:leading-7">
                    {card.description}
                  </p>
                </div>
                <img src={card.image} alt={card.title} className="h-[220px] w-full object-cover sm:h-[250px] lg:h-[265px]" />
              </article>
            ))}
          </div>

          <div dir="ltr" className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="h-10 rounded-[10px] border border-[rgba(255,255,255,0.25)] px-4 text-[14px] font-bold text-white transition disabled:cursor-not-allowed disabled:opacity-40"
            >
              السابق
            </button>

            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1
              const isActive = pageNumber === currentPage

              return (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => goToPage(pageNumber)}
                  className={`h-10 min-w-10 rounded-[10px] px-3 text-[14px] font-bold transition ${
                    isActive
                      ? 'bg-[linear-gradient(180deg,#0073FF_0%,#0DA2FF_100%)] text-white'
                      : 'border border-[rgba(255,255,255,0.25)] text-white hover:bg-[rgba(255,255,255,0.08)]'
                  }`}
                >
                  {pageNumber}
                </button>
              )
            })}

            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="h-10 rounded-[10px] border border-[rgba(255,255,255,0.25)] px-4 text-[14px] font-bold text-white transition disabled:cursor-not-allowed disabled:opacity-40"
            >
              التالي
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}

export default Projects
