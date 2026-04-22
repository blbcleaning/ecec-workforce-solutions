"use client"

import { useState } from "react"
import { Mail, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export interface EmailResultsConfig {
  calculatorType: string
  resultsData: Record<string, unknown>
  resultsSummary: string
}

interface EmailResultsFormProps {
  config: EmailResultsConfig
}

export function EmailResultsForm({ config }: EmailResultsFormProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/calculator-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          calculatorType: config.calculatorType,
          resultsData: config.resultsData,
          resultsSummary: config.resultsSummary,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send email")
      }

      setIsSuccess(true)
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="mt-6 rounded-xl border border-green-300 bg-green-50 p-6">
        <div className="flex items-center gap-3">
          <CheckCircle className="h-6 w-6 text-green-600" />
          <div>
            <p className="font-medium text-green-800">Results sent!</p>
            <p className="text-sm text-green-700">
              Check your inbox for your {config.calculatorType} results.
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (!isExpanded) {
    return (
      <div className="mt-6">
        <Button
          variant="outline"
          onClick={() => setIsExpanded(true)}
          className="w-full border-accent text-accent hover:bg-accent/10"
        >
          <Mail className="mr-2 h-4 w-4" />
          Email My Results
        </Button>
      </div>
    )
  }

  return (
    <div className="mt-6 rounded-xl border border-border bg-card p-6 animate-in slide-in-from-top-2 duration-300">
      <div className="flex items-center gap-2 mb-4">
        <Mail className="h-5 w-5 text-accent" />
        <h4 className="font-medium text-foreground">Get your results by email</h4>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email-name">Name</Label>
          <Input
            id="email-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            className="h-11"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email-address">Email</Label>
          <Input
            id="email-address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="h-11"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email-phone">
            Phone <span className="text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="email-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="04XX XXX XXX"
            className="h-11"
          />
        </div>

        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}

        <div className="flex gap-3">
          <Button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "flex-1 bg-accent text-accent-foreground hover:bg-accent/90",
              isSubmitting && "opacity-70"
            )}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Mail className="mr-2 h-4 w-4" />
                Send Results
              </>
            )}
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={() => setIsExpanded(false)}
          >
            Cancel
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground">
          We&apos;ll send your results and may follow up with relevant information. 
          We respect your privacy.
        </p>
      </form>
    </div>
  )
}
