import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, BookOpen, Newspaper, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, research, and updates on infection prevention, compliance, and best practices for the ECEC sector.",
}

const blogTopics = [
  {
    icon: FileText,
    title: "Research & Evidence",
    description: "DOI-registered papers and evidence-based insights on infection prevention in childcare",
  },
  {
    icon: Newspaper,
    title: "Industry Updates",
    description: "Latest news on ECEC compliance, WHS regulations, and sector developments",
  },
  {
    icon: BookOpen,
    title: "Practical Guidance",
    description: "How-to guides and best practices for centres and cleaning companies",
  },
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-20 sm:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                Insights for the ECEC Sector
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                Research, guidance, and industry updates on infection prevention, compliance, and workforce solutions for early childhood education and care.
              </p>
            </div>
          </div>
        </section>

        {/* Topics Section */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {blogTopics.map((topic) => (
                <div key={topic.title} className="rounded-xl border border-border bg-card p-6 shadow-sm text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <topic.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-card-foreground">{topic.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{topic.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Link Section */}
        <section className="bg-muted py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Visit Our Blog
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Our full collection of articles, research papers, and sector insights is published on our main blog. Click below to explore all our content.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                  <a 
                    href="https://ccsconsulting.odoo.com/blog" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Read Our Blog
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Opens in a new tab
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Have questions about NCCS?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Get in touch to discuss how we can help your centre or business achieve compliance.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                  <Link href="/book">
                    Book a Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8">
                  <Link href="/contact">Submit an Enquiry</Link>
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
