"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Ist die Beratung wirklich kostenlos?",
    a: "Ja, unsere Beratung und der Tarifwechsel sind für Sie vollständig kostenlos. Wir erhalten eine Provision vom neuen Energieanbieter — nicht von Ihnen.",
  },
  {
    q: "Wie viel kann ich wirklich sparen?",
    a: "Das hängt von Ihrem aktuellen Vertrag ab. Viele Haushalte in Deutschland sparen zwischen 200€ und bis zu 850€ pro Jahr. Unser Sparrechner liefert nur eine unverbindliche Erst-Einschätzung.",
  },
  {
    q: "Muss ich selbst den Anbieter wechseln?",
    a: "Nein. Wir übernehmen den gesamten Wechselprozess für Sie — von der Kündigung beim alten Anbieter bis zur Anmeldung beim neuen.",
  },
  {
    q: "Gibt es eine Mindestvertragslaufzeit?",
    a: "Das hängt vom gewählten Tarif ab. Wir beraten Sie transparent und empfehlen nur Tarife, die zu Ihrer Situation passen.",
  },
  {
    q: "Was passiert mit meinen Daten?",
    a: "Ihre Daten werden zur Bearbeitung Ihrer Anfrage verwendet und über unseren Formular-Dienst per E-Mail an uns übermittelt. Details finden Sie in unserer Datenschutzerklärung.",
  },
  {
    q: "Sind Sie eine Behörde oder Versorger?",
    a: "Nein. Die Energiesparer ist ein unabhängiger Energieberater in Deutschland — keine Behörde, kein Netzbetreiber und kein gesetzlicher Energieversorger.",
  },
  {
    q: "Gilt das Angebot auch außerhalb Deutschlands?",
    a: "Nein. Unsere Beratung und Vermittlung richtet sich ausschließlich an Haushalte und Unternehmen in Deutschland.",
  },
  {
    q: "Wie schnell erhalte ich eine Rückmeldung?",
    a: "Wir melden uns in der Regel innerhalb von 24 Stunden — per Telefon oder E-Mail, ganz wie Sie es wünschen.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-brand-green-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-gray-600">
            Alles Wichtige auf einen Blick — transparent beantwortet.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={open === index}
              >
                <span className="font-semibold text-brand-navy pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-green shrink-0 transition-transform duration-200 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === index && (
                <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
