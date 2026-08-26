"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { serviceHref, services } from "@/lib/services"

const navigation = [
  { name: "Home", href: "/" },
  { name: "For Centres", href: "/for-centres" },
  { name: "For Cleaning Companies", href: "/for-cleaning-companies" },
  { name: "Training", href: "/training/infection-control" },
  { name: "Calculators", href: "/tools" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full border-b border-border bg-background">
      <nav className="mx-auto flex max-w-7xl flex-col items-center px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo centered at top */}
        <div className="flex w-full items-center justify-between lg:justify-center">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image 
              src="/images/logo.png" 
              alt="ECEC Workforce Solutions" 
              width={180} 
              height={48}
              className="h-10 w-auto sm:h-12"
              priority
            />
          </Link>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        {/* Navigation and buttons below logo on desktop */}
        <div className="hidden w-full lg:mt-4 lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center gap-x-8">
            <Link href="/" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">Home</Link>
            <div className="group relative">
              <Link href="/services" className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground" aria-haspopup="true">
                Our Services <ChevronDown className="size-4" aria-hidden="true" />
              </Link>
              <div className="invisible absolute left-0 top-full z-20 w-80 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="rounded-xl border border-border bg-background p-2 shadow-lg">
                  <Link href="/services" className="block rounded-lg px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted">All services</Link>
                  {services.map((service) => (
                    <Link key={service.slug} href={serviceHref(service.slug)} className="block rounded-lg px-3 py-2 hover:bg-muted">
                      <span className="block text-sm font-medium text-foreground">{service.shortTitle}</span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">{service.eyebrow}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {navigation.slice(1).map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">{item.name}</Link>
            ))}
          </div>
          <div className="flex gap-x-3">
            <Button asChild variant="outline">
              <Link href="/contact">Enquire Now</Link>
            </Button>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/book">Book a Call</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <Image 
                  src="/images/logo.png" 
                  alt="ECEC Workforce Solutions" 
                  width={160} 
                  height={42}
                  className="h-9 w-auto"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  <Link href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                  <details className="group -mx-3 rounded-lg">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted">
                      Our Services <ChevronDown className="size-5 transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <div className="flex flex-col gap-1 px-3 pb-2 pt-1">
                      <Link href="/services" className="rounded-lg px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>All services</Link>
                      {services.map((service) => (
                        <Link key={service.slug} href={serviceHref(service.slug)} className="rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>{service.shortTitle}</Link>
                      ))}
                    </div>
                  </details>
                  {navigation.slice(1).map((item) => (
                    <Link key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Enquire Now</Link>
                  </Button>
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/book" onClick={() => setMobileMenuOpen(false)}>Book a Call</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
