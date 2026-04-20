import { CheckCircle, Clock, Users, Shield } from "lucide-react"

const outcomes = [
  {
    icon: CheckCircle,
    title: "Remove cleaning from educators",
    description: "Educators return to their core role—educating children, not managing biohazards.",
  },
  {
    icon: Clock,
    title: "Reduce workload by 16–24 hours per week",
    description: "Reclaim time currently lost to cleaning tasks that should never have been assigned to educators.",
  },
  {
    icon: Users,
    title: "Improve retention and workforce stability",
    description: "When educators do what they trained for, they stay. Reduce burnout and turnover.",
  },
  {
    icon: Shield,
    title: "Achieve audit-ready, defensible compliance",
    description: "Documentation, role separation, and governance that withstands regulatory scrutiny.",
  },
]

export function OutcomesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            What Changes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            This shift requires a new operating model—one that separates roles, reduces educator workload, and delivers measurable, audit-ready compliance.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <div
              key={outcome.title}
              className="relative rounded-xl border border-accent/20 bg-accent/5 p-6 transition-all hover:border-accent/40 hover:bg-accent/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                <outcome.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {outcome.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
