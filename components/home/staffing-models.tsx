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
    title: "Model C: Hybrid",
    description: "Your centre employs its own daytime cleaner and engages an outsourced cleaning company for after-hours cleaning. ECEC Workforce Solutions trains and certifies both your internal staff and external contractors — so your centre has a fully certified NCCS infection prevention workforce across all shifts. Your centre retains governance oversight and compliance responsibility.",
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
            We train and certify your infection prevention workforce regardless of which model you choose.
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
      </div>
    </section>
  )
}
