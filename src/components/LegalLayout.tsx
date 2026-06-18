import { ArrowLeft } from "lucide-react";
import Logo from "@/components/Logo";
import { InternalLink } from "@/components/InternalLink";

export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-6 flex items-center justify-between">
          <InternalLink href="/">
            <Logo height={56} />
          </InternalLink>
          <InternalLink
            href="/"
            className="flex items-center gap-2 text-sm text-brand-green hover:text-brand-green-dark font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück
          </InternalLink>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-brand-navy mb-8">{title}</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          {children}
        </div>
      </main>
    </div>
  );
}
