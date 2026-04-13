"use client"

import { useState, useMemo } from "react"
import { AlertTriangle, Phone, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CalculatorWizard, WizardStep } from "./calculator-wizard"
import Link from "next/link"

type YesNo = "yes" | "no" | ""
type Maybe = "yes" | "no" | "maybe" | ""
type RiskLevel = "compliant" | "partial" | "significant" | "noncompliant"

export function ComplianceRiskCalculator() {
  const [hasWorkerRegister, setHasWorkerRegister] = useState<YesNo>("")
  const [hasInfectionTraining, setHasInfectionTraining] = useState<YesNo>("")
  const [hasDocumentation, setHasDocumentation] = useState<YesNo>("")
  const [hasBiohazardProcedure, setHasBiohazardProcedure] = useState<YesNo>("")
  const [hasRatioConflict, setHasRatioConflict] = useState<YesNo>("")
  const [hasNapTimeCleaning, setHasNapTimeCleaning] = useState<YesNo>("")
  const [hasAfterHoursQuals, setHasAfterHoursQuals] = useState<Maybe>("")
  const [hasVerificationLogs, setHasVerificationLogs] = useState<YesNo>("")
  const [usesTGAProducts, setUsesTGAProducts] = useState<YesNo>("")
  const [hasChemicalControls, setHasChemicalControls] = useState<YesNo>("")

  const results = useMemo(() => {
    const answers = [
      hasWorkerRegister,
      hasInfectionTraining,
      hasDocumentation,
      hasBiohazardProcedure,
      hasRatioConflict,
      hasNapTimeCleaning,
      hasAfterHoursQuals,
      hasVerificationLogs,
      usesTGAProducts,
      hasChemicalControls,
    ]

    // Count passes: for inverted questions (5, 6), "no" is a pass. For question 7, only "yes" is a pass.
    const passes = [
      hasWorkerRegister === "yes",
      hasInfectionTraining === "yes",
      hasDocumentation === "yes",
      hasBiohazardProcedure === "yes",
      hasRatioConflict === "no", // Inverted: "no" = pass
      hasNapTimeCleaning === "no", // Inverted: "no" = pass
      hasAfterHoursQuals === "yes", // Only "yes" = pass, "no" and "maybe" both fail
      hasVerificationLogs === "yes",
      usesTGAProducts === "yes",
      hasChemicalControls === "yes",
    ].filter(Boolean).length

    const answered = answers.filter((a) => a !== "").length

    if (answered < 10) return null

    let riskLevel: RiskLevel
    let riskScore: number
    let financialExposure: { min: number; max: number }
    let personalLiabilityRisk: string
    let riskDescription: string

    if (passes >= 9) {
      riskLevel = "compliant"
      riskScore = 10
      financialExposure = { min: 0, max: 5000 }
      personalLiabilityRisk = "Minimal — Strong compliance position"
      riskDescription = "Your centre appears to meet current compliance requirements. Consider NCCS certification to formalise and document your position."
    } else if (passes >= 5) {
      riskLevel = "partial"
      riskScore = 50
      financialExposure = { min: 20000, max: 75000 }
      personalLiabilityRisk = "Moderate — Documentation gaps present"
      riskDescription = "Your centre has compliance gaps that expose you to regulatory action. Address these before your next audit or inspection."
    } else if (passes >= 3) {
      riskLevel = "significant"
      riskScore = 75
      financialExposure = { min: 50000, max: 150000 }
      personalLiabilityRisk = "High — Significant due diligence gaps"
      riskDescription = "Your centre has significant compliance gaps across multiple areas. Directors and Approved Providers are personally exposed. Immediate action recommended."
    } else {
      riskLevel = "noncompliant"
      riskScore = 95
      financialExposure = { min: 100000, max: 700000 }
      personalLiabilityRisk = "Extreme — Directors face personal prosecution risk"
      riskDescription = "Your centre is substantially non-compliant. The risk of regulatory enforcement, personal prosecution, and financial penalty is high. Contact us immediately."
    }

    return {
      riskLevel,
      riskScore,
      financialExposure,
      personalLiabilityRisk,
      riskDescription,
      passes,
      gaps: 10 - passes,
    }
  }, [hasWorkerRegister, hasInfectionTraining, hasDocumentation, hasBiohazardProcedure, hasRatioConflict, hasNapTimeCleaning, hasAfterHoursQuals, hasVerificationLogs, usesTGAProducts, hasChemicalControls])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0,
    }).format(value)
  }

  const getRiskColor = (level: RiskLevel) => {
    switch (level) {
      case "noncompliant":
        return "text-red-600"
      case "significant":
        return "text-orange-600"
      case "partial":
        return "text-amber-600"
      case "compliant":
        return "text-green-600"
    }
  }

  const getRiskBg = (level: RiskLevel) => {
    switch (level) {
      case "noncompliant":
        return "bg-red-100"
      case "significant":
        return "bg-orange-100"
      case "partial":
        return "bg-amber-100"
      case "compliant":
        return "bg-green-100"
    }
  }

  const getRiskEmoji = (level: RiskLevel) => {
    switch (level) {
      case "noncompliant":
        return "🔴"
      case "significant":
        return "🟠"
      case "partial":
        return "🟡"
      case "compliant":
        return "🟢"
    }
  }

  const handleReset = () => {
    setHasWorkerRegister("")
    setHasInfectionTraining("")
    setHasDocumentation("")
    setHasBiohazardProcedure("")
    setHasRatioConflict("")
    setHasNapTimeCleaning("")
    setHasAfterHoursQuals("")
    setHasVerificationLogs("")
    setUsesTGAProducts("")
    setHasChemicalControls("")
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

  const ThreeWayRadio = ({
    value,
    onChange,
    yesId,
    noId,
    maybeId,
    onMaybeSelect,
  }: {
    value: Maybe
    onChange: (value: Maybe) => void
    yesId: string
    noId: string
    maybeId: string
    onMaybeSelect?: () => void
  }) => (
    <div className="space-y-4">
      <RadioGroup
        value={value}
        onValueChange={(v) => {
          onChange(v as Maybe)
          if (v === "maybe") onMaybeSelect?.()
        }}
        className="flex gap-4"
      >
        <div className="flex items-center">
          <RadioGroupItem value="yes" id={yesId} className="peer sr-only" />
          <Label
            htmlFor={yesId}
            className="flex h-12 w-20 cursor-pointer items-center justify-center rounded-lg border-2 border-border bg-card text-card-foreground transition-all peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/10 peer-data-[state=checked]:text-accent hover:bg-muted text-sm"
          >
            Yes
          </Label>
        </div>
        <div className="flex items-center">
          <RadioGroupItem value="maybe" id={maybeId} className="peer sr-only" />
          <Label
            htmlFor={maybeId}
            className="flex h-12 w-20 cursor-pointer items-center justify-center rounded-lg border-2 border-border bg-card text-card-foreground transition-all peer-data-[state=checked]:border-amber-600 peer-data-[state=checked]:bg-amber-100/50 peer-data-[state=checked]:text-amber-600 hover:bg-muted text-sm"
          >
            Maybe
          </Label>
        </div>
        <div className="flex items-center">
          <RadioGroupItem value="no" id={noId} className="peer sr-only" />
          <Label
            htmlFor={noId}
            className="flex h-12 w-20 cursor-pointer items-center justify-center rounded-lg border-2 border-border bg-card text-card-foreground transition-all peer-data-[state=checked]:border-destructive peer-data-[state=checked]:bg-destructive/10 peer-data-[state=checked]:text-destructive hover:bg-muted text-sm"
          >
            No
          </Label>
        </div>
      </RadioGroup>
      {value === "maybe" && (
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-3">
          <p className="text-sm text-amber-900 font-medium">If you&apos;re unsure, that&apos;s a gap.</p>
        </div>
      )}
    </div>
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
      helper: "Worker Register requirement",
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
      helper: "ECEC-specific training requirement",
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
      helper: "Complete documentation",
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
      helper: "Biohazard procedures",
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
      helper: "Ratio separation principle",
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
    {
      id: "nap-time",
      question: "Does your centre perform the bulk of its infection-control cleaning during nap time?",
      helper: "Daytime coverage requirement",
      component: (
        <div>
          <YesNoRadio
            value={hasNapTimeCleaning}
            onChange={setHasNapTimeCleaning}
            yesId="nap-yes"
            noId="nap-no"
          />
          <HelperText>
            If the majority of cleaning happens during nap time, your centre is relying on a narrow window to manage biological hazards that accumulate throughout the entire day. Nappy changes, mouthed toys, bodily fluid spills, and high-touch surface contamination occur continuously during operating hours — not just at nap time. A compliant infection prevention schedule is risk-based and distributed across the full operating day.
          </HelperText>
        </div>
      ),
      getSummary: () => hasNapTimeCleaning === "yes" ? "Yes — Bulk cleaning during nap time only" : "No — Distributed throughout day",
    },
    {
      id: "after-hours-quals",
      question: "Does your after-hours cleaner hold certified infection-control cleaning qualifications specific to childcare environments?",
      helper: "After-hours cleaner credentials",
      component: (
        <div>
          <ThreeWayRadio
            value={hasAfterHoursQuals}
            onChange={setHasAfterHoursQuals}
            yesId="quals-yes"
            maybeId="quals-maybe"
            noId="quals-no"
            onMaybeSelect={() => {}}
          />
          <HelperText>
            A Cert III in Cleaning Operations or general commercial cleaning experience does not cover childcare-specific biological hazards, TGA-approved child-safe products, or ECEC infection-control protocols. If you&apos;re unsure whether your cleaner holds childcare-specific IPC qualifications — they almost certainly don&apos;t. &apos;Maybe&apos; is not evidence of competency.
          </HelperText>
        </div>
      ),
      getSummary: () => hasAfterHoursQuals === "yes" ? "Yes — Certified in ECEC infection control" : hasAfterHoursQuals === "maybe" ? "Maybe — Unclear" : "No — No ECEC-specific qualifications",
    },
    {
      id: "verification-logs",
      question: "Does your after-hours cleaner provide cleaning verification logs on a nightly basis?",
      helper: "Verification documentation",
      component: (
        <div>
          <YesNoRadio
            value={hasVerificationLogs}
            onChange={setHasVerificationLogs}
            yesId="logs-yes"
            noId="logs-no"
          />
          <HelperText>
            Verification logs must show what was cleaned, when, by whom, with what products, and whether the work was completed to schedule. A signature on a generic sign-off sheet is not a verification log. If your cleaner does not provide nightly documentation — you have no evidence the work was done to any standard.
          </HelperText>
        </div>
      ),
      getSummary: () => hasVerificationLogs === "yes" ? "Yes — Nightly logs provided" : "No — No verification logs",
    },
    {
      id: "tga-products",
      question: "Does your centre use TGA-approved cleaning chemicals only?",
      helper: "TGA product compliance",
      component: (
        <div>
          <YesNoRadio
            value={usesTGAProducts}
            onChange={setUsesTGAProducts}
            yesId="tga-yes"
            noId="tga-no"
          />
          <HelperText>
            All disinfectants used in high-risk zones (nursery, bathrooms, nappy change areas) should be TGA-listed (ARTG registered) as hospital-grade or appropriate for the surface type. Products used on surfaces children mouth must be safe for mucous membrane contact. If you don&apos;t know whether your products are TGA-approved — check. The ARTG register is searchable at tga.gov.au.
          </HelperText>
        </div>
      ),
      getSummary: () => usesTGAProducts === "yes" ? "Yes — TGA products only" : "No — Non-approved products in use",
    },
    {
      id: "chemical-controls",
      question: "Do you have verifiable control documents for chemical handling and dilution?",
      helper: "Chemical management controls",
      component: (
        <div>
          <YesNoRadio
            value={hasChemicalControls}
            onChange={setHasChemicalControls}
            yesId="controls-yes"
            noId="controls-no"
          />
          <HelperText>
            This means: a current Chemical Register listing every product in use with ARTG numbers, SDS currency dates, and expiry tracking. Plus documented dilution ratios recorded per shift — not just the label instructions, but evidence that the correct ratio was actually used. If your chemical management consists of a bottle of spray under the sink with no register, no SDS folder, and no dilution records — that is a WHS compliance gap.
          </HelperText>
        </div>
      ),
      getSummary: () => hasChemicalControls === "yes" ? "Yes — Chemical controls documented" : "No — No chemical documentation",
    },
  ]

  const resultsPanel = results && (
    <div className="space-y-6">
      {/* Risk Score Header */}
      <div className={`rounded-xl p-6 ${getRiskBg(results.riskLevel)}`}>
        <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Risk Level</p>
            <p className={`text-3xl font-bold ${getRiskColor(results.riskLevel)} flex items-center gap-2`}>
              {getRiskEmoji(results.riskLevel)} {results.riskLevel === "compliant" ? "COMPLIANT" : results.riskLevel === "partial" ? "PARTIALLY COMPLIANT" : results.riskLevel === "significant" ? "SIGNIFICANT GAPS" : "NON-COMPLIANT"}
            </p>
          </div>
          <div className="sm:text-right">
            <p className="text-sm font-medium text-muted-foreground">Passing Areas</p>
            <p className={`text-3xl font-bold ${getRiskColor(results.riskLevel)}`}>
              {results.passes}/10
            </p>
          </div>
        </div>
      </div>

      {/* Risk Description */}
      <div className="rounded-xl border border-border bg-card p-6">
        <p className="text-foreground leading-relaxed">
          {results.riskDescription}
        </p>
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

      {/* CTA */}
      {results.riskLevel !== "compliant" && (
        <div className="rounded-xl border border-accent bg-accent/10 p-6">
          <p className="font-medium text-foreground mb-3">
            {results.riskLevel === "noncompliant" 
              ? "Your centre is substantially non-compliant. Immediate action required."
              : results.riskLevel === "significant"
              ? "Your centre has significant compliance gaps. Directors are personally exposed."
              : "Your centre has compliance gaps that should be addressed."}
          </p>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
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
      description="Answer 10 questions to see your centre's compliance risk and financial exposure."
      buttonText="Check Now"
      steps={steps}
      resultsPanel={resultsPanel}
      onReset={handleReset}
    />
  )
}
