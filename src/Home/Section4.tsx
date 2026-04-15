import app6OctoberImage from '../assets/6October App.png'
import dreamTechImage from '../assets/Dream Tech.png'
import awliAlazmImage from '../assets/ouli El Azm.png'
import shagafImage from '../assets/Shagaf.png'

type ProjectCard = {
  id: string
  title: string
  description: string
  image: string
}

const projectCards: ProjectCard[] = [
  {
    id: 'shagaf',
    title: 'تطبيق شغف',
    description: 'استكشف مجموعات الكاميرات المزدوجة والخلفيات المتوفرة لدينا.',
    image: shagafImage,
  },
  {
    id: 'dream-tech',
    title: 'Daam Tech Mobile App',
    description: 'استكشف مجموعات الكاميرات المزدوجة والخلفيات المتوفرة لدينا.',
    image: dreamTechImage,
  },
  {
    id: 'october-app',
    title: 'تطبيق مراكز 6 اكتوبر',
    description: 'استكشف مجموعات الكاميرات المزدوجة والخلفيات المتوفرة لدينا.',
    image: app6OctoberImage,
  },
  {
    id: 'awli-alazm',
    title: 'تطبيق اولى العزم',
    description: 'استكشف مجموعات الكاميرات المزدوجة والخلفيات المتوفرة لدينا.',
    image: awliAlazmImage,
  },
]

function Section4() {
  return (
    <section id="projects" className="relative mb-[120px] overflow-x-hidden overflow-y-visible scroll-mt-28">
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 pt-2 sm:px-6 md:pt-0 lg:px-0">
        <div dir="ltr" className="relative mb-6 flex items-center justify-between gap-2 sm:mb-8 sm:gap-6">
          <button
            type="button"
            className="relative h-9 w-[146px] appearance-none rounded-[10px] border-none bg-[linear-gradient(180deg,#0073FF_0%,#0DA2FF_100%)] text-[13px] font-bold text-white outline-none transition hover:brightness-110 focus:outline-none sm:h-12 sm:w-[222px] sm:rounded-[12px] sm:text-[20px] [box-shadow:0px_0px_0px_5px_rgba(255,255,255,1),0px_0px_0px_4px_rgba(224,233,242,1),0px_3.71px_4.85px_0px_rgba(87,177,255,0.15),0px_10.27px_13.4px_0px_rgba(87,177,255,0.22),0px_24.72px_32.26px_0px_rgba(87,177,255,0.19),0px_42px_107px_0px_rgba(87,177,255,0.34),inset_0px_1px_4px_2px_rgba(210,234,255,1),inset_0px_1px_18px_2px_rgba(210,234,255,1)]"
          >
            عرض جميع اعمالنا
          </button>

          <h2 className="shrink-0 whitespace-nowrap text-right text-[24px] font-black text-white sm:text-[44px] lg:text-[56px]">ابرز اعمالنا</h2>
        </div>

        <div className="block">
          <div className="no-scrollbar -mx-4 overflow-x-auto px-4 touch-pan-x sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
            <div className="flex w-max snap-x snap-mandatory justify-start gap-4 sm:gap-5 lg:gap-6">
              {projectCards.map((card) => (
                <article
                  key={card.id}
                  className="motion-shimmer w-[84vw] max-w-[330px] shrink-0 snap-start overflow-hidden rounded-[20px] sm:w-[66vw] sm:max-w-[420px] sm:rounded-[22px] md:w-[56vw] md:max-w-[460px] lg:w-[460px] xl:w-[500px] xl:rounded-[24px]"
                >
                  <div className="flex h-[110px] flex-col justify-center bg-[rgba(255,255,255,0.05)] px-4 text-right sm:h-[130px] sm:px-6 xl:h-[170px] xl:px-8" dir="rtl">
                    <h3 className="text-[16px] font-black text-white sm:text-[20px] xl:text-[24px]">{card.title}</h3>
                    <p className="mt-1 text-[12px] leading-5 text-[rgba(255,255,255,0.75)] sm:text-[14px] xl:mt-[18px] xl:text-[20px] xl:leading-7">{card.description}</p>
                  </div>
                  <img src={card.image} alt={card.title} className="h-[200px] w-full object-cover sm:h-[240px] md:h-[250px] lg:h-[265px] xl:h-auto" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section4
