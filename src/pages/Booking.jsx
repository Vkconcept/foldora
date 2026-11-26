
import { useMemo, useState } from "react";
import {
  WashingMachine,
  Shirt,
  Sparkles,
  BedDouble,
  Zap,
  Check,
  Plus,
  Minus,
  ArrowLeft,
} from "lucide-react";

import Navbar from "../components/Navbar";
import FoldoraFooter from "../components/FoldoraFooter";

const FREE_DELIVERY_FROM = 15000;
const DELIVERY_FEE = 1500;

const services = [
  {
    id: "wash-fold",
    title: "Wash & Fold",
    price: 1500,
    unit: "kg",
    turnaround: "48 hours",
    icon: WashingMachine,
  },
  {
    id: "wash-iron",
    title: "Wash & Iron",
    price: 800,
    unit: "item",
    turnaround: "48 hours",
    icon: Shirt,
  },
  {
    id: "dry-cleaning",
    title: "Dry Cleaning",
    price: 3000,
    unit: "item",
    turnaround: "72 hours",
    icon: Sparkles,
  },
  {
    id: "duvet",
    title: "Duvet & Bedsheets",
    price: 5000,
    unit: "piece",
    turnaround: "72 hours",
    icon: BedDouble,
  },
  {
    id: "express",
    title: "Express Laundry",
    price: 2800,
    unit: "kg",
    turnaround: "Same day",
    icon: Zap,
  },
];

const timeWindows = [
  "8:00am – 11:00am",
  "11:00am – 2:00pm",
  "2:00pm – 5:00pm",
];

const steps = ["Services", "Your Details", "Review"];

const naira = (amount) =>
  `₦${amount.toLocaleString("en-NG")}`;

const inputClass =
  "w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm text-charcoal outline-none transition placeholder:text-charcoal/35 focus:border-forest focus:ring-2 focus:ring-forest/10";

const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-forest/90 disabled:cursor-not-allowed disabled:opacity-40";

const secondaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-full border border-forest/20 px-6 py-3.5 text-sm font-semibold text-forest transition hover:bg-sage/50";

