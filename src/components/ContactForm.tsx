import { Mail, Phone, MapPin, Send } from "lucide-react";
import { InternalLink } from "@/components/InternalLink";
import { COMPANY } from "@/lib/company";
import { SITE_URL } from "@/lib/site";

export default function ContactForm() {
  const thankYouUrl = `${SITE_URL}/danke/`;

  return (
    <section id="kontakt" className="py-24 lg:py-32 bg-brand-green-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-sm font-semibold mb-4">
              Kontakt
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
              Kostenlose Beratung anfragen
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Füllen Sie das Formular aus oder kontaktieren Sie uns direkt. Wir
              melden uns schnellstmöglich bei Ihnen — völlig unverbindlich und
              kostenlos.
            </p>

            <div className="space-y-6">
              <a
                href={`tel:${COMPANY.phoneLink}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Telefon</div>
                  <div className="font-bold text-brand-navy text-lg">
                    {COMPANY.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">E-Mail</div>
                  <div className="font-bold text-brand-navy">
                    {COMPANY.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Verfügbarkeit</div>
                  <div className="font-bold text-brand-navy">
                    {COMPANY.hours}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            action={`https://formsubmit.co/${encodeURIComponent(COMPANY.email)}`}
            method="POST"
            className="bg-white rounded-3xl p-8 shadow-lg space-y-5 h-fit"
          >
            <input type="hidden" name="_next" value={thankYouUrl} />
            <input type="hidden" name="_subject" value="Neue Website-Anfrage" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all"
                  placeholder="Max Mustermann"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Telefon *
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all"
                  placeholder="0175 1234567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                E-Mail *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all"
                placeholder="max@beispiel.de"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="plz" className="block text-sm font-medium text-gray-700 mb-1.5">
                  PLZ (Deutschland) *
                </label>
                <input
                  id="plz"
                  type="text"
                  name="PLZ"
                  required
                  inputMode="numeric"
                  pattern="[0-9]{5}"
                  maxLength={5}
                  title="Bitte geben Sie eine gültige deutsche Postleitzahl (5 Ziffern) ein."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all"
                  placeholder="25704"
                />
              </div>
              <div>
                <label htmlFor="ort" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Ort *
                </label>
                <input
                  id="ort"
                  type="text"
                  name="Ort"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all"
                  placeholder="Meldorf"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="strom" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Stromkosten/Jahr
                </label>
                <select
                  id="strom"
                  name="Stromkosten/Jahr"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all bg-white"
                  defaultValue=""
                >
                  <option value="">Bitte wählen</option>
                  <option value="Unter 800 €">Unter 800 €</option>
                  <option value="800 – 1.200 €">800 – 1.200 €</option>
                  <option value="1.200 – 1.800 €">1.200 – 1.800 €</option>
                  <option value="Über 1.800 €">Über 1.800 €</option>
                </select>
              </div>
              <div>
                <label htmlFor="gas" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Gaskosten/Jahr
                </label>
                <select
                  id="gas"
                  name="Gaskosten/Jahr"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all bg-white"
                  defaultValue=""
                >
                  <option value="">Bitte wählen</option>
                  <option value="Unter 1.000 €">Unter 1.000 €</option>
                  <option value="1.000 – 1.500 €">1.000 – 1.500 €</option>
                  <option value="1.500 – 2.500 €">1.500 – 2.500 €</option>
                  <option value="Über 2.500 €">Über 2.500 €</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                Nachricht (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all resize-none"
                placeholder="Ihre Fragen oder Anmerkungen..."
              />
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
              <input
                id="legal-consent"
                name="Rechtliche Einwilligung"
                type="checkbox"
                required
                value="Akzeptiert"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-green focus:ring-brand-green"
              />
              <label htmlFor="legal-consent" className="text-xs text-gray-600 leading-relaxed">
                Ich habe die{" "}
                <InternalLink href="/datenschutz" className="text-brand-green underline">
                  Datenschutzerklärung
                </InternalLink>
                ,{" "}
                <InternalLink href="/agb" className="text-brand-green underline">
                  AGB
                </InternalLink>{" "}
                und{" "}
                <InternalLink href="/widerruf" className="text-brand-green underline">
                  Widerrufsbelehrung
                </InternalLink>{" "}
                zur Kenntnis genommen. Das Angebot gilt ausschließlich für
                Deutschland. *
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 bg-brand-green hover:bg-brand-green-dark text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-brand-green/30"
            >
              <Send className="w-5 h-5" />
              Anfrage kostenlos senden
            </button>

            <p className="text-xs text-gray-500 text-center">
              * Pflichtfeld. Unverbindliche Anfrage — kein Vertragsschluss über
              das Formular.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
