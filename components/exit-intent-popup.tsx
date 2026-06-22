"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Gift, Clock } from "lucide-react"
import { getTimeLeft, PROMO_CTA_HREF } from "@/lib/promo"

const OFFERS = [
  {
    title: "Full Digital SSOW Set",
    bonus: "Digital Cleaning Management Workbook",
    value: "$80",
  },
  {
    title: "Fully Customised + Printed SSOWs ($999)",
    bonus: "Printed Cleaning Management Workbook",
    value: "$180",
  },
]

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Don't run if already shown this session or the promo has ended.
    if (sessionStorage.getItem("eofy-exit-popup-seen") === "true") return
    if (getTimeLeft().expired) return

    let armed = false
    // Arm after a short delay so it doesn't fire on initial load.
    const armTimer = setTimeout(() => {
      armed = true
    }, 4000)

    const trigger = () => {
      if (!armed) return
      setIsOpen(true)
      sessionStorage.setItem("eofy-exit-popup-seen", "true")
      cleanup()
    }

    // Desktop: mouse leaves toward the top of the viewport (heading for tabs/close).
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) trigger()
    }
    // Mobile: fast upward scroll after engaging, as a leave proxy.
    let lastY = window.scrollY
    const handleScroll = () => {
      const y = window.scrollY
      if (lastY - y > 60 && y < 200) trigger()
      lastY = y
    }

    function cleanup() {
      document.removeEventListener("mouseout", handleMouseOut)
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(armTimer)
    }

    document.addEventListener("mouseout", handleMouseOut)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return cleanup
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center sm:text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
            <Gift className="h-7 w-7 text-accent" />
          </div>
          <DialogTitle className="mt-4 text-2xl text-balance">Wait — claim your free workbook</DialogTitle>
          <DialogDescription className="mt-2 text-pretty">
            Before you go: our EOFY offer ends 30 June. Buy a SSOW set now and get the Cleaning Management Workbook
            included free.
          </DialogDescription>
        </DialogHeader>

        <ul className="mt-4 space-y-3">
          {OFFERS.map((offer) => (
            <li key={offer.title} className="rounded-lg border border-border bg-muted/40 p-3 text-left">
              <p className="text-sm font-medium text-foreground">{offer.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Includes the <span className="font-semibold text-foreground">{offer.bonus}</span> free
                <span className="ml-1 text-xs text-muted-foreground">(valued at {offer.value})</span>
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-2 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Offer ends 30 June — don&apos;t miss out.</span>
        </div>

        <div className="mt-2 flex flex-col gap-2">
          <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href={PROMO_CTA_HREF} onClick={() => setIsOpen(false)}>
              View SSOW packages
            </Link>
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={() => setIsOpen(false)}
            className="w-full text-muted-foreground"
          >
            No thanks
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
