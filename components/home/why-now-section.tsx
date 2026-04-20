import { Users, TrendingDown, ClipboardCheck } from "lucide-react"

const pressures = [
  {
    icon: Users,
    text: "Workforce shortages are increasing",
  },
  {
    icon: TrendingDown,
    text: "Educator retention is declining",
  },
  {
    icon: ClipboardCheck,
    text: "Compliance expectations are tightening",
  },
]

export function WhyNowSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Why This Matters Now
          </h2>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {pressures.map((pressure) => (
            <div
              key={pressure.text}
              className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-sm"
            >
              <pressure.icon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm font-medium text-card-foreground">{pressure.text}</span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          Centres relying on educators to perform cleaning are under increasing pressure. This is no longer an operational preference—it requires a structured solution.
        </p>
      </div>
    </section>
  )
}
