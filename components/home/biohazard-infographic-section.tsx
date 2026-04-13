'use client'

import Image from "next/image"

export function BiohazardInfographicSection() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Image
          src="/images/biohazard-code-infographic.png"
          alt="March 2026: SWA Biohazard Code Goes Live—Childcare Formally Reclassified as a High-Risk Biohazardous Environment"
          width={1200}
          height={800}
          className="w-full rounded-xl shadow-lg"
          priority
        />
      </div>
    </section>
  )
}
