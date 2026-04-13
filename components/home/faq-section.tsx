"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who holds compliance responsibility?",
    answer: "Your centre always retains governance oversight and ultimate compliance responsibility — regardless of whether you use an external managed service, an internal team, or a hybrid model. ECEC Workforce Solutions certifies personnel; your centre governs the program.",
  },
  {
    question: "Do I need to hire new staff?",
    answer: "Yes — NCCS requires dedicated infection prevention personnel who are separate from your educators. This is a core governance principle: educators educate, and NCCS Infection Prevention Specialists handle infection-control cleaning. If you already have cleaning staff, we can train and certify them. If you use an external cleaning company, we certify their team. Either way, the role must be held by someone other than an educator.",
  },
  {
    question: "Can my existing staff member be the NCCS Supervisor?",
    answer: "Yes — the NCCS Supervisor role can be held by a director, nominated supervisor, or other member of your centre's management team. The Supervisor's role is to verify, document, and oversee the infection prevention program — not to perform cleaning duties. This is a core NCCS governance principle: the person who verifies compliance must be separate from the person who performs the work. Educators cannot hold the Supervisor role, and the Supervisor cannot also be an NCCS Infection Prevention Specialist.",
  },
  {
    question: "What happens when the certificate expires?",
    answer: "Renewal through compliance audit. Current certificates are issued with 18-month validity.",
  },
  {
    question: "What if we fail the compliance assessment?",
    answer: "You receive gap resolution guidance and a re-assessment within the certification window at no additional cost.",
  },
  {
    question: "Can I use NCCS for marketing to families?",
    answer: "Yes. Once certified, you can reference your NCCS Certificate of Compliance in communications to families.",
  },
  {
    question: "How much does it cost?",
    answer: "Contact us for a tailored quote. Pricing depends on centre size, staffing model, and services required.",
  },
]

export function FAQSection() {
  return (
    <section className="bg-muted py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-accent hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
