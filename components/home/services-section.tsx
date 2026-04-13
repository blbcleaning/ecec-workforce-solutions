import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  GraduationCap, 
  UserCheck, 
  Briefcase, 
  Users, 
  ClipboardCheck, 
  Calendar, 
  Search, 
  Monitor 
} from "lucide-react"

const services = [
  {
    icon: GraduationCap,
    title: "NCCS Infection Prevention Specialist Certification",
    description: "8-hour training program (or 4-hour RPL for experienced professionals). Individual certificate issued on completion. Creates a competent person under WHS legislation.",
  },
  {
    icon: UserCheck,
    title: "NCCS Supervisor Certification",
    description: "8-hour training. Verification procedures, documentation review, escalation protocols. Establishes the governance separation required for defensible compliance.",
  },
  {
    icon: Briefcase,
    title: "NCCS Director Governance Briefing",
    description: "4-hour session covering your PCBU and Officer due diligence obligations, the Accountability Loop, and how to use NCCS certification as Assessment & Rating evidence.",
  },
  {
    icon: Users,
    title: "Educator Awareness Training",
    description: "1-hour group session. Role clarity, escalation procedures, and the boundary between hygiene resets and scheduled infection prevention work.",
  },
  {
    icon: Search,
    title: "Site Assessment",
    description: "On-site walk-through, risk zone classification, and infection prevention hours calculation using evidence-based time-modelling methodology.",
  },
  {
    icon: Calendar,
    title: "Custom Infection Prevention Schedule",
    description: "Built for your centre's layout, licensed capacity, room types, and operating hours.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Audit",
    description: "Full audit against NCCS standards. Site inspection, documentation review, staff interviews, and governance verification. Re-certification issued on successful completion.",
  },
  {
    icon: Monitor,
    title: "Online Compliance System Setup",
    description: "Real-time infection prevention tracker, digital logs, and compliance dashboard.",
  },
]

export function ServicesSection() {
  return (
    <section className="bg-muted py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Complete Compliance Solutions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            End-to-end compliance services that directly address your obligations under both the NQF and WHS legislation. Every service is designed to close compliance gaps, create defensible documentation, and protect Directors and Approved Providers from personal liability exposure.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-accent/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-accent/20">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <Button asChild variant="link" className="mt-4 h-auto p-0 text-accent">
                <Link href="/contact">Enquire for pricing</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
