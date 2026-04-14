const services = [
  {
    code: '01',
    title: 'تطبيقات ويب متكاملة',
    description: 'حلول مرنة وسريعة تدعم تشغيل الأعمال على نطاق واسع.',
    glow: 'shadow-[0_0_28px_-16px_rgba(56,189,248,0.85)]',
  },
  {
    code: '02',
    title: 'حلول موبايل احترافية',
    description: 'تجربة استخدام انسيابية على iOS و Android بأداء ثابت.',
    glow: 'shadow-[0_0_28px_-16px_rgba(250,204,21,0.8)]',
  },
  {
    code: '03',
    title: 'التحول الرقمي للمؤسسات',
    description: 'ربط الأنظمة الداخلية ورفع الإنتاجية عبر أتمتة ذكية.',
    glow: 'shadow-[0_0_28px_-16px_rgba(34,197,94,0.8)]',
  },
  {
    code: '04',
    title: 'هوية بصرية وتجربة مستخدم',
    description: 'تصميم واجهات جذابة تبني الثقة وتدعم قرار الشراء.',
    glow: 'shadow-[0_0_28px_-16px_rgba(168,85,247,0.82)]',
  },
  {
    code: '05',
    title: 'ذكاء اصطناعي وتحليلات',
    description: 'نماذج تنبؤية ولوحات متابعة فورية لمؤشرات الأداء.',
    glow: 'shadow-[0_0_28px_-16px_rgba(14,165,233,0.82)]',
  },
  {
    code: '06',
    title: 'حماية وتشغيل سحابي',
    description: 'بنية موثوقة مع مراقبة أمنية واستجابة عالية للتوسع.',
    glow: 'shadow-[0_0_28px_-16px_rgba(239,68,68,0.82)]',
  },
]

function Section2() {
  return (
    <section id="services" className="relative scroll-mt-28 border-y border-white/5 bg-[#050413]/80 py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.45),transparent_70%)]" />
      <div className="mx-auto max-w-[1180px] px-4 md:px-6">
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-[radial-gradient(circle,#67e8f9_0%,#2563eb_45%,#020617_100%)] text-xl font-black text-white shadow-[0_0_45px_-16px_rgba(56,189,248,0.95)]">
            AI
          </div>
          <h2 className="text-3xl font-black text-white md:text-5xl">خدماتنا المتميزة</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            نقدم مجموعة متكاملة من الخدمات التقنية المصممة لدعم نمو أعمالك، من التحليل
            والتخطيط وحتى التنفيذ والمتابعة.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.code}
              className={`rounded-3xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur transition hover:-translate-y-1 ${service.glow}`}
            >
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-sm font-bold text-cyan-200">
                {service.code}
              </span>
              <h3 className="text-lg font-bold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section2
