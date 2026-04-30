"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ShieldAlert, Loader2, CheckCircle } from "lucide-react"

export function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    // Check if user has already seen/dismissed the popup
    const hasSeenPopup = localStorage.getItem("whs-popup-seen")
    if (hasSeenPopup) return

    // Show popup after 5 seconds on the page
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("whs-popup-seen", "true")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/discount-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: "" }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to book WHS check")
      }

      setIsSuccess(true)
      localStorage.setItem("whs-popup-seen", "true")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-lg">
        {isSuccess ? (
          <div className="flex flex-col py-4 max-h-[70vh] overflow-y-auto">
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground text-center">
              Thanks — your WHS Compliance Health Check is now booked.
            </h3>
            <div className="mt-4 text-sm text-muted-foreground space-y-3">
              <p>
                Over the next few days, I&apos;ll review your centre&apos;s current WHS paperwork, risk registers, biohazard controls, training evidence, and day-to-day practices against the 2026 WHS Code and cross-regulatory requirements.
              </p>
              <p>
                Because this is a <strong className="text-foreground">personalised $500 assessment</strong>, I&apos;ll be in touch shortly to confirm a few details so your report is accurate to your service&apos;s size, layout, and operating model.
              </p>
              <p className="font-medium text-foreground">Directors are using this check to:</p>
              <ul className="list-disc list-inside space-y-1 ml-1">
                <li>identify gaps they didn&apos;t know existed</li>
                <li>understand the difference between NQF and WHS obligations</li>
                <li>prepare for cross-regulatory inspections</li>
                <li>reduce personal liability exposure</li>
              </ul>
              <p>
                You&apos;ll receive your tailored findings before 30 May while the offer is still free.
              </p>
              <p className="text-xs text-muted-foreground/80">
                If you need anything urgently, just reply to the confirmation email.
              </p>
            </div>
            <Button
              type="button"
              onClick={handleClose}
              className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader className="text-center sm:text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10">
                <ShieldAlert className="h-7 w-7 text-destructive" />
              </div>
              <DialogTitle className="mt-4 text-xl leading-tight">
                Most Centres Are NQF Compliant
                <span className="block text-lg font-medium text-muted-foreground mt-1">
                  But Most Are <em>Not</em> WHS Compliant
                </span>
              </DialogTitle>
              <DialogDescription className="mt-3 text-left space-y-3">
                <p>
                  And many directors don&apos;t realise the difference — until a regulator does.
                </p>
                <p className="font-medium text-foreground">
                  Cross-regulatory blitzes are already underway.
                </p>
                <p className="text-sm">
                  Your safe system of work and hierarchy of controls must be updated to ensure controls are adequate for a biohazardous workplace.
                </p>
                <p className="font-medium text-foreground">The consequences are real:</p>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li>Major fines</li>
                  <li>Enforceable undertakings</li>
                  <li>Service closures</li>
                  <li>In high-risk breaches, <strong>criminal charges and jail</strong></li>
                </ul>
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h4 className="font-semibold text-foreground text-center">
                Free WHS Compliance Health Check
              </h4>
              <p className="text-sm text-center text-muted-foreground mt-1">
                Valued at $500 — free until 30 May
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="popup-email">Enter your email to book your personalised WHS compliance check</Label>
                <Input
                  id="popup-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}
              <div className="flex flex-col gap-2 pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Booking...
                    </>
                  ) : (
                    "Claim My Free $500 WHS Check"
                  )}
                </Button>
                <p className="text-xs text-center text-muted-foreground">Offer ends 30 May</p>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="w-full text-muted-foreground"
                >
                  No thanks
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
