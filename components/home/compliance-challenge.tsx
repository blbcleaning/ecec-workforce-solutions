import { AlertTriangle, DollarSign, User, Scale } from "lucide-react"

export function ComplianceChallenge() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            The Compliance Challenge
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Childcare centres must now interpret and implement overlapping regulatory obligations across the National Quality Framework (NQF) and Work Health and Safety (WHS) legislation simultaneously — and demonstrate compliance with both.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Financial Penalties Card */}
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                <DollarSign className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Financial Penalties</h3>
            </div>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Fines and penalties across ECEC, WHS, and worker registration obligations have now <strong className="text-foreground">tripled</strong>.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                  <span>Up to <strong className="text-foreground">$34,200</strong> for failure to comply with National Early Childhood Worker Register requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                  <span>WHS breaches carry penalties up to <strong className="text-foreground">$50,000</strong> for individuals</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                  <span>Potential loss of service approval, suspension of CCS, and cancellation of operating licences</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Personal Liability Card */}
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                <User className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">Personal Liability</h3>
            </div>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Under WHS legislation, Directors, Approved Providers, and Nominated Supervisors are classified as <strong className="text-foreground">Officers of a PCBU</strong>. This means they carry personal, non-delegable due diligence obligations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Scale className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span><strong className="text-foreground">Due diligence duty (WHS Act s.27):</strong> Officers must take reasonable steps to acquire knowledge of WHS matters</span>
                </li>
                <li className="flex items-start gap-3">
                  <Scale className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span><strong className="text-foreground">Criminal prosecution:</strong> Personal fines exceeding $600,000 and up to 5 years imprisonment</span>
                </li>
                <li className="flex items-start gap-3">
                  <Scale className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span><strong className="text-foreground">Cannot be delegated:</strong> Personal liability cannot be transferred, outsourced, or insured away</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-accent/30 bg-accent/10 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">The 2026 Enforcement Landscape Has Changed</h3>
          <div className="space-y-4 text-muted-foreground">
            <p><strong className="text-foreground">Paramountcy Principle</strong> — child safety now overrides cost in every operational decision</p>
            <p><strong className="text-foreground">Biological Hazards Code (March 2026)</strong> — explicitly covers childcare; classifies biological hazards as high risk</p>
            <p><strong className="text-foreground">Worker Register</strong> — every person entering a centre must be registered, including cleaners</p>
            <p><strong className="text-foreground">Fines tripled</strong> — new penalty framework in force</p>
            <p><strong className="text-foreground">160,000 additional site checks</strong> — unannounced inspections commenced</p>
            <p><strong className="text-foreground">Personal liability</strong> — insurance protections removed; directors personally exposed</p>
          </div>
          <p className="mt-6 text-foreground leading-relaxed">
            Combined, these changes significantly increase expectations for PCBUs under WHS. Infection-control cleaning in childcare now carries the same risk classification and safety expectations as working at heights in construction — structured controls, documented competency, verified supervision, and auditable compliance are not optional.
          </p>
          <p className="mt-4 font-semibold text-foreground">
            Centres must now prove compliance — not just claim it.
          </p>
        </div>
      </div>
    </section>
  )
}
