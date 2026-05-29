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
import { CheckCircle, Users, BookOpen, Clock } from "lucide-react"

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
  { icon: Users, text: "Designed for ECEC context" },
]

const modules = [
  "Module 1 — Overview & foundations",
  "Module 2 — Understanding Biological Hazards in ECEC",
  "Module 3 — Infection Control Cleaning: Principles and Procedures",
  "Module 4 — Risk assessment & controls (WHS lens)",
  "Module 5 — PPE selection, use, and disposal",
  "Module 6 — Air Quality, Ventilation, and Environmental Controls",
  "Module 7 — Laundry and linen handling as infection control",
  "Module 8 — Safe Handling of Cleaning Chemicals",
  "Module 9 — Cleaning schedules, checklists, and recordkeeping",
  "Module 10 — Managing incidents, exposures, and notifications",
  "Module 11 — High-touch surfaces and shared equipment controls",
  "Module 12 — Clean and Contaminated Zones",
  "Module 13 — Nappy Changing Procedure as a Biohazard Control",
  "Module 14 — Waste Stream Management",
  "Module 15 — Post-Outbreak Terminal Clean and Return to Normal",
]

const pricing = [
  { type: "Individual enrolment", price: "$100 USD" },
  { type: "Group booking (5)", price: "$70 USD per person" },
  { type: "Group booking (8)", price: "$62.50 USD per person" },
  { type: "Group booking (10)", price: "$60 USD per person" },
  { type: "Group booking (20+)", price: "$45 USD per person" },
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
    answer: "Select your group size at checkout (5, 8, 10, or 20+ participants). You will receive individual access for each team member, allowing everyone to complete the course at their own pace while you track overall progress.",
  },
  {
    question: "What access do I get after enrolling?",
    answer: "After enrolling, you get immediate access to all 15 modules. You can work through the content at your own pace, revisit modules as needed, and access the materials for the duration of your enrolment period.",
  },
]

export default function InfectionControlCoursePage() {
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

        {/* Who It's For Section */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Who It&apos;s For
              </h2>
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
                      Comprehensive coverage of {module.toLowerCase().replace(/^module \d+ — /, "")} with practical applications for ECEC settings.
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 sm:py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
                Pricing
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Flexible options for individuals and teams
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {pricing.map((item) => (
                <div
                  key={item.type}
                  className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 text-center"
                >
                  <h3 className="text-lg font-semibold text-primary-foreground">{item.type}</h3>
                  <p className="mt-2 text-2xl font-bold text-accent">{item.price}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-primary-foreground/70">
              Choose your group size at checkout (5, 8, 10, 20+).
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
