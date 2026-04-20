import { Search, Settings, GraduationCap, Activity } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Baseline Assessment",
    description: "We assess your current risk, compliance gaps, and educator workload to understand where you stand.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Operating Model Implementation",
    description: "We implement the CCS/NCCS operating model with clear role separation and documentation systems.",
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Workforce Training & Certification",
    description: "Your team receives accredited training. Cleaning staff become certified Infection Prevention Specialists.",
  },
  {
    icon: Activity,
    number: "04",
    title: "Ongoing Monitoring & Verification",
    description: "Continuous compliance tracking, documentation review, and audit preparation support.",
  },
]

export function HowWeHelpSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            How We Help
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A clear, proven process to transform your centre&apos;s compliance posture.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex flex-col items-start">
                <span className="text-5xl font-bold text-accent/20">{step.number}</span>
                <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <step.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
