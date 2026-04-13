import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Calendar, Clock, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Book a Call",
  description: "Schedule a free consultation to discuss NCCS certification and compliance solutions for your childcare centre or cleaning company.",
}

export default function BookPage() {
  const calendlyUrl = "https://calendly.com/ececworkforcesolutions/30min"
  
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground">
                <Calendar className="h-4 w-4" />
                Free Consultation
              </div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                Book A Call With Us
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Schedule a free 30-minute consultation to discuss your centre&apos;s compliance needs and how NCCS certification can protect your business.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Options */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              
              {/* Calendly Booking */}
              <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Calendar className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-card-foreground">Schedule Online</h2>
                    <p className="text-sm text-muted-foreground">Pick a time that works for you</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">Free 30-minute consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">Discuss your specific compliance needs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">Get a personalized implementation plan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">No obligation or pressure</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Via Calendly
                    </a>
                  </Button>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-card-foreground">Call Us Directly</h2>
                    <p className="text-sm text-muted-foreground">Speak to us right now</p>
                  </div>
                </div>

                <div className="mt-6 space-y-6">
                  <div className="rounded-lg bg-muted p-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a href="tel:0432355396" className="text-lg font-semibold text-foreground hover:text-accent">
                          0432 355 396
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-muted p-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a href="mailto:ececworkforcesolutions@outlook.com" className="text-lg font-semibold text-foreground hover:text-accent break-all">
                          ececworkforcesolutions@outlook.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-muted p-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Business Hours</p>
                        <p className="font-semibold text-foreground">Mon–Fri: 8am – 6pm AEST</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild size="lg" variant="outline" className="w-full">
                    <a href="tel:0432355396">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Prefer to Write? */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                Prefer to send a detailed enquiry?{" "}
                <Link href="/contact" className="font-medium text-accent hover:underline">
                  Fill out our contact form
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="bg-muted py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                What To Expect On Your Call
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="rounded-lg bg-card p-6 shadow-sm">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-bold text-accent-foreground">
                    1
                  </div>
                  <h3 className="mt-4 font-semibold text-card-foreground">Understand Your Situation</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We&apos;ll discuss your current setup, staffing model, and compliance concerns.
                  </p>
                </div>
                <div className="rounded-lg bg-card p-6 shadow-sm">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-bold text-accent-foreground">
                    2
                  </div>
                  <h3 className="mt-4 font-semibold text-card-foreground">Identify Gaps</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We&apos;ll walk through the new regulatory requirements and where your centre may have exposure.
                  </p>
                </div>
                <div className="rounded-lg bg-card p-6 shadow-sm">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-bold text-accent-foreground">
                    3
                  </div>
                  <h3 className="mt-4 font-semibold text-card-foreground">Recommended Next Steps</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    You&apos;ll leave with a clear action plan and pricing for your specific needs.
                  </p>
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
