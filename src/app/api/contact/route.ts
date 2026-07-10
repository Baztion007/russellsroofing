import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(5),
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
    const record = await db.contactMessage.create({
      data: {
        name: d.name,
        email: d.email,
        phone: d.phone ?? "",
        subject: d.subject ?? "",
        message: d.message,
        source: "contact",
        status: "new",
      },
    });
    return NextResponse.json({ ok: true, id: record.id });
  } catch (e) {
    console.error("[/api/contact] error", e);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
