"use client"

import { useState, useMemo } from "react"
import { TrendingUp, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CalculatorWizard, WizardStep } from "./calculator-wizard"
import Link from "next/link"

export function ROICalculator() {
  const [educatorsLostPerYear, setEducatorsLostPerYear] = useState<number>(10)
  const [replacementCost, setReplacementCost] = useState<number>(20000)
  const [currentCleaningCost, setCurrentCleaningCost] = useState<number>(30000)
  const [nccsCleaningCost, setNccsCleaningCost] = useState<number>(41500)
  const [implementationCost, setImplementationCost] = useState<number>(5000)
  const [annualComplianceCost, setAnnualComplianceCost] = useState<number>(1250)
  const [educatorsRetained, setEducatorsRetained] = useState<number>(2)

  const results = useMemo(() => {
    // Your Annual Turnover Cost = Step 1 × Step 2
    const annualTurnoverCost = educatorsLostPerYear * replacementCost

    // Additional cleaning cost = Step 4 - Step 3
    const additionalCleaningCost = nccsCleaningCost - currentCleaningCost

    // Total Year 1 NCCS Cost = Step 5 + (Step 4 − Step 3) + Step 6
    const totalYear1Cost = implementationCost + additionalCleaningCost + annualComplianceCost

    // Turnover Savings = Step 7 × Step 2
    const turnoverSavings = educatorsRetained * replacementCost

    // Net Savings = Turnover Savings − Total Year 1 NCCS Cost
    const netSavings = turnoverSavings - totalYear1Cost

    // ROI = (Net Savings ÷ Total Year 1 NCCS Cost) × 100
    const roi = totalYear1Cost > 0 ? Math.round((netSavings / totalYear1Cost) * 100) : 0

    return {
      annualTurnoverCost,
      additionalCleaningCost,
      totalYear1Cost,
      turnoverSavings,
      netSavings,
      roi,
      educatorsRetained,
    }
  }, [educatorsLostPerYear, replacementCost, currentCleaningCost, nccsCleaningCost, implementationCost, annualComplianceCost, educatorsRetained])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0,
    }).format(value)
  }

  const handleReset = () => {
    setEducatorsLostPerYear(10)
    setReplacementCost(20000)
    setCurrentCleaningCost(30000)
    setNccsCleaningCost(41500)
    setImplementationCost(5000)
    setAnnualComplianceCost(1250)
    setEducatorsRetained(2)
  }

  const steps: WizardStep[] = [
    {
      id: "educatorsLost",
      question: "How many educators does your centre lose per year?",
      component: (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Input
              type="number"
              value={educatorsLostPerYear}
              onChange={(e) => setEducatorsLostPerYear(Math.max(0, parseInt(e.target.value) || 0))}
              className="h-14 text-2xl font-bold text-center w-32"
              min={0}
            />
            <span className="text-muted-foreground">educators per year</span>
          </div>
          <p className="text-sm text-muted-foreground">
            The national average is 30–35% annual turnover. For a centre with 30 staff, that&apos;s about 10 per year.
          </p>
        </div>
      ),
      getSummary: () => `${educatorsLostPerYear} educators lost per year`,
    },
    {
      id: "replacementCost",
      question: "What does it cost to replace one educator?",
      component: (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">$</span>
            <Input
              type="number"
              value={replacementCost}
              onChange={(e) => setReplacementCost(Math.max(0, parseInt(e.target.value) || 0))}
              className="h-14 text-2xl font-bold text-center w-40"
              min={0}
              step={1000}
            />
            <span className="text-muted-foreground">AUD</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Typical range: Cert III $15,000–$18,000 | Diploma $20,000–$25,000 | Bachelor $25,000–$30,000+
          </p>
        </div>
      ),
      getSummary: () => `${formatCurrency(replacementCost)} replacement cost`,
    },
    {
      id: "currentCleaning",
      question: "What's your current annual cleaning cost?",
      component: (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">$</span>
            <Input
              type="number"
              value={currentCleaningCost}
              onChange={(e) => setCurrentCleaningCost(Math.max(0, parseInt(e.target.value) || 0))}
              className="h-14 text-2xl font-bold text-center w-40"
              min={0}
              step={1000}
            />
            <span className="text-muted-foreground">AUD/year</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Typical range: $24,000–$36,000/year for contracted cleaning (approx. 12–15 hours/week)
          </p>
        </div>
      ),
      getSummary: () => `${formatCurrency(currentCleaningCost)} current cleaning`,
    },
    {
      id: "nccsCleaning",
      question: "What would NCCS-compliant infection prevention cleaning cost per year?",
      component: (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">$</span>
            <Input
              type="number"
              value={nccsCleaningCost}
              onChange={(e) => setNccsCleaningCost(Math.max(0, parseInt(e.target.value) || 0))}
              className="h-14 text-2xl font-bold text-center w-40"
              min={0}
              step={1000}
            />
            <span className="text-muted-foreground">AUD/year</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Typical range: $32,000–$51,000/year (24–40+ hours/week depending on centre size)
          </p>
        </div>
      ),
      getSummary: () => `${formatCurrency(nccsCleaningCost)} NCCS cleaning`,
    },
    {
      id: "implementation",
      question: "NCCS implementation cost (one-time setup)?",
      component: (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">$</span>
            <Input
              type="number"
              value={implementationCost}
              onChange={(e) => setImplementationCost(Math.max(0, parseInt(e.target.value) || 0))}
              className="h-14 text-2xl font-bold text-center w-40"
              min={0}
              step={500}
            />
            <span className="text-muted-foreground">AUD</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Typical range: $2,500–$10,000 (documentation, governance alignment, initial training)
          </p>
        </div>
      ),
      getSummary: () => `${formatCurrency(implementationCost)} implementation`,
    },
    {
      id: "annualCompliance",
      question: "Annual NCCS compliance cost?",
      component: (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">$</span>
            <Input
              type="number"
              value={annualComplianceCost}
              onChange={(e) => setAnnualComplianceCost(Math.max(0, parseInt(e.target.value) || 0))}
              className="h-14 text-2xl font-bold text-center w-40"
              min={0}
              step={250}
            />
            <span className="text-muted-foreground">AUD/year</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Typical range: $500–$2,000/year (annual review, audit support, documentation updates)
          </p>
        </div>
      ),
      getSummary: () => `${formatCurrency(annualComplianceCost)} annual compliance`,
    },
    {
      id: "educatorsRetained",
      question: "How many educators do you expect NCCS to retain?",
      component: (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Input
              type="number"
              value={educatorsRetained}
              onChange={(e) => setEducatorsRetained(Math.max(0, parseInt(e.target.value) || 0))}
              className="h-14 text-2xl font-bold text-center w-32"
              min={0}
            />
            <span className="text-muted-foreground">educators retained</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Conservative: just 2 (only 20% of typical annual turnover). Even this generates significant ROI.
          </p>
        </div>
      ),
      getSummary: () => `${educatorsRetained} educators retained`,
    },
  ]

  const resultsPanel = (
    <div className="space-y-6">
      {/* Net Savings Header */}
      <div className={`rounded-xl p-6 ${results.netSavings >= 0 ? "bg-green-100" : "bg-red-100"}`}>
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground">Net Savings (Year 1)</p>
          <p className={`text-4xl font-bold ${results.netSavings >= 0 ? "text-green-600" : "text-red-600"}`}>
            {formatCurrency(results.netSavings)}
          </p>
          <p className="mt-2 text-sm font-medium text-muted-foreground">
            Return on Investment: <span className={`font-bold ${results.roi >= 0 ? "text-green-600" : "text-red-600"}`}>{results.roi}%</span>
          </p>
        </div>
      </div>

      {/* Dynamic Summary */}
      <div className={`rounded-xl border p-4 ${results.netSavings >= 0 ? "border-green-300 bg-green-50" : "border-red-300 bg-red-50"}`}>
        <p className={`text-center font-medium ${results.netSavings >= 0 ? "text-green-800" : "text-red-800"}`}>
          Retaining just {results.educatorsRetained} educator{results.educatorsRetained !== 1 ? "s" : ""} {results.netSavings >= 0 ? "saves" : "costs"} your centre {formatCurrency(Math.abs(results.netSavings))} in Year 1 — a {results.roi}% return on investment.
        </p>
      </div>

      {/* Calculation Breakdown */}
      <div className="rounded-xl border border-border bg-card p-6">
        <p className="font-medium text-foreground mb-4">Calculation Breakdown</p>
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Your Annual Turnover Cost</span>
            <span className="font-semibold text-foreground">{formatCurrency(results.annualTurnoverCost)}</span>
          </div>
          <div className="border-t border-border pt-3">
            <p className="text-xs text-muted-foreground mb-2 font-medium">Year 1 NCCS Investment:</p>
          </div>
          <div className="flex items-center justify-between pl-4">
            <span className="text-muted-foreground">Implementation (one-time)</span>
            <span className="font-semibold text-foreground">{formatCurrency(implementationCost)}</span>
          </div>
          <div className="flex items-center justify-between pl-4">
            <span className="text-muted-foreground">Additional cleaning cost</span>
            <span className="font-semibold text-foreground">{formatCurrency(results.additionalCleaningCost)}</span>
          </div>
          <div className="flex items-center justify-between pl-4">
            <span className="text-muted-foreground">Annual compliance</span>
            <span className="font-semibold text-foreground">{formatCurrency(annualComplianceCost)}</span>
          </div>
          <div className="flex items-center justify-between border-t border-border pt-3">
            <span className="font-medium text-foreground">Total Year 1 NCCS Cost</span>
            <span className="font-bold text-foreground">{formatCurrency(results.totalYear1Cost)}</span>
          </div>
          <div className="flex items-center justify-between border-t border-border pt-3">
            <span className="text-muted-foreground">Turnover Savings ({educatorsRetained} × {formatCurrency(replacementCost)})</span>
            <span className="font-semibold text-green-600">{formatCurrency(results.turnoverSavings)}</span>
          </div>
          <div className="flex items-center justify-between border-t border-border pt-3">
            <span className="font-medium text-foreground">Net Savings</span>
            <span className={`text-xl font-bold ${results.netSavings >= 0 ? "text-green-600" : "text-red-600"}`}>
              {formatCurrency(results.netSavings)}
            </span>
          </div>
        </div>
      </div>

      {/* Insight */}
      <div className="rounded-xl border border-accent bg-accent/10 p-6">
        <div className="flex items-start gap-3">
          <TrendingUp className="h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
          <div>
            <p className="font-medium text-foreground">The Real Question</p>
            <p className="text-muted-foreground mt-1">
              Can NCCS help you retain {educatorsRetained} more educator{educatorsRetained !== 1 ? "s" : ""} per year? Professional infection prevention creates a better work environment, reducing educator burnout and improving role clarity.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl bg-primary p-6 text-primary-foreground">
        <div className="flex flex-col items-center text-center">
          <p className="font-medium">Ready to see if NCCS pays for itself at your centre?</p>
          <p className="text-primary-foreground/80 mt-1 text-sm">
            Get a personalised quote and implementation timeline.
          </p>
          <Button asChild className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/book">
              <Phone className="mr-2 h-4 w-4" />
              Book a Call
            </Link>
          </Button>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-muted-foreground leading-relaxed">
        This calculator provides indicative estimates only. Actual returns depend on your centre&apos;s specific circumstances, staffing conditions, and implementation. The figures shown are not guarantees of financial outcomes. ECEC Workforce Solutions is a training, certification, and consulting provider. We do not provide cleaning services. ECEC Workforce Solutions accepts no liability for decisions made based on these results.
      </p>
    </div>
  )

  return (
    <CalculatorWizard
      headline="Calculate Your Return on Investment"
      description="Find out if NCCS pays for itself by retaining just two educators."
      buttonText="Calculate ROI"
      steps={steps}
      resultsPanel={resultsPanel}
      onReset={handleReset}
    />
  )
}
