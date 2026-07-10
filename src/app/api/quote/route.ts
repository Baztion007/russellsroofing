import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email().optional().or(z.literal("")),
  postcode: z.string().min(5),
  serviceType: z.string().min(1),
  urgency: z.enum(["standard", "emergency", "flexible"]).default("standard"),
  message: z.string().max(2000).optional(),
  estimate: z.number().nullable().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }
    const d = parsed.data;
    const record = await db.quoteRequest.create({
      data: {
        name: d.name,
        phone: d.phone,
        email: d.email ?? "",
        postcode: d.postcode,
        serviceType: d.serviceType,
        urgency: d.urgency,
        message: d.message ?? "",
        estimate: d.estimate ?? null,
        source: "website",
        status: d.urgency === "emergency" ? "emergency" : "new",
      },
    });
    return NextResponse.json({ ok: true, id: record.id });
  } catch (e) {
    console.error("[/api/quote] error", e);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
