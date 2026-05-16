const SITE_URL = (import.meta.env.VITE_SITE_URL ?? 'https://leen.net.sa').replace(/\/+$/, '')
const DEFAULT_IMAGE_PATH = '/og-image.webp'
const DEFAULT_LOCALE = 'ar_SA'
const DEFAULT_KEYWORDS =
  'لين للحلول الذكية, حلول تقنية, تطوير مواقع, تطبيقات جوال, ERP, تسويق إلكتروني, التحول الرقمي, السعودية'

type RouteSeo = {
  title: string
  description: string
  keywords: string
  path: string
  type: 'website' | 'article'
}

const ROUTE_SEO: Record<string, RouteSeo> = {
  '/': {
    title: 'لين للحلول الذكية | حلول تقنية ذكية تدفع أعمالك نحو المستقبل',
    description:
      'لين للحلول الذكية تقدم حلولًا رقمية متكاملة تشمل تصميم وتطوير المواقع، تطبيقات الهواتف، أنظمة ERP، والتسويق الإلكتروني في السعودية.',
    keywords: DEFAULT_KEYWORDS,
    path: '/',
    type: 'website',
  },
  '/all-projects': {
    title: 'أعمالنا ومشاريعنا | لين للحلول الذكية',
    description:
      'استعرض أبرز مشاريع لين للحلول الذكية في تصميم وتطوير المواقع والتطبيقات وتجارب رقمية عالية الأداء لقطاعات متعددة.',
    keywords: `${DEFAULT_KEYWORDS}, أعمالنا, مشاريع تقنية, portfolio`,
    path: '/all-projects',
    type: 'website',
  },
}

function normalizePath(path: string): string {
  const pathWithoutQuery = path.split(/[?#]/)[0] ?? '/'
  const trimmedPath = pathWithoutQuery.replace(/\/+$/, '')
  return trimmedPath === '' ? '/' : trimmedPath
}

function toAbsoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalizedPath}`
}

function upsertMetaByName(name: string, content: string): void {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('name', name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertMetaByProperty(property: string, content: string): void {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('property', property)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertCanonicalLink(href: string): void {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

function upsertJsonLdScript(id: string, data: Record<string, unknown>): void {
  let element = document.head.querySelector<HTMLScriptElement>(`script#${id}`)
  if (!element) {
    element = document.createElement('script')
    element.id = id
    element.type = 'application/ld+json'
    document.head.appendChild(element)
  }
  element.textContent = JSON.stringify(data)
}

function buildWebPageJsonLd(title: string, description: string, canonicalUrl: string) {
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'الرئيسية',
      item: `${SITE_URL}/`,
    },
  ]

  if (canonicalUrl.endsWith('/all-projects')) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'أعمالنا',
      item: canonicalUrl,
    })
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: canonicalUrl,
    inLanguage: 'ar-SA',
    isPartOf: {
      '@type': 'WebSite',
      name: 'لين للحلول الذكية',
      url: `${SITE_URL}/`,
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    },
  }
}

export function applyRouteSeo(path: string): void {
  const normalizedPath = normalizePath(path)
  const seo = ROUTE_SEO[normalizedPath] ?? ROUTE_SEO['/']
  const canonicalUrl = toAbsoluteUrl(seo.path)
  const ogImageUrl = toAbsoluteUrl(DEFAULT_IMAGE_PATH)

  document.documentElement.lang = 'ar'
  document.documentElement.dir = 'rtl'
  document.title = seo.title

  upsertMetaByName('description', seo.description)
  upsertMetaByName('keywords', seo.keywords)
  upsertMetaByName('robots', 'index, follow')
  upsertMetaByName('author', 'لين للحلول الذكية')
  upsertMetaByName('twitter:card', 'summary_large_image')
  upsertMetaByName('twitter:title', seo.title)
  upsertMetaByName('twitter:description', seo.description)
  upsertMetaByName('twitter:image', ogImageUrl)

  upsertMetaByProperty('og:title', seo.title)
  upsertMetaByProperty('og:description', seo.description)
  upsertMetaByProperty('og:type', seo.type)
  upsertMetaByProperty('og:url', canonicalUrl)
  upsertMetaByProperty('og:image', ogImageUrl)
  upsertMetaByProperty('og:locale', DEFAULT_LOCALE)
  upsertMetaByProperty('og:site_name', 'لين للحلول الذكية')

  upsertCanonicalLink(canonicalUrl)
  upsertJsonLdScript('route-jsonld', buildWebPageJsonLd(seo.title, seo.description, canonicalUrl))
}
