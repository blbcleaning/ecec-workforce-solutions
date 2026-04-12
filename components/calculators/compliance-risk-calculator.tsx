"use client"

import { useState, useMemo } from "react"
import { AlertTriangle, Phone, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CalculatorWizard, WizardStep } from "./calculator-wizard"
import Link from "next/link"

type YesNo = "yes" | "no" | ""
type RiskLevel = "low" | "medium" | "high" | "critical"

export function ComplianceRiskCalculator() {
  const [hasWorkerRegister, setHasWorkerRegister] = useState<YesNo>("")
  const [hasInfectionTraining, setHasInfectionTraining] = useState<YesNo>("")
  const [hasDocumentation, setHasDocumentation] = useState<YesNo>("")
  const [hasBiohazardProcedure, setHasBiohazardProcedure] = useState<YesNo>("")
  const [hasRatioConflict, setHasRatioConflict] = useState<YesNo>("")

  const results = useMemo(() => {
    const answers = [
      hasWorkerRegister,
      hasInfectionTraining,
      hasDocumentation,
      hasBiohazardProcedure,
      hasRatioConflict,
    ]

    // For ratio conflict, "yes" means they DO have a problem (cleaner is on ratio)
    // So we count "no" for most questions as a gap, but "yes" for ratio conflict as a gap
    const gaps = [
      hasWorkerRegister === "no",
      hasInfectionTraining === "no",
      hasDocumentation === "no",
      hasBiohazardProcedure === "no",
      hasRatioConflict === "yes", // This is reversed - "yes" means they have a problem
    ].filter(Boolean).length

    const answered = answers.filter((a) => a !== "").length

    if (answered < 5) return null

    let riskLevel: RiskLevel
    let riskScore: number
    let financialExposure: { min: number; max: number }
    let personalLiabilityRisk: string

    if (gaps >= 4) {
      riskLevel = "critical"
      riskScore = 95
      financialExposure = { min: 100000, max: 700000 }
      personalLiabilityRisk = "Extreme — Directors face personal prosecution risk"
    } else if (gaps >= 3) {
      riskLevel = "high"
      riskScore = 75
      financialExposure = { min: 50000, max: 150000 }
      personalLiabilityRisk = "High — Significant due diligence gaps"
    } else if (gaps >= 2) {
      riskLevel = "medium"
      riskScore = 50
      financialExposure = { min: 20000, max: 75000 }
      personalLiabilityRisk = "Moderate — Documentation gaps present"
    } else if (gaps === 1) {
      riskLevel = "low"
      riskScore = 25
      financialExposure = { min: 5000, max: 25000 }
      personalLiabilityRisk = "Low — Minor compliance improvements needed"
    } else {
      riskLevel = "low"
      riskScore = 10
      financialExposure = { min: 0, max: 5000 }
      personalLiabilityRisk = "Minimal — Strong compliance position"
    }

    return {
      riskLevel,
      riskScore,
      financialExposure,
      personalLiabilityRisk,
      gaps,
      strengths: 5 - gaps,
    }
  }, [hasWorkerRegister, hasInfectionTraining, hasDocumentation, hasBiohazardProcedure, hasRatioConflict])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0,
    }).format(value)
  }

  const getRiskColor = (level: RiskLevel) => {
    switch (level) {
      case "critical":
        return "text-red-600"
      case "high":
        return "text-orange-600"
      case "medium":
        return "text-amber-600"
      case "low":
        return "text-green-600"
    }
  }

  const getRiskBg = (level: RiskLevel) => {
    switch (level) {
      case "critical":
        return "bg-red-100"
      case "high":
        return "bg-orange-100"
      case "medium":
        return "bg-amber-100"
      case "low":
        return "bg-green-100"
    }
  }

  const handleReset = () => {
    setHasWorkerRegister("")
    setHasInfectionTraining("")
    setHasDocumentation("")
    setHasBiohazardProcedure("")
    setHasRatioConflict("")
  }

  const YesNoRadio = ({
    value,
    onChange,
    yesId,
    noId,
  }: {
    value: YesNo
    onChange: (value: YesNo) => void
    yesId: string
    noId: string
  }) => (
    <RadioGroup
      value={value}
      onValueChange={(v) => onChange(v as YesNo)}
      className="flex gap-4"
    >
      <div className="flex items-center">
        <RadioGroupItem value="yes" id={yesId} className="peer sr-only" />
        <Label
          htmlFor={yesId}
          className="flex h-12 w-24 cursor-pointer items-center justify-center rounded-lg border-2 border-border bg-card text-card-foreground transition-all peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/10 peer-data-[state=checked]:text-accent hover:bg-muted"
        >
          Yes
        </Label>
      </div>
      <div className="flex items-center">
        <RadioGroupItem value="no" id={noId} className="peer sr-only" />
        <Label
          htmlFor={noId}
          className="flex h-12 w-24 cursor-pointer items-center justify-center rounded-lg border-2 border-border bg-card text-card-foreground transition-all peer-data-[state=checked]:border-destructive peer-data-[state=checked]:bg-destructive/10 peer-data-[state=checked]:text-destructive hover:bg-muted"
        >
          No
        </Label>
      </div>
    </RadioGroup>
  )

  const HelperText = ({ children }: { children: React.ReactNode }) => (
    <div className="mt-4 flex items-start gap-2 rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground">
      <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
      <p>{children}</p>
    </div>
  )

  const steps: WizardStep[] = [
    {
      id: "worker-register",
      question: "Are all cleaning staff listed on the National Early Childhood Worker Register?",
      component: (
        <div>
          <YesNoRadio
            value={hasWorkerRegister}
            onChange={setHasWorkerRegister}
            yesId="worker-yes"
            noId="worker-no"
          />
          <HelperText>
            Since February 2026, all staff — including cleaners — must be registered. Failure to register carries fines up to $34,200.
          </HelperText>
        </div>
      ),
      getSummary: () => hasWorkerRegister === "yes" ? "Yes — Staff registered" : "No — Staff not registered",
    },
    {
      id: "infection-training",
      question: "Do your cleaning staff hold documented training in infection-control cleaning and biological hazard management specific to childcare environments?",
      component: (
        <div>
          <YesNoRadio
            value={hasInfectionTraining}
            onChange={setHasInfectionTraining}
            yesId="training-yes"
            noId="training-no"
          />
          <HelperText>
            This means training specific to infection prevention in ECEC — not general education qualifications or commercial cleaning certificates. Under WHS legislation, staff performing infection-control cleaning must be demonstrably competent in the specific hazards of childcare environments. NCCS certification is one structured pathway to demonstrate this.
          </HelperText>
        </div>
      ),
      getSummary: () => hasInfectionTraining === "yes" ? "Yes — ECEC-specific training documented" : "No — No ECEC-specific training",
    },
    {
      id: "documentation",
      question: "Can your centre produce all of the following right now: a risk-based cleaning schedule that specifies tasks by room and frequency, daily cleaning logs signed by the person who performed each task, Safety Data Sheets for every chemical product in use, and records showing who is responsible for verifying the work was completed?",
      component: (
        <div>
          <YesNoRadio
            value={hasDocumentation}
            onChange={setHasDocumentation}
            yesId="docs-yes"
            noId="docs-no"
          />
          <HelperText>
            A basic cleaning roster or a tick-and-flick checklist is not a safe system of work. To satisfy WHS requirements, your records must show exactly what was done, when, by whom, with what products, and who verified it. If any of these elements are missing, vague, or unsigned — your documentation would not constitute evidence of a safe system of work in a WHS investigation.
          </HelperText>
        </div>
      ),
      getSummary: () => hasDocumentation === "yes" ? "Yes — Full documentation available" : "No — Documentation incomplete",
    },
    {
      id: "biohazard",
      question: "Does your centre have a documented biohazard incident response procedure — including bodily fluid spills, gastro or infectious disease outbreaks, and contaminated waste disposal — with designated staff trained to carry it out?",
      component: (
        <div>
          <YesNoRadio
            value={hasBiohazardProcedure}
            onChange={setHasBiohazardProcedure}
            yesId="biohazard-yes"
            noId="biohazard-no"
          />
          <HelperText>
            Under the Biological Hazards Code of Practice, centres must have documented controls for managing biological hazard incidents. This includes who responds, how they respond, what PPE they use, how contaminated materials are disposed of, and how the incident is recorded. If your centre relies on educators to handle these incidents without documented procedures or specific training — that is a WHS compliance gap.
          </HelperText>
        </div>
      ),
      getSummary: () => hasBiohazardProcedure === "yes" ? "Yes — Biohazard procedures documented" : "No — No biohazard procedures",
    },
    {
      id: "ratio-conflict",
      question: "Is the person responsible for performing infection-control cleaning also counted in your educator-to-child ratios?",
      component: (
        <div>
          <YesNoRadio
            value={hasRatioConflict}
            onChange={setHasRatioConflict}
            yesId="ratio-yes"
            noId="ratio-no"
          />
          <HelperText>
            If the same person performing cleaning duties is also counted on ratio for supervising children, your centre has a structural compliance gap. Cleaning cannot be performed safely or consistently by someone who is simultaneously responsible for child supervision.
          </HelperText>
        </div>
      ),
      getSummary: () => hasRatioConflict === "yes" ? "Yes — Ratio conflict exists" : "No — No ratio conflict",
    },
  ]

  const resultsPanel = results && (
    <div className="space-y-6">
      {/* Risk Score Header */}
      <div className={`rounded-xl p-6 ${getRiskBg(results.riskLevel)}`}>
        <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Risk Level</p>
            <p className={`text-3xl font-bold ${getRiskColor(results.riskLevel)}`}>
              {results.riskLevel.toUpperCase()}
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:text-right">
            <p className="text-sm font-medium text-muted-foreground">Risk Score</p>
            <p className={`text-3xl font-bold ${getRiskColor(results.riskLevel)}`}>
              {results.riskScore}/100
            </p>
          </div>
        </div>
      </div>

      {/* Financial Exposure */}
      <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 flex-shrink-0 text-destructive mt-0.5" />
          <div>
            <p className="font-medium text-foreground">Estimated Financial Exposure</p>
            <p className="text-2xl font-bold text-destructive mt-1">
              {formatCurrency(results.financialExposure.min)} – {formatCurrency(results.financialExposure.max)}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Combined potential penalties under ECEC, WHS, and worker registration obligations
            </p>
          </div>
        </div>
      </div>

      {/* Personal Liability */}
      <div className="rounded-xl border border-border bg-card p-6">
        <p className="font-medium text-foreground">Personal Liability Risk</p>
        <p className={`text-lg font-semibold mt-1 ${getRiskColor(results.riskLevel)}`}>
          {results.personalLiabilityRisk}
        </p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-muted p-4 text-center">
          <p className="text-3xl font-bold text-destructive">{results.gaps}</p>
          <p className="text-sm text-muted-foreground">Compliance Gaps</p>
        </div>
        <div className="rounded-lg bg-muted p-4 text-center">
          <p className="text-3xl font-bold text-green-600">{results.strengths}</p>
          <p className="text-sm text-muted-foreground">Areas Compliant</p>
        </div>
      </div>

      {/* CTA */}
      {results.riskLevel !== "low" && (
        <div className="rounded-xl border border-accent bg-accent/10 p-6">
          <p className="font-medium text-foreground">
            {results.riskLevel === "critical" 
              ? "Your centre has critical compliance gaps. Immediate action recommended."
              : results.riskLevel === "high"
              ? "Your centre has significant compliance gaps that require attention."
              : "Your centre has some compliance gaps that should be addressed."}
          </p>
          <Button asChild className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Book a Compliance Review
            </Link>
          </Button>
        </div>
      )}

      {/* Disclaimer */}
      <p className="text-xs text-muted-foreground leading-relaxed">
        This calculator provides indicative compliance risk information only. It is not legal advice. Penalty figures are based on publicly available maximum penalties and may not reflect your specific circumstances. For advice on your compliance obligations, consult a qualified WHS or legal professional. ECEC Workforce Solutions is a training, certification, and consulting provider. We do not provide cleaning services. ECEC Workforce Solutions accepts no liability for decisions made based on these results.
      </p>
    </div>
  )

  return (
    <CalculatorWizard
      headline="What's Your Compliance Exposure?"
      description="Answer 5 questions to see your centre's financial risk."
      buttonText="Check Now"
      steps={steps}
      resultsPanel={resultsPanel}
      onReset={handleReset}
    />
  )
}
