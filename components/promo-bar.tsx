"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { getTimeLeft, PROMO_CTA_HREF, type TimeLeft } from "@/lib/promo"

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

export function PromoBar() {
  // null until mounted, so server and first client render match (no hydration mismatch)
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
  const [dismissed, setDismissed] = useState(true)

  useEffect(() => {
    const wasDismissed = sessionStorage.getItem("eofy-promo-bar-dismissed") === "true"
    setDismissed(wasDismissed)

    const tick = () => setTimeLeft(getTimeLeft())
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleDismiss = () => {
    setDismissed(true)
    sessionStorage.setItem("eofy-promo-bar-dismissed", "true")
  }

  // Hide until mounted, if dismissed, or once the deadline passes.
  if (!timeLeft || timeLeft.expired || dismissed) return null

  return (
    <div className="sticky top-0 z-[60] w-full bg-accent text-accent-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-sm sm:px-6 lg:px-8">
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-medium text-balance">
          <span aria-hidden="true">⏳</span>
          <span>
            <span className="font-bold">EOFY Special</span> — free Cleaning Management Workbook with every SSOW set.
          </span>
          <Link
            href={PROMO_CTA_HREF}
            className="inline-flex items-center rounded-full bg-accent-foreground px-3 py-0.5 font-semibold text-accent transition-opacity hover:opacity-90"
          >
            Claim offer
          </Link>
          <span
            className="inline-flex items-center gap-1 font-mono tabular-nums"
            aria-label={`Offer ends in ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds`}
          >
            <span className="rounded bg-accent-foreground/15 px-1.5 py-0.5">{timeLeft.days}d</span>
            <span className="rounded bg-accent-foreground/15 px-1.5 py-0.5">{pad(timeLeft.hours)}h</span>
            <span className="rounded bg-accent-foreground/15 px-1.5 py-0.5">{pad(timeLeft.minutes)}m</span>
            <span className="rounded bg-accent-foreground/15 px-1.5 py-0.5">{pad(timeLeft.seconds)}s</span>
          </span>
        </p>
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute right-3 inline-flex h-6 w-6 items-center justify-center rounded-full transition-colors hover:bg-accent-foreground/15"
          aria-label="Dismiss promotion"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
