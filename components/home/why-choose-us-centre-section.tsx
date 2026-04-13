import { CheckCircle } from "lucide-react"

export function WhyChooseUsSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Why Choose NCCS?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Australia&apos;s first evidence-based governance framework for childcare infection prevention
          </p>
        </div>

        <div className="mt-12 rounded-xl border border-accent/30 bg-accent/10 p-8">
          <p className="text-lg leading-relaxed text-foreground">
            The NCCS is built on rigorous clinical evidence and engineered to transform your centre from general hygiene practices into a high-risk biohazard compliance operation. It directly satisfies PCBU due diligence obligations, provides defensible governance separation, and delivers the documented competency frameworks that regulators now expect.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-foreground flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                Evidence-Based Standard
              </h3>
              <p className="mt-2 text-muted-foreground">Supported by five DOI-registered research papers and featured in The Sector, Australia&apos;s leading ECEC publication.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                Governance-Aligned
              </h3>
              <p className="mt-2 text-muted-foreground">Designed to satisfy NQF Quality Area requirements while meeting WHS PCBU statutory obligations.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                Role Separation
              </h3>
              <p className="mt-2 text-muted-foreground">Built on strict governance separation: cleaners handle high-risk biohazard work; educators teach.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                Defensible Compliance
              </h3>
              <p className="mt-2 text-muted-foreground">Provides the documented evidence trail required to defend your centre against regulatory scrutiny and enforcement action.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
