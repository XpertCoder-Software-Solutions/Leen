const projectCards = [
  {
    title: 'تطبيق أول الخير',
    category: 'منصة تجارة رقمية',
    image:
      'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Dawn Tech Mobile',
    category: 'تطبيقات جوال',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'منصة عقود ذكية',
    category: 'بوابة أعمال',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'لوحة تحكم تشغيلية',
    category: 'أنظمة داخلية',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
  },
]

function Section3() {
  return (
    <section id="projects" className="mx-auto max-w-[1180px] scroll-mt-28 px-4 py-20 md:px-6">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div className="text-right">
          <h2 className="text-3xl font-black text-white md:text-5xl">أبرز أعمالنا</h2>
          <p className="mt-3 text-sm text-slate-300">نماذج حقيقية من مشاريع نجحت في السوق.</p>
        </div>
        <button className="rounded-full border border-cyan-400/30 bg-sky-500/10 px-5 py-2 text-sm text-cyan-200">
          عرض المشاريع
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {projectCards.map((project) => (
          <article
            key={project.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="text-xs text-cyan-200/80">{project.category}</p>
              <h3 className="mt-1 text-sm font-bold text-white">{project.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Section3
