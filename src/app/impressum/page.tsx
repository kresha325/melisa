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
          {COMPANY.address}
          <br />
          {COMPANY.country}
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
          <a href={`mailto:${COMPANY.email}`} className="text-brand-green">
            {COMPANY.email}
          </a>
          <br />
          Erreichbarkeit: {COMPANY.hours}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
        </h2>
        <p>
          {COMPANY.responsiblePerson}
          <br />
          {COMPANY.address}
          <br />
          {COMPANY.country}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          EU-Streitschlichtung
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
          . Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          Verbraucherstreitbeilegung / Universalschlichtungsstelle
        </h2>
        <p>
          Wir sind nicht verpflichtet und nicht bereit, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
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
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
        </p>
        <h3 className="font-medium text-brand-navy mt-4 mb-2">
          Urheberrecht
        </h3>
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung bedürfen der
          schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          Datenschutz
        </h2>
        <p>
          Informationen zur Verarbeitung personenbezogener Daten finden Sie in
          unserer{" "}
          <a href="/datenschutz" className="text-brand-green underline">
            Datenschutzerklärung
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
