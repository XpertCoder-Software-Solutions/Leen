import { useEffect, useState, type CSSProperties } from 'react'
import blueHue from '../assets/optimized/projects-hue.webp'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { fetchWithTimeout } from '../utils/fetchWithTimeout'
import { readSessionCache, writeSessionCache } from '../utils/sessionCache'

type ProjectCard = {
  id: string
  title: string
  description: string
  image: string
}

type ApiProject = {
  id?: number | string
  name?: string
  description?: string
  photo?: string
}

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? 'https://api.leen.net.sa').replace(/\/+$/, '')
const ALL_PROJECTS_CACHE_KEY = 'leen:all-projects'
const PROJECTS_CACHE_TTL_MS = 5 * 60 * 1000

const CARDS_PER_PAGE = 9
const loadingProjectCards = Array.from({ length: CARDS_PER_PAGE }, (_, index) => index + 1)
let allProjectCardsMemoryCache: ProjectCard[] | null = null

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function resolveProjectImage(photo: string | undefined): string {
  if (!photo) return ''
  if (/^https?:\/\//i.test(photo) || photo.startsWith('data:') || photo.startsWith('blob:')) return photo
  if (photo.startsWith('//')) return `https:${photo}`

  return `${API_BASE_URL}/${photo.replace(/^\/+/, '')}`
}

function normalizeApiProjects(payload: unknown): ApiProject[] {
  if (Array.isArray(payload)) return payload.filter(isRecord) as ApiProject[]

  if (isRecord(payload) && Array.isArray(payload.data)) {
    return payload.data.filter(isRecord) as ApiProject[]
  }

  return []
}

function mapApiProjectToCard(project: ApiProject, index: number): ProjectCard {
  return {
    id: String(project.id ?? `project-${index}`),
    title: project.name?.trim() || 'مشروع رقمي',
    description: project.description?.trim() || 'تفاصيل المشروع ستتوفر قريباً.',
    image: resolveProjectImage(project.photo),
  }
}

function Projects() {
  const [currentPage, setCurrentPage] = useState(1)
  const [projectCards, setProjectCards] = useState<ProjectCard[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (allProjectCardsMemoryCache) {
      setProjectCards(allProjectCardsMemoryCache)
      setIsLoading(false)
      return
    }

    const cachedProjects = readSessionCache<ProjectCard[]>(ALL_PROJECTS_CACHE_KEY)
    if (cachedProjects) {
      allProjectCardsMemoryCache = cachedProjects
      setProjectCards(cachedProjects)
      setIsLoading(false)
      return
    }

    const controller = new AbortController()

    const loadAllProjects = async () => {
      setIsLoading(true)

      try {
        const response = await fetchWithTimeout(`${API_BASE_URL}/api/projects`, {
          signal: controller.signal,
          headers: {
            Accept: 'application/json',
          },
        })

        if (!response.ok) throw new Error(`Failed with status ${response.status}`)

        const payload: unknown = await response.json()
        const apiProjects = normalizeApiProjects(payload)
        const mappedCards = apiProjects.map(mapApiProjectToCard)

        allProjectCardsMemoryCache = mappedCards
        setProjectCards(mappedCards)
        writeSessionCache(ALL_PROJECTS_CACHE_KEY, mappedCards, PROJECTS_CACHE_TTL_MS)
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') return
        setProjectCards([])
      } finally {
        setIsLoading(false)
      }
    }

    void loadAllProjects()

    return () => {
      controller.abort()
    }
  }, [])

  const totalPages = Math.max(1, Math.ceil(projectCards.length / CARDS_PER_PAGE))

  useEffect(() => {
    setCurrentPage((previousPage) => Math.min(previousPage, totalPages))
  }, [totalPages])

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
        loading="eager"
        fetchPriority="low"
        decoding="async"
        width={1600}
        height={1575}
        className="pointer-events-none absolute left-1/2 top-0 w-[min(1600px,90vw)] max-w-none -translate-x-1/2 motion-shimmer"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="motion-float absolute -top-16 right-[3%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(34,167,217,0.34)_0%,rgba(34,167,217,0.04)_74%,rgba(2,6,23,0)_100%)] blur-[85px]" />
        <span className="motion-float-reverse absolute bottom-[12%] left-[-70px] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(93,46,192,0.26)_0%,rgba(93,46,192,0.04)_74%,rgba(2,6,23,0)_100%)] blur-[100px]" />
      </div>

      <div className="relative z-10">
        <div className="relative mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-0">
          <Navbar />
        </div>

        <section
          id="projects"
          className="mx-auto min-h-screen w-full max-w-[1240px] px-4 pb-20 pt-[140px] sm:px-6 sm:pt-[170px] lg:px-0 lg:pt-[200px]"
        >
          <div className="mb-8 text-center sm:mb-10">
            <span
              style={{ '--enter-delay': '80ms' } as CSSProperties}
              className="motion-glow-pulse motion-hero-item mx-auto inline-flex rounded-full border border-cyan-400/35 bg-cyan-400/10 px-3.5 py-1.5 text-[11px] font-bold text-cyan-100 sm:px-4 sm:text-sm"
            >
              معرض المشاريع
            </span>
            <h1
              style={{ '--enter-delay': '160ms' } as CSSProperties}
              className="motion-hero-item mt-4 text-center text-[28px] font-black tracking-tight text-white sm:text-[44px] lg:text-[56px]"
            >
              ابرز اعمالنا
            </h1>
            <p
              style={{ '--enter-delay': '230ms' } as CSSProperties}
              className="motion-hero-item mx-auto mt-3 max-w-[860px] text-[13px] leading-7 text-slate-300 sm:text-[17px]"
            >
              مجموعة من المشاريع التي نفذناها في مجالات مختلفة مع تركيز واضح على الجودة، الأداء، وتجربة
              المستخدم.
            </p>
          </div>

          <div key={currentPage} className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {isLoading
              ? loadingProjectCards.map((loadingCard, loadingCardIndex) => (
                  <article
                    key={loadingCard}
                    style={{ '--card-delay': `${loadingCardIndex * 50}ms` } as CSSProperties}
                    className="glass-card motion-project-card cv-auto overflow-hidden rounded-[20px] sm:rounded-[22px] xl:rounded-[24px]"
                  >
                    <div className="h-[120px] animate-pulse bg-[rgba(255,255,255,0.08)] sm:h-[140px] xl:h-[176px]" />
                    <div className="h-[210px] animate-pulse bg-[rgba(255,255,255,0.05)] sm:h-[240px] lg:h-[265px]" />
                  </article>
                ))
              : currentCards.map((card, cardIndex) => (
                  <article
                    key={card.id}
                    style={{ '--card-delay': `${cardIndex * 55}ms` } as CSSProperties}
                    className="glass-card elevated-card project-card-shell group motion-project-card cv-auto overflow-hidden rounded-[20px] sm:rounded-[22px] xl:rounded-[24px]"
                  >
                    <span aria-hidden="true" className="project-card-glow-layer" />
                    <span aria-hidden="true" className="project-card-sheen-layer" />
                    <div className="project-card-content relative z-10 flex min-h-[120px] flex-col justify-center bg-[rgba(255,255,255,0.03)] px-4 py-4 text-right sm:min-h-[140px] sm:px-6 sm:py-5 xl:min-h-[176px] xl:px-8 xl:py-7">
                      <h3 className="project-card-title-clamp text-[15px] font-black leading-[1.35] text-white sm:text-[19px] xl:text-[22px]">
                        {card.title}
                      </h3>
                      <p className="project-card-description-clamp mt-1.5 text-[12px] leading-5 text-slate-300 sm:text-[13px] xl:mt-3 xl:text-[16px] xl:leading-7">
                        {card.description}
                      </p>
                    </div>
                    {card.image ? (
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                        className="project-card-media h-[210px] w-full object-cover sm:h-[240px] lg:h-[265px]"
                      />
                    ) : (
                      <div className="project-card-media flex h-[210px] items-center justify-center bg-[rgba(255,255,255,0.04)] text-[13px] text-[rgba(255,255,255,0.7)] sm:h-[240px] lg:h-[265px]">
                        الصورة غير متاحة
                      </div>
                    )}
                  </article>
                ))}
          </div>

          {!isLoading && projectCards.length === 0 ? (
            <p className="mt-8 text-center text-[16px] text-[rgba(255,255,255,0.7)]">لا توجد مشاريع حالياً.</p>
          ) : null}

          {!isLoading && projectCards.length > 0 ? (
            <div dir="ltr" className="no-scrollbar mt-10 flex w-full items-center justify-start gap-2 overflow-x-auto pb-1 sm:justify-center">
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="h-10 shrink-0 rounded-[10px] border border-white/20 bg-white/5 px-3 text-[13px] font-bold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40 sm:px-4 sm:text-[14px]"
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
                    className={`h-10 min-w-10 shrink-0 rounded-[10px] px-3 text-[13px] font-bold transition sm:text-[14px] ${
                      isActive
                        ? 'brand-btn motion-page-pill-active text-white'
                        : 'border border-white/20 bg-white/5 text-white hover:bg-white/10'
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
                className="h-10 shrink-0 rounded-[10px] border border-white/20 bg-white/5 px-3 text-[13px] font-bold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40 sm:px-4 sm:text-[14px]"
              >
                التالي
              </button>
            </div>
          ) : null}
        </section>

        <Footer />
      </div>
    </main>
  )
}

export default Projects
