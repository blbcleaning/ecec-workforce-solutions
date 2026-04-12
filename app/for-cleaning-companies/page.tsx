import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { 
  AlertTriangle,
  ArrowRight, 
  CheckCircle, 
  GraduationCap,
  UserCheck,
  Search,
  Users,
  Building2,
  Shield,
  FileWarning,
  Clock,
  TrendingUp
} from "lucide-react"

export const metadata: Metadata = {
  title: "For Cleaning Companies | ECEC Workforce Solutions",
  description: "New regulatory requirements mean every person cleaning in childcare needs NCCS certification. Get your team certified and win ECEC contracts.",
}

const newRequirements = [
  {
    icon: GraduationCap,
    title: "Infection-control and biohazard certification",
    description: "Centres increasingly need to demonstrate that their cleaning staff are competent in infection-control procedures specific to childcare environments. General commercial cleaning credentials may not be sufficient. NCCS certification provides a structured, evidence-based pathway to demonstrate this competence — giving your company a clear competitive advantage when servicing ECEC clients.",
  },
  {
    icon: UserCheck,
    title: "Working With Children Check (WWCC)",
    description: "All cleaning staff working in ECEC settings must hold a valid WWCC for the relevant state or territory.",
  },
  {
    icon: Search,
    title: "National Register clearance",
    description: "All staff — including after-hours cleaners — must be cleared against the National Register. There is no exemption for staff who work outside operating hours.",
  },
  {
    icon: FileWarning,
    title: "No exemptions",
    description: "These requirements apply to every person who enters the centre for cleaning purposes, regardless of when they work or how long they are on site.",
  },
]

const nccsOfferings = [
  {
    icon: GraduationCap,
    title: "NCCS Infection Prevention Specialist Certification",
    description: "8-hour training program covering infection control, biohazard handling, and ECEC-specific protocols. Individual certificates issued on completion.",
  },
  {
    icon: UserCheck,
    title: "NCCS Supervisor Certification",
    description: "For team leaders overseeing infection prevention work at client sites. Includes quality assurance and compliance verification training.",
  },
  {
    icon: Search,
    title: "NCCS Auditor Certification",
    description: "For senior staff managing compliance across multiple sites. Full governance and audit framework training.",
  },
  {
    icon: Users,
    title: "Group & Multi-Site Discounts",
    description: "Volume pricing for companies with multiple staff requiring certification. Contact us for portfolio pricing.",
  },
]

const commercialBenefits = [
  "8,500+ approved ECEC services in Australia need compliant cleaning providers",
  "No prior infection prevention standard existed — NCCS fills the gap",
  "Daytime infection prevention contracts are a new revenue stream",
  "First-mover advantage: centres are choosing providers based on NCCS compliance now",
  "Differentiate your business from competitors who lack certification",
  "Win contracts that specifically require NCCS-certified staff",
]

