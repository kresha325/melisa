"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Ist die Beratung wirklich kostenlos?",
    a: "Ja, unsere Beratung und der Tarifwechsel sind für Sie vollständig kostenlos. Wir erhalten eine Provision vom neuen Energieanbieter — nicht von Ihnen.",
  },
  {
    q: "Wie viel kann ich wirklich sparen?",
    a: "Das hängt von Ihrem aktuellen Vertrag ab. Viele Haushalte sparen zwischen 200€ und 850€ pro Jahr. Mit unserem Sparrechner erhalten Sie eine erste Einschätzung.",
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
    a: "Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben. Details finden Sie in unserer Datenschutzerklärung.",
  },
  {
    q: "Wie schnell erhalte ich eine Rückmeldung?",
    a: "Wir melden uns in der Regel innerhalb von 24 Stunden — per Telefon oder E-Mail, ganz wie Sie es wünschen.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-brand-green-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-gray-600">
            Alles Wichtige auf einen Blick — transparent beantwortet.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
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
                  className={`w-5 h-5 text-brand-green shrink-0 transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
