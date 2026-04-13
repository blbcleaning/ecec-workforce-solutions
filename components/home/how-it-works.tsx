import { Phone, Search, Wrench, Award } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Book a call or submit an enquiry",
    description: "We discuss your centre's situation and compliance position.",
  },
  {
    number: "02",
    icon: Search,
    title: "We assess your current gaps",
    description: "And recommend the right combination of services.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "We deliver training, tools, and documentation",
    description: "On-site or remotely — whatever works for your centre.",
  },
  {
    number: "04",
    icon: Award,
    title: "Your staff are certified, your systems are documented",
    description: "And your centre holds an NCCS Certificate of Compliance you can present to regulators, auditors, and families.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            How It Works
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full -translate-x-1/2 bg-border lg:block" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-accent bg-card">
                    <step.icon className="h-10 w-10 text-accent" />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
