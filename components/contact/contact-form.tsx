"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle, Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="mt-8 flex flex-col items-center justify-center rounded-lg border border-accent/30 bg-accent/10 p-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
          <CheckCircle className="h-8 w-8 text-accent-foreground" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">Thank you for your enquiry</h3>
        <p className="mt-2 text-muted-foreground">
          We&apos;ll be in touch within 3–5 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name <span className="text-destructive">*</span>
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email <span className="text-destructive">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="bg-background"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="0400 000 000"
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="organisation" className="text-sm font-medium text-foreground">
            Organisation Name
          </label>
          <Input
            id="organisation"
            name="organisation"
            type="text"
            placeholder="Your organisation"
            className="bg-background"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="role" className="text-sm font-medium text-foreground">
            I am a <span className="text-destructive">*</span>
          </label>
          <Select name="role" required>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="centre-director">Centre Director</SelectItem>
              <SelectItem value="approved-provider">Approved Provider</SelectItem>
              <SelectItem value="cleaning-company">Cleaning Company</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label htmlFor="centres" className="text-sm font-medium text-foreground">
            Number of Centres
          </label>
          <Select name="centres">
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="If applicable" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3-5">3-5</SelectItem>
              <SelectItem value="6-10">6-10</SelectItem>
              <SelectItem value="10+">10+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message <span className="text-destructive">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your compliance needs or any questions you have..."
          className="bg-background resize-none"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Enquiry"
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Response time: 3–5 business days
      </p>
    </form>
  )
}
