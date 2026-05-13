import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      )
    }

    // Send notification to admin
    await resend.emails.send({
      from: "ECEC Workforce Solutions <noreply@ececworkforcesolutons.au>",
      to: "ececworkforcesolutions@outlook.com",
      subject: "New Blog Subscriber",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a;">New Blog Subscriber</h2>
          <p style="color: #666;">Someone has subscribed to receive blog updates:</p>
          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <p style="margin: 0; color: #1a1a1a;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 8px 0 0; color: #666;"><strong>Subscribed at:</strong> ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" })}</p>
          </div>
          <p style="color: #666; font-size: 14px;">Add this email to your mailing list to keep them updated on new blog posts.</p>
        </div>
      `,
    })

    // Send confirmation to subscriber
    await resend.emails.send({
      from: "ECEC Workforce Solutions <noreply@ececworkforcesolutons.au>",
      to: email,
      subject: "You're Subscribed to ECEC Workforce Solutions Updates",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a;">Thanks for Subscribing!</h2>
          <p style="color: #666; line-height: 1.6;">
            You're now subscribed to updates from ECEC Workforce Solutions. We'll notify you when we publish new content on infection prevention, compliance, and best practices for the ECEC sector.
          </p>
          <p style="color: #666; line-height: 1.6;">
            In the meantime, check out our latest articles:
          </p>
          <div style="margin: 24px 0;">
            <a href="https://ccsconsulting.odoo.com/blog" style="display: inline-block; background: #1a1a1a; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
              Visit Our Blog
            </a>
          </div>
          <p style="color: #999; font-size: 14px;">
            If you didn't subscribe to this list, you can safely ignore this email.
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Subscription error:", error)
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    )
  }
}
