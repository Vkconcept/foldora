
import Navbar from "../components/Navbar";
import FoldoraFooter from "../components/FoldoraFooter";
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

export default function FoldoraPricingPage() {
  return (
    <>
      <Navbar />

      <main className="bg-ivory">
        <section
          id="pricing"
          className="px-6 py-20 md:py-28"
        >
          <div className="mx-auto max-w-3xl">
            {/* Page introduction */}
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Pricing & packages
            </p>

            <h1 className="mt-5 font-heading text-5xl font-medium leading-[1.08] tracking-tight text-forest md:text-6xl">
              Simple, transparent rates.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-charcoal/65 md:text-base">
              Quality laundry care with straightforward pricing.
              Explore our service rates and find the right option
              for your everyday laundry needs.
            </p>

            {/* Price table */}
            <div className="mt-12 overflow-hidden rounded-[28px] border border-forest/10 bg-white shadow-xl shadow-forest/5">
              <div className="flex items-center justify-between bg-sage/60 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-charcoal/60">
                <span>Service</span>
                <span>Sample price</span>
              </div>

              <ul>
                {rows.map((row) => {
                  const Icon = row.icon;

                  return (
                    <li
                      key={row.title}
                      className="flex items-center justify-between gap-4 border-t border-forest/10 px-5 py-6 sm:px-6"
                    >
                      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage text-forest">
                          <Icon size={22} strokeWidth={1.6} />
                        </span>

                        <div className="min-w-0">
                          <h2 className="font-heading text-base font-medium text-charcoal sm:text-lg">
                            {row.title}
                          </h2>

                          <p className="mt-1 text-xs text-charcoal/55 sm:text-sm">
                            Turnaround: {row.turnaround}
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

              {/* Pickup offer */}
              <div className="border-t border-forest/10 bg-sage/50 px-6 py-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-forest">
                    <Sparkles size={20} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-medium text-forest">
                      Pickup & delivery offer
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-charcoal/70">
                      Sample offer: Free pickup and delivery on
                      orders from ₦15,000. Otherwise, a sample
                      delivery fee of ₦1,500 applies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          

            {/* Booking CTA */}
            <div className="mt-12 text-center">
              <h2 className="font-heading text-2xl text-forest md:text-3xl">
                Ready to take laundry off your list?
              </h2>

              <p className="mt-3 text-sm text-charcoal/60">
                Let Foldora take care of the details.
              </p>

              <a
                href="#booking"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-forest/90"
              >
                Get a live estimate
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <FoldoraFooter />
    </>
  );
}
