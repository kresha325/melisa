"use client";

import { motion } from "framer-motion";
import {
  Shield,
  BadgeCheck,
  HandCoins,
  Clock,
  Lock,
  Users,
} from "lucide-react";
import { COMPANY } from "@/lib/company";

const trustPoints = [
  {
    icon: HandCoins,
    title: "100% kostenlos",
    description:
      "Beratung und Tarifwechsel sind für Sie vollständig kostenfrei — ohne versteckte Gebühren.",
  },
  {
    icon: BadgeCheck,
    title: "Unverbindlich",
    description:
      "Sie entscheiden in Ruhe. Kein Vertrag ohne Ihre ausdrückliche Zustimmung.",
  },
  {
    icon: Shield,
    title: "Geprüfte Anbieter",
    description:
      "Wir vergleichen nur seriöse Energieanbieter mit transparenten Konditionen.",
  },
  {
    icon: Clock,
    title: "Schnelle Bearbeitung",
    description:
      "Rückmeldung innerhalb von 24 Stunden. Tarifwechsel in wenigen Tagen erledigt.",
  },
  {
    icon: Lock,
    title: "Datenschutz",
    description:
      "Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.",
  },
  {
    icon: Users,
    title: "Persönliche Betreuung",
    description:
      "Ein fester Ansprechpartner begleitet Sie — von der Beratung bis zum Wechsel.",
  },
];

export default function TrustSection() {
  return (
    <section id="vertrauen" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-green-light text-brand-green text-sm font-semibold mb-4">
            Warum uns vertrauen?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            Seriös, transparent & kostenlos
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {COMPANY.name} hilft Haushalten in ganz Deutschland, Strom- und
            Gaskosten zu senken — fair, ehrlich und ohne Risiko für Sie.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:border-brand-green/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-5">
                <point.icon className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { value: COMPANY.maxSavings, label: "Max. Ersparnis/Jahr" },
            { value: "0€", label: "Kosten für Sie" },
            { value: "24h", label: "Antwortzeit" },
            { value: "100%", label: "Unverbindlich" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-brand-green-light"
            >
              <div className="text-2xl lg:text-3xl font-bold text-brand-green mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
