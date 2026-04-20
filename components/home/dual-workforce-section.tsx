import Image from "next/image"
import Link from "next/link"
import { Building2, BadgeCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DualWorkforceSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/images/two-workforces.png"
            alt="Two Workforces One Standard - An educator reading with children on the left, and a professional cleaner sanitizing on the right"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="mx-auto max-w-3xl text-center mt-12">
          <p className="text-lg text-muted-foreground">
            We serve both sides of the compliance equation.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
              <Building2 className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-card-foreground">
              For Centres
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We help childcare centres implement the operating system that separates roles, creates audit-ready documentation, and protects directors from personal liability.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-sm text-card-foreground">
                <BadgeCheck className="h-5 w-5 text-accent" />
                Role separation and governance
              </li>
              <li className="flex items-center gap-3 text-sm text-card-foreground">
                <BadgeCheck className="h-5 w-5 text-accent" />
                Compliance documentation systems
              </li>
              <li className="flex items-center gap-3 text-sm text-card-foreground">
                <BadgeCheck className="h-5 w-5 text-accent" />
                Educator awareness training
              </li>
            </ul>
            <div className="mt-6">
              <Button asChild variant="outline">
                <Link href="/for-centres">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent">
              <BadgeCheck className="h-7 w-7 text-accent-foreground" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-card-foreground">
              For Cleaning Companies
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We certify cleaning providers to operate within the NCCS standard—creating a qualified workforce that centres can trust for compliant infection prevention.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-sm text-card-foreground">
                <BadgeCheck className="h-5 w-5 text-accent" />
                NCCS Infection Prevention Specialist certification
              </li>
              <li className="flex items-center gap-3 text-sm text-card-foreground">
                <BadgeCheck className="h-5 w-5 text-accent" />
                Supervisor certification and governance
              </li>
              <li className="flex items-center gap-3 text-sm text-card-foreground">
                <BadgeCheck className="h-5 w-5 text-accent" />
                Company accreditation program
              </li>
            </ul>
            <div className="mt-6">
              <Button asChild variant="outline">
                <Link href="/for-cleaning-companies">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
