import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Which areas do you cover?",
    answer:
      "We currently offer pickup and delivery within selected areas. Enter your address when booking to check service availability.",
  },
  {
    question: "How is the price calculated?",
    answer:
      "Wash & Fold and Express Laundry are priced per kilo. Wash & Iron, Dry Cleaning and Duvet & Bedsheets are priced per item or piece. Your final estimate will be shown before booking confirmation.",
  },
  {
    question: "Is pickup and delivery free?",
    answer:
      "Pickup and delivery charges depend on your order and location. Any applicable fee will be shown before you confirm your booking.",
  },
  {
    question: "How long does it take?",
    answer:
      "Wash & Fold and Wash & Iron typically take 48 hours. Dry Cleaning and Duvet & Bedsheets may take 72 hours. Express Laundry is designed for same-day service.",
  },
];

function FAQItem({ item, open, onToggle, index }) {
  return (
    <div className="border-b border-forest/10">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-panel-${index}`}
          id={`faq-button-${index}`}
          className="flex w-full items-center justify-between gap-5 py-6 text-left font-heading text-lg font-medium text-charcoal transition-colors hover:text-forest sm:text-xl"
        >
          {item.question}

          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage text-forest transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            <ChevronDown size={19} strokeWidth={1.7} />
          </span>
        </button>
      </h3>

      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-button-${index}`}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-xl pb-6 pr-8 text-sm leading-7 text-charcoal/65">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FoldoraFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-20 lg:px-10">
        {/* Section heading */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Frequently asked questions
          </p>

          <h2 className="mt-4 max-w-md font-heading text-4xl leading-tight text-forest md:text-5xl">
            Questions, answered.
          </h2>

          <p className="mt-5 max-w-sm text-sm leading-7 text-charcoal/65">
            Everything you need to know about our laundry services, pickup
            process and pricing.
          </p>

          <a
            href="#booking"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-gold"
          >
            Still have questions? Get in touch
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* FAQ accordion */}
        <div className="border-t border-forest/10">
          {faqs.map((item, index) => (
            <FAQItem
              key={item.question}
              item={item}
              index={index}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
