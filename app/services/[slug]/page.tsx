import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle, Gauge, ShieldAlert, TrendingDown, Users } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { serviceHref, services } from "@/lib/services"

const ssowGroups = [
  { title: "Routine cleaning", items: ["Toilet and children's bathroom clean and disinfect", "High-touch surface disinfection", "Toy cleaning and sanitation", "Cot, mattress and sleep-mat sanitation", "Kitchen and food-prep surface cleaning", "Floor cleaning and mopping"] },
  { title: "Supporting hygiene", items: ["Cleaning equipment hygiene and maintenance", "Chemical mixing, decanting and dilution", "Linen and laundry management"] },
  { title: "Biohazard and outbreak response", items: ["Nappy change biohazard response", "Vomit spill response", "Blood spill response", "Urine and faeces spill response", "Outbreak and enhanced disinfection clean"] },
  { title: "Verification documents", items: ["Biohazard Incident Response SSOW", "Cleaning Management Workbook with verification and reporting logs"] },
]

const partnershipBenefits = [
  "Unlimited certified online Infection Control & Biohazard Management training — valued at $2,000 for 25 staff",
  "Unlimited annual refresher training — valued at $1,200 for every 25 staff",
  "Enrol new hires before they start so they are certified from day one",
  "Manage WHS training and compliance documentation from one dedicated portal",
  "Manager self-service enrolment and staff training monitoring",
  "Complete documentation library, updated with legislative changes",
  "A dedicated support manager for implementation and customisation",
]

const partnershipPricing = [
  ["Up to 25 staff", "$300/month", "$2,880/year", "Save $720"],
  ["Up to 50 staff", "$500/month", "$4,800/year", "Save $1,200"],
  ["Up to 100 staff", "$700/month", "$6,720/year", "Save $1,680"],
  ["Over 100 staff", "Contact us", "Enterprise rates", "Tailored pricing"],
]

const workshopOutcomes = ["70%+ better knowledge retention compared with theory-based training", "35%+ higher compliance rates from team-built policies", "80–100 hours saved by not building documents from scratch", "3-in-1 Infection Control, SSOW and Implementation Training", "Designed to meet WHS team consultation requirements"]
const nccsPillars = [
  ["Educator Role Restoration", "Remove non-educator duties and return educators to direct care, curriculum and meaningful practice."],
  ["Certified Cleaning-Team Training", "Build consistent infection control and biohazard management aligned with WHS law."],
  ["Management Implementation", "Embed safe work practices and governance structures that stand up to regulatory scrutiny."],
]

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)
  if (!service) return {}
  return { title: service.title, description: service.description }
}

function Checklist({ items }: { items: string[] }) {
  return <ul className="flex flex-col gap-3">{items.map((item) => <li key={item} className="flex items-start gap-3"><CheckCircle className="mt-0.5 size-5 shrink-0 text-accent" /><span className="leading-relaxed text-foreground">{item}</span></li>)}</ul>
}

