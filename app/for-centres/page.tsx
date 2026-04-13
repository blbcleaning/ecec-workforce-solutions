import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Shield, ArrowRight, CheckCircle, Building } from "lucide-react"
import { InfectionPreventionHoursCalculator } from "@/components/calculators/infection-prevention-hours-calculator"
import { ROICalculator } from "@/components/calculators/roi-calculator"
import { WhyChooseUsSection } from "@/components/home/why-choose-us-centre-section"

export const metadata: Metadata = {
  title: "For Centres | ECEC Workforce Solutions",
  description: "NCCS certification and compliance solutions for childcare centre directors and approved providers. Protect your licence and meet your WHS obligations.",
}

const services = [
  "NCCS Infection Prevention Specialist Certification",
  "NCCS Supervisor Certification",
  "NCCS Director Governance Briefing",
  "Educator Awareness Training",
  "Site Assessment",
  "Custom Infection Prevention Schedule",
  "Compliance Audit",
  "Online Compliance System Setup",
]

const bundles = [
  {
    title: "Infection Prevention Specialist + Supervisor Bundle",
    description: "Complete certification for your infection prevention team with governance separation built in.",
    features: [
      "NCCS Infection Prevention Specialist Certification",
      "NCCS Supervisor Certification",
      "Documentation templates",
      "Governance separation framework",
    ],
  },
  {
    title: "Full Centre Team Bundle",
    description: "Comprehensive compliance solution for your entire team.",
    features: [
      "NCCS Infection Prevention Specialist Certification",
      "NCCS Supervisor Certification",
      "NCCS Director Governance Briefing",
      "Educator Awareness Training",
      "Complete documentation system",
    ],
  },
]

export default function ForCentresPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-20 sm:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                Compliance Has Tripled. Penalties Are Personal. Your Infection Prevention Workforce Needs To Be Certified, Documented, And Defensible.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Build the infection prevention infrastructure your centre is missing — NCCS certification, governance systems, and documented compliance embedded directly into your operations.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                  <Link href="/contact">
                    Book a Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 px-8">
                  <Link href="/contact">Enquire Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Risk Section */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive">
                  <AlertTriangle className="h-4 w-4" />
                  Compliance Risk
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  The risks have never been higher
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Register obligations:</strong> National Early Childhood Worker Register requirements now carry penalties up to $34,200.
                  </p>
                  <p>
                    <strong className="text-foreground">Director and Officer personal liability:</strong> Under WHS PCBU duties, Directors and Approved Providers carry personal, non-delegable due diligence obligations — with potential fines exceeding $600,000 and up to 5 years imprisonment.
                  </p>
                  <p>
                    <strong className="text-foreground">Fines have tripled:</strong> Combined penalties across ECEC, WHS, and worker registration are now at their highest levels ever.
                  </p>
                  <p>
                    <strong className="text-foreground">Criminal prosecution:</strong> Officers who fail to exercise due diligence can face criminal charges for Category 1 offences.
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-accent/30 bg-accent/10 p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                    <Shield className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">The Solution</h3>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  NCCS certification gets your infection prevention workforce trained, certified, and documented — so you can defend your compliance position in any audit, inspection, or WHS investigation.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-foreground">Competent persons under WHS legislation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-foreground">Documented governance separation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-foreground">Audit-ready compliance records</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-foreground">Assessment & Rating evidence for QA2, QA3, QA7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-muted py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Services for Centres
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to achieve and maintain NCCS compliance
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div key={service} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-sm">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="font-medium text-card-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hours Calculator Section */}
        <section id="hours-calculator" className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <InfectionPreventionHoursCalculator />
          </div>
        </section>

        {/* Governance Statement */}
        <section className="border-y border-border bg-card py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 rounded-xl bg-primary/5 p-6">
              <Shield className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
              <p className="text-foreground leading-relaxed">
                <strong>Regardless of your staffing model</strong> — managed service, internal team, or hybrid — your centre retains governance oversight and ultimate compliance responsibility. ECEC Workforce Solutions trains and certifies your infection prevention workforce to NCCS standards.
              </p>
            </div>
          </div>
        </section>

        {/* Bundles Section */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Bundled Packages
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Save with our comprehensive compliance bundles
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {bundles.map((bundle) => (
                <div key={bundle.title} className="rounded-xl border border-border bg-card p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-card-foreground">{bundle.title}</h3>
                  <p className="mt-2 text-muted-foreground">{bundle.description}</p>
                  <ul className="mt-6 space-y-3">
                    {bundle.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-8 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/contact">Enquire for pricing</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NCCS Framework Infographic */}
        <section className="bg-muted py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Understanding the NCCS Framework
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A comprehensive approach to infection prevention in childcare environments
              </p>
            </div>
            <div className="mt-10">
              <Image
                src="/images/nccs-infographic.png"
                alt="National Childcare Cleaning Standard (NCCS) Framework - showing systematic cleaning protocols, approved materials and safety, trained and competent staff, and regular monitoring and compliance"
                width={1200}
                height={900}
                className="w-full rounded-xl shadow-lg"
                priority
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* Multi-site Section */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent">
                  <Building className="h-7 w-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-foreground">Operating 3+ centres?</h3>
                  <p className="text-primary-foreground/80">Contact us for portfolio pricing.</p>
                </div>
              </div>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">
                  Get Portfolio Pricing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section id="roi-calculator" className="bg-muted py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <ROICalculator />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Ready to protect your centre?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Get your infection prevention team certified and your compliance documented.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                  <Link href="/contact">
                    Book a Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8">
                  <Link href="/contact">Enquire Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
