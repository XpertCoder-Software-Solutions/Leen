const reasons = [
  'خبرة واسعة',
  'حلول مخصصة',
  'فريق متخصص',
  'نتائج قابلة للقياس',
  'تسليم في الوقت',
  'دعم مستمر',
  'أمان عالي',
  'اعتماد أحدث التقنيات',
]

function Section4() {
  return (
    <section id="solutions" className="scroll-mt-28 border-y border-white/5 bg-[#050812] py-20">
      <div className="mx-auto max-w-[1180px] px-4 text-center md:px-6">
        <h2 className="text-3xl font-black text-white md:text-5xl">لماذا لين للحلول الذكية؟</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300">
          فريقنا يجمع بين الفهم التقني العميق والرؤية التجارية لتقديم أثر حقيقي.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={reason}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-right shadow-[0_0_22px_-18px_rgba(56,189,248,0.9)]"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/15 text-xs font-bold text-cyan-200">
                {`0${index + 1}`}
              </span>
              <h3 className="mt-4 text-base font-bold text-white">{reason}</h3>
              <p className="mt-2 text-xs leading-6 text-slate-400">
                حلول عملية مبنية على تجربة تنفيذ فعلية ومؤشرات أداء واضحة.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section4
