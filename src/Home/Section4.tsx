import { useEffect, useState } from 'react'
import { navigateTo } from '../routing'
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
const DISPLAYED_PROJECTS_CACHE_KEY = 'leen:displayed-projects'
const PROJECTS_CACHE_TTL_MS = 5 * 60 * 1000

const loadingProjectCards = [1, 2, 3, 4]
let displayedProjectCardsMemoryCache: ProjectCard[] | null = null

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
    id: String(project.id ?? `displayed-project-${index}`),
    title: project.name?.trim() || 'مشروع رقمي',
    description: project.description?.trim() || 'تفاصيل المشروع ستتوفر قريباً.',
    image: resolveProjectImage(project.photo),
  }
}

function Section4() {
  const [projectCards, setProjectCards] = useState<ProjectCard[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (displayedProjectCardsMemoryCache) {
      setProjectCards(displayedProjectCardsMemoryCache)
      setIsLoading(false)
      return
    }

    const cachedProjects = readSessionCache<ProjectCard[]>(DISPLAYED_PROJECTS_CACHE_KEY)
    if (cachedProjects) {
      displayedProjectCardsMemoryCache = cachedProjects
      setProjectCards(cachedProjects)
      setIsLoading(false)
      return
    }

    const controller = new AbortController()

    const loadDisplayedProjects = async () => {
      setIsLoading(true)

      try {
        const response = await fetchWithTimeout(`${API_BASE_URL}/api/projects/displayed`, {
          signal: controller.signal,
          headers: {
            Accept: 'application/json',
          },
        })

        if (!response.ok) throw new Error(`Failed with status ${response.status}`)

        const payload: unknown = await response.json()
        const apiProjects = normalizeApiProjects(payload)
        const mappedCards = apiProjects.map(mapApiProjectToCard)

        displayedProjectCardsMemoryCache = mappedCards
        setProjectCards(mappedCards)
        writeSessionCache(DISPLAYED_PROJECTS_CACHE_KEY, mappedCards, PROJECTS_CACHE_TTL_MS)
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') return
        setProjectCards([])
      } finally {
        setIsLoading(false)
      }
    }

    void loadDisplayedProjects()

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <section id="projects" className="relative mb-[120px] mt-[40px] overflow-visible scroll-mt-28">
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 pt-2 sm:px-6 md:pt-0 lg:px-0">
        <div dir="ltr" className="relative mb-6 flex items-center justify-between gap-3 sm:mb-8 sm:gap-6">
          <button
            type="button"
            onClick={() => navigateTo('/all-projects')}
            className="brand-btn relative h-9 w-[146px] appearance-none rounded-[10px] border-none text-[13px] font-bold text-white outline-none sm:h-12 sm:w-[222px] sm:rounded-[12px] sm:text-[20px]"
          >
            عرض جميع اعمالنا
          </button>

          <h2 className="shrink-0 whitespace-nowrap text-right text-[24px] font-black tracking-tight text-white sm:text-[44px] lg:text-[56px]">
            ابرز اعمالنا
          </h2>
        </div>

        <div className="block">
          <div className="no-scrollbar -mx-4 overflow-x-auto px-4 touch-pan-x sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
            <div className="flex w-max snap-x snap-mandatory justify-start gap-4 sm:gap-5 lg:gap-6">
              {isLoading
                ? loadingProjectCards.map((loadingCard) => (
                    <article
                      key={loadingCard}
                      className="glass-card cv-auto w-[84vw] max-w-[330px] shrink-0 snap-start overflow-hidden rounded-[20px] sm:w-[66vw] sm:max-w-[420px] sm:rounded-[22px] md:w-[56vw] md:max-w-[460px] lg:w-[460px] xl:w-[500px] xl:rounded-[24px]"
                    >
                      <div className="h-[110px] animate-pulse bg-[rgba(255,255,255,0.08)] sm:h-[130px] xl:h-[170px]" />
                      <div className="h-[200px] animate-pulse bg-[rgba(255,255,255,0.05)] sm:h-[240px] md:h-[250px] lg:h-[265px] xl:h-[265px]" />
                    </article>
                  ))
                : projectCards.map((card) => (
                    <article
                      key={card.id}
                      className="glass-card elevated-card group motion-shimmer cv-auto w-[84vw] max-w-[330px] shrink-0 snap-start overflow-hidden rounded-[20px] sm:w-[66vw] sm:max-w-[420px] sm:rounded-[22px] md:w-[56vw] md:max-w-[460px] lg:w-[460px] xl:w-[500px] xl:rounded-[24px]"
                    >
                      <div
                        className="flex h-[110px] flex-col justify-center bg-[rgba(255,255,255,0.03)] px-4 text-right sm:h-[130px] sm:px-6 xl:h-[170px] xl:px-8"
                        dir="rtl"
                      >
                        <h3 className="text-[16px] font-black text-white sm:text-[20px] xl:text-[24px]">{card.title}</h3>
                        <p className="mt-1 text-[12px] leading-5 text-slate-300 sm:text-[14px] xl:mt-[18px] xl:text-[20px] xl:leading-7">
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
                          className="h-[200px] w-full object-cover transition duration-500 group-hover:scale-[1.04] sm:h-[240px] md:h-[250px] lg:h-[265px] xl:h-[265px]"
                        />
                      ) : (
                        <div className="flex h-[200px] items-center justify-center bg-[rgba(255,255,255,0.04)] text-[13px] text-[rgba(255,255,255,0.7)] sm:h-[240px] md:h-[250px] lg:h-[265px] xl:h-[265px]">
                          الصورة غير متاحة
                        </div>
                      )}
                    </article>
                  ))}
            </div>
          </div>
          {!isLoading && projectCards.length === 0 ? (
            <p className="mt-6 px-1 text-right text-[14px] text-[rgba(255,255,255,0.7)] sm:text-[16px]">
              لا توجد مشاريع معروضة حالياً.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default Section4
