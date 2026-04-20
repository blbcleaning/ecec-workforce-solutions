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
  title: "For Cleaning Companies",
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
          
          {/* Big Block Heading - Top Left */}
          <div className="absolute top-6 left-4 sm:left-6 lg:left-8 z-10 bg-accent px-4 py-2 sm:px-6 sm:py-3">
            <span className="text-sm sm:text-base lg:text-lg font-bold tracking-wide text-accent-foreground uppercase">
              For Cleaning Companies
            </span>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent">
                <AlertTriangle className="h-4 w-4" />
                Regulatory Update
              </div>
              <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                New Requirements For Cleaning In Childcare Are Now In Effect
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-primary-foreground/90 font-medium">
                Certify your workforce. Enter a new market. Win contracts that require NCCS compliance.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80 font-medium">
                This is how cleaning companies move from commodity services to certified, compliance-aligned providers in the childcare sector.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-primary-foreground/70">
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

        {/* What This Means for Your Business Section */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                What This Means for Your Business
              </h2>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
              <div className="flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-5 py-3">
                <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">Access childcare sector contracts</span>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-5 py-3">
                <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">Move beyond price-based competition</span>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-5 py-3">
                <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">Deliver certified infection prevention services</span>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-5 py-3">
                <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">Increase contract value and stability</span>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-5 py-3">
                <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">Differentiate from non-certified providers</span>
              </div>
            </div>
          </div>
        </section>

        {/* A New Market Standard Section */}
        <section className="bg-accent/5 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                A New Market Standard: The End of the &quot;Race to the Bottom&quot;
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Historically, childcare has been one of the cleaning industry&apos;s most challenging sectors—defined by razor-thin margins and a &quot;lowest price&quot; mentality. <strong className="text-foreground">The March 2026 SWA high-risk biohazard profiling has fundamentally ended that era.</strong>
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                In this new regulatory environment, a childcare centre cutting cleaning hours or hiring uncertified labor is the legal equivalent of a <strong className="text-foreground">builder expecting workers to operate at heights without a harness.</strong> It is no longer just &quot;budgeting&quot;—it is a catastrophic breach of safety standards.
              </p>

              <div className="mt-10 rounded-xl border border-accent/30 bg-card p-8">
                <h3 className="text-xl font-bold text-foreground">The Opportunity: Transition from Vendor to Essential Partner</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  The NCCS gives cleaning companies the leverage to reset the market and move from a disposable expense to a <strong className="text-foreground">statutory necessity.</strong>
                </p>
                <p className="mt-4 text-foreground font-semibold leading-relaxed">
                  Childcare centres implementing the CCS/NCCS model require certified cleaning providers—this certification positions your business to meet that demand.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">From &quot;Low Cost&quot; to &quot;Life Safety&quot;</p>
                      <p className="mt-1 text-sm text-muted-foreground">Under the <strong>Paramount Consideration</strong>, infection prevention is now a safety-critical function. This provides you with the authority to quote for the actual labor hours required to satisfy WorkSafe and NQF inspectors.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Non-Negotiable Compliance</p>
                      <p className="mt-1 text-sm text-muted-foreground">Just as a site manager cannot &quot;opt-out&quot; of scaffolding, childcare directors can no longer &quot;opt-out&quot; of validated biohazard suppression. The NCCS provides the turn-key system to deliver this mandatory service.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Increased Contract Value &amp; Security</p>
                      <p className="mt-1 text-sm text-muted-foreground">By providing a certified, risk-mitigating service, you secure your contracts. When the risk is high, providers shift their spend away from &quot;cheap&quot; and toward &quot;certified&quot; to protect their license to operate.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 rounded-xl border-l-4 border-accent bg-accent/5 p-6">
                <p className="text-lg font-semibold text-foreground italic">
                  &quot;In a biohazardous environment, &apos;budget cleaning&apos; is a reportable safety violation.&quot;
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-foreground mb-3">What This Enables:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                      Win higher-value childcare contracts
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                      Quote based on compliance, not price
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                      Secure longer-term agreements
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                      Operate as a specialist, not a commodity
                    </li>
                  </ul>
                </div>
                <p className="mt-6 text-muted-foreground">
                  We don&apos;t provide general cleaning training—we certify your workforce to operate in compliant childcare environments. This positions your business to move from low-cost cleaning to a certified, compliance-aligned service that centres now require.
                </p>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact">
                    Position Your Business for Childcare Contracts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What We Provide Section */}
        <section className="py-12 sm:py-16 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                What We Provide
              </h2>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border bg-card p-5 text-center">
                <GraduationCap className="mx-auto h-8 w-8 text-accent" />
                <p className="mt-3 font-medium text-foreground">Childcare-specific infection prevention training</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 text-center">
                <Shield className="mx-auto h-8 w-8 text-accent" />
                <p className="mt-3 font-medium text-foreground">NCCS-aligned certification</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 text-center">
                <UserCheck className="mx-auto h-8 w-8 text-accent" />
                <p className="mt-3 font-medium text-foreground">Workforce capability verification</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 text-center">
                <Building2 className="mx-auto h-8 w-8 text-accent" />
                <p className="mt-3 font-medium text-foreground">Alignment to CCS-compliant centres</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Centres Are Looking for You Section */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Why Centres Are Looking for You
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Childcare centres are actively seeking cleaning providers who can meet the new compliance requirements
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Educators must stop cleaning</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Cleaning biohazards is no longer within their scope. Centres need external partners to fill this gap.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Daytime cleans are mandatory</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Infection prevention during operating hours requires scheduled, certified coverage.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Compliance must be documented</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Centres need verified records of competent cleaning to satisfy audits and inspections.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Matters Section */}
        <section className="py-12 sm:py-16 bg-accent/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Why This Matters
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Cleaning in childcare is no longer general cleaning—it is a regulated, compliance-driven function.
              </p>
              <p className="mt-4 text-lg font-semibold text-foreground">
                Certification is becoming the requirement—not the advantage.
              </p>
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

        {/* The New Standard of Care */}
        <section className="bg-muted py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-card-foreground">The New Standard of Care: Mandatory Requirements for ECEC Service Partners</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The <strong className="text-foreground">Paramount Consideration</strong>—the legal principle that the safety, health, and wellbeing of children must be the primary concern—has fundamentally redefined cleaning governance. Under the <strong className="text-foreground">SWA March 2026 Biological Hazards Code</strong>, childcare is no longer a general commercial site; it is a <strong className="text-foreground">high-risk biohazardous environment</strong>.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To remain viable partners in the ECEC sector, cleaning providers must now move beyond aesthetic cleaning and meet these three mandatory pillars of compliance:
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold text-card-foreground">Verified Competency</p>
                    <p className="mt-1 text-sm text-muted-foreground">General cleaners are no longer sufficient. Anyone performing infection control must be a <strong className="text-foreground">&quot;competent person&quot;</strong> with documented, specialized training and verified NCCS competencies in biohazard suppression.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold text-card-foreground">Safety-Critical Documentation</p>
                    <p className="mt-1 text-sm text-muted-foreground">Providers must deliver a robust evidence trail, including <strong className="text-foreground">Safe Work Method Statements (SWMS)</strong> and verification logs that satisfy both NCCS governance and <strong className="text-foreground">PCBU statutory obligations</strong>.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold text-card-foreground">Operational Alignment</p>
                    <p className="mt-1 text-sm text-muted-foreground">Cleaning schedules must be treated as safety-critical functions, with dedicated time and specialized equipment that reflects the site's high-risk classification.</p>
                  </div>
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
                  The NCCS certification has transformed from a "value-add" into a mandatory prerequisite for market entry. As childcare centers face high-risk biohazard classifications and tripled fines, general commercial cleaners who fail to certify will be viewed as a significant legal liability. This shift presents a decisive commercial crossroads: companies that certify early will secure the market, while those who don't will face an inevitable loss of contracts as providers are forced to shift their spend toward certified, risk-mitigating partners to protect their licenses.
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

        {/* Two Workforces Section */}
        <section className="py-16 sm:py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
                Two Workforces. One Standard.
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-xl bg-primary-foreground/10 p-6">
                  <Building2 className="mx-auto h-10 w-10 text-accent" />
                  <p className="mt-4 text-lg font-medium text-primary-foreground">Centres implement the CCS/NCCS system</p>
                </div>
                <div className="rounded-xl bg-primary-foreground/10 p-6">
                  <Users className="mx-auto h-10 w-10 text-accent" />
                  <p className="mt-4 text-lg font-medium text-primary-foreground">Cleaning providers are certified to meet it</p>
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
                Position Your Business for Childcare Contracts
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Get your staff NCCS certified and start winning ECEC contracts. The regulatory requirements are in effect now — the time to act is today.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                  <Link href="/book">
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
