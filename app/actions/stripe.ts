"use server"

import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { getStripe } from "@/lib/stripe"
import { getTimeLeft } from "@/lib/promo"

// EOFY workbook lead-magnet tracking code. Stripe cannot create a true $0
// coupon, so instead of a discount code we tag the checkout session with this
// identifier. Claimed sessions are then filterable in the Stripe dashboard.
const PROMO_TRACKING_CODE = "EOFY-WORKBOOK-2026"

export interface SsowProduct {
  priceId: string
  name: string
  description: string | null
  unitAmount: number | null
  currency: string
  recurring: boolean
  interval: string | null
  /** True when the amount is charged per person (e.g. online enrolments). */
  perPerson?: boolean
  /** Minimum purchasable quantity (e.g. 5 for online group bookings). */
  minQuantity?: number
}

/**
 * Decides whether a course price is charged per-person (online enrolments) or
 * as a flat group total (onsite training). Stripe metadata `pricing_model`
 * wins; otherwise we fall back to keywords in the product name/description.
 */
function resolvePricingModel(haystack: string, model?: string) {
  if (model === "per_person" || model === "per-person") return true
  if (model === "flat" || model === "flat_total" || model === "group") return false
  // Fallback: online courses are per-person; onsite/group bookings are flat.
  if (/onsite|on-site|in-person|group total|flat/.test(haystack)) return false
  return /online|per person|per educator|per seat|per learner/.test(haystack)
}

/**
 * Shared helper: fetches active prices (with expanded products) from Stripe and
 * maps them to a simplified shape. `match` decides which products to keep.
 */
async function fetchProducts(
  match: (haystack: string) => boolean,
): Promise<SsowProduct[]> {
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
    console.log("[v0] Stripe products fetch failed:", (error as Error).message)
    return []
  }

  const all = prices.data
    .filter((price) => {
      const product = price.product
      return typeof product !== "string" && !product.deleted && product.active
    })
    .map((price) => {
      const product = price.product as import("stripe").Stripe.Product
      const haystack = `${product.name} ${product.description ?? ""} ${
        product.metadata?.category ?? ""
      } ${product.metadata?.type ?? ""}`.toLowerCase()
      const model = (price.metadata?.pricing_model ?? product.metadata?.pricing_model)?.toLowerCase()
      const perPerson = resolvePricingModel(haystack, model)
      const metaMin = Number(price.metadata?.min_quantity ?? product.metadata?.min_quantity)
      const minQuantity =
        Number.isFinite(metaMin) && metaMin > 0 ? metaMin : perPerson ? 5 : 1
      return {
        priceId: price.id,
        name: product.name,
        description: product.description,
        unitAmount: price.unit_amount,
        currency: price.currency,
        recurring: Boolean(price.recurring),
        interval: price.recurring?.interval ?? null,
        perPerson,
        minQuantity,
        _haystack: haystack,
      }
    })

  return all.filter((p) => match(p._haystack)).map(({ _haystack, ...rest }) => rest)
}

/**
 * Fetches active products and their prices directly from Stripe at request
 * time. Prefers products tagged as SSOW (by metadata or name); if none match,
 * it returns all active one-off/recurring products so nothing is hidden.
 */
export async function getSsowProducts(): Promise<SsowProduct[]> {
  const ssow = await fetchProducts((h) => h.includes("ssow"))
  // If nothing is explicitly tagged SSOW, fall back to all non-course products
  // so the catalog is never hidden.
  const result =
    ssow.length > 0 ? ssow : await fetchProducts((h) => !isCourse(h))
  return result.sort((a, b) => (a.unitAmount ?? 0) - (b.unitAmount ?? 0))
}

/** Heuristic: does this product look like the training course? */
function isCourse(haystack: string) {
  return /infection|course|training|educator|module|enrol|biohazard/.test(haystack)
}

/**
 * Fetches the training course products/prices live from Stripe, cheapest first.
 */
