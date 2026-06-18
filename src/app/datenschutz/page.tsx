import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Die Energiesparer",
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          1. Verantwortlicher
        </h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          <br />
          <strong>{COMPANY.name}</strong>
          <br />
          E-Mail: {COMPANY.email}
          <br />
          Telefon: {COMPANY.phone}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          2. Erhebung und Speicherung personenbezogener Daten
        </h2>
        <p>
          Beim Besuch unserer Website werden automatisch Informationen
          allgemeiner Natur erfasst (Server-Logfiles). Diese umfassen Browsertyp,
          verwendetes Betriebssystem, Referrer URL, Hostname und Uhrzeit der
          Serveranfrage.
        </p>
        <p className="mt-3">
          Wenn Sie unser Kontaktformular nutzen, erheben wir die von Ihnen
          angegebenen Daten (Name, E-Mail, Telefonnummer, Nachricht sowie
          optional Angaben zu Strom- und Gaskosten) ausschließlich zur
          Bearbeitung Ihrer Anfrage.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          3. Zweck und Rechtsgrundlage
        </h2>
        <p>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
          (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
          Interesse an der Beantwortung von Anfragen).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          4. Speicherdauer
        </h2>
        <p>
          Personenbezogene Daten werden gelöscht, sobald der Zweck der
          Speicherung entfällt, spätestens jedoch nach Ablauf gesetzlicher
          Aufbewahrungsfristen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          5. Ihre Rechte
        </h2>
        <p>Sie haben das Recht auf:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>
        <p className="mt-3">
          Wenden Sie sich hierzu an:{" "}
          <a href={`mailto:${COMPANY.email}`} className="text-brand-green">
            {COMPANY.email}
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          6. SSL-Verschlüsselung
        </h2>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw.
          TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
          dass die Adresszeile des Browsers von „http://“ auf „https://“
          wechselt.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          7. Kontaktformular
        </h2>
        <p>
          Daten aus dem Kontaktformular werden per E-Mail an {COMPANY.email}{" "}
          übermittelt und ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
          Eine Weitergabe an Dritte erfolgt nicht, sofern keine gesetzliche
          Pflicht besteht.
        </p>
      </section>
    </LegalLayout>
  );
}
