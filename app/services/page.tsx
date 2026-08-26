import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { SsowCheckout } from "@/components/ssow-checkout"
import { getSsowProducts } from "@/app/actions/stripe"
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  FileCheck,
  ClipboardCheck,
  CheckCircle,
  CheckCircle2,
  ShieldAlert,
  Star,
  TrendingDown,
  Users,
  Gauge,
} from "lucide-react"

// Render at request time so live Stripe products/prices are always current.
export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Custom-built Safe Systems of Work (SSOW) and WHS Compliance Reviews for ECEC. Meet your WHS Regulation 39 obligations under Safe Work Australia's March 2026 biological hazards code.",
}

const reviewPackages = [
  { name: "Health Check (1 hr + written summary)", price: "$450" },
  { name: "Full Compliance Review (gap check + action plan)", price: "$1,350" },
]

const ssowIncludes = [
  {
    category: "Routine cleaning",
    items: [
      "SSOW Toilet & Children's Bathroom Clean and Disinfect",
      "SSOW High-Touch Surface Disinfection",
      "SSOW Toy Cleaning & Sanitation",
      "SSOW Sleep Surfaces (Cot, Mattress & Sleep-Mat Sanitation)",
      "SSOW Kitchen & Food-Prep Surface Cleaning",
      "SSOW Floor Cleaning & Mopping",
    ],
  },
  {
    category: "Supporting hygiene",
    items: [
      "SSOW Cleaning Equipment Hygiene & Maintenance",
      "SSOW Chemical Mixing, Decanting & Dilution",
      "SSOW Linen & Laundry Management",
    ],
  },
  {
    category: "Biohazard & outbreak response",
    items: [
      "SSOW Nappy Change Biohazard Response",
      "SSOW Vomit Spill Response",
      "SSOW Blood Spill Response",
      "SSOW Urine & Faeces Spill Response (Outside Nappy Change)",
      "SSOW Outbreak / Enhanced Disinfection Clean",
    ],
  },
  {
    category: "Standalone",
    items: [
      "Biohazard Incident Response SSOW (ECEC)",
      "Cleaning Management Workbook: verification and reporting logs",
    ],
  },
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
    text: "Approved Providers who want accreditation with ongoing monitoring - not a one-off deliverable",
  },
]

const nccsPillars = [
  {
    title: "Educator Role Restoration",
    description:
      "Removing non-educator duties and returning educators to direct care, curriculum, and meaningful practice.",
  },
  {
    title: "Certified Training for Centre-Hired Cleaning Teams",
    description:
      "Ensuring infection control and biohazard management are carried out correctly, consistently, and in full alignment with WHS law.",
  },
  {
    title: "Implementation and Governance Training for Centre Management",
    description:
      "Embedding WHS-aligned systems, safe work practices, and governance structures that hold up under regulatory scrutiny.",
  },
]

