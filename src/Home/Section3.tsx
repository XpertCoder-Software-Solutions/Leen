import type { CSSProperties } from 'react'
import { BsStars } from 'react-icons/bs'
import { IoCloud, IoFlash, IoStar } from 'react-icons/io5'
import { RiMedalFill } from 'react-icons/ri'
import leenMark from '../assets/Leen 2.png'

type ServiceTone = 'green' | 'yellow' | 'orange' | 'purple' | 'blue' | 'red'
type ServiceIcon = 'shield' | 'cloud' | 'medal' | 'bolt'
type ServiceLayout = 'tile' | 'wide'

type Service = {
  id: string
  title: string
  description?: string
  tone: ServiceTone
  icon: ServiceIcon
  layout: ServiceLayout
}

const toneRgb: Record<ServiceTone, string> = {
  green: '34,197,94',
  yellow: '217,249,60',
  orange: '245,158,11',
  purple: '99,102,241',
  blue: '56,189,248',
  red: '239,68,68',
}

const services: Service[] = [
  {
    id: 'erp',
    title: 'برامج تخطيط موارد الشركات',
    tone: 'green',
    icon: 'shield',
    layout: 'tile',
  },
  {
    id: 'marketing',
    title: 'التسويق الإلكتروني',
    tone: 'yellow',
    icon: 'cloud',
    layout: 'tile',
  },
  {
    id: 'consulting',
    title: 'الحلول الإستشارية',
    tone: 'orange',
    icon: 'medal',
    layout: 'tile',
  },
  {
    id: 'infrastructure',
    title: 'أجهزة كمبيوتر و سيرفرات و أنظمة أمنية',
    tone: 'purple',
    icon: 'shield',
    layout: 'tile',
  },
  {
    id: 'websites',
    title: 'تصميم وتطوير المواقع الإلكترونية',
    description: 'تصميم مواقع احترافية بأعلى التقنيات',
    tone: 'blue',
    icon: 'cloud',
    layout: 'wide',
  },
  {
    id: 'mobile',
    title: 'تطبيقات الهواتف الذكية',
    description: 'تصميم تطبيقات مبتكرة لأنظمة iOS و Android',
    tone: 'red',
    icon: 'bolt',
    layout: 'wide',
  },
]

function ServiceIconShape({ icon }: { icon: ServiceIcon }) {
  if (icon === 'shield') {
    return (
      <div className="relative h-32 w-28 sm:h-32 sm:w-28">
        <div className="absolute inset-0 rounded-[40%_40%_48%_48%/28%_28%_72%_72%] border border-[rgba(var(--tone-rgb),0.95)] bg-[linear-gradient(180deg,rgba(var(--tone-rgb),0.42),rgba(var(--tone-rgb),0.1))] shadow-[inset_0_0_30px_rgba(var(--tone-rgb),0.32),0_0_34px_-8px_rgba(var(--tone-rgb),0.68)]" />
        <div className="absolute inset-[16%_16%_20%_16%] rounded-[40%_40%_50%_50%/28%_28%_72%_72%] bg-black/35" />
        <IoStar className="absolute left-1/2 top-[45%] h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.58)]" />
      </div>
    )
  }

  if (icon === 'cloud') {
    return (
      <div className="relative grid h-32 w-32 place-items-center rounded-full border border-[rgba(var(--tone-rgb),0.86)] bg-[radial-gradient(circle,rgba(var(--tone-rgb),0.38)_0%,rgba(var(--tone-rgb),0.2)_42%,rgba(0,0,0,0.3)_100%)] shadow-[inset_0_0_30px_rgba(var(--tone-rgb),0.28),0_0_34px_-8px_rgba(var(--tone-rgb),0.66)] sm:h-36 sm:w-36">
        <div className="absolute inset-3 rounded-full border border-white/12" />
        <IoCloud className="relative z-10 h-11 w-11 text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.52)]" />
      </div>
    )
  }

  const Icon = icon === 'medal' ? RiMedalFill : IoFlash
  return (
    <div className="relative grid h-28 w-28 place-items-center sm:h-32 sm:w-32">
      <div className="absolute inset-0 rotate-45 rounded-[26px] border border-[rgba(var(--tone-rgb),0.9)] bg-[linear-gradient(145deg,rgba(var(--tone-rgb),0.45),rgba(var(--tone-rgb),0.08))] shadow-[inset_0_0_28px_rgba(var(--tone-rgb),0.3),0_0_34px_-7px_rgba(var(--tone-rgb),0.68)]" />
      <div className="absolute inset-4 rotate-45 rounded-[18px] border border-white/10 bg-black/35" />
      <Icon className="relative z-10 h-11 w-11 text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.52)]" />
    </div>
  )
}

