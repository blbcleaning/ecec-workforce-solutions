import { Building2, Users, GitMerge } from "lucide-react"

const models = [
  {
    icon: Building2,
    title: "Model A: Managed Service",
    description: "Your centre engages a commercial cleaning company to manage all infection prevention operations — day cleans, after-hours cleans, NCCS-certified Infection Prevention Specialists, and on-site NCCS Supervisors. The cleaning company delivers and manages the full operational program. Your centre retains governance oversight and ultimate compliance responsibility. ECEC Workforce Solutions trains and certifies all personnel to NCCS standards.",
  },
  {
    icon: Users,
    title: "Model B: Internal Team",
    description: "Your centre hires its own cleaners and supervisors directly. ECEC Workforce Solutions provides NCCS training and certification for your team — the outcome is a fully internal team of NCCS-certified Infection Prevention Specialists and Supervisors. Your centre holds full operational and compliance responsibility.",
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
