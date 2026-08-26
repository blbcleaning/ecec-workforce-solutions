import { BookOpen, ClipboardCheck, FileCheck, ShieldAlert, Star, type LucideIcon } from "lucide-react"

export type ServiceSummary = {
  number: string
  slug: string
  title: string
  shortTitle: string
  description: string
  eyebrow: string
  icon: LucideIcon
}

export const services: ServiceSummary[] = [
  {
    number: "01",
    slug: "ssow-documentation",
    title: "The Three WHS Documents Every Childcare Centre Must Have",
    shortTitle: "SSOW Documentation",
    description: "Custom-built Safe Systems of Work and the verification records required to demonstrate WHS compliance.",
    eyebrow: "Documentation",
    icon: FileCheck,
  },
  {
    number: "02",
    slug: "compliance-partnership",
    title: "Compliance Partnership",
    shortTitle: "Compliance Partnership",
    description: "Subscription-based training, documentation and implementation support managed from one place.",
    eyebrow: "Ongoing support",
    icon: ShieldAlert,
  },
  {
    number: "03",
    slug: "ssow-building-workshop",
    title: "Safe System of Work Building Workshop",
    shortTitle: "SSOW Building Workshop",
    description: "A practical onsite workshop where your team becomes certified while building the documents they use.",
    eyebrow: "Onsite workshop",
    icon: BookOpen,
  },
  {
    number: "04",
    slug: "whs-compliance-review",
    title: "WHS Compliance Review",
    shortTitle: "WHS Compliance Review",
    description: "A structured review that identifies gaps, prioritises fixes and gives you clear implementation steps.",
    eyebrow: "Independent review",
    icon: ClipboardCheck,
  },
  {
    number: "05",
    slug: "nccs-program",
    title: "NCCS System Integration + 12-Month Performance Monitoring",
    shortTitle: "NCCS Program",
    description: "Our flagship workforce system integration program with implementation and measurable ongoing monitoring.",
    eyebrow: "Flagship program",
    icon: Star,
  },
]

export const serviceHref = (slug: string) => `/services/${slug}`
