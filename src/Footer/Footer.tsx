import type { FormEvent, MouseEvent } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import footerPattern from '../assets/optimized/footer-pattern.webp'
import leenMark from '../assets/optimized/leen-mark.webp'
import { navigateToSection } from '../routing'

const quickLinks = [
  { label: 'الرئيسية', href: '/#home' },
  { label: 'من نحن', href: '/#about' },
  { label: 'خدماتنا', href: '/#services' },
]
const services = ['تصميم وتطوير المواقع', 'تطبيقات الهواتف الذكية', 'أنظمة ERP', 'التسويق الإلكتروني']
const socialLinks = [
  { icon: FaYoutube, label: 'YouTube' },
  { icon: FaLinkedinIn, label: 'LinkedIn' },
  { icon: FaInstagram, label: 'Instagram' },
  { icon: FaXTwitter, label: 'Twitter' },
  { icon: FaFacebookF, label: 'Facebook' },
]
const googleMapsLocationUrl = 'https://maps.app.goo.gl/D8dxhmJnd17RExcH8'

function Footer() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const handleQuickLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const targetHash = href.split('#')[1]
    if (!targetHash) return

    event.preventDefault()
    navigateToSection(`#${targetHash}`)
  }

  return (
    <footer dir="rtl" className="w-full">
      <div className="relative w-full overflow-hidden rounded-t-[32px] border border-[#2B2E3C] bg-gradient-to-l from-[#171821] to-[#1F2029] px-4 sm:px-6 lg:px-[100px]">
        <img
          src={footerPattern}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          width={1676}
          height={2444}
          className="pointer-events-none absolute -right-28 top-1/2 hidden h-[940px] w-auto -translate-y-1/2  lg:block"
        />

        <div className="relative pt-10 sm:pt-[60px]">
          <div className="rounded-[16px] bg-[#2F99CF] px-4 py-5 sm:px-[30px] sm:py-[24px] lg:px-[36px] lg:py-[28px]">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="text-right">
                <h2 className="text-[22px] font-bold leading-tight text-white sm:text-[24px]">
                  نسعد بخدمتكم
                </h2>
                <p className="mt-2 text-[17px] text-white/80 sm:text-[22px] lg:text-[24px]">
                  تواصل معنا للحصول على خدماتنا في أي وقت
                </p>
              </div>

              <form onSubmit={handleSubmit} className="w-full lg:max-w-[457px]">
                <div className="flex flex-col gap-3 rounded-[16px] bg-[#E8E8EB] p-3 sm:flex-row sm:items-center sm:gap-3 sm:p-[16px]">
                  <div className="flex min-w-0 flex-1 flex-nowrap items-center justify-start gap-2 px-2">
                    <FiMail className="h-5 w-5 shrink-0 text-[#4264CA]" />
                    <input
                      type="email"
                      placeholder="اكتب البريد الالكتروني"
                      className="text-gradient-brand min-w-0 flex-1 bg-transparent text-right text-base font-semibold [caret-color:#4264CA] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-[10px] bg-[#2F99CF] px-5 py-2 text-lg font-bold text-white transition hover:bg-[#2989BA] sm:w-auto"
                  >
                    ارسال
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-[32px] grid gap-8 md:grid-cols-2 md:items-start lg:grid-cols-[auto_auto_minmax(0,430px)]">
            <div className="text-right">
              <h3 className="text-[20px] font-bold text-[#FDFDFD] mb-[40px]">روابط سريعة</h3>
              <ul className="mt-3 space-y-1 text-[16px] font-semibold text-[#FDFDFD]">
                {quickLinks.map((item) => (
                  <li className=" mt-[12px]" key={item.label}>
                    <a
                      href={item.href}
                      onClick={(event) => handleQuickLinkClick(event, item.href)}
                      className="transition hover:text-cyan-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-right ">
              <h3 className="text-[20px] font-bold text-[#FDFDFD] mb-[40px]">خدماتنا</h3>
              <ul className="space-y-1 text-[16px] font-semibold text-[#FDFDFD]">
                {services.map((item) => (
                  <li className=" mt-[12px]" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:col-span-2 lg:col-span-1 lg:max-w-[430px] lg:justify-self-end">
              <div className="rounded-[16px] bg-[#FDFDFD] p-[16px] text-right shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
                <div className="flex items-center justify-start gap-[16px]">
                  <div className="shrink-0 text-center">
                    <img
                      src={leenMark}
                      alt="لين"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      width={440}
                      height={661}
                      className="mx-auto h-[98px] w-auto max-w-[86px] object-contain sm:h-[112px] sm:max-w-[98px]"
                    />
                  </div>
                  <div className="text-[15px] font-bold text-[#4B5768] sm:text-[16px]">
                    شريكك المثالي لتحقيق التحول الرقمي وتطوير أعمالك باستخدام أحدث التقنيات.
                  </div>
                </div>
              </div>

              <div dir="ltr" className="mt-[24px] flex items-center justify-center gap-[12px] md:justify-center lg:justify-start">
                {socialLinks.map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#1E2939] text-[20px] text-white transition hover:bg-[#244069]"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-[32px] grid gap-6 border-b border-[#FDFDFD] pb-[32px] text-right md:grid-cols-3">
            <div className="flex items-center gap-[12px] justify-start">
              <FiPhone className="h-[32px] w-[32px] text-[#A0ABBB]" />
              <div>
                <p className="text-[18px] text-[#FDFDFD] sm:text-[20px]">الهاتف</p>
                <div dir="ltr" className="space-y-1 text-[16px] font-bold">
                  <a
                    href="tel:+966537666755"
                    className="block bg-gradient-to-l from-[#16ACEA] to-[#5C2BC2] bg-clip-text text-transparent [-webkit-text-fill-color:transparent] visited:text-transparent"
                  >
                    +966 53 766 6755
                  </a>
                  <a
                    href="tel:+2011002131234"
                    className="block bg-gradient-to-l from-[#16ACEA] to-[#5C2BC2] bg-clip-text text-transparent [-webkit-text-fill-color:transparent] visited:text-transparent"
                  >
                    +20 110 2131 234
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-[12px] justify-start">
              <FiMail className="h-[32px] w-[32px] shrink-0 text-[#A0ABBB]" />
              <div>
                <p className="text-[18px] text-[#FDFDFD] sm:text-[20px]">البريد الالكتروني</p>
                  <a
                    href="mailto:info@leen.net.sa"
                    className="break-all bg-gradient-to-l from-[#16ACEA] to-[#5C2BC2] bg-clip-text text-[16px] font-bold text-transparent [-webkit-text-fill-color:transparent] visited:text-transparent sm:break-normal"
                  >
                    info@leen.net.sa
                  </a>
              </div>
            </div>

            <div className="flex items-center gap-[12px] md:justify-end lg:justify-start">
              <FiMapPin className="h-[32px] w-[32px] shrink-0 text-[#A0ABBB]" />
              <div>
                <p className="text-[18px] text-[#FDFDFD] sm:text-[20px]">العنوان</p>
                <a
                  href={googleMapsLocationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gradient-to-l from-[#16ACEA] to-[#5C2BC2] bg-clip-text text-[16px] font-bold text-transparent [-webkit-text-fill-color:transparent] visited:text-transparent transition hover:brightness-110 md:text-[14px]"
                >
                  بريدة، المملكة العربية السعودية
                </a>
              </div>
            </div>
          </div>

          <p className="py-[20px] text-center text-[14px] text-[#F1F2F5] sm:py-[24px] sm:text-[16px]">
            © 2024 لين للحلول الذكية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
