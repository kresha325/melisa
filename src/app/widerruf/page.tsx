import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { InternalLink } from "@/components/InternalLink";
import { COMPANY, legalAddressBlock } from "@/lib/company";

export const metadata: Metadata = {
  title: "Widerrufsbelehrung | Die Energiesparer",
  robots: { index: true, follow: true },
};

export default function WiderrufPage() {
  return (
    <LegalLayout title="Widerrufsbelehrung">
      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          Widerrufsrecht für Verbraucher
        </h2>
        <p>
          Sie haben das Recht, binnen <strong>14 Tagen</strong> ohne Angabe von
          Gründen diesen Vertrag zu widerrufen. Die Frist beginnt nach Abschluss
          des Vertrags über unsere Beratungs- bzw. Vermittlungsleistung im
          Fernabsatz (z.&nbsp;B. telefonisch, per E-Mail oder über das
          Kontaktformular).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          Widerrufsfrist
        </h2>
        <p>
          Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsabschlusses.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          Ausübung des Widerrufsrechts
        </h2>
        <p>
          Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (
          <strong>{COMPANY.name}</strong>, {legalAddressBlock}, E-Mail:{" "}
          <a href={`mailto:${COMPANY.email}`} className="text-brand-green">
            {COMPANY.email}
          </a>
          , Telefon:{" "}
          <a href={`tel:${COMPANY.phoneLink}`} className="text-brand-green">
            {COMPANY.phone}
          </a>
          ) mittels einer eindeutigen Erklärung (z.&nbsp;B. per E-Mail oder
          Brief) über Ihren Entschluss, diesen Vertrag zu widerrufen,
          informieren.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          Muster-Widerrufsformular
        </h2>
        <div className="rounded-xl border border-gray-200 bg-white p-6 text-sm leading-relaxed">
          <p className="font-semibold text-brand-navy mb-4">
            (Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses
            Formular aus und senden Sie es zurück.)
          </p>
          <p>An: {COMPANY.name}, {legalAddressBlock}, {COMPANY.email}</p>
          <p className="mt-4">
            Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen
            Vertrag über die Erbringung der folgenden Dienstleistung:
          </p>
          <p className="mt-4">Bestellt am (*): _______________________</p>
          <p>Name des/der Verbraucher(s): _______________________</p>
          <p>Anschrift des/der Verbraucher(s): _______________________</p>
          <p className="mt-4">
            Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):
            _______________________
          </p>
          <p>Datum: _______________________</p>
          <p className="mt-4 text-gray-500">(*) Unzutreffendes streichen.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          Folgen des Widerrufs
        </h2>
        <p>
          Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen,
          die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen
          14 Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren
          Widerruf bei uns eingegangen ist.
        </p>
        <p className="mt-3">
          Haben Sie verlangt, dass die Dienstleistung während der Widerrufsfrist
          beginnen soll, haben Sie uns einen angemessenen Betrag zu zahlen, der
          dem Anteil der bis zum Widerruf erbrachten Dienstleistungen im
          Vergleich zum Gesamtumfang entspricht.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-navy mb-3">
          Vorzeitiges Erlöschen des Widerrufsrechts
        </h2>
        <p>
          Das Widerrufsrecht erlischt vorzeitig, wenn wir die Dienstleistung
          vollständig erbracht haben und mit der Ausführung erst begonnen haben,
          nachdem Sie dazu Ihre ausdrückliche Zustimmung gegeben und
          gleichzeitig Ihre Kenntnis vom Erlöschen des Widerrufsrechts bei
          vollständiger Vertragserfüllung bestätigt haben.
        </p>
      </section>

      <section>
        <p>
          Weitere Informationen finden Sie in unseren{" "}
          <InternalLink href="/agb" className="text-brand-green underline">
            AGB
          </InternalLink>{" "}
          und im{" "}
          <InternalLink href="/impressum" className="text-brand-green underline">
            Impressum
          </InternalLink>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
