import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WEBHOOK_URL =
  process.env.N8N_WEBHOOK_URL ||
  "https://teamobby.app.n8n.cloud/webhook/wg-fb-lp-form-submission";

type Payload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  company?: unknown;
  submittedAt?: unknown;
  pageUrl?: unknown;
};

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = str(body.name);
  const phone = str(body.phone);
  const email = str(body.email);
  const company = str(body.company);

  if (!name || !phone || !email || !company) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const forwarded = {
    name,
    phone,
    email,
    company,
    submittedAt: str(body.submittedAt) || new Date().toISOString(),
    pageUrl: str(body.pageUrl),
    source: "waterline-growth-landing",
  };

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(forwarded),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("Webhook rejected submission", res.status, text);
      return NextResponse.json(
        { error: "Webhook rejected submission" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Webhook forward failed", err);
    return NextResponse.json(
      { error: "Failed to forward submission" },
      { status: 502 }
    );
  }
}
