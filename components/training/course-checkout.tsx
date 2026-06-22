"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, Loader2, Minus, Plus } from "lucide-react"
import { createCourseCheckout, type SsowProduct } from "@/app/actions/stripe"

function formatPrice(amount: number | null, currency: string) {
  if (amount == null) return "Contact us"
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: currency.toUpperCase(),
    minimumFractionDigits: amount % 100 === 0 ? 0 : 2,
  }).format(amount / 100)
}

function EnrolNowButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      disabled={pending}
      className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {"Redirecting…"}
        </>
      ) : (
        <>
          Enrol now
          <ArrowRight className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  )
}

function CourseCard({ product }: { product: SsowProduct }) {
  const min = product.minQuantity ?? (product.perPerson ? 5 : 1)
  const [seats, setSeats] = useState(min)

  return (
    <div className="flex flex-col rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 text-center">
      <h3 className="text-lg font-semibold text-primary-foreground">{product.name}</h3>
      {product.description ? (
        <p className="mt-1 text-sm leading-relaxed text-primary-foreground/70">{product.description}</p>
      ) : null}
      <p className="mt-3 text-2xl font-bold text-accent">
        {formatPrice(product.unitAmount, product.currency)}
        {product.perPerson ? (
          <span className="ml-1 text-sm font-medium text-primary-foreground/70">/ person</span>
        ) : null}
      </p>

      <div className="flex-1" />

      <form action={createCourseCheckout}>
        <input type="hidden" name="priceId" value={product.priceId} />
        {product.perPerson ? (
          <div className="mt-5">
            <span className="mb-2 block text-sm font-medium text-primary-foreground/80">
              {`Number of people (min ${min})`}
            </span>
            <div className="flex items-center justify-center gap-3">
              <Button
                type="button"
                size="icon"
                variant="outline"
                className="h-9 w-9 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => setSeats((s) => Math.max(min, s - 1))}
                aria-label="Decrease number of people"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <input
                type="number"
                name="quantity"
                min={min}
                value={seats}
                onChange={(e) => setSeats(Math.max(min, Number(e.target.value) || min))}
                className="w-16 rounded-md border border-primary-foreground/30 bg-primary-foreground/10 py-1.5 text-center font-semibold text-primary-foreground"
              />
              <Button
                type="button"
                size="icon"
                variant="outline"
                className="h-9 w-9 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => setSeats((s) => s + 1)}
                aria-label="Increase number of people"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {product.unitAmount != null ? (
              <p className="mt-3 text-sm text-primary-foreground/70">
                {"Total: "}
                <span className="font-semibold text-primary-foreground">
                  {formatPrice(product.unitAmount * seats, product.currency)}
                </span>
              </p>
            ) : null}
          </div>
        ) : (
          <input type="hidden" name="quantity" value="1" />
        )}
        <EnrolNowButton />
      </form>
    </div>
  )
}

export function CourseCheckout({ products }: { products: SsowProduct[] }) {
  if (products.length === 0) {
    return null
  }

  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
      {products.map((product) => (
        <CourseCard key={product.priceId} product={product} />
      ))}
    </div>
  )
}
