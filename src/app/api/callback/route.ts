import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  postcode: z.string().min(5),
  issue: z.string().min(1),
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
    const record = await db.emergencyCallback.create({
      data: {
        name: d.name,
        phone: d.phone,
        postcode: d.postcode,
        issue: d.issue,
        source: "website",
        status: "emergency",
      },
    });
    return NextResponse.json({ ok: true, id: record.id });
  } catch (e) {
    console.error("[/api/callback] error", e);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
