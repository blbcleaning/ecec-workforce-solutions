import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, FileCheck, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Big Block Heading - Top Left */}
      <Link 
        href="/for-centres" 
        className="absolute top-6 left-4 sm:left-6 lg:left-8 z-10 block bg-accent px-4 py-2 sm:px-6 sm:py-3 transition-transform hover:translate-x-1"
      >
        <span className="text-sm sm:text-base lg:text-lg font-bold tracking-wide text-accent-foreground uppercase">
          For Centres
        </span>
      </Link>
      
      {/* Big Block Heading - Top Right */}
      <Link 
        href="/for-cleaning-companies" 
        className="absolute top-6 right-4 sm:right-6 lg:right-8 z-10 block bg-primary-foreground px-4 py-2 sm:px-6 sm:py-3 transition-transform hover:-translate-x-1"
      >
        <span className="text-sm sm:text-base lg:text-lg font-bold tracking-wide text-orange-500 uppercase">
          For Cleaning Company
        </span>
      </Link>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
            <span className="block">Educators Educate. Cleaners Clean.</span>
            <span className="block mt-2">We Train And Certify The Workforce That Makes It Possible.</span>
          </h1>
          <p className="mt-6 text-pretty text-xl leading-relaxed text-primary-foreground/90 sm:text-2xl font-semibold">
            Reduce educator workload. Improve retention. Achieve audit-ready compliance.
          </p>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/70 sm:text-xl font-normal">
            A compliance-based operating system for childcare—implemented through workforce training, certification, and verification.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
              <Link href="/book">
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 px-8">
              <Link href="/contact">Enquire Now</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex items-center gap-4 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
              <Shield className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <p className="font-semibold text-primary-foreground">NCCS Certified</p>
              <p className="text-sm text-primary-foreground/70">Childcare Infection Prevention</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
              <FileCheck className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <p className="font-semibold text-primary-foreground">Audit-Ready</p>
              <p className="text-sm text-primary-foreground/70">Documentation systems</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
              <Award className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <p className="font-semibold text-primary-foreground">WHS Compliant</p>
              <p className="text-sm text-primary-foreground/70">Legal protection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
