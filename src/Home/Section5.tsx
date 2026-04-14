const teamMembers = [
  {
    name: 'جون كارلو',
    role: 'رئيس الشركة',
    image:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'جون كين',
    role: 'المدير التنفيذي',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'جون تيرنر',
    role: 'مدير المشاريع',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'جون لين',
    role: 'مطور Full-Stack',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'جون كريستوفر',
    role: 'مصمم UI/UX',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'جون ويلز',
    role: 'مهندس جودة',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=500&q=80',
  },
]

function Section5() {
  return (
    <section id="about-section" className="mx-auto max-w-[1180px] scroll-mt-28 px-4 py-20 md:px-6">
      <div className="rounded-[30px] border border-white/10 bg-slate-900/55 p-6 backdrop-blur md:p-8">
        <h2 className="text-right text-3xl font-black text-white">تعرّف على أعضاء فريقنا</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70"
            >
              <img src={member.image} alt={member.name} className="h-40 w-full object-cover" />
              <div className="p-3 text-center">
                <h3 className="text-sm font-bold text-white">{member.name}</h3>
                <p className="mt-1 text-xs text-slate-400">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section5
