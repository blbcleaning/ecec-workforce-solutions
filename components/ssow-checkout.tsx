"use client"

import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, Loader2 } from "lucide-react"
import { createSsowCheckout, type SsowProduct } from "@/app/actions/stripe"

function formatPrice(amount: number | null, currency: string) {
  if (amount == null) return "Contact us"
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: currency.toUpperCase(),
    minimumFractionDigits: amount % 100 === 0 ? 0 : 2,
  }).format(amount / 100)
}

function BuyButton() {
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
          Buy Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  )
}

export function SsowCheckout({ products }: { products: SsowProduct[] }) {
  if (products.length === 0) {
    return (
      <div className="mt-8 rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
        Online purchasing is being set up. Please{" "}
        <a href="/contact" className="font-medium text-accent underline underline-offset-4">
          submit an enquiry
        </a>{" "}
        and we&apos;ll get you started.
      </div>
    )
  }

  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {products.map((product) => (
        <div
          key={product.priceId}
          className="flex flex-col rounded-xl border border-border bg-card p-6"
        >
          <h3 className="text-base font-semibold text-card-foreground">{product.name}</h3>
          {product.description ? (
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
          ) : null}
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-2xl font-bold text-foreground">
              {formatPrice(product.unitAmount, product.currency)}
            </span>
            {product.recurring && product.interval ? (
              <span className="text-sm text-muted-foreground">/{product.interval}</span>
            ) : null}
          </div>
          <div className="flex-1" />
          <form action={createSsowCheckout}>
            <input type="hidden" name="priceId" value={product.priceId} />
            <BuyButton />
          </form>
        </div>
      ))}
    </div>
  )
}
