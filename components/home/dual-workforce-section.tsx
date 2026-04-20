import { Building2, BadgeCheck } from "lucide-react"

export function DualWorkforceSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Two Workforces. One Standard.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
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
          </div>
        </div>
      </div>
    </section>
  )
}
