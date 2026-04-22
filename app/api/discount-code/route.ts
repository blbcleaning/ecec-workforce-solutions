import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// Generate a simple discount code
function generateDiscountCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
  let code = "ECEC10-"
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

// Calculate expiry date (6 months from now)
function getExpiryDate(): string {
  const date = new Date()
  date.setMonth(date.getMonth() + 6)
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, name } = body

    if (!email || !name) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      )
    }

    const discountCode = generateDiscountCode()
    const expiryDate = getExpiryDate()

    // Send discount code to user
    await resend.emails.send({
      from: "ECEC Workforce Solutions <noreply@ececworkforcesolutions.com>",
      to: email,
      subject: "Your 10% Discount Code from ECEC Workforce Solutions",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1a365d; margin-bottom: 10px;">Your Exclusive Discount</h1>
          </div>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for your interest in ECEC Workforce Solutions. Here&apos;s your exclusive 10% discount code:</p>
          
          <div style="background: linear-gradient(135deg, #1a365d 0%, #2d4a7c 100%); color: white; padding: 30px; border-radius: 12px; text-align: center; margin: 30px 0;">
            <p style="margin: 0 0 10px 0; font-size: 14px; opacity: 0.9;">YOUR DISCOUNT CODE</p>
            <p style="margin: 0; font-size: 32px; font-weight: bold; letter-spacing: 2px;">${discountCode}</p>
            <p style="margin: 15px 0 0 0; font-size: 14px; opacity: 0.9;">Valid until ${expiryDate}</p>
          </div>
          
          <p><strong>How to use:</strong> Simply mention this code when booking your first NCCS certification service or assessment, and we&apos;ll apply your 10% discount.</p>
          
          <p>This code is valid for 6 months and can be used on any of our services for childcare centres, including:</p>
          
          <ul style="padding-left: 20px;">
            <li>NCCS Infection Prevention Specialist Certification</li>
            <li>NCCS Supervisor Certification</li>
            <li>Site Assessments</li>
            <li>Compliance Audits</li>
            <li>Team Bundles</li>
          </ul>
          
          <div style="margin: 30px 0; text-align: center;">
            <a href="https://ececworkforcesolutions.com/book" style="display: inline-block; background-color: #c6a052; color: #1a365d; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600;">Book a Call to Get Started</a>
          </div>
          
          <p>If you have any questions, feel free to reply to this email or call us on <a href="tel:0432355396" style="color: #1a365d;">0432 355 396</a>.</p>
          
          <p>Best regards,<br><strong>Lindsay Smith</strong><br>ECEC Workforce Solutions</p>
          
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 30px 0;">
          
          <p style="font-size: 12px; color: #666; text-align: center;">
            ECEC Workforce Solutions | Western Sydney, NSW, Australia<br>
            <a href="https://ececworkforcesolutions.com" style="color: #1a365d;">ececworkforcesolutions.com</a>
          </p>
        </body>
        </html>
      `,
    })

    // Send notification to admin
    await resend.emails.send({
      from: "ECEC Workforce Solutions <noreply@ececworkforcesolutions.com>",
      to: "ececworkforcesolutions@outlook.com",
      subject: `New Discount Code Request: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; padding: 20px;">
          <h2 style="color: #1a365d;">New Discount Code Request</h2>
          
          <p>A visitor has requested a discount code from the For Centres page:</p>
          
          <table style="border-collapse: collapse; width: 100%; max-width: 500px; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">Name</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">Code Issued</td>
              <td style="padding: 10px; border: 1px solid #ddd; font-family: monospace; font-size: 16px;">${discountCode}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">Expires</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${expiryDate}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">Source</td>
              <td style="padding: 10px; border: 1px solid #ddd;">For Centres Page Popup</td>
            </tr>
          </table>
          
          <p>This is a potential lead - consider following up within 24-48 hours.</p>
        </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending discount code:", error)
    return NextResponse.json(
      { error: "Failed to send discount code" },
      { status: 500 }
    )
  }
}
