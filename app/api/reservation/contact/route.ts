import { NextResponse } from "next/server"
import { siteConfig } from "@/config/site"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, phone, subject, message } = data

    const ownerEmail = `
NEW CONTACT MESSAGE — ${siteConfig.name}
========================================

FROM
Name:    ${name}
Email:   ${email}
Phone:   ${phone || "Not provided"}

SUBJECT
${subject}

MESSAGE
${message}

========================================
Sent from your website contact form.
    `

    const guestEmail = `
Dear ${name},

Thank you for getting in touch with ${siteConfig.name}!

We have received your message and will get back to you
within 24 hours.

YOUR MESSAGE
-------------
Subject: ${subject}

${message}

If your enquiry is urgent please call us directly at:
${siteConfig.phone}

Warm regards,
The Team at ${siteConfig.name}
${siteConfig.address}
    `

    const [ownerRes, guestRes] = await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: `${siteConfig.name} <${siteConfig.fromEmail}>`,
          to: siteConfig.notifyEmail,
          subject: `New Message from ${name} — ${subject}`,
          text: ownerEmail,
        }),
      }),
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: `${siteConfig.name} <${siteConfig.fromEmail}>`,
          reply_to: siteConfig.email,
          to: email,
          subject: `We received your message — ${siteConfig.name}`,
          text: guestEmail,
        }),
      }),
    ])

    if (!ownerRes.ok || !guestRes.ok) {
      throw new Error("Failed to send emails")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}