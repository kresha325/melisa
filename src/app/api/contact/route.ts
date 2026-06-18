import { NextResponse } from "next/server";
import { COMPANY } from "@/lib/company";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  strom?: string;
  gas?: string;
  message?: string;
};

function validate(body: ContactBody) {
  if (!body.name?.trim() || body.name.trim().length < 2) {
    return "Bitte geben Sie Ihren Namen ein.";
  }
  if (!body.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
  }
  if (!body.phone?.trim() || body.phone.trim().length < 6) {
    return "Bitte geben Sie eine gültige Telefonnummer ein.";
  }
  return null;
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();
    const error = validate(body);
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const messageParts = [
      body.message?.trim(),
      body.strom ? `Stromkosten/Jahr: ${body.strom}` : null,
      body.gas ? `Gaskosten/Jahr: ${body.gas}` : null,
    ].filter(Boolean);

    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(COMPANY.email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: body.name!.trim(),
          email: body.email!.trim(),
          phone: body.phone!.trim(),
          message: messageParts.join("\n\n") || "Keine Nachricht",
          _subject: `Neue Website-Anfrage von ${body.name!.trim()}`,
          _template: "table",
          _captcha: "false",
        }),
      }
    );

    if (!response.ok) {
      throw new Error("FormSubmit failed");
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      {
        error:
          "Nachricht konnte nicht gesendet werden. Bitte rufen Sie uns direkt an.",
      },
      { status: 500 }
    );
  }
}
