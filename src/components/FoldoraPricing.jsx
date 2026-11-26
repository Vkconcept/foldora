import {
  WashingMachine,
  Shirt,
  Sparkles,
  BedDouble,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const rows = [
  {
    title: "Wash & Fold",
    turnaround: "48 hours",
    price: "₦1,500",
    unit: "kg",
    icon: WashingMachine,
  },
  {
    title: "Wash & Iron",
    turnaround: "48 hours",
    price: "₦800",
    unit: "item",
    icon: Shirt,
  },
  {
    title: "Dry Cleaning",
    turnaround: "72 hours",
    price: "₦3,000",
    unit: "item",
    icon: Sparkles,
  },
  {
    title: "Duvet & Bedsheets",
    turnaround: "72 hours",
    price: "₦5,000",
    unit: "piece",
    icon: BedDouble,
  },
  {
    title: "Express Laundry",
    turnaround: "Same day",
    price: "₦2,800",
    unit: "kg",
    icon: Zap,
  },
];

export default function FoldoraPricing() {
  return (
    <section id="pricing" className="bg-sage/40 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-16 lg:px-10">
        {/* Pricing introduction */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Pricing preview
          </p>

          <h2 className="mt-4 max-w-lg font-heading text-4xl leading-tight text-forest md:text-5xl">
            Honest prices, no surprises.
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-charcoal/65">
            Quality laundry care with clear pricing. Choose the service that
            works best for you.
          </p>

          <a
            href="#booking"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-forest/20 px-6 py-3 text-sm font-semibold text-forest transition-colors hover:border-forest hover:bg-forest hover:text-white"
          >
            Book a service
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Pricing table */}
        <div className="overflow-hidden rounded-[24px] border border-forest/10 bg-white shadow-lg shadow-forest/5">
          <div className="flex items-center justify-between bg-forest/5 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-charcoal/60">
            <span>Service</span>
            <span>Sample price</span>
          </div>

          <ul>
            {rows.map((row) => {
              const Icon = row.icon;

              return (
                <li
                  key={row.title}
                  className="flex items-center justify-between gap-3 border-t border-forest/10 px-5 py-5 sm:px-6"
                >
                  <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage text-forest">
                      <Icon size={21} strokeWidth={1.6} />
                    </span>

                    <div className="min-w-0">
                      <h3 className="font-heading text-base font-medium text-charcoal sm:text-lg">
                        {row.title}
                      </h3>

                      <p className="mt-1 text-xs text-charcoal/55 sm:text-sm">
                        {row.turnaround}
                      </p>
                    </div>
                  </div>

                  <p className="shrink-0 whitespace-nowrap text-right text-xs text-charcoal/60 sm:text-sm">
                    <span className="font-heading text-xl text-forest sm:text-2xl">
                      {row.price}
                    </span>{" "}
                    / {row.unit}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
