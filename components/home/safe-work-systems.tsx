import { CheckCircle } from "lucide-react"

const controls = [
  {
    title: "Risk assessment and hazard identification",
    description: "For all infection-control tasks — biological hazards, chemical hazards, manual handling, and environmental risks",
  },
  {
    title: "Elimination and substitution controls",
    description: "Removing hazardous products and replacing with safer alternatives where reasonably practicable",
  },
  {
    title: "Engineering and administrative controls",
    description: "Structured cleaning schedules, colour-coded equipment systems, designated chemical storage, and zoned protocols",
  },
  {
    title: "PPE requirements",
    description: "Correct selection, use, maintenance, and disposal procedures embedded in every cleaning schedule",
  },
  {
    title: "Safe work method statements",
    description: "For high-risk infection prevention tasks including outbreak response, biohazard clean-up, and nappy change area decontamination",
  },
  {
    title: "Documented systems of work",
    description: "Satisfy WHS Act s.19(3)(c) — replacing ad hoc, undocumented practices with repeatable, governed, and verifiable procedures",
  },
]

export function SafeWorkSystems() {
  return (
    <section className="bg-primary py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl lg:text-4xl">
            Statutory Safe Work Systems & The Hierarchy of Control
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
            All NCCS infection prevention protocols are engineered in strict alignment with the WHS Hierarchy of Control—the legally mandated framework for the elimination or minimisation of workplace risk. Under the new SWA Biohazard Code, &quot;administrative controls&quot; (like staff training alone) are no longer sufficient for high-risk environments. Our systems implement higher-order Engineering and Substitution controls to ensure your centre meets the highest legal standard of care.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {controls.map((control) => (
            <div
              key={control.title}
              className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold text-primary-foreground">{control.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{control.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-primary-foreground/80">
          These are not generic templates. Every safe work system is tailored to your centre&apos;s specific layout, capacity, risk profile, and staffing model.
        </p>
      </div>
    </section>
  )
}
