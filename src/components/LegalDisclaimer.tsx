import { LEGAL } from "@/lib/company";
import { InternalLink } from "@/components/InternalLink";

export default function LegalDisclaimer() {
  return (
    <section
      aria-label="Rechtliche Hinweise"
      className="border-t border-gray-200 bg-gray-100/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-3 text-xs leading-relaxed text-gray-600">
          <p>
            <strong className="text-gray-800">Rechtlicher Hinweis:</strong>{" "}
            {LEGAL.independenceNotice}
          </p>
          <p>{LEGAL.commissionNotice}</p>
          <p>{LEGAL.savingsNotice}</p>
          <p>
            Unser Angebot richtet sich ausschließlich an Verbraucher und
            Unternehmen in <strong>Deutschland</strong>. Es handelt sich um
            unverbindliche Informationen und ersetzt keine individuelle
            Rechts- oder Steuerberatung.
          </p>
          <p className="flex flex-wrap gap-x-3 gap-y-1 pt-1">
            <InternalLink href="/impressum" className="text-brand-green underline">
              Impressum
            </InternalLink>
            <InternalLink href="/datenschutz" className="text-brand-green underline">
              Datenschutz
            </InternalLink>
            <InternalLink href="/agb" className="text-brand-green underline">
              AGB
            </InternalLink>
            <InternalLink href="/widerruf" className="text-brand-green underline">
              Widerruf
            </InternalLink>
          </p>
        </div>
      </div>
    </section>
  );
}
