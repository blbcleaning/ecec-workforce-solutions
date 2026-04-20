import { Settings, CheckCircle } from "lucide-react"

export function SolutionSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            The Solution
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A Compliance-Based Operating System
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 shadow-sm">
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <Settings className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            
            <p className="mt-6 text-center text-lg text-card-foreground leading-relaxed">
              We implement a structured model that separates roles, defines responsibilities, and embeds compliance into daily operations.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <div className="flex items-center gap-3 rounded-lg bg-muted px-4 py-3">
                <CheckCircle className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">This is not training alone.</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-muted px-4 py-3">
                <CheckCircle className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">This is not consulting alone.</span>
              </div>
            </div>

            <p className="mt-8 text-center text-xl font-semibold text-primary">
              This is a complete system—implemented, verified, and sustained.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
