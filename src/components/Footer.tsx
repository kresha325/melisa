import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { COMPANY } from "@/lib/company";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Logo height={90} className="drop-shadow-lg" />
            </div>
            <p className="text-green-200/60 text-sm leading-relaxed">
              Ihr Partner für günstige Strom- und Gastarife. Kostenlose Beratung
              und Tarifwechsel — damit Sie mehr Geld behalten.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-green-200/60 text-sm">
              <li>
                <Link href="/#leistungen" className="hover:text-brand-gold transition-colors">
                  Strom optimieren
                </Link>
              </li>
              <li>
                <Link href="/#leistungen" className="hover:text-brand-gold transition-colors">
                  Gas optimieren
                </Link>
              </li>
              <li>
                <Link href="/#rechner" className="hover:text-brand-gold transition-colors">
                  Sparrechner
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-brand-gold transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-green-200/60 text-sm">
              <li>
                <Link href="/#ueber-uns" className="hover:text-brand-gold transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/#ablauf" className="hover:text-brand-gold transition-colors">
                  So funktioniert&apos;s
                </Link>
              </li>
              <li>
                <Link href="/#kontakt" className="hover:text-brand-gold transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-brand-gold transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="hover:text-brand-gold transition-colors">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-green-200/60 text-sm">
              <li>
                <a
                  href={`tel:${COMPANY.phoneLink}`}
                  className="flex items-center gap-2 hover:text-brand-gold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2 hover:text-brand-gold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-green-200/40 text-sm">
            © {new Date().getFullYear()} {COMPANY.name}. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex gap-4 text-green-200/40 text-sm">
            <Link href="/impressum" className="hover:text-brand-gold transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-brand-gold transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
