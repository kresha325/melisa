"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Search,
  RefreshCw,
  PiggyBank,
  Zap,
  Flame,
} from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "Kostenlose Beratung",
    description:
      "Persönliche Analyse Ihrer aktuellen Strom- und Gasverträge. Wir finden das beste Angebot für Ihre Bedürfnisse.",
    color: "bg-emerald-500",
  },
  {
    icon: Search,
    title: "Tarifvergleich",
    description:
      "Wir vergleichen hunderte Tarife von über 1.000 Anbietern und präsentieren Ihnen die besten Optionen.",
    color: "bg-blue-500",
  },
  {
    icon: RefreshCw,
    title: "Kostenloser Tarifwechsel",
    description:
      "Den gesamten Wechselprozess übernehmen wir für Sie — kostenlos, schnell und ohne Papierkram für Sie.",
    color: "bg-violet-500",
  },
  {
    icon: PiggyBank,
    title: "Bis zu 850€ sparen",
    description:
      "Durchschnittliche Ersparnis unserer Kunden. Jährliche Einsparungen, die sich lohnen.",
    color: "bg-amber-500",
  },
  {
    icon: Zap,
    title: "Strom optimieren",
    description:
      "Finden Sie den günstigsten Stromtarif für Haushalt oder Gewerbe — mit Ökostrom-Optionen.",
    color: "bg-yellow-500",
  },
  {
    icon: Flame,
    title: "Gas optimieren",
    description:
      "Senken Sie Ihre Heizkosten mit einem günstigen Gastarif in Ihrer Region.",
    color: "bg-orange-500",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-green-light text-brand-green text-sm font-semibold mb-4">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            Alles aus einer Hand
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Von der Beratung bis zum Tarifwechsel — wir begleiten Sie durch den
            gesamten Prozess und sorgen für maximale Ersparnis.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-brand-green/30 hover:shadow-xl hover:shadow-brand-green/10 transition-all duration-300 bg-gray-50/50"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
