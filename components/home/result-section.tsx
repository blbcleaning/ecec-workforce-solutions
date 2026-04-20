import { Award, Heart } from "lucide-react"

export function ResultSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            The Result
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <Award className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-card-foreground">
              For Your Centre
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              A clear competitive advantage—freeing educators from cleaning, reducing workload, and improving retention.
            </p>
            <p className="mt-4 text-card-foreground leading-relaxed">
              In a shrinking workforce, this positions your centre to attract and keep quality educators—without relying on constant recruitment.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
              <Heart className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-card-foreground">
              For Families
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              A safer environment, with specialised infection prevention and educators fully present with children—not cleaning.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
