import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Clock,
  Users,
  ShieldCheck,
  ClipboardCheck,
  AlertTriangle,
  Quote,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Our Courses - Infection Control & Biohazard Training for ECEC",
  description:
    "Practical training for early childhood teams - infection control, biohazard management, and the safe work practices your documented SSOW relies on. Delivered so training becomes an evidenced control.",
}

const featuredOutcomes = [
  "Understand transmission routes, the chain of infection, and the six behaviour-driven pathways",
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

const courseModules = [
  "Module 1 - Overview & foundations",
  "Module 2 - Understanding Biological Hazards in ECEC",
  "Module 3 - Infection Control Cleaning: Principles and Procedures",
  "Module 4 - Risk assessment & controls (WHS lens)",
  "Module 5 - PPE selection, use, and disposal",
  "Module 6 - Air Quality, Ventilation, and Environmental Controls",
  "Module 7 - Laundry and linen handling as infection control",
  "Module 8 - Safe Handling of Cleaning Chemicals",
  "Module 9 - Cleaning schedules, checklists, and recordkeeping",
  "Module 10 - Managing incidents, exposures, and notifications",
  "Module 11 - High-touch surfaces and shared equipment controls",
  "Module 12 - Clean and Contaminated Zones",
  "Module 13 - Nappy Changing Procedure as a Biohazard Control",
  "Module 14 - Waste Stream Management",
  "Module 15 - Post-Outbreak Terminal Clean and Return to Normal",
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
    audience: "For cleaners",
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
                  <p className="text-sm font-bold uppercase tracking-wide text-accent">Option 1 - Online, self-paced</p>
                  <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
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
                  <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Clock className="h-4 w-4 flex-shrink-0 text-accent" />
                    Approx. 6 hours - online, self-paced.
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

        {/* Course Modules - What you will learn */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-wide text-accent">Option 1 - Course modules</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                What you will learn
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                15 self-paced modules covering infection control and biohazard management from foundations through to
                outbreak response.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {courseModules.map((module, index) => (
                <div
                  key={module}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
                >
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-card-foreground">
                    {module.replace(/^Module \d+ - /, "")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Assessor */}
        <section className="bg-background py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 sm:p-8 md:flex-row md:items-start">
              <div className="h-36 w-36 flex-shrink-0 overflow-hidden rounded-xl border border-border bg-muted sm:h-40 sm:w-40">
                <Image
                  src="/team/lindsay-smith.png"
                  alt="Lindsay Smith, lead assessor and founder of ECEC Workforce Solutions"
                  width={160}
                  height={160}
                  sizes="160px"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold uppercase tracking-wide text-accent">Meet Your Lead Assessor</p>
                <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl">
                  Real ECEC Expertise. Rigorous WHS Accountability.
                </h2>
                <div className="mt-6 flex flex-col gap-4 text-muted-foreground leading-relaxed">
                  <p>
                    When you enrol your educators in our training, their 15 competency assignments aren&apos;t graded by
                    an automated system or a generic corporate checklist. They are personally marked by Lindsay Smith,
                    an independent ECEC policy analyst, safety consultant, and founder of ECEC Workforce Solutions.
                  </p>
                  <p>
                    Lindsay counsels providers on modern WHS and biohazard protocols, including the Safe Work Australia
                    codes governing biological hazards in childcare spaces. She is the author of the Childcare Cleaning
                    Standard (CCS), Australia&apos;s first published governance framework for ECEC cleaning environments,
                    and publishes industry analysis in The Sector.
                  </p>
                  <p>
                    This rare combination of hands-on sector experience and published policy expertise ensures the
                    guidance your staff receives is both practically viable and academically rigorous.
                  </p>
                </div>
                <blockquote className="mt-8 border-l-4 border-accent bg-muted p-5">
                  <Quote className="h-5 w-5 text-accent" />
                  <p className="mt-3 text-sm italic leading-relaxed text-foreground">
                    &ldquo;My goal isn&apos;t to hand out easy pass marks; it&apos;s to ensure your staff genuinely master
                    biohazard management. Every assignment submission receives detailed, constructive feedback, giving
                    your centre the verified competency logs required to confidently approach your next WHS or ACECQA
                    audit.&rdquo;
                  </p>
                  <footer className="mt-3 text-sm font-semibold text-foreground">Lindsay Smith</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Competency assessment */}
        <section className="bg-muted py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-wide text-accent">Competency-Based Assessment</p>
              <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                How Assessment Works
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Move beyond pass or fail. Every assignment is personally marked by Lindsay Smith, founder of ECEC
                Workforce Solutions and author of the National Child Care System. Your staff receive detailed feedback,
                not just a score. Every completed module builds the verified competency logs you need for WHS and
                ACECQA audits.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <ClipboardCheck className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-card-foreground">Feedback, revision and resubmission</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  If an assignment does not meet competency, the participant is marked Partially Competent (PC) or Not
                  Yet Competent (NYC) for that task. Feedback identifies what needs to be corrected or strengthened,
                  and the participant can revise and resubmit before final completion or certificate issue.
                </p>
              </div>
              <div className="rounded-xl border border-accent/30 bg-accent/10 p-6 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background">
                  <AlertTriangle className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">Competency requirements</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Participants who complete the course but do not resubmit outstanding assignments to achieve the
                  required competency standard will not receive a competency certificate. They may instead receive a
                  Certificate of Attendance, confirming participation but not competency, certification, or successful
                  assessment completion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Option 1 pricing */}
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-wide text-accent">Option 1 - Team enrolment</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Choose your team size</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Online, self-paced training with personal assessment and competency feedback for every participant.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { staff: "Up to 5 staff", price: "$400" },
                { staff: "Up to 10 staff", price: "$700" },
                { staff: "Up to 20 staff", price: "$1,150" },
                { staff: "Up to 30 staff", price: "$1,600" },
              ].map((option) => (
                <div key={option.staff} className="rounded-xl border border-border bg-card p-6 text-center shadow-sm sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-wide text-accent">Online team pack</p>
                  <h3 className="mt-3 text-xl font-bold text-card-foreground">{option.staff}</h3>
                  <p className="mt-4 text-3xl font-bold tracking-tight text-foreground">{option.price}</p>
                  <p className="mt-3 text-sm text-muted-foreground">Includes all 15 modules and personal assessment.</p>
                  <Button asChild className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/contact">Enquire About This Pack</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Option 2 - Group onsite training */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-10">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-accent">Option 2 - Onsite &amp; group</p>
                  <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                    <Users className="h-3.5 w-3.5" />
                    Delivered at your centre
                  </span>
                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl">
                    Group Onsite Infection Control &amp; Biohazard Management
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    A 3-hour instructor-led session delivered onsite for your whole team - scheduled after hours on a
                    week night or weekend so it fits around care hours and doesn&apos;t disrupt your day.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium text-foreground">3 hours</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2">
                      <Users className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium text-foreground">Whole team, onsite</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2">
                      <BookOpen className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium text-foreground">After hours - week night or weekend</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                      <Link href="/contact">
                        Enquire About Onsite Training
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-muted p-6 sm:p-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Why choose onsite group training
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Train your entire team in one session",
                      "Delivered in your own rooms and real spaces",
                      "Scheduled after hours to protect care time",
                      "Consistent practice and evidence across the team",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-16 sm:py-20 bg-background">
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
        <section className="py-16 sm:py-20 bg-muted">
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
                  {cert.audience ? (
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent">{cert.audience}</p>
                  ) : null}
                  <h3 className={`${cert.audience ? "mt-1" : "mt-4"} font-semibold text-card-foreground`}>
                    {cert.title}
                  </h3>
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
