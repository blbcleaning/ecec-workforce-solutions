import { Building2, Users, GitMerge } from "lucide-react"

const models = [
  {
    icon: Building2,
    title: "Model A: Managed Service | Strategic Risk & Training Mitigation",
    description: "Under the Managed Service model, your centre transfers the operational and administrative burden of high-risk biohazard management to an NCCS-accredited partner. This eliminates the statutory requirement to provide formal infection control training to every new educator—your partner manages all onboarding and competency assessments. All mandatory reporting, chemical safety data sheets, and verification logs required under the SWA March 2026 Code are managed by the service provider, removing the compliance paperwork from your Director's desk. By deploying a dedicated, NCCS-supervised workforce, you demonstrate a 'Higher-Order Control' that exceeds regulator expectations and provides a defensible compliance framework protecting your leadership from tripled fines and increased enforcement powers.",
  },
  {
    icon: Users,
    title: "Model B: Internal Specialized Workforce",
    description: "Your centre recruits and employs its own cleaning and supervisory personnel directly. ECEC Workforce Solutions provides the specialized NCCS training and certification required to transform these employees into a high-performance team of Infection Prevention Specialists. Strict Role Separation: Cleaning staff cannot be educators—the NCCS framework requires a dedicated workforce to eliminate cross-contamination risks and ensure safety-critical tasks are never sidelined by classroom ratios. Direct PCBU Oversight: Your leadership retains full operational and statutory compliance responsibility. Internalized Expertise: You build a permanent, in-house culture of high-level WHS compliance that meets the SWA March 2026 Code. Educator Retention: By removing the biohazard management burden from teaching staff, you restore their professional focus. Compliance Warning: Using educators to perform high-risk cleaning functions breaks the NCCS safety system and exposes the centre to significant regulatory liability.",
  },
  {
    icon: GitMerge,
    title: "Model C: Hybrid Compliance Framework",
    description: "Your centre utilizes a dual-workforce strategy: employing a dedicated internal daytime cleaner while engaging an accredited external partner for after-hours operations. ECEC Workforce Solutions trains and certifies both internal personnel and external contractors, creating a unified, NCCS-certified Infection Prevention workforce across all shifts. Strict Role Separation: Cleaning personnel must be dedicated specialists and cannot be Educators—this separation is a functional requirement of the NCCS to meet high-risk biohazard standards. Unified Safety Standards: Both in-house staff and contract cleaners operate under a single, cohesive NCCS framework, eliminating compliance gaps between day and night shifts. Operational Flexibility: This model provides the high-visibility protection of an on-site day cleaner with the specialized, deep-cleaning capabilities of an outsourced night crew, all while maintaining full governance oversight. Regulatory Resilience: By certifying your entire cleaning chain, you fulfill your PCBU obligations under the SWA March 2026 Code.",
  },
]

export function StaffingModels() {
  return (
    <section className="bg-muted py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Staffing Models — Choose Your Model
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            As the ECEC risk classification shifts to a high-risk biohazardous rating, the requirements for external cleaning providers have changed fundamentally. A general commercial cleaning approach is no longer legally sufficient to meet your PCBU obligations.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            As part of our workforce solution, we bridge this gap by aligning your facility&apos;s maintenance with the SWA March 2026 Code. We will work directly with your preferred service provider to transition their operations to NCCS standards, or actively help you source a specialized cleaning company willing to incorporate the National Childcare Cleaning Standard as their baseline practice. By ensuring your external partners are NCCS-certified, we guarantee that your entire supply chain is equipped to manage safety-critical functions, providing you with a unified, defensible compliance framework that stands up to the highest level of regulatory scrutiny.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {models.map((model) => (
            <div
              key={model.title}
              className="group rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-accent/50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-accent/20">
                <model.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-card-foreground">{model.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{model.description}</p>
            </div>
          ))}
        </div>

        {/* NCCS Provider Guarantee */}
        <div className="mt-16 rounded-xl border border-accent/30 bg-accent/5 p-8">
          <h3 className="text-xl font-bold text-foreground">The NCCS Provider Guarantee</h3>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <h4 className="font-semibold text-foreground">Provider Integration</h4>
              <p className="mt-2 text-muted-foreground">We audit and upskill your current contractors to ensure they meet the new high-risk biohazard benchmarks.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Strategic Sourcing</h4>
              <p className="mt-2 text-muted-foreground">We connect you with a network of providers who recognize childcare as a specialized, high-stakes environment rather than a standard commercial office.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Standardized Excellence</h4>
              <p className="mt-2 text-muted-foreground">Regardless of who performs the work, the NCCS ensures the methodology, chemicals, and verification systems remain consistent across your centre.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
