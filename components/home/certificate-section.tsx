import Image from "next/image"

export function CertificateSection() {
  return (
    <section className="bg-muted py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-lg">
            <Image
              src="/images/nccs-certificate.png"
              alt="NCCS Certificate of Compliance - issued to centres assessed as compliant with the National Childcare Cleaning Standard"
              width={595}
              height={842}
              className="h-auto w-full max-w-md"
              priority
            />
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            NCCS Certificate of Compliance — issued to centres assessed as compliant with the National Childcare Cleaning Standard.
          </p>
        </div>
      </div>
    </section>
  )
}
