import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ArrowRight,
  CheckCircle,
  FileText,
  Newspaper,
  Users
} from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about ECEC Workforce Solutions and the National Childcare Cleaning Standard (NCCS) - Australia's first evidence-based infection prevention framework for ECEC.",
}

const credentials = [
  {
    icon: FileText,
    title: "Five DOI-registered research papers",
    description: "Evidence-based foundation for the NCCS framework",
  },
  {
    icon: Newspaper,
    title: "Featured in The Sector",
    description: "Australia's leading ECEC publication",
  },
  {
    icon: Users,
    title: "Built from lived experience",
    description: "Developed by a practitioner who worked inside ECEC services",
  },
]

export default function AboutPage() {
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
                Built By A Practitioner. For The Sector That Never Had An Infection Prevention Standard.
              </h1>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-12">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/lindsay-smith.jpg"
                    alt="Lindsay Smith, Founder of ECEC Workforce Solutions"
                    width={280}
                    height={350}
                    className="rounded-xl shadow-lg"
                    priority
                  />
                  <p className="mt-4 text-center text-sm font-medium text-foreground">Lindsay Smith</p>
                  <p className="text-center text-sm text-muted-foreground">Founder</p>
                </div>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="text-xl leading-relaxed">
                    ECEC Workforce Solutions was founded by Lindsay Smith — a practitioner who started working inside ECEC services and identified a structural gap: no evidence-based infection prevention standard existed for childcare in Australia.
                  </p>
                <p className="leading-relaxed">
                    The National Childcare Cleaning Standard (NCCS) was built from lived experience, operational insight, and a commitment to solving a real problem the sector had been missing. It is Australia&apos;s first published, governance-aligned infection prevention framework designed specifically for early childhood education and care.
                  </p>
                  <p className="leading-relaxed">
                    NCCS is supported by five DOI-registered research papers and has been featured in The Sector, Australia&apos;s leading ECEC publication. The framework is currently in early commercial rollout — we are working with centres and cleaning companies to deliver NCCS certification, compliance tools, and implementation support.
                  </p>
                <p className="leading-relaxed">
                    We are based in Western Sydney, NSW.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="bg-muted py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Our Credentials
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {credentials.map((credential) => (
                <div key={credential.title} className="rounded-xl border border-border bg-card p-6 shadow-sm text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <credential.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-card-foreground">{credential.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{credential.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Stand For */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  What We Stand For
                </h2>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Evidence-based practice:</strong> Every aspect of NCCS is grounded in published research and operational reality.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Governance-aligned:</strong> Our framework is designed to satisfy both NQF quality area requirements and WHS legislation.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Practical solutions:</strong> We deliver real compliance tools that work in real centres — not academic frameworks that gather dust.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Verifiable claims only:</strong> We don&apos;t fabricate statistics or testimonials. What we say is what we can prove.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-accent/30 bg-accent/10 p-8">
                <p className="text-2xl font-bold text-foreground">
                  &quot;Educators Educate. Cleaners Clean.&quot;
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  This tagline captures our core belief: infection prevention in childcare should be performed by trained specialists — not educators who are already stretched thin with their primary responsibilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-primary py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
                Contact
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6">
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <a href="mailto:ececworkforcesolutions@outlook.com" className="text-primary-foreground hover:text-accent transition-colors">
                      ececworkforcesolutions@outlook.com
                    </a>
                  </div>
                </div>
                <div className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6">
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <a href="tel:0432355396" className="text-primary-foreground hover:text-accent transition-colors">
                      0432 355 396
                    </a>
                  </div>
                </div>
                <div className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6">
                  <div className="flex items-center justify-center gap-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="text-primary-foreground">Western Sydney, NSW, Australia</span>
                  </div>
                </div>
                <div className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6">
                  <div className="flex items-center justify-center gap-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <span className="text-primary-foreground">Response time: 3–5 business days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Ready to get started?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Contact us to discuss how NCCS certification can protect your centre or business.
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
