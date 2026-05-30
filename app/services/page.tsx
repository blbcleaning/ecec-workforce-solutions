import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ArrowRight, FileCheck, ClipboardCheck, CheckCircle, ShieldAlert } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Custom-built Safe Systems of Work (SSOW) and WHS Compliance Reviews for ECEC. Meet your WHS Regulation 39 obligations under Safe Work Australia's March 2026 biological hazards code.",
}

const ssowPackages = [
  { name: "Single SSOW (per task/zone)", price: "$585" },
  { name: "SSOW Starter Pack (3 SSOW)", price: "$1,755" },
  { name: "SSOW Compliance Pack (5 SSOW)", price: "$2,925" },
]

const reviewPackages = [
  { name: "Health Check (1 hr + written summary)", price: "$450" },
  { name: "Full Compliance Review (gap check + action plan)", price: "$1,350" },
]

const ssowIncludes = [
  "Nappy zones & change areas",
  "Vomit / blood incident response",
  "Outbreak response procedures",
  "Waste stream handling",
  "Chemical controls",
  "Verification records",
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-20 sm:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          {/* Big Block Heading - Top Left */}
          <div className="absolute top-6 left-4 sm:left-6 lg:left-8 z-10 bg-accent px-4 py-2 sm:px-6 sm:py-3">
            <span className="text-sm sm:text-base lg:text-lg font-bold tracking-wide text-accent-foreground uppercase">
              Our Services
            </span>
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent">
                <AlertTriangle className="h-4 w-4" />
                Biological Hazards Code — March 2026
              </div>
              <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                Your SSOW may already be non-compliant.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Safe Work Australia&apos;s updated biological hazards code names ECEC as a case study sector. Under{" "}
                <strong className="text-primary-foreground">WHS Regulation 39</strong>, you have a legal obligation to
                maintain a documented Safe System of Work for high-exposure tasks — including biological hazard response
                and infection-control cleaning.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                  <Link href="/book">
                    Book a Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 px-8"
                >
                  <Link href="/contact">Submit an Enquiry</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The r39 Gap Section */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                <ShieldAlert className="h-6 w-6 text-destructive" />
              </div>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground">
                <p>A general cleaning policy doesn&apos;t satisfy r39.</p>
                <p>A training intention isn&apos;t a documented control.</p>
                <p className="font-semibold">
                  If an incident or inspection occurs, the gap is your liability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service 1 — Custom-Built SSOW */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                  <FileCheck className="h-4 w-4" />
                  Service 1
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Custom-Built SSOW
                </h2>
                <p className="mt-2 text-lg font-medium text-foreground">Centre-specific. Task-level. Defensible.</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Built around your real spaces and real hazards. Written so staff can follow it under pressure and so
                  you can demonstrate r39 compliance when it matters.
                </p>
                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {ssowIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <div className="flex items-baseline justify-between border-b border-border pb-4">
                  <h3 className="text-lg font-semibold text-card-foreground">Packages</h3>
                  <span className="text-sm text-muted-foreground">ex GST</span>
                </div>
                <ul className="mt-4 divide-y divide-border">
                  {ssowPackages.map((pkg) => (
                    <li key={pkg.name} className="flex items-center justify-between gap-4 py-4">
                      <span className="text-sm font-medium text-card-foreground">{pkg.name}</span>
                      <span className="whitespace-nowrap text-right text-sm text-muted-foreground">
                        From <span className="text-lg font-bold text-foreground">{pkg.price}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact">
                    Enquire about SSOW Builds
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2 — WHS Compliance Review */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8 lg:order-last">
                <div className="flex items-baseline justify-between border-b border-border pb-4">
                  <h3 className="text-lg font-semibold text-card-foreground">Packages</h3>
                  <span className="text-sm text-muted-foreground">ex GST</span>
                </div>
                <ul className="mt-4 divide-y divide-border">
                  {reviewPackages.map((pkg) => (
                    <li key={pkg.name} className="flex items-center justify-between gap-4 py-4">
                      <span className="text-sm font-medium text-card-foreground">{pkg.name}</span>
                      <span className="whitespace-nowrap text-right text-sm text-muted-foreground">
                        From <span className="text-lg font-bold text-foreground">{pkg.price}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/book">
                    Book a Compliance Review
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                  <ClipboardCheck className="h-4 w-4" />
                  Service 2
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  WHS Compliance Review
                </h2>
                <p className="mt-2 text-lg font-medium text-foreground">
                  Know your gaps before a regulator finds them.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  A structured review of your current SSOW, training records, and documentation against the March 2026
                  biohazard standard. You leave with a clear gap list, priority fixes, and implementation steps — not
                  just a report.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA Section */}
        <section className="py-20 sm:py-24 bg-primary">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
              Close the gap now — not after an incident.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Start with a <strong className="text-primary-foreground">compliance review</strong> to see exactly where
              you stand. Go straight to a <strong className="text-primary-foreground">custom SSOW build</strong> if you
              already know what&apos;s missing.
            </p>
            <p className="mt-4 text-base text-primary-foreground/70">
              The March 2026 update triggered your r39 review obligation. We make it straightforward.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                <Link href="/book">
                  Book a Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 px-8"
              >
                <Link href="/contact">Submit an Enquiry</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
