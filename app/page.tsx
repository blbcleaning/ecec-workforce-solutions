import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/home/hero-section"
import { OutcomesSection } from "@/components/home/outcomes-section"
import { ProblemSection } from "@/components/home/problem-section"
import { SolutionSection } from "@/components/home/solution-section"
import { HowWeHelpSection } from "@/components/home/how-we-help-section"
import { WhatWeDeliverSection } from "@/components/home/what-we-deliver-section"
import { ProvenOutcomesSection } from "@/components/home/proven-outcomes-section"
import { CleaningProvidersSection } from "@/components/home/cleaning-providers-section"
import { DualWorkforceSection } from "@/components/home/dual-workforce-section"
import { WhyNowSection } from "@/components/home/why-now-section"
import { ResultSection } from "@/components/home/result-section"
import { CTASection } from "@/components/home/cta-section"
import { ComplianceRiskCalculatorSection } from "@/components/home/compliance-risk-calculator-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* HERO */}
        <HeroSection />
        
        {/* WHAT THIS CHANGES - Key outcomes upfront */}
        <OutcomesSection />
        
        {/* THE PROBLEM */}
        <ProblemSection />
        
        {/* THE SOLUTION */}
        <SolutionSection />
        
        {/* HOW IT WORKS - 4-step process */}
        <HowWeHelpSection />
        
        {/* WHAT WE DELIVER */}
        <WhatWeDeliverSection />
        
        {/* PROVEN OUTCOMES - Stats */}
        <ProvenOutcomesSection />
        
        {/* WORKFORCE CERTIFICATION - For cleaning providers */}
        <CleaningProvidersSection />
        
        {/* TWO WORKFORCES. ONE STANDARD */}
        <DualWorkforceSection />
        
        {/* WHY THIS MATTERS NOW */}
        <WhyNowSection />
        
        {/* COMPLIANCE RISK CALCULATOR */}
        <ComplianceRiskCalculatorSection />
        
        {/* THE RESULT */}
        <ResultSection />
        
        {/* CALL TO ACTION */}
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
