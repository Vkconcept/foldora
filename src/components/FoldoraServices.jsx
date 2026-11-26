
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
    id: "wash-fold",
    title: "Wash & Fold",
    description:
      "Everyday laundry washed, dried and neatly folded, ready for your wardrobe.",
    price: "₦1,500",
    unit: "per kg",
    icon: WashingMachine,
  },
  {
    id: "wash-iron",
    title: "Wash & Iron",
    description:
      "Freshly washed and carefully pressed clothes, ready to wear.",
    price: "₦800",
    unit: "per item",
    icon: Shirt,
  },
  {
    id: "dry-cleaning",
    title: "Dry Cleaning",
    description:
      "Special care for delicate fabrics, suits, dresses and special outfits.",
    price: "₦3,000",
    unit: "per item",
    icon: Sparkles,
  },
  {
    id: "duvet-bedsheets",
    title: "Duvet & Bedsheets",
    description:
      "Give your bedding a refreshing clean with proper fabric care.",
    price: "₦5,000",
    unit: "per piece",
    icon: BedDouble,
  },
  {
    id: "express-laundry",
    title: "Express Laundry",
    description:
      "A faster laundry option for when you need your clothes back sooner.",
    price: "₦2,800",
    unit: "per kg",
    icon: Zap,
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;

  const bookingLink = `/book-pickup?service=${encodeURIComponent(
    service.title
  )}`;

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-forest/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage text-forest transition group-hover:bg-forest group-hover:text-white">
          <Icon size={26} strokeWidth={1.7} />
        </div>

        <span className="rounded-full bg-ivory px-3 py-1 text-xs font-medium text-forest">
          Fabric care
        </span>
      </div>

      <h3 className="mt-7 font-heading text-2xl text-forest">
        {service.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-charcoal/65">
        {service.description}
      </p>

      <div className="mt-6 border-t border-forest/10 pt-5">
        <p className="text-xs text-charcoal/50">Starting from</p>

        <div className="mt-1 flex items-baseline gap-1">
          <span className="font-heading text-2xl font-semibold text-forest">
            {service.price}
          </span>

          <span className="text-sm text-charcoal/50">
            / {service.unit.replace("per ", "")}
          </span>
        </div>

        <a
          href={bookingLink}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest/90"
        >
          Book this service
          <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}

export default function FoldoraServices() {
  return (
    <section id="services" className="bg-ivory px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
              What we offer
            </p>

            <h2 className="mt-4 font-heading text-4xl leading-tight text-forest sm:text-5xl">
              Thoughtful care for every fabric.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-8 text-charcoal/65">
              From your everyday clothes to delicate pieces, we make laundry
              care easier with services designed around your needs.
            </p>
          </div>

          <a
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest transition hover:text-gold"
          >
            Explore all services
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        
      </div>
    </section>
  );
}
