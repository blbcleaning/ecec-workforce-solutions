import { CheckCircle, Clock, Users, Shield } from "lucide-react"

const outcomes = [
  {
    icon: CheckCircle,
    text: "Educators no longer perform cleaning",
  },
  {
    icon: Clock,
    text: "Workload is reduced across the service",
  },
  {
    icon: Users,
    text: "Retention and workforce stability improve",
  },
  {
    icon: Shield,
    text: "Compliance becomes structured, measurable, and auditable",
  },
]

export function OutcomesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            What This Changes
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
          {outcomes.map((outcome) => (
            <div
              key={outcome.text}
              className="flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-5 py-3"
            >
              <outcome.icon className="h-5 w-5 text-accent shrink-0" />
              <span className="text-sm font-medium text-foreground">{outcome.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
