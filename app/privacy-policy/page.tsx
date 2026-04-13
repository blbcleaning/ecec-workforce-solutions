import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | ECEC Workforce Solutions",
  description: "Privacy Policy for ECEC Workforce Solutions — how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-primary py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-primary-foreground/80">Last updated: April 2026</p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-neutral max-w-none space-y-10">

              <div>
                <h2 className="text-xl font-bold text-foreground">1. About This Policy</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  ECEC Workforce Solutions (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information in accordance with the <strong className="text-foreground">Privacy Act 1988 (Cth)</strong> and the <strong className="text-foreground">Australian Privacy Principles (APPs)</strong>.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  By using our website or engaging our services, you consent to the collection and use of your information as described in this policy.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">2. Information We Collect</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">We may collect the following types of personal information:</p>
                <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Name, email address, and phone number (from contact forms and enquiries)</li>
                  <li>Organisation name, role, and number of centres</li>
                  <li>Correspondence and communications with us</li>
                  <li>Booking and scheduling information</li>
                  <li>Website usage data (via cookies and analytics tools)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">3. How We Use Your Information</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">We use your personal information to:</p>
                <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Respond to enquiries and provide our services</li>
                  <li>Schedule consultations and manage bookings</li>
                  <li>Send relevant information about our services, certifications, and compliance updates</li>
                  <li>Improve our website and service offerings</li>
                  <li>Comply with legal and regulatory obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">4. Disclosure of Your Information</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Third-party service providers who assist in operating our website and delivering services (e.g., email platforms, scheduling tools)</li>
                  <li>Regulatory or law enforcement bodies where required by law</li>
                </ul>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Any third parties we engage are required to handle your information in accordance with applicable privacy laws.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">5. Cookies and Website Analytics</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our website may use cookies and similar technologies to improve your experience and analyse traffic. You can disable cookies in your browser settings, though this may affect the functionality of our website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">6. Data Security</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We take reasonable steps to protect your personal information from unauthorised access, misuse, loss, or disclosure. Our website uses HTTPS encryption and we limit access to personal information to authorised personnel only.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">7. Access and Correction</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  You have the right to access the personal information we hold about you and request corrections if it is inaccurate, incomplete, or out of date. To make a request, please contact us using the details below.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">8. Complaints</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  If you believe we have breached your privacy, you may lodge a complaint by contacting us directly. If your complaint is not resolved to your satisfaction, you may contact the <strong className="text-foreground">Office of the Australian Information Commissioner (OAIC)</strong> at <a href="https://www.oaic.gov.au" className="text-accent hover:underline">www.oaic.gov.au</a>.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">9. Changes to This Policy</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this policy periodically.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-muted p-6">
                <h2 className="text-xl font-bold text-foreground">10. Contact Us</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  For any privacy-related enquiries, please contact us at:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Email:</strong> ececworkforcesolutions@outlook.com</li>
                  <li><strong className="text-foreground">Phone:</strong> 0432 355 396</li>
                  <li><strong className="text-foreground">Location:</strong> Western Sydney, NSW, Australia</li>
                </ul>
              </div>

            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
