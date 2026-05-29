"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const CHECKOUT_URL = "https://4ae9-info.systeme.io/early-childhood-education?utm_source=ececworkforce&utm_medium=website&utm_campaign=infection_control_course"

interface EnrolButtonProps {
  variant?: "primary" | "secondary"
  className?: string
}

export function EnrolButton({ variant = "primary", className = "" }: EnrolButtonProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "click", {
        event_category: "outbound",
        event_label: "Enrol now - Infection Control Course",
        transport_type: "beacon",
      })
    }
  }

  if (variant === "secondary") {
    return (
      <Button asChild size="lg" variant="outline" className={`border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 px-8 ${className}`}>
        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
          Enrol now
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    )
  }

  return (
    <Button asChild size="lg" className={`bg-accent text-accent-foreground hover:bg-accent/90 px-8 ${className}`}>
      <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
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
