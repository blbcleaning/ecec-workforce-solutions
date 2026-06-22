import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import {
  AlertTriangle,
  ArrowRight,
  FileCheck,
  ClipboardCheck,
  CheckCircle,
  ShieldAlert,
  Star,
  TrendingDown,
  Users,
  Gauge,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Custom-built Safe Systems of Work (SSOW) and WHS Compliance Reviews for ECEC. Meet your WHS Regulation 39 obligations under Safe Work Australia's March 2026 biological hazards code.",
}

const ssowPackages = [
  { name: "Single SSOW (per task/zone)" },
  { name: "SSOW Starter Pack (3 SSOW)" },
  { name: "SSOW Compliance Pack (5 SSOW)" },
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

const nccsAudience = [
  {
    icon: Users,
    text: "Centres with high staff turnover that haven't been able to stabilise despite previous attempts",
  },
  {
    icon: Gauge,
    text: "Services managing chronic staff shortages and inconsistent operational coverage",
  },
  {
    icon: ShieldAlert,
    text: "Centres under NQF pressure who need a structured, evidence-backed response",
  },
  {
    icon: FileCheck,
    text: "Approved Providers who want accreditation with ongoing monitoring — not a one-off deliverable",
  },
]

const nccsPayPlan = [
  { label: "Upfront", amount: "$2,000" },
  { label: "Weekly (12 weeks)", amount: "~$500–$667" },
  { label: "Monitoring subscription", amount: "$100/month per centre" },
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
                </div>
                <ul className="mt-4 divide-y divide-border">
                  {ssowPackages.map((pkg) => (
                    <li key={pkg.name} className="flex items-center gap-3 py-4">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-accent" />
                      <span className="text-sm font-medium text-card-foreground">{pkg.name}</span>
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

        {/* Flagship — NCCS Integration Program */}
        <section className="relative overflow-hidden bg-primary py-16 sm:py-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
                <Star className="h-4 w-4" />
                Flagship Program
              </div>
              <h2 className="mt-6 text-balance text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl lg:text-4xl">
                NCCS System Integration + 12-Month Performance Monitoring
              </h2>
              <p className="mt-4 text-lg font-medium text-accent">
                The only ECEC workforce solution that measures what it claims.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Most workforce interventions produce a policy document. This produces a measurable operational change —
                with baseline data collected before we start, and performance monitored against those indicators
                throughout. The result is{" "}
                <strong className="text-primary-foreground">NCCS accredited status, embedded into daily operations</strong>{" "}
                (not filed away), with 12 months of monitoring to prove it&apos;s holding.
              </p>
            </div>

            {/* Who this is for */}
            <div className="mx-auto mt-14 max-w-5xl">
              <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-primary-foreground/60">
                Who this is for
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {nccsAudience.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-start gap-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-5"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/15">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <p className="text-sm leading-relaxed text-primary-foreground/90">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What's included — Phases */}
            <div className="mx-auto mt-14 max-w-5xl">
              <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-primary-foreground/60">
                What&apos;s included
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 sm:p-8">
                  <span className="text-xs font-bold uppercase tracking-wide text-accent">Phase 1</span>
                  <h4 className="mt-2 text-lg font-semibold text-primary-foreground">
                    Implementation &amp; Transition
                  </h4>
                  <p className="text-sm text-primary-foreground/60">8–12 weeks, onsite</p>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Pre-NCCS baseline metrics collection",
                      "Onsite implementation to NCCS accredited status",
                      "Full operational embedding — not policy-only",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-sm text-primary-foreground/90">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 sm:p-8">
                  <span className="text-xs font-bold uppercase tracking-wide text-accent">Phase 2</span>
                  <h4 className="mt-2 text-lg font-semibold text-primary-foreground">Performance Monitoring</h4>
                  <p className="text-sm text-primary-foreground/60">12 months</p>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Ongoing monitoring against your baseline indicators",
                      "Support to maintain standards and evidence readiness between monitoring points",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-sm text-primary-foreground/90">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Investment */}
            <div className="mx-auto mt-14 max-w-5xl">
              <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-primary-foreground/60">
                Investment
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
                {/* Payment plan */}
                <div className="rounded-xl border border-primary-foreground/10 bg-card p-6 sm:p-8">
                  <div className="flex items-baseline justify-between border-b border-border pb-4">
                    <h4 className="text-base font-semibold text-card-foreground">Program fee</h4>
                    <span className="text-right">
                      <span className="text-lg font-bold text-foreground">$8,000–$10,000</span>{" "}
                      <span className="text-sm text-muted-foreground">ex GST</span>
                    </span>
                  </div>
                  <p className="mt-4 text-sm font-medium text-foreground">
                    Payment plan available — designed for operational cashflow:
                  </p>
                  <ul className="mt-4 divide-y divide-border">
                    {nccsPayPlan.map((row) => (
                      <li key={row.label} className="flex items-center justify-between gap-4 py-3">
                        <span className="text-sm text-card-foreground">{row.label}</span>
                        <span className="whitespace-nowrap text-sm font-semibold text-foreground">{row.amount}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 rounded-lg bg-muted p-4 text-sm leading-relaxed text-muted-foreground">
                    Total weekly cost during implementation:{" "}
                    <strong className="text-foreground">
                      less than most centres spend on agency fill-in cover for a single shift.
                    </strong>
                  </p>
                </div>

                {/* R&D Tax Incentive */}
                <div className="rounded-xl border border-accent/30 bg-accent/10 p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                      <TrendingDown className="h-5 w-5 text-accent" />
                    </div>
                    <h4 className="text-base font-semibold text-primary-foreground">
                      R&amp;D Tax Incentive — reduce your net cost
                    </h4>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
                    Depending on your eligibility, a portion of program costs may be claimable under the R&amp;D Tax
                    Incentive — commonly cited at up to{" "}
                    <strong className="text-primary-foreground">43.5% of eligible expenditure</strong>.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
                    For a $10,000 program, that&apos;s a potential offset of{" "}
                    <strong className="text-primary-foreground">~$4,350</strong>, bringing your effective net cost to
                    around <strong className="text-primary-foreground">~$5,650</strong>.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
                    Where staff wage time is spent on eligible NCCS-related R&amp;D activities, that time may also be
                    includable in your claim — which can materially increase the total offset.
                  </p>
                  <p className="mt-4 text-xs leading-relaxed text-primary-foreground/50">
                    Eligibility must be confirmed with your accountant or tax advisor. We can provide supporting
                    documentation of program activities to assist that process.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
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

        {/* Closing CTA Section */}
        <section className="py-20 sm:py-24 bg-background">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Close the gap now — not after an incident.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Start with a <strong className="text-foreground">compliance review</strong> to see exactly where you
              stand. Go straight to a <strong className="text-foreground">custom SSOW build</strong> if you already know
              what&apos;s missing.
            </p>
            <p className="mt-4 text-base text-muted-foreground">
              The March 2026 update triggered your r39 review obligation. We make it straightforward.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                <Link href="/book">
                  Book a Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8">
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
