import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { FiAlertCircle, FiCheckCircle, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { fetchWithTimeout } from '../utils/fetchWithTimeout'

type ContactFormValues = {
  name: string
  phoneNumber: string
  email: string
  message: string
}

type ApiValidationErrors = Record<string, string[]>

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? 'https://api.leen.net.sa').replace(/\/+$/, '')

const initialContactFormValues: ContactFormValues = {
  name: '',
  phoneNumber: '',
  email: '',
  message: '',
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function extractErrorMessage(payload: unknown): string | null {
  if (!isRecord(payload)) return null

  if (typeof payload.message === 'string' && payload.message.trim()) {
    return payload.message.trim()
  }

  const errors = payload.errors
  if (!isRecord(errors)) return null

  const firstError = Object.values(errors as ApiValidationErrors).find(
    (entry) => Array.isArray(entry) && entry.length > 0 && typeof entry[0] === 'string',
  )

  if (!firstError) return null

  return firstError[0].trim() || null
}

function Section6() {
  const [formValues, setFormValues] = useState<ContactFormValues>(initialContactFormValues)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionFeedback, setSubmissionFeedback] = useState<string | null>(null)
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false)

  const googleMapsLocationUrl = 'https://maps.app.goo.gl/D8dxhmJnd17RExcH8'
  const googleMapsEmbedUrl =
    'https://maps.google.com/maps?q=9XC4%2BPV9%20Buraydah%20Saudi%20Arabia&z=16&t=m&hl=ar&iwloc=B&output=embed'

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))

    if (submissionFeedback) setSubmissionFeedback(null)
    if (isSubmitSuccess) setIsSubmitSuccess(false)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmissionFeedback(null)
    setIsSubmitSuccess(false)

    try {
      const response = await fetchWithTimeout(`${API_BASE_URL}/api/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formValues.name.trim(),
          email: formValues.email.trim(),
          phone_number: formValues.phoneNumber.trim(),
          message: formValues.message.trim(),
        }),
      })

      let payload: unknown = null
      const contentType = response.headers.get('content-type') ?? ''

      if (contentType.includes('application/json')) {
        payload = await response.json()
      } else {
        payload = await response.text()
      }

      if (!response.ok) {
        const apiErrorMessage = extractErrorMessage(payload)
        throw new Error(apiErrorMessage ?? 'تعذر إرسال الرسالة حالياً، حاول مرة أخرى.')
      }

      setFormValues(initialContactFormValues)
      setIsSubmitSuccess(true)
      setSubmissionFeedback('تم إرسال رسالتك بنجاح. سنعود إليك قريباً.')
    } catch (error) {
      const fallbackErrorMessage = 'تعذر إرسال الرسالة حالياً، حاول مرة أخرى.'

      if (error instanceof Error && error.message === 'TimeoutError') {
        setSubmissionFeedback('انتهت مهلة الاتصال بالخادم. حاول مرة أخرى.')
      } else if (error instanceof Error && error.message.trim()) {
        setSubmissionFeedback(error.message)
      } else {
        setSubmissionFeedback(fallbackErrorMessage)
      }
      setIsSubmitSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="mx-auto mb-[120px] mt-[40px] w-full max-w-[1240px] overflow-visible scroll-mt-28 px-0">
      <div className="relative grid overflow-hidden rounded-[24px] border border-white/10 bg-[#151824] backdrop-blur sm:rounded-[30px] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-12 top-[-80px] h-[260px] w-[260px] rounded-full bg-cyan-500/20 blur-[95px]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 right-[-100px] h-[280px] w-[280px] rounded-full bg-violet-500/18 blur-[105px]"
        />
        <div className="flex flex-col items-center justify-center rounded-3xl px-4 py-8 text-center sm:px-6 sm:py-10 md:px-8 md:py-12">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[36px] font-black text-white sm:text-[44px] md:text-[52px] lg:text-[56px]">تواصل معنا</h2>
            <p className="mt-3 text-[15px] leading-7 text-slate-300 sm:text-[16px] md:text-[18px]">
              تواصل مع فريق "لين" اليوم لتحويل أفكارك إلى حلول رقمية مبتكرة. نحن هنا لنجعل رؤيتك حقيقة ملموسة بأحدث التقنيات.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mx-auto mt-6 w-full max-w-xl space-y-5 sm:space-y-6 md:space-y-8">
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              placeholder="الاسم"
              required
              disabled={isSubmitting}
              className="field-shell w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none"
            />
            <input
              type="text"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleInputChange}
              placeholder="رقم الهاتف"
              required
              disabled={isSubmitting}
              className="field-shell w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              placeholder="البريد الإلكتروني"
              required
              disabled={isSubmitting}
              className="field-shell w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none"
            />
            <textarea
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
              placeholder="الرسالة"
              rows={4}
              required
              disabled={isSubmitting}
              className="field-shell w-full resize-none rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="brand-btn h-[53px] w-full appearance-none rounded-[12px] border-none text-lg font-bold text-white outline-none sm:w-[160px] sm:text-[20px]"
            >
              {isSubmitting ? 'جارٍ الإرسال...' : 'إرسال'}
            </button>
            {submissionFeedback ? (
              <div
                role={isSubmitSuccess ? 'status' : 'alert'}
                aria-live={isSubmitSuccess ? 'polite' : 'assertive'}
                className={`relative overflow-hidden rounded-2xl border px-4 py-3 text-right transition-all duration-300 ${
                  isSubmitSuccess
                    ? 'border-emerald-300/35 bg-emerald-500/10 text-emerald-100'
                    : 'border-rose-300/35 bg-rose-500/10 text-rose-100'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -left-10 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full blur-2xl ${
                    isSubmitSuccess ? 'bg-emerald-300/30' : 'bg-rose-300/30'
                  }`}
                />
                <div className="relative flex items-start gap-3">
                  <span
                    className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                      isSubmitSuccess ? 'border-emerald-200/45 bg-emerald-300/20' : 'border-rose-200/45 bg-rose-300/20'
                    }`}
                  >
                    {isSubmitSuccess ? (
                      <FiCheckCircle className="h-4 w-4 text-emerald-100" />
                    ) : (
                      <FiAlertCircle className="h-4 w-4 text-rose-100" />
                    )}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold">{isSubmitSuccess ? 'تم الإرسال بنجاح' : 'تعذر الإرسال'}</p>
                    <p className="mt-1 text-sm leading-6 text-white/90">{submissionFeedback}</p>
                  </div>
                </div>
              </div>
            ) : null}
          </form>
          <div className="mt-10 grid w-full gap-4 text-right sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 md:gap-3 xl:mt-16">
            <div className="glass-card relative z-10 flex min-w-0 items-center justify-start gap-[12px] overflow-hidden rounded-2xl px-3 py-3 sm:px-4">
              <FiMapPin className="h-[24px] w-[24px] shrink-0 text-[#A0ABBB]" />
              <div className="min-w-0">
                <p className="text-[15px] text-[#FDFDFD] lg:text-[14px]">العنوان</p>
                <a
                  href={googleMapsLocationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="break-words bg-gradient-to-l from-[#16ACEA] to-[#5C2BC2] bg-clip-text text-[12px] font-bold leading-5 text-transparent [-webkit-text-fill-color:transparent] visited:text-transparent transition hover:brightness-110 lg:text-[12px]"
                >
                  بريدة، المملكة العربية السعودية
                </a>
              </div>
            </div>
            <div className="glass-card relative z-10 flex min-w-0 items-center justify-start gap-[12px] overflow-hidden rounded-2xl px-3 py-3 sm:px-4">
              <FiMail className="h-[24px] w-[24px] shrink-0 text-[#A0ABBB]" />
              <div className="min-w-0">
                <p className="text-[15px] text-[#FDFDFD] lg:text-[14px]">البريد الالكتروني</p>
                <a
                  href="mailto:info@leen.net.sa"
                  className="break-all bg-gradient-to-l from-[#16ACEA] to-[#5C2BC2] bg-clip-text text-[12px] font-bold leading-5 text-transparent [-webkit-text-fill-color:transparent] visited:text-transparent transition hover:brightness-110 lg:text-[14px]"
                >
                  info@leen.net.sa
                </a>
              </div>
            </div>
            <div className="glass-card relative z-10 flex min-w-0 items-center justify-start gap-[12px] overflow-hidden rounded-2xl px-3 py-3 sm:px-4">
              <FiPhone className="h-[24px] w-[24px] shrink-0 text-[#A0ABBB]" />
              <div className="min-w-0">
                <p className="text-[15px] text-[#FDFDFD] lg:text-[14px]">الهاتف</p>
                <div dir="ltr" className="space-y-1">
                  <a
                    href="tel:+966537666755"
                    className="block break-all bg-gradient-to-l from-[#16ACEA] to-[#5C2BC2] bg-clip-text text-[12px] font-bold leading-5 text-transparent [-webkit-text-fill-color:transparent] visited:text-transparent transition hover:brightness-110 lg:text-[14px]"
                  >
                    +966 53 766 6755
                  </a>
                  <a
                    href="tel:+2011002131234"
                    className="block break-all bg-gradient-to-l from-[#16ACEA] to-[#5C2BC2] bg-clip-text text-[12px] font-bold leading-5 text-transparent [-webkit-text-fill-color:transparent] visited:text-transparent transition hover:brightness-110 lg:text-[14px]"
                  >
                    +20 110 2131 234
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative min-h-[260px] overflow-hidden rounded-l-3xl border border-cyan-400/20 bg-slate-950 sm:min-h-[320px] lg:min-h-[360px]">
          <iframe
            title="موقع لين على الخريطة"
            src={googleMapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.2),rgba(2,6,23,0.5))]" />
          <div className="motion-glow-pulse absolute right-4 top-10 rounded-full border border-cyan-300/40 bg-[#0f172a]/80 px-3 py-1.5 text-[11px] text-cyan-100 sm:right-6 sm:px-4 sm:py-2 sm:text-xs md:right-8">
            القصيم - بريدة - المملكة العربية السعودية
          </div>
          <span aria-hidden="true" className="motion-map-ping pointer-events-none absolute right-6 top-[54px] h-2.5 w-2.5 rounded-full bg-cyan-300" />
          <a
            href={googleMapsLocationUrl}
            target="_blank"
            rel="noreferrer"
            className="motion-breathe absolute bottom-6 left-4 rounded-full bg-gradient-to-l from-sky-400 to-blue-600 px-3 py-1.5 text-[11px] font-bold text-white shadow-[0_0_24px_-12px_rgba(56,189,248,1)] transition hover:brightness-110 sm:bottom-8 sm:left-6 sm:px-4 sm:py-2 sm:text-xs md:bottom-10 md:left-8"
          >
            موقعنا على الخريطة
          </a>
        </div>

      </div>
    </section>
  )
}

export default Section6
