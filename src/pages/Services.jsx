
import Navbar from "../components/Navbar";
import FoldoraCTA from "../components/FoldoraCTA";
import FoldoraFooter from "../components/FoldoraFooter";

import {
  WashingMachine,
  Shirt,
  Sparkles,
  BedDouble,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Wash & Fold",
    description:
      "Sorted by colour and fabric, washed with gentle detergents, dried and neatly folded — ready for your drawers.",
    turnaround: "48 hours",
    price: "₦1,500",
    unit: "kg",
    icon: WashingMachine,
  },
  {
    title: "Wash & Iron",
    description:
      "Washed and carefully pressed. Ideal for office shirts, trousers, native wear and everyday outfits.",
    turnaround: "48 hours",
    price: "₦800",
    unit: "item",
    icon: Shirt,
  },
  {
    title: "Dry Cleaning",
    description:
      "Specialised cleaning for structured and delicate garments, with careful finishing to keep them looking their best.",
    turnaround: "72 hours",
    price: "₦3,000",
    unit: "item",
    icon: Sparkles,
  },
  {
    title: "Duvet & Bedsheets",
    description:
      "Large-load washing for duvets, bedsheets and pillowcases, dried thoroughly and neatly folded.",
    turnaround: "72 hours",
    price: "₦5,000",
    unit: "piece",
    icon: BedDouble,
  },
  {
    title: "Express Laundry",
    description:
      "Priority laundry care for urgent loads when your schedule doesn't leave much room for laundry day.",
    turnaround: "Same day",
    price: "₦2,800",
    unit: "kg",
    icon: Zap,
  },
];

function ServiceRow({ service, index }) {
  const Icon = service.icon;

  const bookingLink = `/book-pickup?service=${encodeURIComponent(
    service.title
  )}`;

  return (
    <li className="group flex flex-col gap-6 border-b border-forest/15 py-9 sm:flex-row sm:items-center sm:gap-8">
      <div className="flex shrink-0 items-center gap-4">
        <span className="font-heading text-sm text-gold">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-sage text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
          <Icon size={26} strokeWidth={1.5} />
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="font-heading text-2xl font-medium tracking-tight text-charcoal md:text-3xl">
          {service.title}
        </h2>

        <p className="mt-3 max-w-[560px] text-sm leading-7 text-charcoal/65">
          {service.description}
        </p>

        <p className="mt-3 text-xs text-charcoal/55">
          Turnaround:{" "}
          <span className="font-semibold text-forest">
            {service.turnaround}
          </span>
        </p>
      </div>

      <div className="flex shrink-0 items-center justify-between gap-5 sm:flex-col sm:items-end">
        <p className="whitespace-nowrap text-sm text-charcoal/60">
          <span className="font-heading text-3xl text-forest">
            {service.price}
          </span>{" "}
          / {service.unit}
        </p>

        <a
          href={bookingLink}
          aria-label={`Book ${service.title}`}
          className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Book this
          <ArrowUpRight size={16} />
        </a>
      </div>
    </li>
  );
}

export default function FoldoraServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-ivory">
        {/* Page introduction */}
        <section
          id="services"
          className="mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-10 md:pt-28"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Our services
            </p>

            <h1 className="mt-5 font-heading text-5xl font-medium leading-[1.08] tracking-tight text-forest md:text-6xl lg:text-7xl">
              Every garment, given the care it needs.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-charcoal/65 md:text-base">
              From everyday laundry to delicate fabrics and
              household essentials, discover thoughtful care
              designed to make your laundry routine easier.
            </p>
          </div>
        </section>

        {/* Services list */}
        <section
          id="service-list"
          className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 md:pb-28"
        >
          <div className="flex items-center justify-between border-b border-forest/15 pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-charcoal/55">
              Explore our services
            </p>

            <p className="text-xs text-charcoal/45">
              05 services
            </p>
          </div>

          <ul>
            {services.map((service, index) => (
              <ServiceRow
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </ul>
        </section>
      </main>

      <FoldoraCTA />
      <FoldoraFooter />
    </>
  );
}
