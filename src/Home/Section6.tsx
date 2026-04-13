function Section6() {
  return (
    <section className="mx-auto max-w-[1180px] px-4 pb-20 md:px-6">
      <div className="grid gap-6 rounded-[30px] border border-white/10 bg-slate-900/55 p-5 backdrop-blur md:grid-cols-2 md:p-7">
        <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-950">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,47,73,0.35),rgba(8,47,73,0.35)),radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.28),transparent_30%),repeating-linear-gradient(0deg,rgba(30,41,59,0.85)_0px,rgba(30,41,59,0.85)_26px,rgba(51,65,85,0.85)_26px,rgba(51,65,85,0.85)_52px),repeating-linear-gradient(90deg,rgba(30,41,59,0.75)_0px,rgba(30,41,59,0.75)_26px,rgba(51,65,85,0.75)_26px,rgba(51,65,85,0.75)_52px)]" />
          <div className="absolute right-8 top-16 rounded-full border border-cyan-300/40 bg-[#0f172a]/80 px-4 py-2 text-xs text-cyan-100">
            الرياض - المقر الرئيسي
          </div>
          <div className="absolute bottom-10 left-8 rounded-full bg-gradient-to-l from-sky-400 to-blue-600 px-4 py-2 text-xs font-bold text-white shadow-[0_0_24px_-12px_rgba(56,189,248,1)]">
            موقعنا على الخريطة
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#090f23]/90 p-6">
          <h2 className="text-3xl font-black text-white">تواصل معنا</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            تواصل مع فريق لين للحلول الذكية، وسنقوم بالرد خلال يوم عمل واحد لتحديد الخطوة
            المناسبة لمشروعك.
          </p>
          <form className="mt-6 space-y-3">
            <input
              type="text"
              placeholder="Phone"
              className="w-full rounded-xl border border-cyan-500/25 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-cyan-500/25 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full resize-none rounded-xl border border-cyan-500/25 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-to-l from-sky-400 to-blue-600 px-8 py-2.5 text-sm font-bold text-white shadow-[0_0_25px_-12px_rgba(56,189,248,1)]"
            >
              إرسال
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Section6
