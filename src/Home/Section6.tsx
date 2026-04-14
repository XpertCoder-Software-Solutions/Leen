import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
function Section6() {
  const googleMapsLocationUrl = 'https://maps.app.goo.gl/D8dxhmJnd17RExcH8'
  const googleMapsEmbedUrl =
    'https://maps.google.com/maps?q=9XC4%2BPV9%20Buraydah%20Saudi%20Arabia&z=16&t=m&hl=ar&iwloc=B&output=embed'

  return (
    <section className="mx-auto mb-[60px] w-full max-w-[1240px] px-4 sm:px-6">
      <div className="grid rounded-[24px] border border-white/10 bg-[#1D1C20] backdrop-blur sm:rounded-[30px] lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center rounded-3xl px-4 py-8 text-center sm:px-6 sm:py-10 md:px-8 md:py-12">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[36px] font-black text-white sm:text-[44px] md:text-[52px] lg:text-[56px]">تواصل معنا</h2>
            <p className="mt-3 text-[15px] leading-7 text-slate-300 sm:text-[16px] md:text-[18px]">
              تواصل مع فريق "لين" اليوم لتحويل أفكارك إلى حلول رقمية مبتكرة. نحن هنا لنجعل رؤيتك حقيقة ملموسة بأحدث التقنيات.
            </p>
          </div>
          <form className="mx-auto mt-6 w-full max-w-xl space-y-5 sm:space-y-6 md:space-y-8">
            <input
              type="text"
              placeholder="رقم الهاتف"
              className="w-full rounded-xl border border-cyan-500/25 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full rounded-xl border border-cyan-500/25 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
            />
            <textarea
              placeholder="الرسالة"
              rows={4}
              className="w-full resize-none rounded-xl border border-cyan-500/25 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
            />
            <button
              type="submit"
              className="h-[53px] w-full appearance-none rounded-[12px] border-none bg-[linear-gradient(180deg,#0073FF_0%,#0DA2FF_100%)] text-lg font-bold text-white outline-none transition hover:brightness-110 focus:outline-none sm:w-[160px] sm:text-[20px] [box-shadow:0px_0px_0px_5px_rgba(255,255,255,1),0px_0px_0px_4px_rgba(224,233,242,1),0px_3.71px_4.85px_0px_rgba(87,177,255,0.15),0px_10.27px_13.4px_0px_rgba(87,177,255,0.22),0px_24.72px_32.26px_0px_rgba(87,177,255,0.19),0px_42px_107px_0px_rgba(87,177,255,0.34),inset_0px_1px_4px_2px_rgba(210,234,255,1),inset_0px_1px_18px_2px_rgba(210,234,255,1)]"
            >
              إرسال
            </button>
          </form>
          <div className="mt-10 grid w-full gap-6 text-right sm:mt-12 sm:grid-cols-2 md:grid-cols-3 md:gap-x-20 lg:gap-x-20 xl:mt-16">
            <div className="relative z-10 flex items-center justify-start gap-[12px] overflow-visible">
              <FiMapPin className="h-[32px] w-[32px] shrink-0 text-[#A0ABBB]" />
              <div>
                <p className="whitespace-nowrap text-[15px] text-[#FDFDFD] lg:text-[14px]">العنوان</p>
                <p className="overflow-visible whitespace-nowrap w-max max-w-none bg-gradient-to-l from-[#16ACEA] to-[#5C2BC2] bg-clip-text text-[13px] font-bold text-transparent lg:text-[10px]">
                  بريدة، المملكة العربية السعودية
                </p>
              </div>
            </div>
            <div className="relative z-10 flex items-center justify-start gap-[12px] overflow-visible">
              <FiMail className="h-[32px] w-[32px] shrink-0 text-[#A0ABBB]" />
              <div>
                <p className="whitespace-nowrap text-[15px] text-[#FDFDFD] lg:text-[14px]">البريد الالكتروني</p>
                <p className="overflow-visible whitespace-nowrap w-max max-w-none bg-gradient-to-l from-[#16ACEA] to-[#5C2BC2] bg-clip-text text-[14px] font-bold text-transparent lg:text-[12px]">
                  info@leen-solutions.com
                </p>
              </div>
            </div>
            <div className="relative z-10 flex items-center justify-start gap-[12px] overflow-visible">
              <FiPhone className="h-[32px] w-[32px] text-[#A0ABBB]" />
              <div>
                <p className="whitespace-nowrap text-[15px] text-[#FDFDFD] lg:text-[14px]">الهاتف</p>
                <p
                  dir="ltr"
                  className="overflow-visible whitespace-nowrap w-max max-w-none text-[14px] font-bold bg-gradient-to-l from-[#16ACEA] to-[#5C2BC2] bg-clip-text text-transparent lg:text-[12px]"
                >
                  +966 50 123 4567
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative min-h-[260px] overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-950 sm:min-h-[320px] lg:min-h-[360px]">
          <iframe
            title="موقع لين على الخريطة"
            src={googleMapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="pointer-events-none absolute inset-0 h-full w-full select-none border-0"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.2),rgba(2,6,23,0.5))]" />
          <div className="absolute right-4 rounded-full border border-cyan-300/40 bg-[#0f172a]/80 px-3 py-1.5 text-[11px] text-cyan-100 sm:right-6 top-10 sm:px-4 sm:py-2 sm:text-xs md:right-8">
            القصيم - بريدة - المملكة العربية السعودية
          </div>
          <a
            href={googleMapsLocationUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-6 left-4 rounded-full bg-gradient-to-l from-sky-400 to-blue-600 px-3 py-1.5 text-[11px] font-bold text-white shadow-[0_0_24px_-12px_rgba(56,189,248,1)] transition hover:brightness-110 sm:bottom-8 sm:left-6 sm:px-4 sm:py-2 sm:text-xs md:bottom-10 md:left-8"
          >
            موقعنا على الخريطة
          </a>
        </div>

      </div>
    </section>
  )
}

export default Section6
