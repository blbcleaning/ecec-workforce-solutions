import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, phone, organisation, role, centres, message } = data

    // Send email to admin
    const response = await resend.emails.send({
      from: 'noreply@ececworkforcesolutions.com',
      to: 'ececworkforcesolutions@outlook.com',
      replyTo: email,
      subject: `New Enquiry from ${name} - ${role}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Organisation:</strong> ${organisation || 'Not provided'}</p>
          <p><strong>Role:</strong> ${role}</p>
          <p><strong>Number of Centres:</strong> ${centres || 'Not provided'}</p>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: 'noreply@ececworkforcesolutions.com',
      to: email,
      subject: 'We received your enquiry - ECEC Workforce Solutions',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>Thank you for your enquiry!</h2>
          <p>Hi ${name},</p>
          <p>We&apos;ve received your message and will get back to you within 3–5 business days.</p>
          <p>In the meantime, if you have any urgent questions, feel free to call us at <strong>0432 355 396</strong>.</p>
          <p>Best regards,<br><strong>ECEC Workforce Solutions Team</strong></p>
        </div>
      `,
    })

    return Response.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return Response.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
