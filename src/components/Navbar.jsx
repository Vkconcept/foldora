
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-ivory/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <a
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex flex-col"
        >
          <span className="font-heading text-2xl font-bold tracking-wide text-forest">
            FOLDORA
          </span>

          <span className="text-[9px] tracking-[3px] text-charcoal/60">
            LAUNDRY & FABRIC CARE
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-charcoal/75 transition-colors hover:text-forest"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="/book-pickup"
          className="hidden items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm text-white transition-colors hover:bg-forest/90 md:flex"
        >
          Book a Pickup
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-[70] text-forest md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[55] bg-charcoal/40 transition-opacity duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed left-0 top-0 z-[60] flex h-dvh w-[82%] max-w-sm flex-col bg-ivory px-7 pb-10 pt-28 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Explore Foldora
          </p>

          <p className="mt-2 font-heading text-2xl text-forest">
            Where laundry meets care.
          </p>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col gap-7">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between border-b border-forest/10 pb-4 text-base font-medium text-charcoal transition-colors hover:text-forest"
            >
              {link.name}
              <span className="text-xs text-charcoal/30">
                0{index + 1}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Booking CTA */}
        <a
          href="/book-pickup"
          onClick={() => setIsOpen(false)}
          className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-forest/90"
        >
          Book a Pickup
          <ArrowUpRight size={16} />
        </a>

        <div className="mt-auto border-t border-forest/10 pt-6">
          <p className="text-xs tracking-widest text-charcoal/40">
            FOLDORA · LAUNDRY & FABRIC CARE
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            Care in every fold.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
