"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingDown,
  Shield,
  Clock,
} from "lucide-react";

const stats = [
  { value: "850€", label: "Max. Ersparnis pro Jahr" },
  { value: "100%", label: "Kostenlose Beratung" },
  { value: "0€", label: "Gebühren für Wechsel" },
  { value: "24h", label: "Schnelle Rückmeldung" },
];

const benefits = [
  "Kostenlose Beratung",
  "Kostenloser Tarifwechsel",
  "Unverbindliches Angebot",
  "Persönliche Betreuung",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden flex items-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-green/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-green-100 text-sm font-medium mb-6">
              <TrendingDown className="w-4 h-4" />
              Energiekosten senken
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient">Strom und Gas</span>
              <br />
              <span className="text-white">Kosten optimieren</span>
              und dabei sparen
            </h1>

            <p className="text-lg sm:text-xl text-green-100/80 mb-8 max-w-lg leading-relaxed">
              Wir vergleichen für Sie die besten Tarife und wechseln kostenlos —
              ohne versteckte Kosten und ohne Aufwand für Sie.
            </p>

            <ul className="space-y-3 mb-10">
              {benefits.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-green-100"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold hover:bg-yellow-400 text-brand-navy font-bold rounded-full transition-all hover:shadow-xl hover:shadow-brand-gold/30 animate-pulse-glow"
              >
                Jetzt kostenlos beraten lassen
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#rechner"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-full transition-all hover:bg-white/10"
              >
                Sparrechner starten
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-8 lg:p-10 animate-float">
              <div className="text-center mb-8">
                <div className="text-6xl lg:text-7xl font-black text-brand-gold mb-2">
                  850€
                </div>
                <p className="text-white/80 text-lg">
                  Bis zu dieser Ersparnis pro Jahr möglich
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Shield,
                    title: "Sicher & Zuverlässig",
                    desc: "Geprüfte Anbieter und transparente Konditionen",
                  },
                  {
                    icon: Clock,
                    title: "Schnell erledigt",
                    desc: "Tarifwechsel in wenigen Minuten — wir kümmern uns",
                  },
                  {
                    icon: TrendingDown,
                    title: "Dauerhaft sparen",
                    desc: "Langfristig niedrigere Energiekosten sichern",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-green/30 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{title}</div>
                      <div className="text-sm text-green-200/70">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-gold/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-green/30 rounded-full blur-2xl" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 lg:mt-24"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 lg:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="text-2xl lg:text-3xl font-bold text-brand-gold mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-green-200/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
