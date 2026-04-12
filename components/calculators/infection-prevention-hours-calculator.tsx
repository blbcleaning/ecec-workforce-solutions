"use client"

import { useState, useMemo } from "react"
import { Clock, Phone, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CalculatorWizard, WizardStep } from "./calculator-wizard"
import Link from "next/link"

export function InfectionPreventionHoursCalculator() {
  const [licensedCapacity, setLicensedCapacity] = useState<number>(60)
  const [nurseryRooms, setNurseryRooms] = useState<number>(1)
  const [toddlerRooms, setToddlerRooms] = useState<number>(1)
  const [preschoolRooms, setPreschoolRooms] = useState<number>(2)
  const [bathrooms, setBathrooms] = useState<number>(4)
  const [nappyChangeAreas, setNappyChangeAreas] = useState<number>(2)
  const [hoursPerDay, setHoursPerDay] = useState<number>(11)
  const [daysPerWeek, setDaysPerWeek] = useState<number>(5)

  const results = useMemo(() => {
    // Calculate base hours per room type
    const nurseryHours = nurseryRooms * 6
    const toddlerHours = toddlerRooms * 5
    const preschoolHours = preschoolRooms * 4
    const bathroomHours = bathrooms * 3
    const nappyHours = nappyChangeAreas * 2.5
    const commonAreaHours = 5 // Fixed

    // Base total before operating hours adjustment
    const baseTotal = nurseryHours + toddlerHours + preschoolHours + bathroomHours + nappyHours + commonAreaHours

    // Operating hours adjustment (based on 10-hour baseline)
    const operatingAdjustment = hoursPerDay / 10
    const weeklyHours = Math.ceil(baseTotal * operatingAdjustment)

    // Daily hours
    const dailyHours = Math.round((weeklyHours / daysPerWeek) * 10) / 10

    // Staffing recommendation
    let staffingLevel: string
    if (weeklyHours <= 20) {
      staffingLevel = "Part-time NCCS Infection Prevention Specialist"
    } else if (weeklyHours <= 35) {
      staffingLevel = "Full-time NCCS Infection Prevention Specialist"
    } else {
      staffingLevel = "Full-time + part-time support"
    }

    // Typical centre allocation (for comparison)
    const typicalMin = 10
    const typicalMax = 15

    return {
      weeklyHours,
      dailyHours,
      staffingLevel,
      typicalMin,
      typicalMax,
      breakdown: {
        nurseryHours,
        toddlerHours,
        preschoolHours,
        bathroomHours,
        nappyHours,
        commonAreaHours,
      },
    }
  }, [nurseryRooms, toddlerRooms, preschoolRooms, bathrooms, nappyChangeAreas, hoursPerDay, daysPerWeek])

  const handleReset = () => {
    setLicensedCapacity(60)
    setNurseryRooms(1)
    setToddlerRooms(1)
    setPreschoolRooms(2)
    setBathrooms(4)
    setNappyChangeAreas(2)
    setHoursPerDay(11)
    setDaysPerWeek(5)
  }

  const NumberInput = ({ 
    value, 
    onChange, 
    min = 0, 
    max = 999 
  }: { 
    value: number
    onChange: (v: number) => void
    min?: number
    max?: number 
  }) => (
    <Input
      type="number"
      value={value}
      onChange={(e) => {
        const val = parseInt(e.target.value) || 0
        onChange(Math.max(min, Math.min(max, val)))
      }}
      min={min}
      max={max}
      className="h-14 text-center text-2xl font-bold"
    />
  )

  const steps: WizardStep[] = [
    {
      id: "capacity",
      question: "What is your centre's licensed capacity?",
      helper: "Total approved places — check your service approval.",
      component: (
        <NumberInput value={licensedCapacity} onChange={setLicensedCapacity} min={1} max={300} />
      ),
      getSummary: () => `${licensedCapacity} licensed places`,
    },
    {
      id: "nursery",
      question: "How many nursery/infant rooms do you have? (0–2 years)",
      helper: "Highest risk classification — nappy changes, mouthing, crawling, weakest immune systems.",
      component: (
        <NumberInput value={nurseryRooms} onChange={setNurseryRooms} min={0} max={10} />
      ),
      getSummary: () => `${nurseryRooms} nursery room${nurseryRooms !== 1 ? "s" : ""}`,
    },
    {
      id: "toddler",
      question: "How many toddler rooms? (2–3 years)",
      helper: "High risk — still nappying, high-touch surfaces, frequent illness.",
      component: (
        <NumberInput value={toddlerRooms} onChange={setToddlerRooms} min={0} max={10} />
      ),
      getSummary: () => `${toddlerRooms} toddler room${toddlerRooms !== 1 ? "s" : ""}`,
    },
    {
      id: "preschool",
      question: "How many preschool rooms? (3–5 years)",
      helper: "Moderate risk — more independent but still high-touch environments.",
      component: (
        <NumberInput value={preschoolRooms} onChange={setPreschoolRooms} min={0} max={10} />
      ),
      getSummary: () => `${preschoolRooms} preschool room${preschoolRooms !== 1 ? "s" : ""}`,
    },
    {
      id: "bathrooms",
      question: "How many bathrooms?",
      helper: "Include all bathrooms used by children and staff.",
      component: (
        <NumberInput value={bathrooms} onChange={setBathrooms} min={0} max={20} />
      ),
      getSummary: () => `${bathrooms} bathroom${bathrooms !== 1 ? "s" : ""}`,
    },
    {
      id: "nappyAreas",
      question: "How many nappy change areas?",
      helper: "Dedicated nappy change stations — highest biological hazard zones.",
      component: (
        <NumberInput value={nappyChangeAreas} onChange={setNappyChangeAreas} min={0} max={10} />
      ),
      getSummary: () => `${nappyChangeAreas} nappy change area${nappyChangeAreas !== 1 ? "s" : ""}`,
    },
    {
      id: "hoursPerDay",
      question: "How many hours per day is your centre open?",
      helper: "e.g., 6:30am–6pm = 11.5 hours",
      component: (
        <NumberInput value={hoursPerDay} onChange={setHoursPerDay} min={6} max={16} />
      ),
      getSummary: () => `${hoursPerDay} hours/day`,
    },
    {
      id: "daysPerWeek",
      question: "How many days per week do you operate?",
      component: (
        <NumberInput value={daysPerWeek} onChange={setDaysPerWeek} min={1} max={7} />
      ),
      getSummary: () => `${daysPerWeek} days/week`,
    },
  ]

  const resultsPanel = (
    <div className="space-y-6">
      {/* Primary Result */}
      <div className="rounded-xl border-2 border-accent bg-accent/10 p-6 text-center">
        <p className="text-sm font-medium text-muted-foreground">Estimated Minimum Weekly Hours</p>
        <p className="mt-2 text-5xl font-bold text-foreground">{results.weeklyHours}</p>
        <p className="mt-1 text-lg text-muted-foreground">hours/week</p>
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-border bg-card p-4 text-center">
          <p className="text-sm text-muted-foreground">Daily Hours</p>
          <p className="text-2xl font-bold text-foreground">{results.dailyHours}</p>
          <p className="text-xs text-muted-foreground">hours/day</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 text-center">
          <p className="text-sm text-muted-foreground">Operating Days</p>
          <p className="text-2xl font-bold text-foreground">{daysPerWeek}</p>
          <p className="text-xs text-muted-foreground">days/week</p>
        </div>
      </div>

      {/* Staffing Recommendation */}
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
        <div className="flex items-start gap-3">
          <Users className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
          <div>
            <p className="text-sm font-medium text-muted-foreground">Recommended Staffing Level</p>
            <p className="mt-1 font-semibold text-foreground">{results.staffingLevel}</p>
          </div>
        </div>
      </div>

      {/* Visual Comparison Bar */}
      <div className="rounded-xl border border-border bg-card p-5">
        <p className="text-sm font-medium text-foreground mb-4">How You Compare</p>
        <div className="space-y-4">
          {/* What most centres allocate */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">What most centres allocate</span>
              <span className="font-medium text-muted-foreground">{results.typicalMin}–{results.typicalMax} hrs/week</span>
            </div>
            <div className="h-4 w-full rounded-full bg-muted overflow-hidden">
              <div 
                className="h-full bg-muted-foreground/40 rounded-full"
                style={{ width: `${Math.min(100, (results.typicalMax / Math.max(results.weeklyHours, results.typicalMax)) * 100)}%` }}
              />
            </div>
          </div>
          {/* What your centre needs */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-foreground font-medium">What your centre actually needs</span>
              <span className="font-bold text-accent">{results.weeklyHours} hrs/week</span>
            </div>
            <div className="h-4 w-full rounded-full bg-muted overflow-hidden">
              <div 
                className="h-full bg-accent rounded-full"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        {results.weeklyHours > results.typicalMax && (
          <p className="mt-4 text-sm text-muted-foreground">
            Your centre needs <strong className="text-foreground">{Math.round((results.weeklyHours / results.typicalMax - 1) * 100)}% more hours</strong> than what most centres currently allocate.
          </p>
        )}
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-muted-foreground leading-relaxed">
        This calculator provides indicative estimates based on simplified modelling. Actual infection prevention hours vary by centre layout, risk profile, and operational factors. These results do not constitute a site assessment. Contact ECEC Workforce Solutions for a precise, site-specific assessment. ECEC Workforce Solutions is a training, certification, and consulting provider. We do not provide cleaning services. ECEC Workforce Solutions accepts no liability for decisions made based on these results.
      </p>

      {/* CTA */}
      <div className="rounded-xl border border-accent bg-accent/10 p-6">
        <p className="font-medium text-foreground">Get an accurate assessment</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Our site assessment considers your specific layout, risk profile, and operational needs.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">
              <Clock className="mr-2 h-4 w-4" />
              Book a Site Assessment
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Enquire Now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <CalculatorWizard
      headline="How Many Infection Prevention Hours Does Your Centre Need?"
      description="Most centres underestimate. Answer a few questions to find out."
      buttonText="Calculate Hours"
      steps={steps}
      resultsPanel={resultsPanel}
      onReset={handleReset}
    />
  )
}
