import type { FormEvent } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import footerPattern from '../assets/Footer pattern.png'
import leenMark from '../assets/LeenMark.png'

const quickLinks = ['الرئيسية', 'من نحن', 'خدماتنا']
const services = ['تصميم وتطوير المواقع', 'تطبيقات الهواتف الذكية', 'أنظمة ERP', 'التسويق الإلكتروني']
const socialLinks = [
  { icon: FaYoutube, label: 'YouTube' },
  { icon: FaLinkedinIn, label: 'LinkedIn' },
  { icon: FaInstagram, label: 'Instagram' },
  { icon: FaXTwitter, label: 'Twitter' },
  { icon: FaFacebookF, label: 'Facebook' },
]

function Footer() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <footer dir="rtl" className="">
      <div className="px-[100px] relative overflow-hidden rounded-t-[32px] border border-[#2B2E3C] bg-gradient-to-l from-[#171821] to-[#1F2029]">
        <img
          src={footerPattern}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-1/2 hidden h-[940px] w-auto -translate-y-1/2  lg:block"
        />

        <div className="relative pt-[60px]">
          <div className="rounded-[16px] bg-[#2F99CF] px-[36px] py-[28px]">
            <div className="flex flex-col-reverse gap-auto flex-row items-center justify-between">
              <div className="text-right">
                <h2 className="text-[24px] font-bold leading-tight text-white">نسعد بخدمتكم</h2>
                <p className="mt-2 text-[24px] text-white/80">
                  تواصل معنا للحصول على خدماتنا في أي وقت
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="w-[457px]">
                <div className="flex items-center gap-3 rounded-[16px] bg-[#E8E8EB] p-[16px]">
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
                    className="rounded-[10px] bg-[#2F99CF] px-5 py-2 text-lg font-bold text-white transition hover:bg-[#2989BA]"
                  >
                    ارسال
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-[32px] flex flex-col flex-row items-start justify-between">
            <div className="text-right">
              <h3 className="text-[20px] font-bold text-[#FDFDFD] mb-[40px]">روابط سريعة</h3>
              <ul className="mt-3 space-y-1 text-[16px] font-semibold text-[#FDFDFD]">
                {quickLinks.map((item) => (
                  <li className=" mt-[12px]" key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="text-right ">
              <h3 className="text-[20px] font-bold text-[#FDFDFD] mb-[40px]">خدماتنا</h3>
              <ul className="space-y-1 text-[16px] font-semibold text-[#FDFDFD]">
                {services.map((item) => (
                  <li className=" mt-[12px]" key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="w-[430px]">
              <div className="rounded-[16px] bg-[#FDFDFD] p-[16px] text-right shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
                <div className="flex items-center justify-between gap-[16px]">
                  <div className="shrink-0 text-center">
                    <img src={leenMark} alt="لين" className="mx-auto h-[90px] w-[54px] object-contain" />
                  </div>
                  <div className="text-[16px] font-bold text-[#4B5768]">
                    شريكك المثالي لتحقيق التحول الرقمي وتطوير أعمالك باستخدام أحدث التقنيات.
                  </div>
                </div>
              </div>

              <div dir="ltr" className="mt-[32px] flex items-center justify-center gap-[12px] md:justify-start">
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

          <div className="mt-[32px] grid border-b border-[#FDFDFD] pb-[32px] text-right md:grid-cols-3">
            <div className="flex items-center gap-[12px] justify-start">
              <FiPhone className="h-[32px] w-[32px] text-[#A0ABBB]" />
              <div>
                <p className="text-[20px] text-[#FDFDFD]">الهاتف</p>
                <p dir="ltr" className="text-[16px] font-bold bg-gradient-to-l from-[#16ACEA] to-[#5C2BC2] bg-clip-text text-transparent">
                  +966 50 123 4567
                </p>
              </div>
            </div>

            <div className="flex items-center gap-[12px] justify-center">
              <FiMail className="h-[32px] w-[32px] shrink-0 text-[#A0ABBB]" />
              <div>
                <p className="text-[20px] text-[#FDFDFD]">البريد الالكتروني</p>
                <p className="bg-gradient-to-l from-[#16ACEA] to-[#5C2BC2] bg-clip-text text-[16px] font-bold text-transparent">info@leen-solutions.com</p>
              </div>
            </div>

            <div className="flex items-center gap-[12px] md:justify-end">
              <FiMapPin className="h-[32px] w-[32px] shrink-0 text-[#A0ABBB]" />
              <div>
                <p className="text-[20px] text-[#FDFDFD]">العنوان</p>
                <p className="bg-gradient-to-l from-[#16ACEA] to-[#5C2BC2] bg-clip-text text-[16px] font-bold text-transparent">
                  الرياض، المملكة العربية السعودية
                </p>
              </div>
            </div>
          </div>

          <p className="py-[24px] text-center text-[16px] text-[#F1F2F5]">
            © 2024 لين للحلول الذكية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
