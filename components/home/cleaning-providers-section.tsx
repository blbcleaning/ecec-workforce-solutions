import Link from "next/link"
import { Sparkles, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  "Certified in biohazard management",
  "Trained in risk-based infection control cleaning",
  "Able to provide competency certification centres can rely on",
]

export function CleaningProvidersSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Childcare cleaning is no longer general commercial cleaning
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              For Cleaning Providers
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                <Sparkles className="h-7 w-7 text-accent-foreground" />
              </div>
            </div>

            <p className="mt-6 text-center text-lg text-card-foreground leading-relaxed">
              Under the 2026 Safe Work Australia biohazard code, cleaning a childcare centre now requires{" "}
              <span className="font-semibold text-foreground">biohazard management and infection control cleaning certification</span>.
            </p>

            <p className="mt-4 text-center text-muted-foreground leading-relaxed">
              Childcare cleaning can no longer be treated as general commercial cleaning. Centres now need cleaners who can provide competency certification - and we upskill your existing team to meet that standard.
            </p>

            <div className="mt-8">
              <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wide">
                This creates a workforce that is:
              </p>
              <ul className="mt-4 space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 justify-center">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-card-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                <Link href="/for-cleaning-companies">
                  For Cleaning Companies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Link
                href="/for-cleaning-companies"
                className="text-sm font-medium text-accent underline underline-offset-4 hover:text-accent/80"
              >
                Learn how we certify your cleaning workforce
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
