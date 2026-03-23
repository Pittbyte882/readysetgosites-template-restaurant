import { NextResponse } from "next/server"
import { siteConfig } from "@/config/site"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, phone, date, time, party, occasion, requests } = data

    const agencyEmail = `
NEW RESERVATION REQUEST — ${siteConfig.name}
============================================

GUEST
Name:   ${name}
Email:  ${email}
Phone:  ${phone}

BOOKING
Date:        ${date}
Time:        ${time}
Party Size:  ${party}
Occasion:    ${occasion || "Not specified"}

SPECIAL REQUESTS
${requests || "None"}

============================================
ACTION REQUIRED: Confirm this reservation within 2 hours.
    `

    const guestEmail = `
Dear ${name},

Thank you for your reservation request at ${siteConfig.name}.

RESERVATION DETAILS
-------------------
Date:       ${date}
Time:       ${time}
Party Size: ${party}
${occasion ? `Occasion:   ${occasion}` : ""}

We will confirm your reservation within 2 hours. If you need
to modify or cancel, please contact us at:

Phone: ${siteConfig.phone}
Email: ${siteConfig.email}

We look forward to welcoming you.

The Grand Table
${siteConfig.address}
${siteConfig.city}
    `

    await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
        body: JSON.stringify({
          from: `${siteConfig.name} <${process.env.FROM_EMAIL}>`,
          to: process.env.NOTIFY_EMAIL,
          subject: `Reservation Request — ${name} · ${date} · ${time} · ${party}`,
          text: agencyEmail,
        }),
      }),
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
        body: JSON.stringify({
          from: `${siteConfig.name} <${process.env.FROM_EMAIL}>`,
          reply_to: process.env.NOTIFY_EMAIL,
          to: email,
          subject: `Reservation Request Received — ${siteConfig.name}`,
          text: guestEmail,
        }),
      }),
    ])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Reservation error:", error)
    return NextResponse.json({ error: "Failed" }, { status: 500 })
  }
}
