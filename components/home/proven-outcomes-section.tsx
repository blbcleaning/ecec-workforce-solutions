import { Clock, TrendingDown, UserCheck, Shield, CheckCircle } from "lucide-react"

const outcomes = [
  {
    icon: Clock,
    stat: "7–9 hours",
    text: "per week returned to educators",
  },
  {
    icon: TrendingDown,
    stat: "Reduced",
    text: "workload and improved retention",
  },
  {
    icon: UserCheck,
    stat: "Removal",
    text: "of cleaning from educator roles",
  },
  {
    icon: Shield,
    stat: "Audit-ready",
    text: "defensible systems of work",
  },
]

export function ProvenOutcomesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Proven Outcomes
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <div
              key={outcome.text}
              className="rounded-xl border border-accent/30 bg-accent/10 p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                <outcome.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <p className="mt-4 text-2xl font-bold text-foreground">
                {outcome.stat}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {outcome.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-6 py-3">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary">
              Operate a compliant, defensible, audit-ready system of work—every day
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
