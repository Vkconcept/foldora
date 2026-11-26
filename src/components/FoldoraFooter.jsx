
const WHATSAPP_NUMBER = '2348176860084'
const EMAIL = 'hello@foldora.example'

const exploreLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Why Foldora', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Book a Pickup', href: '#booking' },
]

const crosshatch = {
  backgroundImage: `
    repeating-linear-gradient(
      45deg,
      rgba(255,255,255,0.035) 0 1px,
      transparent 1px 9px
    ),
    repeating-linear-gradient(
      -45deg,
      rgba(255,255,255,0.035) 0 1px,
      transparent 1px 9px
    )
  `,
}

const linkClass =
  'rounded-sm text-sm text-white/80 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold'

export default function FoldoraFooter() {
  return (
    <footer
      style={crosshatch}
      className="bg-[#183629] text-white/70"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr] md:py-16 lg:px-10">

        {/* Brand */}
        <div>
          <a href="#home" className="inline-block">
            <p className="font-heading text-3xl font-bold tracking-wide text-ivory">
              FOLDORA
            </p>
            <p className="mt-1 text-[9px] tracking-[3px] text-white/60">
              LAUNDRY & FABRIC CARE
            </p>
          </a>

          <p className="mt-5 max-w-sm font-heading text-xl text-sage">
            Care in every fold.
          </p>

          <p className="mt-7 text-sm leading-7 text-white/65">
            Ogun State, Nigeria
        
          </p>

          <p className="mt-3 text-sm text-white/65">
            Monday – Saturday
          </p>
          <p className="mt-1 text-sm text-white/65">
            8:00 AM – 6:00 PM
          </p>
        </div>

        {/* Explore */}
        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Explore
          </h2>

          <ul className="mt-6 space-y-4">
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Get in touch
          </h2>

          <ul className="mt-6 space-y-4">
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Chat on WhatsApp
              </a>
            </li>

            <li>
              <a
                href={`mailto:${EMAIL}`}
                className={linkClass}
              >
                {EMAIL}
              </a>
            </li>
          </ul>

          <a
            href="#booking"
            className="mt-8 inline-flex items-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-[#D9B37B]"
          >
            Book a Pickup
            <span className="ml-2">↗</span>
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <p className="text-center text-xs leading-6 text-white/40">
            © {new Date().getFullYear()} Foldora Laundry & Fabric Care.
            All rights reserved.
          </p>

       
        </div>
      </div>
    </footer>
  )
}
