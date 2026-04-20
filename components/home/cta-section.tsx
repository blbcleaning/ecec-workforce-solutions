import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-primary px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-lg text-primary-foreground/80">
              If you&apos;re looking to reduce workload, strengthen compliance, and stabilise your workforce—this is where to start.
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl lg:text-4xl">
              Start With a Baseline Assessment
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Understand your centre&apos;s current risk, compliance position, and workload distribution.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                <Link href="/book">
                  Book a Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 px-8">
                <Link href="/contact">Submit an Enquiry</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
