import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/home/hero-section"
import { ComplianceChallenge } from "@/components/home/compliance-challenge"
import { ComplianceRiskCalculatorSection } from "@/components/home/compliance-risk-calculator-section"
import { ServicesSection } from "@/components/home/services-section"
import { DocumentationSection } from "@/components/home/documentation-section"
import { SafeWorkSystems } from "@/components/home/safe-work-systems"
import { HowItWorks } from "@/components/home/how-it-works"
import { CertificateSection } from "@/components/home/certificate-section"
import { StaffingModels } from "@/components/home/staffing-models"
import { InfographicSection } from "@/components/home/infographic-section"
import { WhyUs } from "@/components/home/why-us"
import { FAQSection } from "@/components/home/faq-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ComplianceChallenge />
        <ComplianceRiskCalculatorSection />
        <ServicesSection />
        <DocumentationSection />
        <SafeWorkSystems />
        <HowItWorks />
        <CertificateSection />
        <StaffingModels />
        <InfographicSection />
        <WhyUs />
        <FAQSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  )
}
