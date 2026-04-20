import { UserX, AlertTriangle, FileQuestion, ShieldX } from "lucide-react"

const problems = [
  {
    icon: UserX,
    text: "Educators are performing non-core duties",
  },
  {
    icon: AlertTriangle,
    text: "Cleaning is inconsistent and not risk-based",
  },
  {
    icon: FileQuestion,
    text: "Compliance is assumed, not verified",
  },
  {
    icon: ShieldX,
    text: "Systems are not defensible under audit",
  },
]

export function ProblemSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            The Problem
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Childcare centres are operating without a defined workforce model.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-lg border border-destructive/20 bg-destructive/5 p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                <problem.icon className="h-5 w-5 text-destructive" />
              </div>
              <p className="text-base font-medium text-foreground leading-snug">
                {problem.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-muted-foreground">
          This creates pressure on staff, increases risk, and impacts quality of care.
        </p>
      </div>
    </section>
  )
}
