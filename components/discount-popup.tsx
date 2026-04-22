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
import { Gift, Loader2, CheckCircle } from "lucide-react"

export function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    // Check if user has already seen/dismissed the popup
    const hasSeenPopup = localStorage.getItem("discount-popup-seen")
    if (hasSeenPopup) return

    // Show popup after 5 seconds on the page
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("discount-popup-seen", "true")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/discount-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send discount code")
      }

      setIsSuccess(true)
      localStorage.setItem("discount-popup-seen", "true")
      
      // Close dialog after showing success for 3 seconds
      setTimeout(() => {
        setIsOpen(false)
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-md">
        {isSuccess ? (
          <div className="flex flex-col items-center text-center py-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">Check Your Inbox</h3>
            <p className="mt-2 text-muted-foreground">
              Your 10% discount code has been sent to {email}
            </p>
          </div>
        ) : (
          <>
            <DialogHeader className="text-center sm:text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
                <Gift className="h-7 w-7 text-accent" />
              </div>
              <DialogTitle className="mt-4 text-2xl">Get 10% Off Your First Service</DialogTitle>
              <DialogDescription className="mt-2">
                Enter your email to receive an exclusive discount code valid for 6 months.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="popup-name">Name</Label>
                <Input
                  id="popup-name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="popup-email">Email</Label>
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
                      Sending...
                    </>
                  ) : (
                    "Send My Discount Code"
                  )}
                </Button>
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
