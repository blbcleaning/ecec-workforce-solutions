"use client"

import { useState, useCallback, ReactNode } from "react"
import { ChevronRight, ChevronDown, Edit3, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { EmailResultsForm, type EmailResultsConfig } from "./email-results-form"

export interface WizardStep {
  id: string
  question: string
  helper?: string
  component: ReactNode
  getSummary: () => string
}

interface CalculatorWizardProps {
  headline: string
  description: string
  buttonText: string
  steps: WizardStep[]
  resultsPanel: ReactNode
  onReset?: () => void
  emailResultsConfig?: EmailResultsConfig
}

export function CalculatorWizard({
  headline,
  description,
  buttonText,
  steps,
  resultsPanel,
  onReset,
  emailResultsConfig,
}: CalculatorWizardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())
  const [showResults, setShowResults] = useState(false)
  const [editingStep, setEditingStep] = useState<number | null>(null)

  const handleStart = useCallback(() => {
    setIsExpanded(true)
    setCurrentStep(0)
    setCompletedSteps(new Set())
    setShowResults(false)
    setEditingStep(null)
  }, [])

  const handleNext = useCallback(() => {
    const newCompleted = new Set(completedSteps)
    newCompleted.add(currentStep)
    setCompletedSteps(newCompleted)

    if (editingStep !== null) {
      setEditingStep(null)
      if (completedSteps.size === steps.length) {
        setShowResults(true)
      }
    } else if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowResults(true)
    }
  }, [currentStep, steps.length, completedSteps, editingStep])

  const handleEditStep = useCallback((stepIndex: number) => {
    setEditingStep(stepIndex)
    setShowResults(false)
  }, [])

  const handleReset = useCallback(() => {
    setIsExpanded(false)
    setCurrentStep(0)
    setCompletedSteps(new Set())
    setShowResults(false)
    setEditingStep(null)
    onReset?.()
  }, [onReset])

  const activeStepIndex = editingStep !== null ? editingStep : currentStep
  const progressPercentage = showResults 
    ? 100 
    : ((completedSteps.size) / steps.length) * 100

  // Collapsed state
  if (!isExpanded) {
    return (
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-accent/50 hover:shadow-md">
        <h3 className="text-xl font-semibold text-card-foreground">{headline}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <Button 
          onClick={handleStart}
          className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90"
        >
          {buttonText}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    )
  }

  // Expanded state
  return (
    <div className="rounded-xl border border-accent/30 bg-card shadow-md transition-all duration-500">
      {/* Header */}
      <div className="border-b border-border p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-card-foreground">{headline}</h3>
          <Button variant="ghost" size="sm" onClick={handleReset}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>
        {/* Progress bar */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Progress</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div 
              className="h-full bg-accent transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Completed steps summary */}
      <div className="divide-y divide-border">
        {steps.map((step, index) => {
          const isCompleted = completedSteps.has(index)
          const isActive = activeStepIndex === index && !showResults
          const isEditing = editingStep === index

          if (!isCompleted && !isActive) return null

          return (
            <div 
              key={step.id}
              className={cn(
                "transition-all duration-300",
                isActive ? "bg-muted/50" : "bg-card"
              )}
            >
              {/* Collapsed summary for completed steps */}
              {isCompleted && !isEditing && (
                <button
                  onClick={() => handleEditStep(index)}
                  className="flex w-full items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-medium text-accent-foreground">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{step.question}</p>
                      <p className="font-medium text-foreground">{step.getSummary()}</p>
                    </div>
                  </div>
                  <Edit3 className="h-4 w-4 text-muted-foreground" />
                </button>
              )}

              {/* Expanded step for active/editing */}
              {isActive && (
                <div className="p-6 animate-in slide-in-from-top-2 duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-medium text-accent-foreground">
                      {index + 1}
                    </div>
                    <p className="font-medium text-foreground">{step.question}</p>
                  </div>
                  <div className="ml-11">
                    {step.helper && (
                      <p className="mb-4 text-sm text-muted-foreground">{step.helper}</p>
                    )}
                    {step.component}
                    <Button 
                      onClick={handleNext}
                      className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      {index < steps.length - 1 ? "Next" : "Calculate"}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Results panel */}
      {showResults && (
        <div className="border-t border-border bg-muted/30 p-6 animate-in slide-in-from-bottom-2 duration-500">
          <div className="flex items-center gap-2 mb-4">
            <ChevronDown className="h-5 w-5 text-accent" />
            <h4 className="font-semibold text-foreground">Your Results</h4>
          </div>
          {resultsPanel}
          {emailResultsConfig && (
            <EmailResultsForm config={emailResultsConfig} />
          )}
        </div>
      )}
    </div>
  )
}
