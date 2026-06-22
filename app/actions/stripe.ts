"use server"

import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { getStripe } from "@/lib/stripe"

export interface SsowProduct {
  priceId: string
  name: string
  description: string | null
  unitAmount: number | null
  currency: string
  recurring: boolean
  interval: string | null
}

/**
 * Fetches active products and their prices directly from Stripe at request
 * time. Prefers products tagged as SSOW (by metadata or name); if none match,
 * it returns all active one-off/recurring products so nothing is hidden.
 */
export async function getSsowProducts(): Promise<SsowProduct[]> {
  if (!process.env.STRIPE_SECRET_KEY) {
    return []
  }

  let prices: import("stripe").Stripe.ApiList<import("stripe").Stripe.Price>
  try {
    const stripe = getStripe()
    prices = await stripe.prices.list({
      active: true,
      limit: 100,
      expand: ["data.product"],
    })
  } catch (error) {
    // Invalid/stale key or Stripe outage: degrade to the enquiry fallback
    // rather than crashing the page.
    console.log("[v0] Stripe products fetch failed:", (error as Error).message)
    return []
  }

  const all: (SsowProduct & { isSsow: boolean })[] = prices.data
    .filter((price) => {
      const product = price.product
      // Skip prices whose product was archived/deleted.
      return typeof product !== "string" && !product.deleted && product.active
    })
    .map((price) => {
      const product = price.product as import("stripe").Stripe.Product
      const haystack = `${product.name} ${product.description ?? ""} ${
        product.metadata?.category ?? ""
      } ${product.metadata?.type ?? ""}`.toLowerCase()
      return {
        priceId: price.id,
        name: product.name,
        description: product.description,
        unitAmount: price.unit_amount,
        currency: price.currency,
        recurring: Boolean(price.recurring),
        interval: price.recurring?.interval ?? null,
        isSsow: haystack.includes("ssow"),
      }
    })

  const ssowOnly = all.filter((p) => p.isSsow)
  const result = (ssowOnly.length > 0 ? ssowOnly : all).map(({ isSsow, ...rest }) => rest)

  // Sort cheapest first for a sensible package ladder.
  return result.sort((a, b) => (a.unitAmount ?? 0) - (b.unitAmount ?? 0))
}

/**
 * Creates a Stripe Checkout session for the given price and redirects the
 * customer to Stripe's hosted checkout page.
 */
export async function createSsowCheckout(formData: FormData) {
  const priceId = formData.get("priceId")
  if (typeof priceId !== "string" || !priceId) {
    throw new Error("Missing priceId")
  }

  const stripe = getStripe()

  // Look up the price server-side so the client can never tamper with it.
  const price = await stripe.prices.retrieve(priceId)
  const mode = price.recurring ? "subscription" : "payment"

  const headersList = await headers()
  const host = headersList.get("host")
  const protocol = host?.startsWith("localhost") ? "http" : "https"
  const origin = `${protocol}://${host}`

  const session = await stripe.checkout.sessions.create({
    mode,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${origin}/services?checkout=success`,
    cancel_url: `${origin}/services?checkout=cancelled`,
    billing_address_collection: "auto",
    allow_promotion_codes: true,
  })

  if (!session.url) {
    throw new Error("Failed to create checkout session")
  }

  redirect(session.url)
}
