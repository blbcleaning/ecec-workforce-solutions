import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { GraduationCap, CheckCircle, ArrowRight, BookOpen, Clock, Users, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Courses - Infection Control & Biohazard Training for ECEC",
  description:
    "Practical training for early childhood teams - infection control, biohazard management, and the safe work practices your documented SSOW relies on. Delivered so training becomes an evidenced control.",
}

const featuredOutcomes = [
  "Consistent infection control routines",
  "Safer nappy change workflow",
  "Clean vs contaminated zoning",
  "Waste stream controls",
  "Safe chemical handling basics",
  "Outbreak response readiness",
]

const featuredHighlights = [
  { icon: BookOpen, text: "15 modules" },
  { icon: Clock, text: "Self-paced" },
  { icon: Users, text: "Built for the realities of ECEC" },
]

const whoItsFor = [
  "Educators",
  "Room leaders",
  "Centre teams",
  "Directors implementing consistent practice",
]

const certifications = [
  {
    icon: GraduationCap,
    title: "Infection Prevention Specialist",
    description:
      "Core certification covering infection control, biohazard handling, and ECEC-specific protocols. Individual certificates issued on completion.",
  },
  {
    icon: ShieldCheck,
    title: "Supervisor Certification",
    description:
      "For team leaders overseeing infection prevention work, including quality assurance and compliance verification.",
  },
  {
    icon: Users,
    title: "Group & Multi-Site Training",
    description:
      "Coordinated training for whole teams or multiple centres, so competency and evidence are consistent across every site.",
  },
]

export default function CoursesPage() {
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
              Training
            </span>
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent">
                <GraduationCap className="h-4 w-4" />
                Our Courses
              </div>
              <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                Practical training your staff can apply on the floor.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Courses built for ECEC teams - covering infection control, biological hazard response, and the safe
                work practices your documented SSOW relies on. Delivered so training becomes an evidenced control, not
                just an intention.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Course */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-10">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Required under the 2026 Biohazard Code
                  </span>
                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl">
                    Certified Infection Control &amp; Biohazard Management
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    The certification early childhood teams and cleaning contractors now need under Safe Work
                    Australia&apos;s 2026 biohazard code. Practical, educator-facing procedures across 15 modules that
                    lift standards, reduce biohazard risk, and give every staff member evidenced competency.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {featuredHighlights.map((h) => (
                      <div
                        key={h.text}
                        className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2"
                      >
                        <h.icon className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium text-foreground">{h.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                      <Link href="/training/infection-control">
                        View Course &amp; Enrol
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="px-8">
                      <Link href="/contact">Enquire About Group Training</Link>
                    </Button>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-muted p-6 sm:p-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    What your team will be able to do
                  </h3>
                  <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {featuredOutcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-sm text-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Who our courses are for</h2>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
              {whoItsFor.map((who) => (
                <div
                  key={who}
                  className="flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-5 py-3"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm font-medium text-foreground">{who}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Pathway */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Certification Pathway</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Build competency from individual educators through to supervisors and whole-of-service coverage.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {certifications.map((cert) => (
                <div key={cert.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <cert.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-4 font-semibold text-card-foreground">{cert.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 sm:py-24 bg-muted">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Turn training into evidenced compliance.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Enrol individuals now, or talk to us about training your whole team so competency and records stay
              consistent across every room.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                <Link href="/training/infection-control">
                  View Course &amp; Enrol
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
