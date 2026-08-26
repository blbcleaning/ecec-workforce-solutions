import type { Metadata } from "next"
import Link from "next/link"
import { AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { serviceHref, services } from "@/lib/services"

export const metadata: Metadata = {
  title: "WHS Compliance Services for Early Childhood Education",
  description: "Explore ECEC WHS documentation, compliance partnerships, onsite SSOW training, compliance reviews and the NCCS flagship program.",
}

export default async function ServicesPage({ searchParams }: { searchParams: Promise<{ checkout?: string }> }) {
  const { checkout } = await searchParams

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {checkout === "success" && (
          <div className="bg-accent/10 px-4 py-3 text-center text-sm font-medium text-accent">
            <CheckCircle2 className="mr-2 inline size-4" /> Payment successful. We&apos;ll be in touch shortly.
          </div>
        )}
        <section className="relative overflow-hidden bg-primary py-20 sm:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent">
                <AlertTriangle className="size-4" /> Biological Hazards Code — March 2026
              </div>
              <p className="mt-8 font-mono text-sm font-semibold uppercase tracking-widest text-accent">Our services</p>
              <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                WHS compliance built for the realities of early childhood education.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
                Choose focused documentation, training, review or full operational support. Every service is designed to turn WHS obligations into daily practice your team can understand and follow.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">Five ways we can help</p>
                <h2 className="mt-3 text-balance text-3xl font-bold text-foreground sm:text-4xl">Select the support your centre needs</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">Start with a defined compliance gap or talk with us about the right pathway for your centre.</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Link key={service.slug} href={serviceHref(service.slug)} className={`group flex min-h-72 flex-col justify-between rounded-2xl border border-border bg-card p-7 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${index === 4 ? "md:col-span-2" : ""}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Icon className="size-6" /></div>
                      <span className="font-mono text-sm text-muted-foreground">{service.number}</span>
                    </div>
                    <div className="mt-12">
                      <p className="text-sm font-semibold text-accent">{service.eyebrow}</p>
                      <h3 className="mt-2 max-w-2xl text-balance text-2xl font-bold text-card-foreground">{service.title}</h3>
                      <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{service.description}</p>
                      <span className="mt-6 inline-flex items-center font-semibold text-foreground group-hover:text-accent">Explore service <ArrowRight className="ml-2 size-4" /></span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-muted py-16 sm:py-20">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
            <div><h2 className="text-balance text-3xl font-bold text-foreground">Not sure where to start?</h2><p className="mt-3 text-muted-foreground">We&apos;ll help identify the most useful next step for your centre.</p></div>
            <div className="flex flex-col gap-3 sm:flex-row"><Button asChild size="lg"><Link href="/book">Book a call <ArrowRight data-icon="inline-end" /></Link></Button><Button asChild size="lg" variant="outline"><Link href="/contact">Submit an enquiry</Link></Button></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
