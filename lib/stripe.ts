import "server-only"
import Stripe from "stripe"

let stripeClient: Stripe | null = null

/**
 * Returns a singleton Stripe client. Instantiated lazily so the build never
 * evaluates a missing key during page-data collection.
 */
export function getStripe(): Stripe {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not set")
  }
  if (!stripeClient) {
    stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY)
  }
  return stripeClient
}
