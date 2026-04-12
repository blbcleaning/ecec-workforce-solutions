import { CheckCircle } from "lucide-react"

const reasons = [
  "Australia's first published, evidence-based infection prevention governance framework for ECEC",
  "Supported by five DOI-registered research papers",
  "Featured in The Sector — Australia's leading ECEC publication",
  "Built by a practitioner with lived experience inside ECEC services",
  "Committed to solutions that don't just ensure compliance — they reduce educator workloads, improve working conditions, and support educator retention through role clarity and professional respect",
]

export function WhyUs() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Why Us
          </h2>
          <div className="mt-10 space-y-4">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 shadow-sm"
              >
                <CheckCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-accent" />
                <p className="text-lg text-card-foreground">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
