
import { MessageCircle, ArrowUpRight } from 'lucide-react'


const WHATSAPP_NUMBER = '2348176860084'

export default function FoldoraCTA() {
  const message = "Hi Foldora, I'd like to schedule a pickup."

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <section className="bg-ivory px-4 py-12 md:py-16">
      <div
        className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-forest px-6 py-16 text-center md:rounded-[36px] md:py-24"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(255,255,255,0.045) 0 1px,
              transparent 1px 9px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(255,255,255,0.045) 0 1px,
              transparent 1px 9px
            )
          `,
        }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
          Prefer to chat?
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl font-heading text-4xl leading-tight text-ivory md:text-5xl">
          Send us a message. We'll handle the rest.
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/70 md:text-base">
          Ask a question, request a quote or schedule a pickup.
          We're just a WhatsApp message away.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-charcoal transition duration-300 hover:bg-[#D9B37B] hover:-translate-y-1"
          >
            <MessageCircle size={19} />
            Chat on WhatsApp
          </a>

          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-ivory transition duration-300 hover:border-white hover:bg-white/10"
          >
            Book online
            <ArrowUpRight size={17} />
          </a>

        </div>
      </div>
    </section>
  )
}
