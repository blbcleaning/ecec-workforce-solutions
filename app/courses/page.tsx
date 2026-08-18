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
              <p className="mt-5 inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-sm font-semibold text-foreground">
                <BookOpen className="h-4 w-4 flex-shrink-0 text-accent" />
                Each module includes a multiple-choice knowledge quiz and a written assignment.
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
                    Ideal for bringing your entire team up to speed simultaneously and building a unified compliance
                    culture. This 3-hour instructor-led intensive is delivered onsite after hours on a week night or
                    weekend, so your centre can complete training without disrupting daily operations.
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
                    What your booking includes
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {[
                      {
                        title: "ECEC-specific compliance training",
                        text: "Biohazard-safe cleaning aligned with current WHS, NQF, NQS, ACECQA and Biohazard Code requirements, not generic infection-control training.",
                      },
                      {
                        title: "Fast-tracked 3-hour intensive",
                        text: "Train and verify your whole team in one high-impact onsite session without disrupting daily operations.",
                      },
                      {
                        title: "Flexible scheduling",
                        text: "After-hours and weekend sessions are available to suit staff meetings or professional development days.",
                      },
                      {
                        title: "Fully catered and resource-packed",
                        text: "Lunch or dinner and refreshments, a comprehensive workbook, editable cleaning schedules and reference materials are included.",
                      },
                      {
                        title: "Staff consultation built in",
                        text: "One hour explores problematic practices, cleaning barriers and practical changes. This supports Safe Work Australia's requirement for staff involvement in creating safer workplaces.",
                      },
                    ].map((item) => (
                      <li key={item.title} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-sm leading-relaxed text-foreground">
                          <strong>{item.title}:</strong> {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-border pt-5">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Practical topics covered
                    </h3>
                    <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {[
                        "Daily, weekly and periodic cleaning routines",
                        "Outbreak response and cross-contamination prevention",
                        "Cleaning documentation and audit readiness",
                        "Safe use of cleaning products and equipment",
                        "Delegation, accountability and hygiene culture",
                        "Time management and cleaning preparedness",
                        "Reviewing professional cleaning contracts",
                        "Child-led hygiene and embedding best practice",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 rounded-lg border border-accent/30 bg-accent/10 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-accent">Free bonuses</p>
                      <p className="text-sm font-bold text-accent">Combined value $520</p>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      Digital Cleaning Management Workbook included with every onsite booking (value $150).
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      Book a group of 6 or more and receive 2 printed 12-month Cleaning Management Workbooks free
                      (RRP $185 each).
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-border pt-10">
                <div className="text-center">
                  <p className="text-sm font-bold uppercase tracking-wide text-accent">Onsite group pricing</p>
                  <h3 className="mt-2 text-2xl font-bold text-card-foreground">Choose your group size</h3>
                  <p className="mt-3 text-sm text-muted-foreground">Minimum booking of 5 participants. Maximum group size: 25.</p>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
                  {[
                    { staff: "Up to 10 staff", price: "$1,100" },
                    { staff: "Up to 20 staff", price: "$1,900" },
                    { staff: "Up to 25 staff", price: "$2,200" },
                  ].map((option) => (
                    <div key={option.staff} className="rounded-xl border border-border bg-background p-6 text-center">
                      <p className="text-sm font-semibold text-card-foreground">{option.staff}</p>
                      <p className="mt-2 text-3xl font-bold tracking-tight text-foreground">{option.price}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-2 text-center text-sm text-muted-foreground">
                  <p>Payment plans are available, with the cost split over 4 weeks after a deposit.</p>
                  <p>
                    Prices apply within Greater Sydney. Training is available Australia-wide; additional travel costs
                    apply outside Greater Sydney.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Option 3 - WHS Compliance Bundle */}
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-bold uppercase tracking-wide text-accent">Option 3 - Complete centre system</p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The ECEC WHS Compliance Bundle
              </h2>
              <p className="mt-3 text-xl font-semibold text-accent">Three Pillars. One Complete System.</p>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Bring training, operational WHS systems and audit readiness together in one secure compliance workspace
                designed specifically for ECEC providers.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {[
                {
                  number: "Pillar 1",
                  title: "Certified WHS Training for Your Whole Team",
                  points: [
                    "Unlimited staff enrolments, with an individual certificate for every educator, room leader and coordinator who demonstrates competency",
                    "WHS Act obligations, hazard identification, incident response and the 2026 Biohazard Code of Practice",
                    "Self-paced modules accessible on any device without disrupting your roster",
                    "Training records stored and exportable for regulatory inspection",
                    "Feedback and explanations on every competency assignment for every new participant",
                    "Annual refresher training included so your team stays competent year after year",
                  ],
                },
                {
                  number: "Pillar 2",
                  title: "Operational WHS Systems Built for ECEC",
                  points: [
                    "Complete WHS policy and procedure suite aligned with the WHS Act 2011 and National Regulations",
                    "Pre-populated hazard register, risk assessment templates and incident reporting forms for common ECEC scenarios",
                    "Staff noticeboard resources, toolbox-talk guides and a WHS induction checklist",
                    "14 childcare-specific Safe Systems of Work templates",
                    "Digital Cleaning Management Workbook with verification templates",
                    "Documentation library updated as regulations and codes of practice change",
                  ],
                },
                {
                  number: "Pillar 3",
                  title: "Audit Readiness & NQS Rating Support",
                  points: [
                    "Pre-assessment WHS audit checklist mapped to NQS Quality Areas 2, 3 and 7",
                    "Evidence portfolio guidance so you know what to prepare before an authorised officer visits",
                    "Direct support from Lindsay during your rating and assessment period",
                    "Post-visit debrief and improvement planning following an improvement notice or rating below Meeting NQS",
                    "Community Compliance & Audit-Preparedness Hub",
                    "Dedicated account support manager who knows your centre",
                  ],
                },
              ].map((pillar) => (
                <article key={pillar.number} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-wide text-accent">{pillar.number}</p>
                  <h3 className="mt-3 text-xl font-bold text-card-foreground">{pillar.title}</h3>
                  <ul className="mt-6 flex flex-col gap-4">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-sm leading-relaxed text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  title: "Monthly compliance briefing",
                  text: "A concise update on regulatory changes, new codes of practice and ACECQA guidance relevant to your centre.",
                },
                {
                  title: "Priority email support",
                  text: "Direct access to Lindsay for compliance questions, with responses within one business day.",
                },
                {
                  title: "Staff induction WHS module",
                  text: "A standalone onboarding module so every new employee starts with a documented WHS foundation.",
                },
              ].map((extra) => (
                <div key={extra.title} className="rounded-xl border border-border bg-card p-6">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <h3 className="mt-4 font-semibold text-card-foreground">{extra.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{extra.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 rounded-2xl border border-accent/30 bg-accent/10 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-accent">Unlimited training seats</p>
                <h3 className="mt-2 text-balance text-2xl font-bold text-foreground sm:text-3xl">
                  Pay once. Enrol as you need. Manage compliance with confidence.
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Your organisation receives a secure online workspace, a manager self-service dashboard for enrolling
                  staff and tracking progress, and ongoing access to your training records and compliance library.
                </p>
                <ul className="mt-5 flex flex-col gap-3 text-sm text-foreground">
                  {[
                    "Lifetime Infection Control & Biohazard Management course licence from $1,200",
                    "One licence with unlimited certified training seats and competency assessment",
                    "Adding extra existing group centres to a licence incurs additional charges",
                    "Add and remove employees as your workforce changes",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-accent">Ongoing compliance management</p>
                <p className="mt-2 text-2xl font-bold text-card-foreground">$50 per centre, per week</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Includes the secure workspace, real-time manager dashboard, annual refresher certification, updated
                  compliance materials, documentation and dedicated account support.
                </p>
                <div className="mt-5 border-t border-border pt-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-accent">Price-lock guarantee</p>
                  <p className="mt-2 text-lg font-bold text-card-foreground">Your founding rate stays locked.</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Future entry prices may rise as the platform expands, but existing centres retain their agreed rate.
                  </p>
                </div>
                <Button asChild size="lg" className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="https://compliance.ececworkforcesolutions.au/whs-bundle">
                    View Full Bundle Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
              {[
                ["30-day guarantee", "Full refund if you are not satisfied within 30 days."],
                ["Free walkthrough", "A no-obligation 30-minute call focused on your centre's gaps."],
                ["Flexible commitment", "Six-month initial term, then month-to-month with cancellation available."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-xl border border-border bg-card p-5">
                  <p className="font-semibold text-card-foreground">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
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
