"use client"

import { ComplianceRiskCalculator } from "@/components/calculators/compliance-risk-calculator"

export function ComplianceRiskCalculatorSection() {
  return (
    <section id="compliance-calculator" className="bg-muted py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ComplianceRiskCalculator />
      </div>
    </section>
  )
}
