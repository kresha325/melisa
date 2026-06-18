export const COMPANY = {
  name: "Die Energiesparer",
  email: "die.energiesparer@web.de",
  phone: "0175 - 3342296",
  phoneLink: "01753342296",
  whatsapp: "491753342296",
  tagline: "Strom und Gas Kosten senken, optimieren und dabei sparen.",
  hours: "Mo–Fr: 9:00 – 18:00 Uhr",
  maxSavings: "850€",
  country: "Deutschland",
  serviceArea: "Deutschland",
  /** Vollständige Geschäftsadresse für Impressum — bitte ergänzen */
  address: "[Straße und Hausnummer, PLZ Ort]",
  legalForm: "[Rechtsform, z. B. Inhaber / Einzelunternehmen]",
  responsiblePerson: "[Name des Inhabers / Geschäftsführers]",
  vatId: "[USt-IdNr., falls vorhanden]",
} as const;

export const LEGAL = {
  /** Hinweis: unabhängiger Berater, keine staatliche Stelle */
  independenceNotice:
    "Die Energiesparer ist ein unabhängiger Energieberater und keine Behörde, kein Netzbetreiber und kein gesetzlicher Versorger.",
  commissionNotice:
    "Unsere Beratung ist für Sie kostenlos. Wir erhalten bei erfolgreichem Tarifwechsel eine Provision vom jeweiligen Energieanbieter — nicht von Ihnen.",
  savingsNotice:
    "Angaben zu möglichen Ersparnissen (z. B. bis zu 850 € pro Jahr) sind unverbindliche Schätzwerte. Die tatsächliche Ersparnis hängt von Ihrem aktuellen Vertrag, Verbrauch und Tarif ab.",
} as const;

export const THIRD_PARTY = {
  formsubmit: {
    name: "FormSubmit (Dynamic Forms Inc.)",
    url: "https://formsubmit.co",
    privacyUrl: "https://formsubmit.co/privacy-policy",
  },
  github: {
    name: "GitHub Pages (GitHub, Inc.)",
    url: "https://pages.github.com",
    privacyUrl: "https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement",
  },
  whatsapp: {
    name: "WhatsApp LLC / Meta Platforms Ireland Ltd.",
    url: "https://www.whatsapp.com",
    privacyUrl: "https://www.whatsapp.com/legal/privacy-policy-eea",
  },
} as const;

export function isPlaceholder(value: string): boolean {
  return value.startsWith("[");
}

export const legalAddressBlock = isPlaceholder(COMPANY.address)
  ? `${COMPANY.country} (Adresse wird im Impressum ergänzt)`
  : `${COMPANY.address}, ${COMPANY.country}`;
