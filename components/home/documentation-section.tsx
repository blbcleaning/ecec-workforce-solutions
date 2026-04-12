import { 
  FileText, 
  AlertCircle, 
  Beaker, 
  ClipboardList, 
  GitBranch, 
  BarChart3 
} from "lucide-react"

const documents = [
  {
    icon: FileText,
    title: "Cleaning logs and verification records",
    description: "Digital time-stamping for complete audit trails",
  },
  {
    icon: AlertCircle,
    title: "Incident reporting and escalation",
    description: "Documentation for rapid response and compliance",
  },
  {
    icon: Beaker,
    title: "Chemical safety and SDS compliance",
    description: "Complete safety data sheet records",
  },
  {
    icon: ClipboardList,
    title: "Staff competency and training registers",
    description: "Track certifications and qualifications",
  },
  {
    icon: GitBranch,
    title: "Governance separation evidence trails",
    description: "Clear documentation of accountability structures",
  },
  {
    icon: BarChart3,
    title: "Quarterly compliance summaries",
    description: "Director and Provider review documents",
  },
]

export function DocumentationSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              WHS-Compliant Documentation Systems
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Complete documentation frameworks that make your centre audit-ready and WHS-compliant. Every document is structured to satisfy both NQF quality area requirements and WHS record-keeping obligations.
            </p>
            <div className="mt-8 rounded-lg border border-accent/30 bg-accent/10 p-4">
              <p className="text-sm font-medium text-foreground">
                When a regulator, auditor, or WHS inspector asks to see evidence — you can produce it immediately.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-4"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <doc.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-card-foreground">{doc.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{doc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
