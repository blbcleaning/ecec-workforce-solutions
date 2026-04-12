import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator, Clock, TrendingUp, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Tools | ECEC Workforce Solutions",
  description: "Free compliance calculators for childcare centres. Calculate your compliance risk, infection prevention hours, and ROI on NCCS certification.",
}

const tools = [
  {
    icon: AlertTriangle,
    title: "Compliance Risk Calculator",
    description: "Answer 5 questions to assess your centre's financial exposure under current ECEC and WHS regulations. See your estimated penalty risk and personal liability gaps.",
    href: "/#compliance-calculator",
    page: "Home Page",
    buttonText: "Check Your Risk",
  },
  {
    icon: Clock,
    title: "Infection Prevention Hours Calculator",
    description: "Most centres underestimate their infection prevention requirements. Calculate how many hours your centre actually needs based on licensed places, room types, and operating hours.",
    href: "/for-centres#hours-calculator",
    page: "For Centres Page",
    buttonText: "Calculate Hours",
  },
  {
    icon: TrendingUp,
    title: "ROI Calculator",
    description: "Does NCCS pay for itself? Calculate your return on investment — most centres see positive ROI by retaining just 2 educators. See your potential savings from reduced turnover and sick days.",
    href: "/for-centres#roi-calculator",
    page: "For Centres Page",
    buttonText: "Calculate ROI",
  },
]

export default function ToolsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-20 sm:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent mb-6">
                <Calculator className="h-4 w-4" />
                Free Compliance Tools
              </div>
              <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                Interactive Compliance Calculators
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Use these free tools to assess your centre&apos;s compliance position, calculate infection prevention requirements, and understand the ROI of NCCS certification.
              </p>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {tools.map((tool) => (
                <div 
                  key={tool.title} 
                  className="flex flex-col rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:border-accent/50 hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                    <tool.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h2 className="mt-6 text-xl font-semibold text-card-foreground">
                    {tool.title}
                  </h2>
                  <p className="mt-3 flex-1 text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Located on: {tool.page}
                    </span>
                  </div>
                  <Button asChild className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href={tool.href}>
                      {tool.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How They Work */}
        <section className="bg-muted py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                How Our Calculators Work
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Simple, step-by-step wizards that give you instant results
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "1", title: "Click to Start", desc: "Each calculator starts as a compact card. Click the button to expand." },
                { step: "2", title: "Answer Questions", desc: "One question at a time with large, mobile-friendly inputs." },
                { step: "3", title: "Edit Anytime", desc: "Previous answers collapse into summaries you can tap to edit." },
                { step: "4", title: "Instant Results", desc: "All calculations update live. Change any input and see results immediately." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                    {item.step}
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Need a personalised assessment?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our calculators give you estimates. Book a call for a detailed analysis of your specific situation.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                  <Link href="/contact">
                    Book a Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8">
                  <Link href="/contact">Enquire Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
