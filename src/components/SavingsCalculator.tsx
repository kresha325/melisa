"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Zap, Flame, TrendingDown } from "lucide-react";

export default function SavingsCalculator() {
  const [stromKosten, setStromKosten] = useState(1200);
  const [gasKosten, setGasKosten] = useState(1500);
  const [personen, setPersonen] = useState(3);

  const stromErsparnis = Math.round(stromKosten * 0.25);
  const gasErsparnis = Math.round(gasKosten * 0.2);
  const bonusErsparnis = personen >= 4 ? 100 : personen >= 2 ? 50 : 0;
  const gesamtErsparnis = Math.min(
    stromErsparnis + gasErsparnis + bonusErsparnis,
    850
  );

  return (
    <section id="rechner" className="py-24 lg:py-32 bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/20 text-brand-gold text-sm font-semibold mb-4">
            <Calculator className="w-4 h-4" />
            Sparrechner
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Wie viel können Sie sparen?
          </h2>
          <p className="text-green-200/70 text-lg max-w-2xl mx-auto">
            Unverbindliche Schätzung für Haushalte in Deutschland — in wenigen
            Sekunden berechnet.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-8"
          >
            <div>
              <label className="flex items-center gap-2 text-white font-medium mb-4">
                <Zap className="w-5 h-5 text-brand-gold" />
                Jährliche Stromkosten:{" "}
                <span className="text-brand-gold font-bold">
                  {stromKosten.toLocaleString("de-DE")} €
                </span>
              </label>
              <input
                type="range"
                min={400}
                max={3000}
                step={50}
                value={stromKosten}
                onChange={(e) => setStromKosten(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer accent-brand-gold"
              />
              <div className="flex justify-between text-xs text-green-200/50 mt-2">
                <span>400 €</span>
                <span>3.000 €</span>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-white font-medium mb-4">
                <Flame className="w-5 h-5 text-orange-400" />
                Jährliche Gaskosten:{" "}
                <span className="text-brand-gold font-bold">
                  {gasKosten.toLocaleString("de-DE")} €
                </span>
              </label>
              <input
                type="range"
                min={500}
                max={4000}
                step={50}
                value={gasKosten}
                onChange={(e) => setGasKosten(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer accent-brand-gold"
              />
              <div className="flex justify-between text-xs text-green-200/50 mt-2">
                <span>500 €</span>
                <span>4.000 €</span>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-white font-medium mb-4">
                Personen im Haushalt:{" "}
                <span className="text-brand-gold font-bold">{personen}</span>
              </label>
              <input
                type="range"
                min={1}
                max={6}
                step={1}
                value={personen}
                onChange={(e) => setPersonen(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer accent-brand-gold"
              />
              <div className="flex justify-between text-xs text-green-200/50 mt-2">
                <span>1 Person</span>
                <span>6+ Personen</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-brand-green to-brand-green-dark rounded-3xl p-8 lg:p-10 text-center"
          >
            <TrendingDown className="w-12 h-12 text-brand-gold mx-auto mb-6" />
            <p className="text-green-100 mb-2 text-lg">Ihr geschätztes Sparpotenzial</p>
            <div className="text-6xl lg:text-7xl font-black text-white mb-2">
              {gesamtErsparnis.toLocaleString("de-DE")} €
            </div>
            <p className="text-green-200/80 mb-8">pro Jahr</p>

            <div className="space-y-3 text-left bg-white/10 rounded-2xl p-6 mb-8">
              <div className="flex justify-between text-green-100">
                <span>Strom-Ersparnis (~25%)</span>
                <span className="font-semibold text-white">
                  {stromErsparnis.toLocaleString("de-DE")} €
                </span>
              </div>
              <div className="flex justify-between text-green-100">
                <span>Gas-Ersparnis (~20%)</span>
                <span className="font-semibold text-white">
                  {gasErsparnis.toLocaleString("de-DE")} €
                </span>
              </div>
              {bonusErsparnis > 0 && (
                <div className="flex justify-between text-green-100">
                  <span>Haushaltsbonus</span>
                  <span className="font-semibold text-white">
                    {bonusErsparnis.toLocaleString("de-DE")} €
                  </span>
                </div>
              )}
            </div>

            <a
              href="#kontakt"
              className="inline-flex items-center justify-center w-full py-4 bg-brand-gold hover:bg-yellow-400 text-brand-navy font-bold rounded-full transition-all hover:shadow-xl"
            >
              Jetzt kostenlos beraten lassen
            </a>
            <p className="text-green-200/60 text-sm mt-4">
              * Schätzung basierend auf Durchschnittswerten. Tatsächliche
              Ersparnis kann variieren.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
