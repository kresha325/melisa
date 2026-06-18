"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#rechner", label: "Sparrechner" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link href="/" className="flex items-center group">
            <Logo
              height={scrolled ? 60 : 80}
              priority
              className="group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-green ${
                  scrolled ? "text-gray-700" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:01753342296"
              className={`flex items-center gap-2 text-sm font-medium ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              0175 - 3342296
            </a>
            <a
              href="#kontakt"
              className="px-5 py-2.5 bg-brand-green hover:bg-brand-green-dark text-white text-sm font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-brand-green/30"
            >
              Kostenlose Beratung
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              scrolled ? "text-brand-navy" : "text-white"
            }`}
            aria-label="Menü öffnen"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-brand-green-light hover:text-brand-green transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:01753342296"
              className="px-4 py-3 text-brand-green font-semibold flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              0175 - 3342296
            </a>
            <a
              href="#kontakt"
              onClick={() => setIsOpen(false)}
              className="mx-4 mt-2 py-3 bg-brand-green text-white text-center font-semibold rounded-full"
            >
              Kostenlose Beratung
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
