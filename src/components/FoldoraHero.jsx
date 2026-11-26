
import heroImage from "../assets/foldora-hero.jfif";

const stats = [
  { value: "48h", label: "Standard turnaround*" },
  { value: "Free", label: "Pickup over ₦15k*" },
];

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function TowelPlaceholder() {
  return (
    <svg viewBox="0 0 400 520" className="h-full w-full">
      <rect width="400" height="520" fill="#DCE9DE" />
      <rect y="360" width="400" height="160" fill="#C69B68" />

      <rect x="40" y="395" width="330" height="70" rx="14" fill="#F8F6EF" />
      <rect x="30" y="330" width="340" height="72" rx="14" fill="#7C927F" />
      <rect x="50" y="268" width="320" height="68" rx="14" fill="#FFFFFF" />
      <rect x="70" y="190" width="290" height="84" rx="14" fill="#244D3C" />

      <path
        d="M130 195 Q200 165 300 160"
        stroke="#244D3C"
        strokeWidth="3"
        fill="none"
      />

      <ellipse
        cx="160"
        cy="180"
        rx="18"
        ry="11"
        fill="#8FA283"
        transform="rotate(-30 160 180)"
      />

      <ellipse
        cx="205"
        cy="170"
        rx="18"
        ry="11"
        fill="#A3B497"
        transform="rotate(20 205 170)"
      />

      <ellipse
        cx="250"
        cy="165"
        rx="18"
        ry="11"
        fill="#8FA283"
        transform="rotate(-20 250 165)"
      />
    </svg>
  );
}

export default function FoldoraHero() {
  return (
    <section id="home" className="overflow-hidden bg-ivory">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 md:grid-cols-2 md:gap-16 md:px-10 md:py-20">

        {/* Hero text */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
            Laundry care, made effortless
          </p>

          <h1 className="mt-5 font-heading text-5xl font-medium leading-[1.08] tracking-tight text-forest sm:text-6xl lg:text-7xl">
            Your laundry deserves <em className="text-gold">better.</em>
          </h1>

          <p className="mt-7 max-w-[460px] text-base leading-8 text-charcoal/70 sm:text-lg">
            Schedule a pickup, and we'll collect, clean and return your clothes
            washed, pressed and folded with care. No queues, no stress.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {/* Book a Pickup */}
            <a
              href="/book-pickup"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-forest/90"
            >
              Book a Pickup
              <ArrowIcon />
            </a>

            {/* Explore Services */}
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-forest/20 px-7 py-3.5 text-sm font-semibold text-forest transition hover:border-forest"
            >
              Explore Services
            </a>
          </div>

          {/* Statistics */}
          <dl className="mt-10 flex flex-wrap gap-10">
            {stats.map((stat) => (
              <div key={stat.value}>
                <dt className="font-heading text-3xl text-forest">
                  {stat.value}
                </dt>

                <dd className="mt-1.5 text-sm text-charcoal/60">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Hero visual */}
        <div className="relative">
          <div className="h-[420px] overflow-hidden rounded-[28px] shadow-xl md:h-[560px]">
            <img
              src={heroImage}
              alt="Foldora laundry and fabric care"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white px-5 py-4 shadow-lg md:-left-7">
            <p className="font-heading text-lg text-forest">
              Care in every fold.
            </p>

            <p className="text-xs text-charcoal/60">
              FOLDORA Laundry & Fabric Care
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
