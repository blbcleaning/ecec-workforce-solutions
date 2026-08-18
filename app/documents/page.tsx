import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import {
  FileCheck,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Droplets,
  Biohazard,
  Monitor,
  Printer,
  BookOpen,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Compliance Documents - SSOW & Cleaning Management Workbook",
  description:
    "Custom-built Safe Systems of Work (SSOW) and the Cleaning Management Workbook for early childhood centres. Available digital-only or professionally printed and bound, customised to reflect your centre.",
}

const ssowCategories = [
  {
    icon: Sparkles,
    title: "Routine Cleaning",
    count: "6 SSOW available",
    items: [
      {
        name: "High-Touch Surface Disinfection",
        description:
          "How and how often to disinfect door handles, light switches, rails, taps and shared equipment to cut the touch-points that spread germs fastest.",
      },
      {
        name: "Toilet & Children's Bathroom Clean and Disinfect",
        description:
          "The two-step clean-then-disinfect routine for toilets, bowls, flush buttons, basins and bathroom surfaces, your highest-risk area for spreading illness.",
      },
      {
        name: "Toy Cleaning & Sanitation",
        description:
          "Safe cleaning and sanitising of toys, including managing mouthed toys, so shared play items don't become a source of cross-infection.",
      },
      {
        name: "Sleep Surfaces - Cot, Mattress & Sleep-Mat Sanitation",
        description:
          "A safe routine for cleaning and sanitising cots, mattresses and sleep mats between children to protect rest areas from cross-infection.",
      },
      {
        name: "Kitchen & Food-Prep Surface Cleaning",
        description:
          "Keeps food-contact surfaces safe through clean/contaminated zoning and colour-coded equipment, supporting both WHS and food-safety compliance.",
      },
      {
        name: "Floor Cleaning & Mopping",
        description:
          "A safe sweep/vacuum and two-bucket mop method using colour-coded, zone-separated equipment to reduce slips and stop cross-contamination between rooms.",
      },
    ],
  },
  {
    icon: Droplets,
    title: "Supporting Hygiene",
    count: "3 SSOW available",
    items: [
      {
        name: "Chemical Mixing, Dilution & Safe Use",
        description:
          "Correct dilution ratios, no unsafe mixing, proper labelling and storage, protecting staff and children and underpinning every other procedure.",
      },
      {
        name: "Linen & Laundry Handling",
        description:
          "How soiled and clean linen is separated, washed and stored to stop cross-contamination from bedding, cloths and towels.",
      },
      {
        name: "Cleaning Equipment Hygiene",
        description:
          "How mops, cloths, buckets and colour-coded gear are cleaned, dried and stored so the tools you clean with never become the contamination source.",
      },
    ],
  },
  {
    icon: Biohazard,
    title: "Biohazard & Outbreak",
    count: "5 SSOW available",
    items: [
      {
        name: "Blood & Bodily Fluid Spill Response",
        description:
          "The safe, step-by-step method for isolating, cleaning and disinfecting blood, vomit and other bodily-fluid spills to contain exposure fast.",
      },
      {
        name: "Nappy Change & Toileting Biohazard Control",
        description:
          "Nappy change and toileting handled as a controlled biohazard task, protecting children and staff at your most frequent point of exposure.",
      },
      {
        name: "Outbreak Response & Enhanced Cleaning",
        description:
          "Escalated cleaning and disinfection during a gastro or respiratory outbreak, with clear triggers for when to step up and step down.",
      },
      {
        name: "Waste Stream Handling & Disposal",
        description:
          "How contaminated waste is segregated, bagged, stored and disposed of so hazardous material never re-enters shared spaces.",
      },
      {
        name: "Post-Outbreak Terminal Clean",
        description:
          "The full reset clean that returns a room to normal use after an outbreak, with verification the space is safe for children again.",
      },
    ],
  },
]

const formats = [
  {
    icon: Monitor,
    title: "Digital only",
    description:
      "Delivered as ready-to-use digital files your team can access, share and print on demand - ideal for centres managing documentation electronically.",
  },
  {
    icon: Printer,
    title: "Professionally printed & bound",
    description:
      "Have your documents professionally printed and bound as durable, floor-ready reference books - built to survive daily use in real cleaning environments.",
  },
]

const workbookIncludes = [
  "Routine cleaning records",
  "Equipment records",
  "Linen records",
  "Chemicals and stock",
  "After-hours contractor scope and review",
  "Biohazard and outbreak response",
  "Weekly supervisor verification",
  "Corrective actions log",
]

export default function DocumentsPage() {
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
              Documents
            </span>
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent">
                <FileCheck className="h-4 w-4" />
                Compliance Documentation
              </div>
              <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                Compliance documents built for early childhood centres.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Two document products - custom Safe Systems of Work and the Cleaning Management Workbook - that turn
                your cleaning and infection control into defensible, repeatable, evidenced practice.
              </p>
            </div>
          </div>
        </section>

        {/* SSOW - What it is */}
        <section id="ssow" className="scroll-mt-24 py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
              <FileCheck className="h-4 w-4" />
              Safe Systems of Work
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              What is a Safe System of Work?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A Safe System of Work (SSOW) is a documented, step-by-step procedure for carrying out a task safely -
              setting out the hazards, the controls, the PPE, the correct method and how the work is recorded.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              For an early childhood centre, an SSOW turns{" "}
              <span className="font-medium text-foreground">&quot;we clean the bathrooms&quot;</span> into a defensible,
              repeatable process that any staff member can follow the same way, every time, and prove they did.
            </p>
          </div>
        </section>

        {/* SSOW Library */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">The SSOW Library</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Procedures grouped by risk area, each customised to reflect your centre&apos;s real spaces and hazards.
              </p>
            </div>

            <div className="mt-12 space-y-12">
              {ssowCategories.map((category) => (
                <div key={category.title}>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-border pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                        <category.icon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                    </div>
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                      {category.count}
                    </span>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {category.items.map((item) => (
                      <div key={item.name} className="rounded-xl border border-border bg-card p-5">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                          <h4 className="font-semibold text-card-foreground leading-snug">{item.name}</h4>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formats */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Choose how you receive them
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Available in digital-only format or professionally printed and bound. Either way, we customise every
                document to reflect your centre.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {formats.map((format) => (
                <div key={format.title} className="rounded-xl border border-border bg-card p-6 sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <format.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-card-foreground">{format.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{format.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cleaning Management Workbook */}
        <section id="workbook" className="scroll-mt-24 py-16 sm:py-20 bg-muted">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
              <BookOpen className="h-4 w-4" />
              Cleaning Management Workbook
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              One printable book per room
            </h2>
            <p className="mt-4 text-lg font-medium text-foreground">
              A single point of truth for cleaning, infection control, biohazards, and outbreak response in ECEC.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Built for shared use by centre staff and after-hours cleaning contractors. It standardises expectations,
              records completion and verification, and keeps evidence in one place{" "}
              <span className="text-foreground">(standalone or integrated with the SSOW Pack)</span>. Designed as 1 book
              per room, covering a 12 month period.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {workbookIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-medium text-foreground">Setup guide and print plan included.</p>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 sm:py-24 bg-background">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Get documents customised to your centre.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Tell us about your rooms, spaces and hazards and we&apos;ll scope the right combination of SSOW and
              Workbook - digital or professionally printed and bound.
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
