import Image from "next/image"

export function InfographicSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Image
          src="/images/nccs-infographic.png"
          alt="Understanding the National Childcare Cleaning Standard (NCCS) - Framework for ensuring infection prevention in childcare environments"
          width={1200}
          height={900}
          className="w-full rounded-xl shadow-lg"
        />
      </div>
    </section>
  )
}
