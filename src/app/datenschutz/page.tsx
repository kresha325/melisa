import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { COMPANY, THIRD_PARTY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Die Energiesparer",
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <p className="text-sm text-gray-500 pb-4 border-b border-gray-200">
        Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
      </p>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          1. Verantwortlicher
        </h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne
          der Datenschutz-Grundverordnung (DSGVO) ist:
        </p>
        <p className="mt-3">
          <strong>{COMPANY.name}</strong>
          <br />
          {COMPANY.address}
          <br />
          {COMPANY.country}
          <br />
          E-Mail:{" "}
          <a href={`mailto:${COMPANY.email}`} className="text-brand-green">
            {COMPANY.email}
          </a>
          <br />
          Telefon:{" "}
          <a href={`tel:${COMPANY.phoneLink}`} className="text-brand-green">
            {COMPANY.phone}
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          2. Allgemeine Hinweise
        </h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir behandeln
          Ihre personenbezogenen Daten vertraulich und entsprechend den
          gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>
        <p className="mt-3">
          Personenbezogene Daten sind alle Informationen, mit denen Sie
          persönlich identifiziert werden können (z.&nbsp;B. Name, E-Mail-Adresse,
          Telefonnummer).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          3. Hosting (GitHub Pages)
        </h2>
        <p>
          Diese Website wird über <strong>{THIRD_PARTY.github.name}</strong>{" "}
          gehostet. Anbieter ist GitHub, Inc., 88 Colin P Kelly Jr St, San
          Francisco, CA 94107, USA.
        </p>
        <p className="mt-3">
          Beim Aufruf unserer Website werden automatisch Informationen an die
          Server des Hosters übermittelt und in sogenannten Server-Logfiles
          gespeichert. Dabei können u.&nbsp;a. folgende Daten anfallen:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>aufgerufene Seite/URL</li>
          <li>Referrer-URL (zuvor besuchte Seite)</li>
          <li>Browsertyp und -version</li>
          <li>Betriebssystem</li>
        </ul>
        <p className="mt-3">
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an einem sicheren und stabilen Betrieb der
          Website). Die Logfiles werden in der Regel nach kurzer Zeit automatisch
          gelöscht.
        </p>
        <p className="mt-3">
          Weitere Informationen:{" "}
          <a
            href={THIRD_PARTY.github.privacyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-green"
          >
            GitHub Datenschutzerklärung
          </a>
        </p>
        <p className="mt-3 text-sm text-gray-600">
          Hinweis: Bei der Nutzung von GitHub Pages kann es zu einer
          Datenübermittlung in die USA kommen. GitHub stützt sich u.&nbsp;a. auf
          Standardvertragsklauseln der EU-Kommission.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          4. SSL-/TLS-Verschlüsselung
        </h2>
        <p>
          Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw.
          TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
          dass die Adresszeile des Browsers mit „https://“ beginnt und ein
          Schloss-Symbol angezeigt wird.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          5. Kontaktformular und E-Mail-Anfragen
        </h2>
        <p>
          Wenn Sie uns über das Kontaktformular eine Anfrage senden, verarbeiten
          wir folgende Daten:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Name</li>
          <li>E-Mail-Adresse</li>
          <li>Telefonnummer</li>
          <li>optionale Angaben zu Strom- und Gaskosten</li>
          <li>optionale Nachricht</li>
        </ul>
        <p className="mt-3">
          <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage und Kontaktaufnahme
          für eine kostenlose Energieberatung.
        </p>
        <p className="mt-3">
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
          (Vertragsanbahnung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
          Interesse an der Beantwortung von Anfragen).
        </p>
        <p className="mt-3">
          <strong>Speicherdauer:</strong> Wir speichern Ihre Anfrage nur so
          lange, wie es für die Bearbeitung erforderlich ist oder gesetzliche
          Aufbewahrungsfristen bestehen (in der Regel bis zu 3 Jahre nach
          Abschluss der Korrespondenz, sofern keine längeren Fristen gelten).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          6. FormSubmit (Formular-Dienst)
        </h2>
        <p>
          Für die technische Übermittlung der Kontaktformular-Daten nutzen wir
          den Dienst <strong>{THIRD_PARTY.formsubmit.name}</strong> (
          <a
            href={THIRD_PARTY.formsubmit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-green"
          >
            formsubmit.co
          </a>
          ), betrieben von Dynamic Forms Inc., USA.
        </p>
        <p className="mt-3">
          Wenn Sie das Formular absenden, werden Ihre Eingaben an die Server von
          FormSubmit übermittelt und von dort per E-Mail an{" "}
          <strong>{COMPANY.email}</strong> weitergeleitet. FormSubmit kann dabei
          als Auftragsverarbeiter im Sinne von Art. 28 DSGVO tätig werden.
        </p>
        <p className="mt-3">
          <strong>Verarbeitete Daten:</strong> alle im Formular eingegebenen
          Angaben sowie technische Metadaten (z.&nbsp;B. IP-Adresse, Zeitpunkt
          der Übermittlung).
        </p>
        <p className="mt-3">
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b und lit. f DSGVO.
        </p>
        <p className="mt-3">
          Datenschutzhinweise von FormSubmit:{" "}
          <a
            href={THIRD_PARTY.formsubmit.privacyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-green"
          >
            formsubmit.co/privacy-policy
          </a>
        </p>
        <p className="mt-3 text-sm text-gray-600">
          Hinweis: Bei der Nutzung von FormSubmit kann es zu einer
          Datenübermittlung in die USA kommen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          7. WhatsApp-Kontakt
        </h2>
        <p>
          Auf unserer Website bieten wir die Möglichkeit, uns über{" "}
          <strong>WhatsApp</strong> ({THIRD_PARTY.whatsapp.name}) zu
          kontaktieren. Wenn Sie den WhatsApp-Button nutzen, werden Sie auf die
          WhatsApp-App bzw. WhatsApp Web weitergeleitet.
        </p>
        <p className="mt-3">
          Dabei gelten die Datenschutzbestimmungen von WhatsApp/Meta. Wir
          erhalten nur die Nachrichten und Daten, die Sie uns freiwillig über
          WhatsApp senden (z.&nbsp;B. Name, Telefonnummer, Nachrichteninhalt).
        </p>
        <p className="mt-3">
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
          (Kommunikation auf Ihre Anfrage hin) bzw. Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an effizienter Kundenkommunikation).
        </p>
        <p className="mt-3">
          Datenschutzhinweise von WhatsApp:{" "}
          <a
            href={THIRD_PARTY.whatsapp.privacyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-green"
          >
            WhatsApp Datenschutzrichtlinie (EWR)
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          8. Telefonischer und direkter E-Mail-Kontakt
        </h2>
        <p>
          Wenn Sie uns telefonisch oder per E-Mail kontaktieren, speichern wir
          die von Ihnen mitgeteilten Daten (z.&nbsp;B. Name, Kontaktdaten,
          Inhalt der Anfrage) zur Bearbeitung Ihres Anliegens.
        </p>
        <p className="mt-3">
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b und lit. f
          DSGVO.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          9. Cookies und Tracking
        </h2>
        <p>
          Diese Website verwendet <strong>keine Tracking-Cookies</strong> und
          setzt <strong>kein Google Analytics</strong> oder vergleichbare
          Analyse-Tools ein.
        </p>
        <p className="mt-3">
          Technisch notwendige Daten können durch den Hosting-Anbieter (GitHub
          Pages) in Server-Logfiles verarbeitet werden (siehe Abschnitt 3).
          Es werden keine Marketing- oder Profiling-Cookies gesetzt.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          10. Weitergabe von Daten an Dritte
        </h2>
        <p>
          Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur,
          wenn:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Sie ausdrücklich eingewilligt haben (Art. 6 Abs. 1 lit. a DSGVO),</li>
          <li>dies zur Vertragserfüllung erforderlich ist,</li>
          <li>eine gesetzliche Verpflichtung besteht, oder</li>
          <li>
            ein technischer Dienstleister (z.&nbsp;B. FormSubmit, GitHub) im
            Rahmen der oben genannten Zwecke eingesetzt wird.
          </li>
        </ul>
        <p className="mt-3">
          Wir verkaufen Ihre Daten nicht an Dritte.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          11. Ihre Rechte als betroffene Person
        </h2>
        <p>Sie haben gegenüber uns folgende Rechte:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            <strong>Auskunft</strong> über Ihre gespeicherten Daten (Art. 15
            DSGVO)
          </li>
          <li>
            <strong>Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)
          </li>
          <li>
            <strong>Löschung</strong> Ihrer Daten (Art. 17 DSGVO)
          </li>
          <li>
            <strong>Einschränkung</strong> der Verarbeitung (Art. 18 DSGVO)
          </li>
          <li>
            <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)
          </li>
          <li>
            <strong>Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)
          </li>
          <li>
            <strong>Widerruf</strong> erteilter Einwilligungen (Art. 7 Abs. 3
            DSGVO) mit Wirkung für die Zukunft
          </li>
        </ul>
        <p className="mt-3">
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
          <a href={`mailto:${COMPANY.email}`} className="text-brand-green">
            {COMPANY.email}
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          12. Beschwerderecht bei einer Aufsichtsbehörde
        </h2>
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über
          die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Zuständig
          ist in der Regel die Aufsichtsbehörde Ihres Wohn- oder Aufenthaltsorts.
        </p>
        <p className="mt-3">
          Eine Übersicht der deutschen Aufsichtsbehörden finden Sie bei der{" "}
          <a
            href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-green"
          >
            Bundesbeauftragten für den Datenschutz (BfDI)
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          13. Änderungen dieser Datenschutzerklärung
        </h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
          stets den aktuellen rechtlichen Anforderungen entspricht oder um
          Änderungen unserer Leistungen abzubilden. Die jeweils aktuelle Version
          finden Sie auf dieser Seite.
        </p>
      </section>
    </LegalLayout>
  );
}
