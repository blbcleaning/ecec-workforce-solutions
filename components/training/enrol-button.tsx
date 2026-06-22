"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const PRICING_ANCHOR = "#pricing"

interface EnrolButtonProps {
  variant?: "primary" | "secondary"
  className?: string
}

export function EnrolButton({ variant = "primary", className = "" }: EnrolButtonProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "select_promotion", {
        event_category: "engagement",
        event_label: "Enrol now - Infection Control Course",
      })
    }
  }

  if (variant === "secondary") {
    return (
      <Button asChild size="lg" variant="outline" className={`border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 px-8 ${className}`}>
        <a href={PRICING_ANCHOR} onClick={handleClick}>
          Enrol now
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    )
  }

  return (
    <Button asChild size="lg" className={`bg-accent text-accent-foreground hover:bg-accent/90 px-8 ${className}`}>
      <a href={PRICING_ANCHOR} onClick={handleClick}>
        Enrol now
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </Button>
  )
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}
