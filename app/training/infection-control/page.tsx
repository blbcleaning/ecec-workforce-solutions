import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { EnrolButton } from "@/components/training/enrol-button"
import { CheckCircle, Users, BookOpen, Clock, CheckCircle2, ArrowRight } from "lucide-react"

// Render at request time so live Stripe course prices are always current.
export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Educator Infection Control & Biohazard Management (15 modules)",
  description: "Practical, educator-facing procedures across 15 modules to lift standards and reduce biohazard risk in early childhood education and care settings.",
}

const whoItsFor = [
  "Educators",
  "Room leaders",
  "Centre teams",
  "Directors implementing consistent practice",
]

const outcomes = [
  "Consistent infection control routines",
  "Safer nappy change workflow",
  "Clean vs contaminated zoning",
  "Waste stream controls",
  "Safe chemical handling basics",
  "Outbreak response readiness",
]

const whatsIncluded = [
  { icon: BookOpen, text: "15 modules" },
  { icon: Clock, text: "Self-paced" },
  { icon: Users, text: "WHS Compliance built for the realities of ECEC" },
]

const modules = [
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

const pricing = [
  { type: "Individual enrolment", detail: "Up to 5 people", price: "$140 per person" },
  { type: "Group booking", detail: "6–10 people", price: "$100 per person" },
  { type: "Group booking", detail: "11+ people", price: "$80 per person" },
  { type: "Groups of 15+", detail: "Larger teams", price: "Contact us for pricing" },
]

const WHS_BUNDLE_URL = "https://compliance.ececworkforcesolutions.au/whs-bundle"
const FREE_WHS_URL = "https://compliance.ececworkforcesolutions.au/free"

const onsiteTrainingFeatures = [
  "3-hour certified onsite group session",
  "Available after hours - weeknights or weekends",
  "Fully catered: lunch or dinner included in your booking price",
  "Resource-packed and delivered at your centre",
]

const certificationRequirements = [
  "Completion of all quiz modules",
  "Submission of all assignments",
  "All assignments marked competent before certificates are issued",
]

const bundleInclusions = [
  "Unlimited training seats",
  "Dedicated online compliance portal access",
  "SSOW documents",
  "Digital cleaning management workbook",
]

const faqs = [
  {
    question: "How long does it take?",
    answer: "The course is self-paced, allowing you to complete it on your own schedule. Most learners complete all 15 modules within 4-6 hours of total study time, though you can spread this across days or weeks as needed.",
  },
  {
    question: "Who is it for?",
    answer: "This course is designed for anyone working in early childhood education and care settings who needs practical infection control and biohazard management knowledge. This includes educators, room leaders, centre teams, and directors implementing consistent practice across their service.",
  },
  {
    question: "How do group bookings work?",
    answer: "Group rates apply automatically based on your team size: $140 per person for up to 5, $100 per person for 6–10, and $80 per person for 11 or more. For teams of 15+, contact us for tailored pricing. Each team member receives individual access so everyone can complete the course at their own pace.",
  },
  {
    question: "What access do I get after enrolling?",
    answer: "After enrolling, you get immediate access to all 15 modules. You can work through the content at your own pace, revisit modules as needed, and access the materials for the duration of your enrolment period.",
  },
]

export default async function InfectionControlCoursePage({
  searchParams,
}: {
  searchParams: Promise<{ checkout?: string }>
}) {
  const { checkout } = await searchParams

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {checkout === "success" ? (
          <div className="bg-accent/10 px-4 py-3 text-center text-sm font-medium text-accent">
            <CheckCircle2 className="mr-2 inline h-4 w-4" />
            Enrolment successful - thank you. Check your email for course access details.
          </div>
        ) : null}
        {checkout === "cancelled" ? (
          <div className="bg-muted px-4 py-3 text-center text-sm font-medium text-muted-foreground">
            Enrolment cancelled - your card was not charged.
          </div>
        ) : null}
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-20 sm:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Training Badge - Top Left */}
          <div className="absolute top-6 left-4 sm:left-6 lg:left-8 z-10 bg-accent px-4 py-2 sm:px-6 sm:py-3">
            <span className="text-sm sm:text-base lg:text-lg font-bold tracking-wide text-accent-foreground uppercase">
              Training
            </span>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                Infection Control & Biohazard Management for ECEC Educators
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-primary-foreground/90 font-medium">
                Practical, educator-facing procedures across 15 modules to lift standards and reduce biohazard risk.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <EnrolButton />
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 px-8">
                  <Link href="#pricing">See group pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Options Section */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Choose Your Option
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Four ways to complete your Infection Control &amp; Biohazard Management training.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {/* Option 1 */}
              <div className="flex flex-col rounded-xl border border-border bg-card p-8 shadow-sm">
                <span className="text-sm font-semibold uppercase tracking-wide text-accent">Option 1</span>
                <h3 className="mt-2 text-xl font-bold text-card-foreground">Onsite Group Training</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Instructor-led, 3-hour certified group session delivered at your centre - an in-person
                  alternative to the online course.
                </p>
                <div className="mt-5 flex-1 rounded-lg border border-accent/30 bg-accent/10 p-5">
                  <ul className="flex flex-col gap-2.5">
                    {onsiteTrainingFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-sm font-medium text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 border-t border-accent/20 pt-3 text-sm font-semibold text-foreground">
                    From $1,500 (up to 10) - up to $2,600 (20 participants)
                  </p>
                </div>
                <div className="mt-6">
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                    <Link href="/contact">
                      Contact us to book
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              {/* Option 2 */}
              <div className="flex flex-col rounded-xl border border-border bg-card p-8 shadow-sm">
                <span className="text-sm font-semibold uppercase tracking-wide text-accent">Option 2</span>
                <h3 className="mt-2 text-xl font-bold text-card-foreground">SSOW Building Workshop</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Build the documents that support daily practice while your team completes certified, onsite
                  Infection Control &amp; Biohazard Management training.
                </p>
                <div className="mt-5 flex-1 rounded-lg border border-accent/30 bg-accent/10 p-5">
                  <ul className="flex flex-col gap-2.5">
                    {[
                      "4-hour onsite, practice-based workshop",
                      "SSOW, infection control and implementation training",
                      "Templates valued at $600 included",
                      "Cleaning Management Workbook valued at $200 included",
                      "Meets WHS team consultation requirements",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-sm font-medium text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 border-t border-accent/20 pt-3 text-sm font-semibold text-foreground">
                    $1,500 per centre, for up to 20 staff
                  </p>
                </div>
                <div className="mt-6">
                  <Button asChild size="lg" className="bg-accent px-8 text-accent-foreground hover:bg-accent/90">
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

              {/* Option 3 */}
              <div className="flex flex-col rounded-xl border border-border bg-card p-8 shadow-sm">
                <span className="text-sm font-semibold uppercase tracking-wide text-accent">Option 3</span>
                <h3 className="mt-2 text-xl font-bold text-card-foreground">Training &amp; Compliance Bundle</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Combine this certified training with a complete WHS compliance package for your service.
                  View the full bundle inclusions and pricing on our compliance portal.
                </p>
                <div className="mt-5 flex-1 rounded-lg border border-accent/30 bg-accent/10 p-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-foreground">Includes</p>
                  <ul className="mt-3 flex flex-col gap-2.5">
                    {bundleInclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-sm font-medium text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                    <a href={WHS_BUNDLE_URL}>
                      View the bundle
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Option 4 */}
              <div className="flex flex-col rounded-xl border border-accent/50 bg-card p-8 shadow-sm">
                <span className="text-sm font-semibold uppercase tracking-wide text-accent">Option 4</span>
                <h3 className="mt-2 text-xl font-bold text-card-foreground">Online Self-Paced Training</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Complete all 15 modules at your own pace. Certification requires completion of every quiz module
                  and submission of all assignments, marked competent under our Competency-Based Assessment model.
                </p>
                <div className="mt-5 flex-1 rounded-lg border border-accent/30 bg-accent/10 p-5">
                  <p className="text-sm font-semibold text-foreground">Full course details continue below.</p>
                  <a
                    href="#online-self-paced-details"
                    className="mt-3 inline-flex items-center text-sm font-semibold text-accent underline-offset-4 hover:underline"
                  >
                    See who it&apos;s for and what you get
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
                <div className="mt-6">
                  <EnrolButton />
                </div>
              </div>
            </div>

            {/* Free WHS Session Callout */}
            <div className="mt-8 mx-auto max-w-4xl rounded-xl border border-accent/40 bg-accent/10 p-6 sm:p-8">
              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                    Free session
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-foreground text-balance">
                    Free 1-Hour WHS Regulations for Early Childhood Education
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">
                    For approved service providers, owners, directors and nominated supervisors.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="w-full shrink-0 bg-accent text-accent-foreground hover:bg-accent/90 px-8 md:w-auto"
                >
                  <a href={FREE_WHS_URL}>
                    Book your free session
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Online Self-Paced Training Details */}
        <section id="online-self-paced-details" className="scroll-mt-24 border-t border-accent/30 bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wide text-accent">
                Online Self-Paced Training
              </span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Who It&apos;s For &amp; What You Get
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Everything below applies to the online self-paced course - who it&apos;s built for and what&apos;s
                included when you enrol.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
              {whoItsFor.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-5 py-3"
                >
                  <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                What You&apos;ll Learn
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {outcomes.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-sm"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="font-medium text-card-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                What&apos;s Included
              </h2>
            </div>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:justify-center sm:gap-12">
              {whatsIncluded.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
                    <item.icon className="h-7 w-7 text-accent" />
                  </div>
                  <span className="text-lg font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Course Modules
              </h2>
            </div>
            <div className="mt-10 mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {modules.map((module, index) => (
                  <AccordionItem key={index} value={`module-${index}`} className="border-border">
                    <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-accent hover:no-underline">
                      {module}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      Comprehensive coverage of {module.toLowerCase().replace(/^module \d+ - /, "")} with practical applications for ECEC settings.
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Certification & Assessment Section */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Certification &amp; Assessment
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                To earn certification, learners must complete the following:
              </p>
            </div>
            <div className="mt-10 mx-auto max-w-3xl flex flex-col gap-4">
              {certificationRequirements.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-5 shadow-sm"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="font-medium text-card-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 mx-auto max-w-3xl rounded-xl border border-accent/30 bg-accent/10 p-6 sm:p-8">
              <p className="leading-relaxed text-foreground">
                We move beyond simple pass/fail metrics. Our assessment suite utilises a high-standard
                Competency-Based Assessment (CBA) model, delivering the &ldquo;audit-ready evidence&rdquo;
                required by ACECQA and WHS regulators. All assignments must be marked competent before
                certificates are issued.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="scroll-mt-24 py-16 sm:py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
                Pricing
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Flexible options for individuals and teams
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {pricing.map((item) => (
                <div
                  key={`${item.type}-${item.detail}`}
                  className="flex flex-col rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 text-center"
                >
                  <h3 className="text-lg font-semibold text-primary-foreground">{item.type}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/70">{item.detail}</p>
                  <p className="mt-3 text-2xl font-bold text-accent">{item.price}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-primary-foreground/70">
              Individual and group rates available. For teams of 15+, contact us for tailored pricing.
            </p>
            <div className="mt-8 flex justify-center">
              <EnrolButton variant="secondary" />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="mt-10">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border-border">
                    <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-accent hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Ready to Elevate Your Infection Control Standards?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join educators across Australia who are building safer, more compliant ECEC environments.
              </p>
              <div className="mt-8">
                <EnrolButton />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