export default function ForCleaningCompaniesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-20 sm:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent">
                <AlertTriangle className="h-4 w-4" />
                Regulatory Update
              </div>
              <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                New Requirements For Cleaning In Childcare Are Now In Effect
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                New regulatory requirements mean every person performing cleaning in ECEC must have proof of certification in infection-control cleaning. NCCS goes one better — it offers industry-specific infection-control training that includes biological hazard workplace management, providing a structured pathway to demonstrate competence and meet your clients&apos; compliance expectations.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                  <Link href="/contact">
                    Get Your Team Certified
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 px-8">
                  <Link href="/contact">Enquire About Licensing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What's Changed Section */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                What&apos;s Changed: New Requirements for Cleaning in Childcare
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Four mandatory requirements now apply to every person who cleans in an ECEC setting
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {newRequirements.map((req) => (
                <div key={req.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                      <req.icon className="h-6 w-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">{req.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{req.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Paramount Consideration Section */}
        <section className="bg-muted py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Shield className="h-4 w-4" />
                  Understanding the Law
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  The Paramount Consideration and the New Biological Hazards Code
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">The paramount consideration</strong> — the principle that the safety, health, and wellbeing of children is the primary concern — now extends to infection prevention and cleaning governance.
                  </p>
                  <p>
                    The updated <strong className="text-foreground">Safe Work Australia Model Code of Practice: Managing the risks of hazardous chemicals in the workplace</strong> and the <strong className="text-foreground">Biological Hazards Code</strong> require that anyone performing infection-control work be a &quot;competent person&quot; with documented training and verified competencies.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Throughout the day</h3>
                      <p className="mt-1 text-sm text-muted-foreground">Centres must prove sufficient cleaning hours while children are present — performed by certified staff</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">After hours</h3>
                      <p className="mt-1 text-sm text-muted-foreground">After-hours cleaners must also be certified — there is no exemption based on timing</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-accent bg-accent/10 p-6">
                  <p className="font-medium text-foreground">
                    NCCS certification provides documented evidence of competence in ECEC-specific infection prevention — making it easier for centres to demonstrate compliance to regulators, auditors, and WHS inspectors. NCCS is a voluntary, standards-based certification — not a legislative requirement. It is the strongest evidence of competence your staff can hold when working in childcare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How NCCS Solves This Section */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                How NCCS Solves This for Your Business
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                NCCS certification is the pathway for cleaning companies to supply ECEC-compliant Infection Prevention Specialists who meet every requirement
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-3xl">
              <div className="rounded-xl border border-accent/30 bg-accent/5 p-8">
                <h3 className="text-xl font-bold text-foreground">The NCCS Opportunity for Cleaning Companies</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  NCCS opens new market opportunities for cleaning companies ready to expand into the ECEC sector or grow their existing childcare client base. By purchasing an NCCS licence, your company can:
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-foreground"><strong>Increase contract cleaning hours</strong> — centres now need daytime infection prevention cleans in addition to traditional after-hours cleaning, creating a new revenue stream for every childcare client</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-foreground"><strong>Provide agency-style NCCS workforce coverage</strong> — supply NCCS-trained Infection Prevention Specialists to fill daytime cleaning shifts when a centre&apos;s internal cleaner is unable to attend</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-foreground"><strong>Expand into NCCS-certified training delivery</strong> — become a licensed NCCS training provider and deliver certification to cleaners outside your own workforce, opening an entirely new service line</span>
                  </li>
                </ul>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  An NCCS licence positions your company as the go-to provider for centres that need structured, compliant infection prevention services — giving you a competitive edge in a market where 8,500+ approved ECEC services need this support.
                </p>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {nccsOfferings.map((offering) => (
                <div key={offering.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <offering.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">{offering.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{offering.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                <Link href="/contact">
                  Get Your Team Certified
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Commercial Opportunity Section */}
        <section className="bg-primary py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent">
                  <TrendingUp className="h-4 w-4" />
                  Commercial Opportunity
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
                  Why This Is a Commercial Opportunity
                </h2>
                <p className="mt-4 text-lg text-primary-foreground/80">
                  The companies that certify first will secure the contracts. The rest will lose them.
                </p>
              </div>
              <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 p-6">
                <ul className="space-y-4">
                  {commercialBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                      <span className="text-primary-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-xl bg-primary-foreground/10 p-6 text-center">
                <p className="text-3xl font-bold text-accent">8,500+</p>
                <p className="mt-2 text-sm text-primary-foreground/80">ECEC services</p>
              </div>
              <div className="rounded-xl bg-primary-foreground/10 p-6 text-center">
                <p className="text-3xl font-bold text-primary-foreground">0</p>
                <p className="mt-2 text-sm text-primary-foreground/80">Prior standards</p>
              </div>
              <div className="rounded-xl bg-primary-foreground/10 p-6 text-center">
                <p className="text-3xl font-bold text-accent">New</p>
                <p className="mt-2 text-sm text-primary-foreground/80">Daytime contracts</p>
              </div>
              <div className="rounded-xl bg-primary-foreground/10 p-6 text-center">
                <p className="text-3xl font-bold text-primary-foreground">Now</p>
                <p className="mt-2 text-sm text-primary-foreground/80">First-mover window</p>
              </div>
            </div>
          </div>
        </section>

        {/* Licensing Section */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Building2 className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-card-foreground">Licensing Opportunities</h2>
                    <p className="mt-2 text-muted-foreground">
                      For larger cleaning operations, we offer licensing arrangements that allow you to deliver NCCS certification in-house. This includes train-the-trainer programs, branded certification materials, and ongoing support.
                    </p>
                    <div className="mt-6">
                      <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href="/contact">
                          Enquire About Licensing
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Ready to certify your team?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Get your staff NCCS certified and start winning ECEC contracts. The regulatory requirements are in effect now — the time to act is today.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                  <Link href="/contact">
                    Book a Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8">
                  <Link href="/contact">Enquire About Licensing</Link>
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
