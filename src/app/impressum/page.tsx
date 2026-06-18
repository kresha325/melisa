import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Impressum | Die Energiesparer",
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          Angaben gemäß § 5 TMG
        </h2>
        <p>
          <strong>{COMPANY.name}</strong>
          <br />
          Energieberatung & Tarifoptimierung
          <br />
          Deutschland
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">Kontakt</h2>
        <p>
          Telefon:{" "}
          <a href={`tel:${COMPANY.phoneLink}`} className="text-brand-green">
            {COMPANY.phone}
          </a>
          <br />
          E-Mail:{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-brand-green"
          >
            {COMPANY.email}
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
        </h2>
        <p>
          {COMPANY.name}
          <br />
          {COMPANY.email}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          Haftungsausschluss
        </h2>
        <h3 className="font-medium text-brand-navy mt-4 mb-2">
          Haftung für Inhalte
        </h3>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
          Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich.
        </p>
        <h3 className="font-medium text-brand-navy mt-4 mb-2">
          Haftung für Links
        </h3>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          Streitschlichtung
        </h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-green"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Wir sind nicht verpflichtet und nicht bereit, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </section>
    </LegalLayout>
  );
}
