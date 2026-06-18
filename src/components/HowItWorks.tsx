"use client";

import { motion } from "framer-motion";
import { FileText, PhoneCall, CheckCircle, PartyPopper } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Kontakt aufnehmen",
    description:
      "Rufen Sie uns an oder füllen Sie das Kontaktformular aus. Wir melden uns innerhalb von 24 Stunden zurück.",
  },
  {
    step: "02",
    icon: FileText,
    title: "Daten übermitteln",
    description:
      "Wir analysieren Ihre aktuellen Verträge und berechnen Ihr individuelles Sparpotenzial.",
  },
  {
    step: "03",
    icon: CheckCircle,
    title: "Bestes Angebot erhalten",
    description:
      "Sie erhalten ein unverbindliches Angebot — transparent und ohne versteckte Kosten.",
  },
  {
    step: "04",
    icon: PartyPopper,
    title: "Wir wechseln für Sie",
    description:
      "Den Tarifwechsel übernehmen wir komplett — schnell, einfach und ohne Aufwand für Sie.",
  },
];

export default function HowItWorks() {
  return (
    <section id="ablauf" className="py-24 lg:py-32 bg-brand-green-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-sm font-semibold mb-4">
            So funktioniert&apos;s
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            In 4 einfachen Schritten sparen
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Von der ersten Anfrage bis zum erfolgreichen Tarifwechsel — wir
            kümmern uns um alles.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-brand-green/20" />
              )}
              <div className="w-20 h-20 rounded-2xl bg-brand-green text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-green/30">
                <step.icon className="w-9 h-9" />
              </div>
              <div className="text-sm font-bold text-brand-green mb-2">
                Schritt {step.step}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