function Stepper({ step, onJump }) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      {steps.map((label, index) => {
        const active = index === step;
        const completed = index < step;

        return (
          <button
            key={label}
            type="button"
            disabled={!completed}
            onClick={() => onJump(index)}
            className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm transition ${
              active
                ? "bg-forest font-semibold text-white"
                : completed
                  ? "bg-sage font-semibold text-forest"
                  : "bg-white text-charcoal/45"
            }`}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs">
              {completed ? <Check size={14} /> : index + 1}
            </span>
            {label}
          </button>
        );
      })}
    </div>
  );
}

function QuantityControl({ label, value, onChange }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-forest/15 bg-white p-1">
      <button
        type="button"
        aria-label={`Decrease ${label}`}
        disabled={value === 0}
        onClick={() => onChange(value - 1)}
        className="flex h-9 w-9 items-center justify-center rounded-full text-forest transition hover:bg-sage disabled:opacity-30"
      >
        <Minus size={15} />
      </button>

      <span className="w-5 text-center text-sm font-semibold text-charcoal">
        {value}
      </span>

      <button
        type="button"
        aria-label={`Increase ${label}`}
        onClick={() => onChange(value + 1)}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-sage text-forest transition hover:bg-sage/70"
      >
        <Plus size={15} />
      </button>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-charcoal">
        {label}
      </span>
      {children}
    </label>
  );
}

function Estimate({ lines, subtotal, delivery, total }) {
  return (
    <aside className="rounded-3xl border border-forest/10 bg-white p-6 shadow-sm md:sticky md:top-28">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
        Order summary
      </p>

      <h2 className="mt-2 font-heading text-2xl text-forest">
        Your estimate
      </h2>

      {lines.length === 0 ? (
        <div className="py-10 text-center">
          <WashingMachine
            size={32}
            strokeWidth={1.4}
            className="mx-auto text-forest/35"
          />
          <p className="mx-auto mt-4 max-w-[230px] text-sm leading-6 text-charcoal/55">
            Your selected services will appear here. Choose a service to get started.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-6 space-y-4">
            {lines.map((line) => (
              <div
                key={line.id}
                className="flex items-start justify-between gap-3"
              >
                <div>
                  <p className="text-sm font-semibold text-charcoal">
                    {line.title}
                  </p>
                  <p className="mt-1 text-xs text-charcoal/55">
                    {line.qty} {line.unit} × {naira(line.price)}
                  </p>
                </div>

                <p className="text-sm font-semibold text-charcoal">
                  {naira(line.qty * line.price)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3 border-t border-forest/10 pt-5 text-sm">
            <div className="flex justify-between text-charcoal/60">
              <span>Subtotal</span>
              <span>{naira(subtotal)}</span>
            </div>

            <div className="flex justify-between text-charcoal/60">
              <span>Pickup & delivery</span>
              <span>{delivery === 0 ? "Free" : naira(delivery)}</span>
            </div>

            <div className="flex justify-between border-t border-forest/10 pt-4 font-semibold text-forest">
              <span>Estimated total</span>
              <span className="font-heading text-2xl">
                {naira(total)}
              </span>
            </div>
          </div>

          {delivery > 0 && (
            <p className="mt-4 rounded-xl bg-sage/50 p-3 text-xs leading-5 text-forest">
              Add {naira(FREE_DELIVERY_FROM - subtotal)} more to qualify for free pickup and delivery.
            </p>
          )}
        </>
      )}

    
    </aside>
  );
}

function getLocalDate() {
  const date = new Date();
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 10);
}

export default function Booking() {
  const [step, setStep] = useState(0);
  const [quantities, setQuantities] = useState({});
  const [confirmed, setConfirmed] = useState(false);

  const [details, setDetails] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
    window: timeWindows[0],
    notes: "",
  });

  const today = getLocalDate();

  const { lines, subtotal, delivery, total } = useMemo(() => {
    const selectedLines = services
      .filter((service) => (quantities[service.id] || 0) > 0)
      .map((service) => ({
        ...service,
        qty: quantities[service.id],
      }));

    const calculatedSubtotal = selectedLines.reduce(
      (sum, line) => sum + line.qty * line.price,
      0
    );

    const calculatedDelivery =
      calculatedSubtotal === 0 ||
      calculatedSubtotal >= FREE_DELIVERY_FROM
        ? 0
        : DELIVERY_FEE;

    return {
      lines: selectedLines,
      subtotal: calculatedSubtotal,
      delivery: calculatedDelivery,
      total: calculatedSubtotal + calculatedDelivery,
    };
  }, [quantities]);

  const setQuantity = (id, value) => {
    setQuantities((current) => ({
      ...current,
      [id]: Math.max(0, value),
    }));
  };

  const updateField = (event) => {
    const { name, value } = event.target;

    setDetails((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const goToStep = (nextStep) => {
    setStep(nextStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-ivory px-5 pb-20 pt-16 md:px-8 md:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Book a pickup
            </p>

            <h1 className="mt-4 font-heading text-4xl leading-tight text-forest md:text-6xl">
              Let’s get your laundry sorted.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-charcoal/60 md:text-base">
              A few simple steps and we’ll have your laundry pickup request ready.
              More time for the things that matter.
            </p>
          </div>

          {confirmed ? (
            <div className="mt-12 max-w-2xl rounded-3xl border border-forest/10 bg-white p-8 shadow-sm md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage text-forest">
                <Check size={27} />
              </div>

              <h2 className="mt-6 font-heading text-3xl text-forest">
                Pickup request prepared!
              </h2>

              <p className="mt-4 text-sm leading-7 text-charcoal/65">
                Thank you, {details.name.split(" ")[0] || "there"}. Your demo
                request shows a pickup for {details.date} during{" "}
                {details.window}.
              </p>

             
              <a href="/" className={`${primaryBtn} mt-7`}>
                Back to homepage
              </a>
            </div>
          ) : (
            <>
              <Stepper step={step} onJump={goToStep} />

              <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.5fr_0.8fr]">
                <div>
                  {step === 0 && (
                    <section>
                      <div className="mb-6">
                        <h2 className="font-heading text-2xl text-forest">
                          What needs cleaning?
                        </h2>
                        <p className="mt-2 text-sm text-charcoal/55">
                          Select your services and adjust the quantities.
                        </p>
                      </div>

                      <div className="space-y-4">
                        {services.map((service) => {
                          const Icon = service.icon;

                          return (
                            <article
                              key={service.id}
                              className="flex items-center justify-between gap-4 rounded-2xl border border-forest/10 bg-white p-4 shadow-sm md:p-5"
                            >
                              <div className="flex min-w-0 items-center gap-3 md:gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sage text-forest">
                                  <Icon size={23} strokeWidth={1.6} />
                                </div>

                                <div className="min-w-0">
                                  <h3 className="font-heading text-lg text-forest md:text-xl">
                                    {service.title}
                                  </h3>

                                  <p className="mt-1 text-xs text-charcoal/55 md:text-sm">
                                    {naira(service.price)} / {service.unit}
                                  </p>

                                  <p className="mt-1 text-xs text-gold">
                                    {service.turnaround}
                                  </p>
                                </div>
                              </div>

                              <QuantityControl
                                label={service.title}
                                value={quantities[service.id] || 0}
                                onChange={(value) =>
                                  setQuantity(service.id, value)
                                }
                              />
                            </article>
                          );
                        })}
                      </div>

                      <div className="mt-7 flex justify-end">
                        <button
                          type="button"
                          disabled={lines.length === 0}
                          onClick={() => goToStep(1)}
                          className={primaryBtn}
                        >
                          Continue to details
                        </button>
                      </div>
                    </section>
                  )}

                  {step === 1 && (
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                        goToStep(2);
                      }}
                      className="rounded-3xl border border-forest/10 bg-white p-6 shadow-sm md:p-8"
                    >
                      <h2 className="font-heading text-2xl text-forest">
                        Your pickup details
                      </h2>

                      <p className="mt-2 text-sm text-charcoal/55">
                        Tell us where and when you would like your laundry collected.
                      </p>

                      <div className="mt-7 grid gap-5 sm:grid-cols-2">
                        <Field label="Full name">
                          <input
                            required
                            name="name"
                            value={details.name}
                            onChange={updateField}
                            placeholder="Your full name"
                            autoComplete="name"
                            className={inputClass}
                          />
                        </Field>

                        <Field label="Phone / WhatsApp">
                          <input
                            required
                            type="tel"
                            name="phone"
                            value={details.phone}
                            onChange={updateField}
                            placeholder="0801 234 5678"
                            autoComplete="tel"
                            className={inputClass}
                          />
                        </Field>
                      </div>

                      <div className="mt-5">
                        <Field label="Pickup address">
                          <input
                            required
                            name="address"
                            value={details.address}
                            onChange={updateField}
                            placeholder="Street, area, city"
                            autoComplete="street-address"
                            className={inputClass}
                          />
                        </Field>
                      </div>

                      <div className="mt-5 grid gap-5 sm:grid-cols-2">
                        <Field label="Preferred pickup date">
                          <input
                            required
                            type="date"
                            name="date"
                            min={today}
                            value={details.date}
                            onChange={updateField}
                            className={inputClass}
                          />
                        </Field>

                        <Field label="Preferred time">
                          <select
                            name="window"
                            value={details.window}
                            onChange={updateField}
                            className={inputClass}
                          >
                            {timeWindows.map((window) => (
                              <option key={window} value={window}>
                                {window}
                              </option>
                            ))}
                          </select>
                        </Field>
                      </div>

                      <div className="mt-5">
                        <Field label="Additional notes (optional)">
                          <textarea
                            rows={4}
                            name="notes"
                            value={details.notes}
                            onChange={updateField}
                            placeholder="Any special instructions or fabric care requests?"
                            className={inputClass}
                          />
                        </Field>
                      </div>

                      <div className="mt-8 flex flex-wrap justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => goToStep(0)}
                          className={secondaryBtn}
                        >
                          <ArrowLeft size={16} />
                          Back
                        </button>

                        <button type="submit" className={primaryBtn}>
                          Review booking
                        </button>
                      </div>
                    </form>
                  )}

                  {step === 2 && (
                    <section className="rounded-3xl border border-forest/10 bg-white p-6 shadow-sm md:p-8">
                      <h2 className="font-heading text-2xl text-forest">
                        Review your details
                      </h2>

                      <p className="mt-2 text-sm text-charcoal/55">
                        Please check your information before confirming.
                      </p>

                      <dl className="mt-7 space-y-5">
                        {[
                          ["Full name", details.name],
                          ["Phone / WhatsApp", details.phone],
                          ["Pickup address", details.address],
                          ["Pickup date", details.date],
                          ["Preferred time", details.window],
                          ["Additional notes", details.notes || "None"],
                        ].map(([label, value]) => (
                          <div
                            key={label}
                            className="grid gap-1 border-b border-forest/10 pb-4 sm:grid-cols-[150px_1fr]"
                          >
                            <dt className="text-sm text-charcoal/50">
                              {label}
                            </dt>
                            <dd className="break-words text-sm font-medium text-charcoal">
                              {value}
                            </dd>
                          </div>
                        ))}
                      </dl>

                      <div className="mt-8 flex flex-wrap justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => goToStep(1)}
                          className={secondaryBtn}
                        >
                          <ArrowLeft size={16} />
                          Edit details
                        </button>

                        <button
                          type="button"
                          onClick={() => setConfirmed(true)}
                          className={primaryBtn}
                        >
                          Confirm pickup
                          <Check size={16} />
                        </button>
                      </div>
                    </section>
                  )}
                </div>

                <Estimate
                  lines={lines}
                  subtotal={subtotal}
                  delivery={delivery}
                  total={total}
                />
              </div>
            </>
          )}
        </div>
      </main>

      <FoldoraFooter />
    </>
  );
}
