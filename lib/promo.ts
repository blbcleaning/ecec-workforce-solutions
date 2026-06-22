// EOFY promotion config — single source of truth shared by the promo bar
// and the exit-intent popup.

// Deadline: end of the Australian financial year (30 June 2026, 23:59:59 AEST/UTC+10).
export const PROMO_DEADLINE = new Date("2026-06-30T23:59:59+10:00")

export const PROMO_CTA_HREF = "/services#ssow"

export interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  expired: boolean
}

export function getTimeLeft(now: number = Date.now()): TimeLeft {
  const diff = PROMO_DEADLINE.getTime() - now
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
  }
  const seconds = Math.floor(diff / 1000)
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
    expired: false,
  }
}
