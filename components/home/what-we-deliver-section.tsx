import { Search, Settings, GraduationCap, Activity } from "lucide-react"

const deliverables = [
  {
    icon: Search,
    title: "Baseline assessment",
    description: "Risk, compliance, and workload analysis",
  },
  {
    icon: Settings,
    title: "CCS/NCCS system implementation",
    description: "Complete operating model deployment",
  },
  {
    icon: GraduationCap,
    title: "Workforce training and certification",
    description: "Accredited programs for all roles",
  },
  {
    icon: Activity,
    title: "Ongoing monitoring and verification",
    description: "Continuous compliance tracking",
  },
]

export function WhatWeDeliverSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            What We Deliver
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
