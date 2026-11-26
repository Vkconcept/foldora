import { Leaf, Clock3, ShieldCheck, Star } from "lucide-react";

const features = [
  {
    title: "Fabric-first care",
    description:
      "Every fabric receives the right attention, with gentle laundry care.",
    icon: Leaf,
  },
  {
    title: "Convenient service",
    description:
      "Choose a pickup time that works for you and enjoy a hassle-free experience.",
    icon: Clock3,
  },
  {
    title: "Carefully handled",
    description:
      "Your clothes are handled with attention from pickup to final delivery.",
    icon: ShieldCheck,
  },
  {
    title: "A quality finish",
    description: "Enjoy neatly folded clothes and carefully pressed garments.",
    icon: Star,
  },
];

export default function FoldoraWhyUs({ image }) {
  return (
    <section id="why-us" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 lg:px-10">
        {/* Laundry room image */}
        <div className="h-[340px] overflow-hidden rounded-[28px] bg-sage md:h-[480px]">
          {image ? (
            <img
              src={image}
              alt="Foldora laundry room"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-forest/60">
              Add your laundry room image here
            </div>
          )}
        </div>

        {/* Why choose Foldora */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Why Foldora
          </p>

          <h2 className="mt-4 max-w-lg font-heading text-4xl leading-tight text-forest md:text-5xl">
            Thoughtful care, quietly done.
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-charcoal/65">
            We believe laundry care should be simple, convenient and dependable.
            That's why every detail matters, from the way we handle your clothes
            to the moment they return to your doorstep.
          </p>

          <div className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage text-forest">
                    <Icon size={23} strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-4 font-heading text-xl font-medium text-charcoal">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-charcoal/65">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
