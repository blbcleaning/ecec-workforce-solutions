import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact/contact-form"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Calendar
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | ECEC Workforce Solutions",
  description: "Get in touch with ECEC Workforce Solutions. Book a call or submit an enquiry about NCCS certification and compliance services.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-16 sm:py-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                Get In Touch
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Book a call to discuss your compliance needs or submit an enquiry for more information.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Left Column - Options */}
              <div>
                {/* Book a Call Card */}
                <div className="rounded-xl border border-accent/30 bg-accent/10 p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                      <Calendar className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">Book a Call</h2>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Schedule a call to discuss your centre&apos;s compliance needs, get a tailored quote, or learn more about NCCS certification.
                  </p>
                  <div className="mt-6">
                    <a 
                      href="mailto:ececworkforcesolutions@outlook.com?subject=Book%20a%20Call%20-%20NCCS%20Enquiry"
                      className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
                    >
                      Request a Call Time
                    </a>
                  </div>
                </div>

                {/* Direct Contact */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-foreground">Direct Contact</h3>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a href="mailto:ececworkforcesolutions@outlook.com" className="font-medium text-foreground hover:text-accent transition-colors">
                          ececworkforcesolutions@outlook.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a href="tel:0432355396" className="font-medium text-foreground hover:text-accent transition-colors">
                          0432 355 396
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium text-foreground">Western Sydney, NSW, Australia</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Response Time</p>
                        <p className="font-medium text-foreground">3–5 business days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div>
                <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
                  <h2 className="text-xl font-semibold text-card-foreground">Enquiry Form</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you within 3–5 business days.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
