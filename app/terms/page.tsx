import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | ECEC Workforce Solutions",
  description: "Terms of Service for ECEC Workforce Solutions — the terms governing use of our website and services.",
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-primary py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Terms Of Service
            </h1>
            <p className="mt-4 text-primary-foreground/80">Last updated: April 2026</p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-neutral max-w-none space-y-10">

              <div>
                <h2 className="text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  By accessing or using the ECEC Workforce Solutions website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our website or services. These terms are governed by the laws of New South Wales, Australia.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">2. Our Services</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  ECEC Workforce Solutions provides infection prevention training, certification, compliance consulting, and workforce solutions for the Early Childhood Education and Care (ECEC) sector under the National Childcare Cleaning Standard (NCCS). Our services include but are not limited to:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                  <li>NCCS certification training for Infection Prevention Specialists and Supervisors</li>
                  <li>WHS compliance consulting and documentation frameworks</li>
                  <li>Compliance risk assessment tools and calculators</li>
                  <li>Workforce placement and provider sourcing assistance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">3. Use of This Website</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">You agree to use this website only for lawful purposes and in a manner that does not:</p>
                <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Infringe the rights of any third party</li>
                  <li>Transmit any unlawful, harmful, or offensive material</li>
                  <li>Attempt to gain unauthorised access to any part of our systems</li>
                  <li>Reproduce, distribute, or modify our content without prior written consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">4. Intellectual Property</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos, and the National Childcare Cleaning Standard (NCCS) framework, is the intellectual property of ECEC Workforce Solutions and is protected under Australian copyright law. Unauthorised reproduction or use is strictly prohibited.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">5. Accuracy of Information</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  The information provided on this website is intended for general guidance only. While we make every effort to ensure accuracy, compliance requirements can change and we recommend you seek independent legal or WHS advice for your specific circumstances. The compliance calculators and tools on this site are indicative only and do not constitute formal legal or regulatory advice.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">6. Limitation of Liability</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, ECEC Workforce Solutions is not liable for any direct, indirect, incidental, or consequential loss or damage arising from your use of this website or our services. This includes, without limitation, any reliance placed on the information or tools provided on this site.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">7. External Links</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites. These links are provided for convenience only. We do not endorse or take responsibility for the content, privacy practices, or accuracy of any external sites.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">8. Bookings and Consultations</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Bookings made through our website are subject to availability. We reserve the right to reschedule or cancel consultations with reasonable notice. Any engagement of our paid services will be subject to a separate service agreement.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">9. Changes to These Terms</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated date. Continued use of the website after any changes constitutes your acceptance of the new terms.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-muted p-6">
                <h2 className="text-xl font-bold text-foreground">10. Contact Us</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  For any questions regarding these Terms of Service, please contact us at:
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
