"use client"

import { usePathname } from "next/navigation"

const pageNames: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/tools": "Calculators",
  "/for-centres": "For Centres",
  "/for-cleaning-companies": "For Cleaning Companies",
  "/book": "Book a Call",
  "/privacy-policy": "Privacy Policy",
  "/terms": "Terms & Conditions",
}

export function PageIndicator() {
  const pathname = usePathname()
  const pageName = pageNames[pathname] || "Page"

  return (
    <div className="fixed top-4 left-4 z-50 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground shadow-md">
      {pageName}
    </div>
  )
}
