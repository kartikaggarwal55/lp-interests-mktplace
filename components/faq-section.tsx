"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
    {
        question: "What is secondary market investing?",
        answer:
            "Secondary market investing involves buying pre-existing investment commitments from other investors. This allows you to potentially access mature funds and investments that are no longer open to new investors.",
    },
    {
        question: "How does your platform work?",
        answer:
            "Our platform connects buyers and sellers of secondary market investments. Sellers list their fund positions, and buyers can browse and purchase these positions. We facilitate the transaction process and provide necessary documentation.",
    },
    {
        question: "What types of investments are available?",
        answer:
            "We offer a range of investment opportunities including private equity funds, venture capital funds, real estate funds, and hedge funds. The specific offerings vary based on what's currently available in the secondary market.",
    },
    {
        question: "What are the minimum investment amounts?",
        answer:
            "Minimum investment amounts can vary depending on the specific opportunity. Generally, they start from $100,000, but some high-value positions may require higher minimums. Always check the details of each listing for specific requirements.",
    },
    {
        question: "How do you ensure the security and legitimacy of transactions?",
        answer:
            "We employ a rigorous due diligence process for all listings on our platform. This includes verifying the authenticity of the investment, the seller's ownership, and facilitating secure transfer processes. We also partner with reputable third-party escrow services for financial transactions.",
    },
]
export function FAQSection() {
    return (
        <section className="py-16 bg-softGreenBackground/80" id="faq">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-black">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