export async function getCourseProducts(): Promise<SsowProduct[]> {
  const courses = await fetchProducts(isCourse)
  return courses.sort((a, b) => (a.unitAmount ?? 0) - (b.unitAmount ?? 0))
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

  // Auto-apply the EOFY workbook tracking tag while the promo is live. The
  // bonus tier depends on the package: the printed $999 SSOW set gets the
  // printed workbook ($180 value), everything else gets the digital one ($80).
  const promoActive = !getTimeLeft().expired
  const metadata: Record<string, string> = {}
  if (promoActive) {
    const isPrintedFullSet = (price.unit_amount ?? 0) >= 99900
    metadata.promo = PROMO_TRACKING_CODE
    metadata.promo_name = "EOFY Free Cleaning Management Workbook"
    metadata.workbook_bonus = isPrintedFullSet
      ? "Printed workbook ($180 value)"
      : "Digital workbook ($80 value)"
  }

  const session = await stripe.checkout.sessions.create({
    mode,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${origin}/services?checkout=success`,
    cancel_url: `${origin}/services?checkout=cancelled`,
    billing_address_collection: "auto",
    allow_promotion_codes: true,
    metadata,
    ...(mode === "payment"
      ? { payment_intent_data: { metadata } }
      : { subscription_data: { metadata } }),
  })

  if (!session.url) {
    throw new Error("Failed to create checkout session")
  }

  redirect(session.url)
}

/**
 * Creates a Stripe Checkout session for a training course price and returns the
 * customer to the course page. Honours a fixed quantity (e.g. group seats)
 * passed from the form, validated server-side against price metadata.
 */
export async function createCourseCheckout(formData: FormData) {
  const priceId = formData.get("priceId")
  if (typeof priceId !== "string" || !priceId) {
    throw new Error("Missing priceId")
  }

  const stripe = getStripe()

  // Look up the price (and its product) server-side; never trust client amounts.
  const price = await stripe.prices.retrieve(priceId, { expand: ["product"] })
  const mode = price.recurring ? "subscription" : "payment"

  // Re-derive the pricing model server-side so it can't be tampered with.
  const product = price.product as import("stripe").Stripe.Product
  const haystack = `${product.name ?? ""} ${product.description ?? ""} ${
    product.metadata?.category ?? ""
  } ${product.metadata?.type ?? ""}`.toLowerCase()
  const model = (price.metadata?.pricing_model ?? product.metadata?.pricing_model)?.toLowerCase()
  const perPerson = resolvePricingModel(haystack, model)
  const metaMin = Number(price.metadata?.min_quantity ?? product.metadata?.min_quantity)
  const minQuantity = Number.isFinite(metaMin) && metaMin > 0 ? metaMin : perPerson ? 5 : 1

  // Per-person (online) bookings honour the requested seat count, clamped to the
  // minimum. Flat (onsite group) bookings are always a single unit.
  let quantity = minQuantity
  if (perPerson) {
    const requested = Number(formData.get("quantity"))
    quantity = Number.isFinite(requested) ? Math.max(requested, minQuantity) : minQuantity
  } else {
    quantity = 1
  }

  const headersList = await headers()
  const host = headersList.get("host")
  const protocol = host?.startsWith("localhost") ? "http" : "https"
  const origin = `${protocol}://${host}`
  const returnPath = "/training/infection-control"

  const session = await stripe.checkout.sessions.create({
    mode,
    line_items: [
      {
        price: priceId,
        quantity,
        // Let online enrolments adjust seats on the Stripe page, never below
        // the minimum group size.
        ...(perPerson
          ? { adjustable_quantity: { enabled: true, minimum: minQuantity, maximum: 200 } }
          : {}),
      },
    ],
    success_url: `${origin}${returnPath}?checkout=success`,
    cancel_url: `${origin}${returnPath}?checkout=cancelled`,
    billing_address_collection: "auto",
    allow_promotion_codes: true,
  })

  if (!session.url) {
    throw new Error("Failed to create checkout session")
  }

  redirect(session.url)
}
