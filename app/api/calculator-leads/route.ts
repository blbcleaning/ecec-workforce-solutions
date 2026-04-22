import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, phone, calculatorType, resultsData, resultsSummary } = data

    // Format the results for the admin email
    const formattedResults = Object.entries(resultsData)
      .map(([key, value]) => {
        // Convert camelCase to readable format
        const readableKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
        return `<p><strong>${readableKey}:</strong> ${value}</p>`
      })
      .join('')

    // Send lead notification email to admin
    await resend.emails.send({
      from: 'noreply@ececworkforcesolutions.com',
      to: 'ececworkforcesolutions@outlook.com',
      replyTo: email,
      subject: `New Lead from ${calculatorType} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #10b981; padding-bottom: 10px;">New Calculator Lead</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          </div>

          <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
            <h3 style="margin-top: 0; color: #166534;">Calculator Used</h3>
            <p><strong>${calculatorType}</strong></p>
          </div>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Their Results</h3>
            <p style="font-style: italic; color: #6b7280;">${resultsSummary}</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 15px 0;" />
            ${formattedResults}
          </div>

          <p style="color: #6b7280; font-size: 12px; margin-top: 30px;">
            This lead was captured from the ${calculatorType} on your website.
          </p>
        </div>
      `,
    })

    // Send results email to user
    await resend.emails.send({
      from: 'noreply@ececworkforcesolutions.com',
      to: email,
      subject: `Your ${calculatorType} Results - ECEC Workforce Solutions`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
          <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #10b981;">
            <h1 style="color: #1a1a1a; margin: 0;">ECEC Workforce Solutions</h1>
          </div>

          <div style="padding: 30px 0;">
            <p>Hi ${name},</p>
            
            <p>Thank you for using our <strong>${calculatorType}</strong>. Here are your results:</p>

            <div style="background: #f0fdf4; padding: 25px; border-radius: 12px; margin: 25px 0; border: 1px solid #86efac;">
              <h2 style="margin-top: 0; color: #166534; font-size: 18px;">Your Results Summary</h2>
              <p style="font-size: 16px; color: #166534; font-weight: 600; margin-bottom: 0;">
                ${resultsSummary}
              </p>
            </div>

            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="margin-top: 0; color: #374151;">Detailed Breakdown</h3>
              ${formattedResults}
            </div>

            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #f59e0b;">
              <h3 style="margin-top: 0; color: #92400e;">Ready to take the next step?</h3>
              <p style="margin-bottom: 15px; color: #78350f;">
                Our team can help you understand what these results mean for your centre and develop a tailored compliance strategy.
              </p>
              <a href="https://ececworkforcesolutions.com/book" 
                 style="display: inline-block; background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">
                Book a Call
              </a>
            </div>

            <p>If you have any questions, feel free to reply to this email or call us at <strong>0432 355 396</strong>.</p>

            <p>Best regards,<br><strong>ECEC Workforce Solutions Team</strong></p>
          </div>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 20px;">
            <p style="color: #6b7280; font-size: 12px;">
              This email was sent because you requested your ${calculatorType} results from our website. 
              If you didn't request this, please ignore this email.
            </p>
          </div>
        </div>
      `,
    })

    return Response.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error sending calculator lead email:', error)
    return Response.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
