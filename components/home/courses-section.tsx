import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, ShieldCheck, ArrowRight, CheckCircle } from "lucide-react"

const outcomes = [
  "Certified infection control competency",
  "Biohazard management to the 2026 code",
  "Evidenced training records per staff member",
  "Consistent practice across every room",
]

export function CoursesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <GraduationCap className="h-4 w-4" />
            Our Courses
          </div>
          <h2 className="mt-6 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Certified Infection Control &amp; Biohazard Management
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Required under Safe Work Australia&apos;s 2026 biohazard code. We train and certify your team so
            competency is documented and defensible - not just intended.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card p-6 sm:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
              <ShieldCheck className="h-6 w-6 text-accent" />
            </div>
            <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
              Required under the 2026 Biohazard Code
            </span>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {outcomes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
              <Link href="/courses">
                Explore Our Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8">
              <Link href="/training/infection-control">View Course &amp; Enrol</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
