import { AlertCircle, UserX, FileText, ShieldAlert } from "lucide-react"

const points = [
  {
    icon: UserX,
    text: "Educators should no longer be performing cleaning",
  },
  {
    icon: AlertCircle,
    text: "Cleaning must be a defined, qualified function",
  },
  {
    icon: FileText,
    text: "Compliance must be structured, documented, and verifiable",
  },
  {
    icon: ShieldAlert,
    text: "Centres without this are exposed to risk",
  },
]

export function WhatThisMeansSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            What This Means for Your Centre
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            This is no longer an operational choice—it&apos;s a compliance requirement.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <point.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-base font-medium text-card-foreground leading-snug">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
