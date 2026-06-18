"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { COMPANY } from "@/lib/company";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    strom: "",
    gas: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const messageParts = [
        formData.message?.trim(),
        formData.strom ? `Stromkosten/Jahr: ${formData.strom}` : null,
        formData.gas ? `Gaskosten/Jahr: ${formData.gas}` : null,
      ].filter(Boolean);

      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(COMPANY.email)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            message: messageParts.join("\n\n") || "Keine Nachricht",
            _subject: `Neue Website-Anfrage von ${formData.name.trim()}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Fehler beim Senden");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : `Bitte rufen Sie uns direkt an: ${COMPANY.phone}`
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="kontakt" className="py-24 lg:py-32 bg-brand-green-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="bg-white rounded-3xl p-12 text-center shadow-lg">
                <CheckCircle2 className="w-16 h-16 text-brand-green mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-brand-navy mb-4">
                  Vielen Dank!
                </h3>
                <p className="text-gray-600">
                  Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns
                  innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 shadow-lg space-y-5"
              >
                {error && (
                  <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm border border-red-100">
                    {error}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all"
                      placeholder="Max Mustermann"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all"
                      placeholder="0175 1234567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all"
                    placeholder="max@beispiel.de"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Stromkosten/Jahr
                    </label>
                    <select
                      name="strom"
                      value={formData.strom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all bg-white"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="Unter 800 €">Unter 800 €</option>
                      <option value="800 – 1.200 €">800 – 1.200 €</option>
                      <option value="1.200 – 1.800 €">1.200 – 1.800 €</option>
                      <option value="Über 1.800 €">Über 1.800 €</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Gaskosten/Jahr
                    </label>
                    <select
                      name="gas"
                      value={formData.gas}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all bg-white"
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
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Nachricht (optional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all resize-none"
                    placeholder="Ihre Fragen oder Anmerkungen..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-brand-green hover:bg-brand-green-dark disabled:opacity-70 text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-brand-green/30"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Anfrage kostenlos senden
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß
                  unserer{" "}
                  <Link href="/datenschutz" className="text-brand-green underline">
                    Datenschutzerklärung
                  </Link>{" "}
                  zu.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
