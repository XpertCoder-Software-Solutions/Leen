import type { ReactNode } from 'react'

type Feature = {
  title: string
  description: string
  iconClasses: string
  icon: ReactNode
}

type IconBoxProps = {
  iconClasses: string
  icon: ReactNode
}

const features: Feature[] = [
  {
    title: 'خبرة واسعة',
    description: '+10 سنوات خبرة في تقديم الحلول التقنية المتكاملة للشركات والمؤسسات بمختلف القطاعات.',
    iconClasses: 'text-emerald-300 border-emerald-500/35 bg-emerald-500/10 shadow-[0_0_35px_rgba(16,185,129,0.35)]',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="4" width="7" height="7" rx="1.5" />
        <rect x="13" y="4" width="7" height="7" rx="1.5" />
        <rect x="4" y="13" width="7" height="7" rx="1.5" />
        <rect x="13" y="13" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    title: 'حلول مخصصة',
    description: 'نصمم وننفذ حلول تقنية تتناسب مع احتياجات شركتك لضمان أعلى مستوى من الأداء والكفاءة.',
    iconClasses: 'text-amber-300 border-amber-500/35 bg-amber-500/10 shadow-[0_0_35px_rgba(245,158,11,0.35)]',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3 4 7.5 12 12l8-4.5L12 3Z" />
        <path d="M4 7.5V16.5L12 21V12" />
        <path d="M20 7.5V16.5L12 21" />
      </svg>
    ),
  },
  {
    title: 'فريق متخصص',
    description: 'فريق عمل محترف ومتعدد التخصصات يضمن تقديم الدعم الفني والاستشارات بجودة عالية.',
    iconClasses: 'text-violet-300 border-violet-500/35 bg-violet-500/10 shadow-[0_0_35px_rgba(139,92,246,0.35)]',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="8" cy="8" r="2.5" />
        <circle cx="16" cy="7" r="2.5" />
        <circle cx="12" cy="14" r="3" />
        <path d="M4.5 19c.8-2.1 2.3-3.2 4.5-3.2" />
        <path d="M19.5 19c-.8-2.1-2.3-3.2-4.5-3.2" />
      </svg>
    ),
  },
  {
    title: 'استخدام أحدث التقنيات',
    description: 'نعتمد على أحدث الأدوات والتقنيات العالمية لضمان تقديم حلول مبتكرة وفعالة.',
    iconClasses: 'text-cyan-300 border-cyan-500/35 bg-cyan-500/10 shadow-[0_0_35px_rgba(34,211,238,0.35)]',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 4h8l4 4v8l-4 4H8l-4-4V8l4-4Z" />
        <path d="M12 7v10" />
        <path d="M8.5 10.5 12 7l3.5 3.5" />
        <path d="M8.5 13.5 12 17l3.5-3.5" />
      </svg>
    ),
  },
  {
    title: 'التزام بالجودة والمواعيد',
    description: 'نحرص على تقديم مشاريعنا وفق أعلى معايير الجودة وفي الوقت المحدد دون تأخير.',
    iconClasses: 'text-blue-300 border-blue-500/35 bg-blue-500/10 shadow-[0_0_35px_rgba(59,130,246,0.35)]',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
    ),
  },
  {
    title: 'دعم فني مستمر',
    description: 'نوفر دعماً فنياً دائماً لضمان استمرارية عمل الأنظمة وحل أي مشكلة بسرعة وفعالية.',
    iconClasses: 'text-fuchsia-300 border-fuchsia-500/35 bg-fuchsia-500/10 shadow-[0_0_35px_rgba(217,70,239,0.35)]',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 6h16v12H4z" />
        <path d="M8 12h4" />
        <path d="M14 12h2" />
      </svg>
    ),
  },
]

function IconBox({ iconClasses, icon }: IconBoxProps) {
  return (
    <div
      className={`motion-shimmer relative grid h-[64px] w-[64px] place-items-center rounded-2xl border backdrop-blur-sm sm:h-[72px] sm:w-[72px] lg:h-[82px] lg:w-[82px] ${iconClasses}`}
    >
      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.22),transparent_60%)]" />
      {icon}
    </div>
  )
}

function Section5() {
  return (
    <section
      id="why-choose-us"
      dir="rtl"
      className="relative mx-auto mb-[70px] w-full max-w-[1240px] scroll-mt-28 px-4 sm:mb-[90px] sm:px-6 lg:mb-[120px] lg:px-0"
    >
      <span
        aria-hidden="true"
        className="motion-float motion-breathe pointer-events-none absolute bottom-[-140px] right-[-95px] h-[220px] w-[420px] rounded-full opacity-90 blur-3xl sm:h-[280px] sm:w-[280px] lg:bottom-[-300px] lg:right-[-300px] lg:h-[500px] lg:w-[500px] [background:radial-gradient(circle,rgba(34,167,217,0.46)_0%,rgba(66,100,202,0.35)_46%,rgba(93,46,192,0.26)_74%,rgba(2,6,23,0)_100%)]"
      />
      <div className="relative mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-[32px] font-extrabold leading-[1.2] sm:text-[32px] md:text-[48px] lg:text-[64px]">
            لماذا لين للحلول الذكية؟
          </h2>
          <p className="mx-auto mt-4 max-w-[920px] leading-[1.75] text-[#FDFDFD] sm:mt-5 text-[15px] sm:text-[15px] md:text-[20px] lg:mt-6 lg:text-[24px]">
            انطلق بفكرتك، ودع فريق خبراء "رؤى المستقبل" يحولها إلى واقع رقمي ملموس، نصمم وننفذ بأحدث
            التقنيات لتحقيق رؤيتك.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-14 sm:grid-cols-2 sm:gap-y-14 lg:mt-[78px] lg:grid-cols-3 lg:gap-[64px]">
          {features.map((feature) => (
            <article key={feature.title} className="mx-auto w-full max-w-[360px] text-center">
              <div className="mb-5 flex justify-center sm:mb-6">
                <IconBox iconClasses={feature.iconClasses} icon={feature.icon} />
              </div>
              <h3 className="text-[18px] font-extrabold leading-[1.2] sm:text-[20px] md:text-[22px] lg:text-[24px]">{feature.title}</h3>
              <p className="mt-4 text-[13px] leading-7 text-[#FDFDFD] sm:mt-5 sm:text-[14px] md:text-[15px] lg:mt-6 lg:text-[16px] sm:leading-8">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section5
