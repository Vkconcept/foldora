
import Navbar from "../components/Navbar";
import FoldoraCTA from "../components/FoldoraCTA";
import FoldoraFooter from "../components/FoldoraFooter";
import {
  Heart,
  Leaf,
  Clock3,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Care in every detail",
    description:
      "Every garment deserves attention. We believe good laundry care starts with treating each item thoughtfully.",
  },
  {
    icon: Leaf,
    title: "Thoughtful fabric care",
    description:
      "Different fabrics need different approaches. Our concept is built around giving every item appropriate care.",
  },
  {
    icon: Clock3,
    title: "Convenience that matters",
    description:
      "Laundry should fit into your life, not take it over. We aim to make the process simpler and easier.",
  },
  {
    icon: ShieldCheck,
    title: "Dependable experience",
    description:
      "From booking to the final fold, we believe clear communication and careful handling should always matter.",
  },
];

export default function About() {
  return (
    <>
      <Navbar />

      <main className="bg-ivory">

        {/* Hero */}
        <section className="px-6 py-20 md:py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Get to know us
            </p>

            <div className="mt-5 grid items-end gap-8 md:grid-cols-[1.3fr_0.7fr]">
              <h1 className="max-w-3xl font-heading text-5xl font-medium leading-[1.08] text-forest md:text-6xl lg:text-7xl">
                Laundry care, with a little more thought.
              </h1>

              <p className="max-w-md text-sm leading-7 text-charcoal/65 md:pb-2 md:text-base">
                At Foldora, we believe caring for your clothes
                should feel simple, thoughtful and convenient.
                Because the little details make all the difference.
              </p>
            </div>

           
          </div>
        </section>

        {/* Our story */}
        <section className="bg-white px-6 py-20 md:py-28 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Our story
              </p>

              <h2 className="mt-5 max-w-lg font-heading text-4xl leading-tight text-forest md:text-5xl">
                More than just getting clothes clean.
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-8 text-charcoal/65 md:pt-10 md:text-base">
              <p>
                We imagined a laundry experience that takes the
                everyday stress out of caring for clothes.
                One where convenience meets thoughtful attention
                to every fabric.
              </p>

              <p>
                That idea became Foldora a laundry and fabric
                care concept built around making everyday life
                feel a little lighter.
              </p>

              <p>
                From everyday outfits to delicate garments and
                household essentials, our philosophy is simple:
                every item deserves thoughtful care.
              </p>
            </div>
          </div>
        </section>

        {/* Brand statement */}
        <section className="bg-forest px-6 py-20 text-center md:py-28">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              The Foldora philosophy
            </p>

            <h2 className="mt-6 font-heading text-4xl leading-tight text-ivory md:text-6xl">
              Care in every fold. Comfort in every day.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/70 md:text-base">
              We want laundry care to be one less thing on your
              mind, giving you more time for the things that
              matter most.
            </p>
          </div>
        </section>

        {/* Our values */}
        <section className="px-6 py-20 md:py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                What matters to us
              </p>

              <h2 className="mt-5 font-heading text-4xl leading-tight text-forest md:text-5xl">
                The values behind every fold.
              </h2>

              <p className="mt-5 text-sm leading-7 text-charcoal/65">
                The little things shape the overall experience.
                These are the principles behind the Foldora brand.
              </p>
            </div>

            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article key={value.title}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage text-forest">
                      <Icon size={25} strokeWidth={1.5} />
                    </div>

                    <h3 className="mt-6 font-heading text-2xl text-charcoal">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-charcoal/65">
                      {value.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Closing section */}
        <section className="bg-sage/40 px-6 py-16 md:py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Experience Foldora
              </p>

              <h2 className="mt-4 max-w-xl font-heading text-3xl leading-tight text-forest md:text-4xl">
                Give your laundry the thoughtful care it deserves.
              </h2>
            </div>

            <a
              href="/services"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-forest px-6 py-4 text-sm font-semibold text-white transition hover:bg-forest/90"
            >
              Explore our services
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <FoldoraCTA />
      <FoldoraFooter />
    </>
  );
}
