import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/home/hero-section"
import { OutcomesSection } from "@/components/home/outcomes-section"
import { WhatThisMeansSection } from "@/components/home/what-this-means-section"
import { HowWeHelpSection } from "@/components/home/how-we-help-section"
import { DualWorkforceSection } from "@/components/home/dual-workforce-section"
import { HowItWorks } from "@/components/home/how-it-works"
import { ServicesSection } from "@/components/home/services-section"
import { CertificateSection } from "@/components/home/certificate-section"
import { StaffingModels } from "@/components/home/staffing-models"
import { ComplianceChallenge } from "@/components/home/compliance-challenge"
import { ComplianceRiskCalculatorSection } from "@/components/home/compliance-risk-calculator-section"
import { BiohazardInfographicSection } from "@/components/home/biohazard-infographic-section"
import { DocumentationSection } from "@/components/home/documentation-section"
import { SafeWorkSystems } from "@/components/home/safe-work-systems"
import { InfographicSection } from "@/components/home/infographic-section"
import { WhyUs } from "@/components/home/why-us"
import { FAQSection } from "@/components/home/faq-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero with new subheadline */}
        <HeroSection />
        
        {/* TOP: Outcomes - What sells */}
        <OutcomesSection />
        <WhatThisMeansSection />
        <HowWeHelpSection />
        
        {/* MIDDLE: System - How it works */}
        <DualWorkforceSection />
        <HowItWorks />
        <ServicesSection />
        <CertificateSection />
        <StaffingModels />
        
        {/* BOTTOM: Risk/Regulation context */}
        <ComplianceChallenge />
        <ComplianceRiskCalculatorSection />
        <BiohazardInfographicSection />
        <DocumentationSection />
        <SafeWorkSystems />
        <InfographicSection />
        
        {/* Supporting content */}
        <WhyUs />
        <FAQSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
