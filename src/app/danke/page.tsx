import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import { COMPANY } from "@/lib/company";

export default function DankePage() {
  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <Logo height={80} className="mx-auto mb-8" />
        <CheckCircle2 className="w-20 h-20 text-brand-gold mx-auto mb-6" />
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Vielen Dank für Ihre Anfrage!
        </h1>
        <p className="text-green-100/80 text-lg mb-8 leading-relaxed">
          Wir haben Ihre Nachricht erhalten und melden uns innerhalb von 24
          Stunden bei Ihnen — völlig unverbindlich und kostenlos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold hover:bg-yellow-400 text-brand-navy font-bold rounded-full transition-all"
          >
            Zur Startseite
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={`tel:${COMPANY.phoneLink}`}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
          >
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
