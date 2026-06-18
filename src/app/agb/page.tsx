import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { InternalLink } from "@/components/InternalLink";
import { COMPANY, LEGAL } from "@/lib/company";

export const metadata: Metadata = {
  title: "AGB | Die Energiesparer",
  robots: { index: true, follow: true },
};

export default function AgbPage() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen (AGB)">
      <p className="text-sm text-gray-500">
        Gültig für Verbraucher und Unternehmer in Deutschland.
      </p>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          § 1 Geltungsbereich
        </h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen gelten für alle Beratungs- und
          Vermittlungsleistungen von <strong>{COMPANY.name}</strong> im Bereich
          Strom- und Gasoptimierung ausschließlich für Kunden mit Sitz bzw.
          Wohnsitz in <strong>Deutschland</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          § 2 Vertragsgegenstand
        </h2>
        <p>
          {COMPANY.name} vergleicht Energietarife, berät unverbindlich und
          vermittelt auf Wunsch einen Tarifwechsel zu einem geeigneten
          Energieanbieter. {LEGAL.independenceNotice}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          § 3 Kosten
        </h2>
        <p>{LEGAL.commissionNotice}</p>
        <p className="mt-3">
          Für Sie entstehen durch unsere Beratung und Vermittlung keine
          gesonderten Gebühren, sofern nicht ausdrücklich etwas anderes
          vereinbart wird.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          § 4 Ablauf der Beratung
        </h2>
        <ol className="list-decimal pl-6 space-y-2 mt-3">
          <li>Kontaktaufnahme durch den Kunden (Formular, Telefon, E-Mail, WhatsApp)</li>
          <li>Analyse des bestehenden Vertrags und Ermittlung des Sparpotenzials</li>
          <li>Unverbindliches Angebot eines passenden Tarifs</li>
          <li>Bei Zustimmung: Vermittlung und Unterstützung beim Tarifwechsel</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          § 5 Keine Garantie auf Ersparnis
        </h2>
        <p>{LEGAL.savingsNotice}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          § 6 Pflichten des Kunden
        </h2>
        <p>
          Der Kunde stellt vollständige und wahrheitsgemäße Angaben zu seinem
          aktuellen Energievertrag und Verbrauch bereit, damit eine sachgerechte
          Beratung möglich ist.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          § 7 Haftung
        </h2>
        <p>
          {COMPANY.name} haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit
          sowie bei Verletzung von Leben, Körper oder Gesundheit. Bei leichter
          Fahrlässigkeit haftet {COMPANY.name} nur bei Verletzung wesentlicher
          Vertragspflichten und begrenzt auf den vorhersehbaren, typischerweise
          eintretenden Schaden.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          § 8 Widerrufsrecht
        </h2>
        <p>
          Verbrauchern steht bei Fernabsatzverträgen ein gesetzliches Widerrufsrecht
          zu. Details finden Sie in unserer{" "}
          <InternalLink href="/widerruf" className="text-brand-green underline">
            Widerrufsbelehrung
          </InternalLink>
          .
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          § 9 Datenschutz
        </h2>
        <p>
          Informationen zur Verarbeitung personenbezogener Daten finden Sie in
          unserer{" "}
          <InternalLink href="/datenschutz" className="text-brand-green underline">
            Datenschutzerklärung
          </InternalLink>
          .
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          § 10 Schlussbestimmungen
        </h2>
        <p>
          Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist —
          soweit gesetzlich zulässig — der Sitz von {COMPANY.name}.
        </p>
        <p className="mt-3">
          Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
        </p>
      </section>
    </LegalLayout>
  );
}