const nccsPayPlan = [
  { label: "Upfront", amount: "$2,000" },
  { label: "Weekly (12 weeks)", amount: "~$500–$667" },
  { label: "Monitoring subscription", amount: "$100/month per centre" },
]

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ checkout?: string }>
}) {
  const { checkout } = await searchParams
  const ssowProducts = await getSsowProducts()

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {checkout === "success" ? (
          <div className="bg-accent/10 px-4 py-3 text-center text-sm font-medium text-accent">
            <CheckCircle2 className="mr-2 inline h-4 w-4" />
            Payment successful - thank you. We&apos;ll be in touch shortly to begin your SSOW build.
          </div>
        ) : null}
        {checkout === "cancelled" ? (
          <div className="bg-muted px-4 py-3 text-center text-sm font-medium text-muted-foreground">
            Checkout cancelled - your card was not charged.
          </div>
        ) : null}
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
                Biological Hazards Code - March 2026
              </div>
              <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                We provide WHS Compliance Assistance to Early Childhood Education and Care.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Safe Work Australia&apos;s updated biological hazards code names ECEC as a case study sector. Under{" "}
                <strong className="text-primary-foreground">WHS Regulation 39</strong>, you have a legal obligation to
                maintain a documented Safe System of Work for high-exposure tasks - including biological hazard response
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
                <p className="font-semibold">
                  Childcare compliance is strong, but WHS gaps are significant and carry the highest liability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service 1 - Custom-Built SSOW */}
        <section id="ssow" className="scroll-mt-24 py-16 sm:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                <FileCheck className="h-4 w-4" />
                Service 1
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                The Three WHS Documents Every Childcare Centre Must Have
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Beyond your QIP and childcare policies, Safe Systems of Work (SSOW) are a legal WHS requirement. They
                show regulators that your centre has identified potential hazards, assessed the risk of harm, and
                predetermined the procedures for completing these tasks safely. These documents provide evidence that
                risks are being managed in advance in accordance with national safety and WHS law.
              </p>
              <p className="mt-4 font-medium leading-relaxed text-foreground">
                We have custom-built 14 Safe Systems of Work (SSOW), plus the verification documents required under WHS
                law.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {ssowIncludes.map((group) => (
                  <div key={group.category} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-card-foreground">{group.category}</h3>
                    <ul className="mt-4 flex flex-col gap-3">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                          <span className="text-sm leading-relaxed text-card-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <SsowCheckout products={ssowProducts} />
              <p className="mt-4 text-sm text-muted-foreground">
                Prefer to talk first?{" "}
                <Link href="/contact" className="font-medium text-accent underline underline-offset-4">
                  Submit an enquiry
                </Link>{" "}
                and we&apos;ll scope your build.
              </p>
            </div>
          </div>
        </section>

        {/* Service 2 - Compliance Partnership */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                <ShieldAlert className="h-4 w-4" />
                Service 2
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Compliance Partnership
              </h2>
              <p className="mt-2 text-lg font-medium text-foreground">
                Subscription-based compliance and training support for your centre.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Give your team ongoing access to certified training, compliance documentation and dedicated
                implementation support through one managed partnership.
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  "Unlimited staff access to certified online Infection Control & Biohazard Management training, valued at $2,000 for 25 staff",
                  "Unlimited access to annual refresher training, valued at $1,200 for every 25 staff",
                  "No large upfront cost for staff training",
                  "Enrol new hires before they start so they are certified to manage cleaning and biohazards from day one",
                  "Manage your WHS training and compliance documentation from one dedicated online portal",
                  "Self-service access for managers to enrol staff and monitor training progress",
                  "Access to the complete compliance documentation library, updated regularly in line with legislative changes",
                  "A dedicated support manager to assist with implementation and customisation",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm leading-relaxed text-card-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <h3 className="text-xl font-bold text-foreground">Partnership pricing</h3>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                    Pay annually and save 20%
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      team: "Up to 25 staff",
                      monthly: "$300/month",
                      annual: "$2,880/year",
                      saving: "Save $720",
                    },
                    {
                      team: "Up to 50 staff",
                      monthly: "$500/month",
                      annual: "$4,800/year",
                      saving: "Save $1,200",
                    },
                    {
                      team: "Up to 100 staff",
                      monthly: "$700/month",
                      annual: "$6,720/year",
                      saving: "Save $1,680",
                    },
                    {
                      team: "Over 100 staff",
                      monthly: "Contact us",
                      annual: "Enterprise rates",
                      saving: "Tailored pricing",
                    },
                  ].map((tier) => (
                    <div key={tier.team} className="flex flex-col rounded-xl border border-border bg-card p-5">
                      <p className="text-sm font-medium text-muted-foreground">{tier.team}</p>
                      <p className="mt-2 text-2xl font-bold text-card-foreground">{tier.monthly}</p>
                      <div className="mt-4 border-t border-border pt-4">
                        <p className="font-semibold text-card-foreground">{tier.annual}</p>
                        <p className="mt-1 text-sm font-medium text-accent">{tier.saving}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-col gap-2 rounded-xl border border-accent/30 bg-accent/10 p-5 text-sm text-foreground sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-semibold">30-day money-back guarantee</p>
                  <p>Initial 12-month contract, then no lock-in.</p>
                </div>
              </div>

              <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">
                  Enquire about a Compliance Partnership
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service 3 - SSOW Building Workshop */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                <BookOpen className="h-4 w-4" />
                Service 3
              </div>
              <div className="mt-5 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
                <div>
                  <h2 className="text-balance text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl">
                    Safe System of Work Building Workshop
                  </h2>
                  <p className="mt-4 text-lg font-medium leading-relaxed text-card-foreground">
                    Get the documentation and training required to meet the 2026 WHS standards in one workshop.
                  </p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Skip generic infection control and biohazard training. Your staff become certified by building the
                    documents that support their daily actions.
                  </p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {[
                      "SSOW Building Workshop",
                      "Onsite, practice-based certified group training",
                      "Infection Control & Biohazard Management",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="font-medium text-card-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-xl border border-accent/30 bg-accent/10 p-5">
                    <p className="font-semibold text-foreground">
                      Outcome: Real compliance. Real understanding. Real time saved.
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Satisfies WHS team consultation requirements through a practical, collaborative process.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="rounded-xl bg-primary p-6 text-primary-foreground">
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">
                      4-hour onsite workshop
                    </p>
                    <p className="mt-3 text-4xl font-bold">$1,500</p>
                    <p className="mt-2 text-primary-foreground/80">Per centre, for up to 20 staff</p>
                    <div className="mt-5 border-t border-primary-foreground/20 pt-5">
                      <p className="font-semibold text-accent">Includes templates valued at $600</p>
                    </div>
                  </div>
                  <h3 className="mt-7 text-xl font-bold text-card-foreground">
                    Compliance everyone understands because they helped create it
                  </h3>
                  <ul className="mt-5 flex flex-col gap-3">
                    {[
                      "70%+ better knowledge retention compared with theory-based training",
                      "35%+ higher compliance rates from team-built policies",
                      "80–100 hours saved by not building the documents from scratch",
                      "3-in-1 Infection Control, SSOW and Implementation Training",
                      "Designed to meet WHS team consultation requirements",
                    ].map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-sm leading-relaxed text-card-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-7 w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">
                    <a
                      href="https://compliance.ececworkforcesolutions.au/onsitessowbuilding"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book the workshop
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 4 - WHS Compliance Review */}
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
                  Service 4
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  WHS Compliance Review
                </h2>
                <p className="mt-2 text-lg font-medium text-foreground">
                  Know your gaps before a regulator finds them.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  A structured review of your current SSOW, training records, and documentation against the March 2026
                  biohazard standard. You leave with a clear gap list, priority fixes, and implementation steps - not
                  just a report.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Flagship - NCCS Integration Program */}
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
                NCCS re-imagines your centre&apos;s operational structure into one that genuinely supports, protects,
                and recognises the role of the educator. Through full system integration and 12-month performance
                monitoring, NCCS builds a workforce model that restores educator professionalism and places a
                dedicated operational team around them.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
                NCCS delivers a compliant, efficient, and sustainable operational model that strengthens WHS
                alignment, lifts educator wellbeing, and transforms the way your centre operates day-to-day.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="mx-auto mt-14 max-w-5xl">
              <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-primary-foreground/60">
                Built on three pillars
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                {nccsPillars.map((pillar, index) => (
                  <div
                    key={pillar.title}
                    className="flex flex-col rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"
                  >
                    <span className="text-2xl font-bold text-accent">{index + 1}</span>
                    <h4 className="mt-2 text-lg font-semibold text-primary-foreground text-balance">
                      {pillar.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">{pillar.description}</p>
                  </div>
                ))}
              </div>
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

            {/* What's included - Phases */}
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
                      "Full operational embedding - not policy-only",
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
                    Payment plan available - designed for operational cashflow:
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
                      R&amp;D Tax Incentive - reduce your net cost
                    </h4>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
                    Depending on your eligibility, a portion of program costs may be claimable under the R&amp;D Tax
                    Incentive - commonly cited at up to{" "}
                    <strong className="text-primary-foreground">43.5% of eligible expenditure</strong>.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
                    For a $10,000 program, that&apos;s a potential offset of{" "}
                    <strong className="text-primary-foreground">~$4,350</strong>, bringing your effective net cost to
                    around <strong className="text-primary-foreground">~$5,650</strong>.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
                    Where staff wage time is spent on eligible NCCS-related R&amp;D activities, that time may also be
                    includable in your claim - which can materially increase the total offset.
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
              Close the gap now - not after an incident.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Estimated to reduce educator workload by{" "}
              <strong className="text-foreground">7–9 hours per week</strong>, ensure daily practices meet{" "}
              <strong className="text-foreground">WHS compliance requirements</strong>, and become{" "}
              <strong className="text-foreground">ROI-positive</strong> if turnover drops by just two educators.
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
