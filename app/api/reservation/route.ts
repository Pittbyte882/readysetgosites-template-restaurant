import { NextResponse } from "next/server"
import { siteConfig } from "@/config/site"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const {
      name, email, phone, date,
      time, guests, occasion, requests,
    } = data

    const occasionLabels: Record<string, string> = {
      birthday: "🎂 Birthday Celebration",
      anniversary: "💑 Anniversary",
      proposal: "💍 Marriage Proposal",
      business: "💼 Business Dinner",
      other: "✨ Other Special Occasion",
    }

    const occasionLabel = occasion
      ? occasionLabels[occasion] || occasion
      : "None"

    // Email to restaurant owner
    const ownerEmail = `
NEW RESERVATION — ${siteConfig.name}
=====================================

GUEST DETAILS
Name:    ${name}
Email:   ${email}
Phone:   ${phone || "Not provided"}

RESERVATION DETAILS
Date:      ${date}
Time:      ${time}
Guests:    ${guests}
Occasion:  ${occasionLabel}

SPECIAL REQUESTS
${requests || "None"}

=====================================
Sent from your website reservation form.
    `

    // Confirmation email to guest
    const guestEmail = `
Dear ${name},

Thank you for choosing ${siteConfig.name}!

Your reservation request has been received and we will confirm
your booking within the next few hours.

YOUR RESERVATION DETAILS
-------------------------
Date:      ${date}
Time:      ${time}
Guests:    ${guests}
Occasion:  ${occasionLabel}

${requests ? `Special Requests: ${requests}` : ""}

If you need to make any changes or have questions please
contact us at:

Phone: ${siteConfig.phone}
Email: ${siteConfig.email}

We look forward to welcoming you!

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
          subject: `New Reservation — ${name} · ${date} at ${time} · ${guests} guests`,
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
          subject: `Reservation Received — ${siteConfig.name} · ${date} at ${time}`,
          text: guestEmail,
        }),
      }),
    ])

    if (!ownerRes.ok || !guestRes.ok) {
      throw new Error("Failed to send one or more emails")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Reservation error:", error)
    return NextResponse.json(
      { error: "Failed to submit reservation" },
      { status: 500 }
    )
  }
}