function ServiceCard({ service }: { service: Service }) {
  const style = { '--tone-rgb': toneRgb[service.tone] } as CSSProperties
  const isWide = service.layout === 'wide'

  return (
    <article
      style={style}
      className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#020613]/85 transition duration-300 hover:-translate-y-1 ${
        isWide
          ? 'min-h-[300px] shadow-[0_0_62px_-36px_rgba(var(--tone-rgb),0.85)]'
          : 'min-h-[332px] shadow-[0_0_58px_-34px_rgba(var(--tone-rgb),0.85)]'
      }`}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-8%,rgba(var(--tone-rgb),0.34),rgba(2,6,19,0.9)_58%)]" />
      <span className="pointer-events-none absolute inset-[8px] rounded-[24px] border border-[rgba(var(--tone-rgb),0.7)] shadow-[inset_0_0_35px_rgba(var(--tone-rgb),0.2)]" />
      <span className="pointer-events-none absolute inset-[8px] rounded-[24px] [background-image:radial-gradient(rgba(var(--tone-rgb),0.45)_1px,transparent_1.5px)] [background-size:46px_46px] opacity-[0.18]" />
      <span className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full border border-white/10 opacity-25" />
      <span className="pointer-events-none absolute -top-7 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full border border-white/10 opacity-15" />
      <span className="pointer-events-none absolute inset-x-6 bottom-6 h-[92px] [background-image:linear-gradient(to_right,rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(to_top,rgba(148,163,184,0.1)_1px,transparent_1px)] [background-size:34px_20px] opacity-[0.28]" />
      <span className="pointer-events-none absolute bottom-6 left-1/2 h-[92px] w-[70%] -translate-x-1/2 [background:linear-gradient(125deg,transparent_0%,rgba(148,163,184,0.2)_50%,transparent_100%)] opacity-[0.22]" />

      <div
        className={`relative z-10 flex flex-col items-center justify-center gap-6 px-10 text-center ${
          isWide ? 'min-h-[300px]' : 'min-h-[332px]'
        }`}
      >
        <ServiceIconShape icon={service.icon} />
        <h3 className="text-[20px] font-extrabold mt-4 leading-[1.33] text-white sm:text-[22px] lg:text-[24px]">
          {service.title}
        </h3>
      </div>
    </article>
  )
}

function Section3() {
  const topCards = services.filter((service) => service.layout === 'tile')
  const bottomCards = services.filter((service) => service.layout === 'wide')

  return (
    <section
      id="services"
      className="relative mb-[120px] scroll-mt-28 overflow-hidden px-4 sm:px-6 lg:px-0"
    >
      <div className="pointer-events-none absolute inset-x-0 top-[220px] hidden h-[920px] lg:block">
        <span className="absolute left-[4%] top-[210px] h-[360px] w-[360px] rounded-full bg-emerald-500/18 blur-[130px]" />
        <span className="absolute left-[30%] top-[280px] h-[330px] w-[330px] rounded-full bg-cyan-500/16 blur-[130px]" />
        <span className="absolute right-[31%] top-[258px] h-[330px] w-[330px] rounded-full bg-amber-500/16 blur-[130px]" />
        <span className="absolute right-[4%] top-[220px] h-[360px] w-[360px] rounded-full bg-indigo-500/18 blur-[130px]" />
        <span className="absolute left-[26%] top-[620px] h-[360px] w-[360px] rounded-full bg-sky-500/18 blur-[130px]" />
        <span className="absolute right-[24%] top-[620px] h-[360px] w-[360px] rounded-full bg-red-500/18 blur-[130px]" />
      </div>

      <div className="mx-auto w-full max-w-[1240px]">
        <header className="mx-auto max-w-[1240px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#6d8bd5] bg-[#2f3d73]/65 px-4 py-1.5 text-[9px] text-[#e6ecff] shadow-[0_0_22px_-10px_rgba(125,160,255,0.95)] sm:px-6 sm:py-2 sm:text-[16px] lg:text-[16px]">
            <BsStars className="h-3 w-3 text-[#d5defa] sm:h-5 sm:w-5" />
            <span>نقدم مجموعة متكاملة من الخدمات التقنية التي تناسب جميع أنواع الأعمال.</span>
            <BsStars className="h-3 w-3 text-[#d5defa] sm:h-5 sm:w-5" />
          </div>

          <img
            src={leenMark}
            alt="لين"
            className="mx-auto mt-14 h-auto w-[100px] sm:mt-16 sm:w-[120px] lg:w-[153px]"
          />

          <h2 className="mt-[32px] text-[36px] font-black leading-[1.2] text-white sm:text-[48px] lg:text-[56px]">
            خدماتنا المتميزة
          </h2>
          <p className="mx-auto mt-[32px] max-w-[1240px] text-[13px] leading-[1.75] text-[#FDFDFD] sm:text-[18px] lg:text-[24px]">
            نقدم مجموعة متكاملة من الخدمات التقنية التي تناسب جميع أنواع الأعمال الى 4 محاور رئيسية.
          </p>
        </header>

        <div className="mx-auto mt-[87px] max-w-[1240px]">
          <div dir="ltr" className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {topCards.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
            {bottomCards.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3