function ServiceContent({ slug }: { slug: string }) {
  if (slug === "ssow-documentation") return <>
    <section className="py-16 sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><h2 className="text-3xl font-bold text-foreground">Documentation that proves risks are managed in advance</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">Beyond your QIP and childcare policies, Safe Systems of Work are a legal WHS requirement. They show that your centre has identified hazards, assessed harm and predetermined safe procedures.</p><p className="mt-4 font-semibold text-foreground">We have custom-built 14 Safe Systems of Work, plus the verification documents required under WHS law.</p></div><div className="mt-10 grid gap-5 md:grid-cols-2">{ssowGroups.map((group) => <div key={group.title} className="rounded-2xl border border-border bg-card p-6"><h3 className="text-xl font-bold text-card-foreground">{group.title}</h3><div className="mt-5"><Checklist items={group.items} /></div></div>)}</div><Button asChild size="lg" className="mt-8"><a href="https://compliance.ececworkforcesolutions.au/orderssow" target="_blank" rel="noopener noreferrer">Purchase SSOW <ArrowRight data-icon="inline-end" /></a></Button></div></section>
  </>

  if (slug === "compliance-partnership") return <>
    <section className="py-16 sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><h2 className="text-3xl font-bold text-foreground">Training, documentation and support in one place</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">Give your team ongoing access to certified training, current compliance documentation and dedicated implementation support without a large upfront training cost.</p></div><div className="mt-10 grid gap-4 md:grid-cols-2"><Checklist items={partnershipBenefits} /></div><div className="mt-14 flex flex-wrap items-center justify-between gap-4"><h2 className="text-3xl font-bold text-foreground">Partnership pricing</h2><span className="rounded-full bg-accent/10 px-4 py-2 text-sm font-bold text-accent">Pay annually and save 20%</span></div><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{partnershipPricing.map(([team, monthly, annual, saving]) => <div key={team} className="rounded-2xl border border-border bg-card p-6"><p className="text-sm text-muted-foreground">{team}</p><p className="mt-3 text-2xl font-bold text-card-foreground">{monthly}</p><p className="mt-5 border-t border-border pt-5 font-semibold text-card-foreground">{annual}</p><p className="mt-1 text-sm font-semibold text-accent">{saving}</p></div>)}</div><div className="mt-5 flex flex-col gap-2 rounded-xl bg-accent/10 p-5 sm:flex-row sm:justify-between"><strong>30-day money-back guarantee</strong><span>Initial 12-month contract, then no lock-in.</span></div><Button asChild size="lg" className="mt-8"><a href="https://compliance.ececworkforcesolutions.au/checkout" target="_blank" rel="noopener noreferrer">Start your compliance partnership <ArrowRight data-icon="inline-end" /></a></Button></div></section>
  </>

  if (slug === "ssow-building-workshop") return <>
    <section className="py-16 sm:py-20"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><h2 className="text-3xl font-bold text-foreground">Compliance everyone understands because they helped create it</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">Skip generic theory. Your staff become certified by building the documents that support their daily actions through onsite, practice-based group training.</p><div className="mt-8"><Checklist items={["SSOW Building Workshop", "Onsite certified group training", "Infection Control & Biohazard Management"]} /></div><p className="mt-8 rounded-xl bg-accent/10 p-5 font-semibold text-foreground">Outcome: Real compliance. Real understanding. Real time saved.</p></div><div><div className="rounded-2xl bg-primary p-8 text-primary-foreground"><p className="font-mono text-sm uppercase tracking-wider text-primary-foreground/70">4-hour onsite workshop</p><p className="mt-3 text-5xl font-bold">$1,500</p><p className="mt-2 text-primary-foreground/80">Per centre, maximum 20 staff</p><div className="mt-6 flex flex-col gap-2 border-t border-primary-foreground/20 pt-6 font-bold text-accent"><p>Includes templates valued at $600</p><p>Plus Cleaning Management Workbook valued at $200</p></div></div><div className="mt-8"><Checklist items={workshopOutcomes} /></div><Button asChild size="lg" className="mt-8"><a href="https://compliance.ececworkforcesolutions.au/onsitessowbuilding" target="_blank" rel="noopener noreferrer">Book the workshop <ArrowRight data-icon="inline-end" /></a></Button></div></div></section>
  </>

  if (slug === "whs-compliance-review") return <>
    <section className="py-16 sm:py-20"><div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><h2 className="text-3xl font-bold text-foreground">Know your gaps before a regulator finds them</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">A structured review of your SSOW, training records and documentation against the March 2026 biological hazards standard. You leave with a gap list, priority fixes and implementation steps — not just a report.</p><div className="mt-8"><Checklist items={["Current documentation and SSOW review", "Training-record and evidence check", "Prioritised compliance gaps", "Practical implementation steps"]} /></div></div><div className="rounded-2xl border border-border bg-card p-7"><div className="flex justify-between border-b border-border pb-4"><h3 className="font-bold">Packages</h3><span className="text-sm text-muted-foreground">ex GST</span></div>{[["Health Check", "1 hour + written summary", "$450"], ["Full Compliance Review", "Gap check + action plan", "$1,350"]].map(([name, detail, price]) => <div key={name} className="flex items-end justify-between gap-5 border-b border-border py-6"><div><p className="font-semibold text-card-foreground">{name}</p><p className="mt-1 text-sm text-muted-foreground">{detail}</p></div><p className="text-2xl font-bold">{price}</p></div>)}<Button asChild size="lg" className="mt-7 w-full"><Link href="/book">Book a compliance review <ArrowRight data-icon="inline-end" /></Link></Button></div></div></section>
  </>

  return <>
    <section className="py-16 sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><h2 className="text-3xl font-bold text-foreground">The only ECEC workforce solution that measures what it claims</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">NCCS re-imagines your centre&apos;s operational structure to support and protect educators. Full system integration and 12-month monitoring create a compliant, efficient and sustainable operating model.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{nccsPillars.map(([title, description]) => <div key={title} className="rounded-2xl border border-border bg-card p-6"><h3 className="text-xl font-bold text-card-foreground">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{description}</p></div>)}</div><div className="mt-12 grid gap-5 lg:grid-cols-2"><div className="rounded-2xl bg-primary p-8 text-primary-foreground"><p className="font-mono text-sm uppercase tracking-wider text-primary-foreground/70">Program investment</p><p className="mt-3 text-4xl font-bold">$8,000–$10,000 <span className="text-base font-normal">ex GST</span></p><p className="mt-5 text-primary-foreground/80">Payment plan: $2,000 upfront, then approximately $500–$667 weekly for 12 weeks. Monitoring is $100/month per centre.</p></div><div className="rounded-2xl border border-accent/30 bg-accent/10 p-8"><TrendingDown className="size-8 text-accent" /><h3 className="mt-4 text-xl font-bold">Potential R&amp;D Tax Incentive</h3><p className="mt-3 leading-relaxed text-muted-foreground">Eligible organisations may offset up to 43.5% of eligible expenditure. Confirm eligibility with your accountant or tax adviser.</p></div></div><div className="mt-12 grid gap-4 sm:grid-cols-2">{[{icon:Users,text:"Centres managing high turnover or chronic staff shortages"},{icon:Gauge,text:"Services needing a structured, evidence-backed response"},{icon:ShieldAlert,text:"Centres under NQF or WHS pressure"},{icon:CheckCircle,text:"Providers seeking accreditation and ongoing monitoring"}].map(({icon:Icon,text}) => <div key={text} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"><Icon className="size-6 shrink-0 text-accent" /><span>{text}</span></div>)}</div><div className="mt-10 flex gap-3"><Button asChild size="lg"><Link href="/book">Book a call <ArrowRight data-icon="inline-end" /></Link></Button><Button asChild size="lg" variant="outline"><Link href="/contact">Submit an enquiry</Link></Button></div></div></section>
  </>
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)
  if (!service) notFound()
  const Icon = service.icon
  return <div className="flex min-h-screen flex-col bg-background"><SiteHeader /><main className="flex-1"><section className="bg-primary py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Link href="/services" className="inline-flex items-center text-sm font-semibold text-primary-foreground/70 hover:text-accent"><ArrowLeft className="mr-2 size-4" />All services</Link><div className="mt-12 max-w-4xl"><div className="flex size-14 items-center justify-center rounded-xl bg-accent text-accent-foreground"><Icon className="size-7" /></div><p className="mt-7 font-mono text-sm font-semibold uppercase tracking-widest text-accent">Service {service.number} · {service.eyebrow}</p><h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">{service.title}</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">{service.description}</p></div></div></section><ServiceContent slug={slug} /><section className="border-t border-border bg-muted py-14"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p className="font-mono text-sm font-semibold uppercase tracking-wider text-accent">Explore another service</p><div className="mt-5 flex flex-wrap gap-3">{services.filter((item) => item.slug !== slug).map((item) => <Button key={item.slug} asChild variant="outline"><Link href={serviceHref(item.slug)}>{item.shortTitle}</Link></Button>)}</div></div></section></main><SiteFooter /></div>
}
