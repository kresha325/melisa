"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/company";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hallo! Ich interessiere mich für eine kostenlose Energieberatung."
  );

  return (
    <a
      href={`https://wa.me/${COMPANY.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Kontakt"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pl-4 pr-5 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-xl shadow-[#25D366]/30 hover:shadow-2xl transition-all hover:scale-105 group"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="font-semibold text-sm hidden sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
