"use client"

import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, Loader2 } from "lucide-react"
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
          Redirecting…
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

export function CourseCheckout({ products }: { products: SsowProduct[] }) {
  if (products.length === 0) {
    return null
  }

  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
      {products.map((product) => (
        <div
          key={product.priceId}
          className="flex flex-col rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 text-center"
        >
          <h3 className="text-lg font-semibold text-primary-foreground">{product.name}</h3>
          {product.description ? (
            <p className="mt-1 text-sm leading-relaxed text-primary-foreground/70">
              {product.description}
            </p>
          ) : null}
          <p className="mt-3 text-2xl font-bold text-accent">
            {formatPrice(product.unitAmount, product.currency)}
            {product.quantity && product.quantity > 1 ? (
              <span className="ml-1 text-sm font-medium text-primary-foreground/70">/ person</span>
            ) : null}
          </p>
          <div className="flex-1" />
          <form action={createCourseCheckout}>
            <input type="hidden" name="priceId" value={product.priceId} />
            <EnrolNowButton />
          </form>
        </div>
      ))}
    </div>
  )
}
