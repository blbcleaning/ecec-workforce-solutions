import { Resend } from 'resend'
import { createClient } from '@/lib/supabase/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, phone, organisation, role, centres, message } = data

    // Save enquiry to database first (so we never lose submissions)
    const supabase = await createClient()
    const { error: dbError } = await supabase.from('enquiries').insert({
      name,
      email,
      phone: phone || null,
      organisation: organisation || null,
      role,
      centres: centres || null,
      message,
      email_sent: false,
    })

    if (dbError) {
      console.error('Error saving enquiry to database:', dbError)
      // Continue to try sending email even if DB fails
    }

    let emailSent = false

    try {
      // Send email to admin
      await resend.emails.send({
        from: 'noreply@ececworkforcesolutons.au',
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
        from: 'noreply@ececworkforcesolutons.au',
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

      emailSent = true
    } catch (emailError) {
      console.error('Error sending email:', emailError)
      // Email failed but enquiry is saved in database
    }

    // Update database to mark email as sent
    if (emailSent && !dbError) {
      await supabase
        .from('enquiries')
        .update({ email_sent: true })
        .eq('email', email)
        .eq('message', message)
        .order('created_at', { ascending: false })
        .limit(1)
    }

    // Return success even if email fails - enquiry is saved
    return Response.json({ 
      success: true,
      emailSent,
      message: emailSent 
        ? 'Your enquiry has been submitted successfully.' 
        : 'Your enquiry has been saved. We will contact you soon.'
    }, { status: 200 })

  } catch (error) {
    console.error('Error processing enquiry:', error)
    return Response.json(
      { error: 'Failed to process enquiry' },
      { status: 500 }
    )
  }
}
