"use client";

import { motion } from "framer-motion";
import { Target, Heart, Zap } from "lucide-react";
import Logo from "@/components/Logo";
import { COMPANY } from "@/lib/company";

export default function AboutUs() {
  return (
    <section id="ueber-uns" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-green-light text-brand-green text-sm font-semibold mb-4">
              Über uns
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
              Ihr Partner für günstige Energie
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              <strong>{COMPANY.name}</strong> ist Ihr unabhängiger Berater für
              Strom- und Gastarife in Deutschland. Wir wissen, dass steigende
              Energiekosten belasten — deshalb helfen wir Ihnen, ohne Aufwand
              und ohne Kosten den besten Tarif zu finden.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Unser Versprechen: persönliche Beratung, transparente Empfehlungen
              und ein reibungsloser Wechsel. Sie sparen Geld — wir kümmern uns
              um den Rest.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Target,
                  text: "Fokus auf maximale Ersparnis für jeden Haushalt",
                },
                {
                  icon: Heart,
                  text: "Persönlicher Service statt anonymer Hotline",
                },
                {
                  icon: Zap,
                  text: "Schnelle Bearbeitung — oft innerhalb weniger Tage",
                },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-green" />
                  </div>
                  <span className="text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative bg-gradient-to-br from-brand-green-light to-white rounded-3xl p-10 lg:p-14 border border-brand-green/10">
              <Logo height={120} className="mx-auto mb-8" />
              <blockquote className="text-center">
                <p className="text-xl font-medium text-brand-navy italic leading-relaxed mb-4">
                  &ldquo;{COMPANY.tagline}&rdquo;
                </p>
                <footer className="text-brand-green font-semibold">
                  — {COMPANY.name}
                </footer>
              </blockquote>
            </div>
            <div className="absolute -z-10 top-8 right-8 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
