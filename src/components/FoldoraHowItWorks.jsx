import { CalendarCheck, Truck, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Book a pickup",
    description:
      "Choose your laundry service and a convenient pickup time in just a few steps.",
    icon: CalendarCheck,
  },
  {
    title: "We collect",
    description:
      "Your laundry is collected from your doorstep and carefully prepared for cleaning.",
    icon: Truck,
  },
  {
    title: "Fresh return",
    description:
      "Your clothes are cleaned, neatly folded or pressed, and ready for collection.",
    icon: Sparkles,
  },
];

export default function FoldoraHowItWorks() {
  return (
    <section id="how-it-works" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            How it works
          </p>

          <h2 className="mt-4 font-heading text-4xl leading-tight text-forest md:text-5xl">
            Three simple steps to a lighter week.
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-7 text-charcoal/65">
            Laundry day doesn't have to be stressful. Let us take care of the
            washing while you focus on what matters.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article key={step.title} className="group">
                <div className="flex items-center gap-4">
                  <span className="font-heading text-sm text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="h-px flex-1 bg-forest/15" />
                </div>

                <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage text-forest transition duration-300 group-hover:bg-forest group-hover:text-white">
                  <Icon size={26} strokeWidth={1.5} />
                </div>

                <h3 className="mt-6 font-heading text-2xl font-medium text-charcoal">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-charcoal/65">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
