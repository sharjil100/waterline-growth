import { NextResponse } from "next/server";
import { headers } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        { error: "N8N_WEBHOOK_URL is not configured" },
        { status: 500 }
      );
    }

    const headerList = await headers();
    const userAgent = headerList.get("user-agent") || "";
    const ip =
      headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headerList.get("x-real-ip") ||
      "";

    const now = new Date();

    const formPayload = new URLSearchParams();

    formPayload.append("Full Name", body.name || "");
    formPayload.append("Phone Number", body.phone || "");
    formPayload.append("Email Address", body.email || "");
    formPayload.append("Company Name", body.companyName || "");

    formPayload.append("No Label field_998ac0f", "");
    formPayload.append("No Label field_5a39ff2", "");

    formPayload.append(
      "Date",
      now.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    );

    formPayload.append(
      "Time",
      now
        .toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
        .toLowerCase()
    );

    formPayload.append("Page URL", body.pageUrl || "https://waterlinegrowth.com/");
    formPayload.append("User Agent", userAgent);
    formPayload.append("Remote IP", ip);
    formPayload.append("Powered by", "Elementor");
    formPayload.append("form_id", "35688e20");
    formPayload.append("form_name", "Home Page");

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formPayload.toString(),
    });

    if (!response.ok) {
      const text = await response.text();

      return NextResponse.json(
        {
          error: "Webhook request failed",
          status: response.status,
          details: text,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form submission error:", error);

    return NextResponse.json(
      { error: "Form submission failed" },
      { status: 500 }
    );
  }
}
