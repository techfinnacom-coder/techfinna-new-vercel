import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const email = process.env.NODEMAILER_EMAIL;
  const pass = process.env.NODEMAILER_PASS;

  try {
    const body = await request.json();

    const {
      title,
      company,
      rating,
      name,
      email: customerEmail,
      review,
      createdAt,
      product,
    } = body || {};

    // basic validation (matches your required fields)
    if (!title || !company || !review) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const safeRating = Number(rating || 0);

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="margin: 0 0 10px;">New Review Submitted</h2>
        <p style="margin: 0 0 14px;">A new product review was submitted from your website.</p>

        <table cellpadding="8" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%; max-width: 720px;">
          <tr><td style="font-weight: bold; width: 180px; border: 1px solid #eee;">Product</td><td style="border: 1px solid #eee;">${product || "N/A"}</td></tr>
          <tr><td style="font-weight: bold; border: 1px solid #eee;">Title</td><td style="border: 1px solid #eee;">${title}</td></tr>
          <tr><td style="font-weight: bold; border: 1px solid #eee;">Company</td><td style="border: 1px solid #eee;">${company}</td></tr>
          <tr><td style="font-weight: bold; border: 1px solid #eee;">Rating</td><td style="border: 1px solid #eee;">${isFinite(safeRating) ? safeRating : "N/A"}</td></tr>
          <tr><td style="font-weight: bold; border: 1px solid #eee;">Name</td><td style="border: 1px solid #eee;">${name || "N/A"}</td></tr>
          <tr><td style="font-weight: bold; border: 1px solid #eee;">Email</td><td style="border: 1px solid #eee;">${customerEmail || "N/A"}</td></tr>
          <tr><td style="font-weight: bold; border: 1px solid #eee;">Submitted At</td><td style="border: 1px solid #eee;">${createdAt || new Date().toISOString()}</td></tr>
          <tr><td style="font-weight: bold; border: 1px solid #eee; vertical-align: top;">Review</td><td style="border: 1px solid #eee;">${review}</td></tr>
        </table>

        <p style="margin-top: 14px; color: #666;">(This review is pending verification before publishing.)</p>
      </div>
    `;

    await nodemailer
      .createTransport({
        service: "gmail",
        auth: { user: email, pass },
      })
      .sendMail({
        from: email,
        to: ["vishalsingh173911@gmail.com"],
        subject: `New Review: ${product || "Product"} (${safeRating || "N/A"}/5)`,
        html,
      });

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.log("Review email error:", error?.message || error);
    return NextResponse.json(
      { ok: false, error: "Failed to send review email" },
      { status: 500 }
    );
  }
}
