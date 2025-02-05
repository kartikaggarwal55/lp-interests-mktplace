import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { FAQSection } from "@/components/faq-section"
import { HowItWorks } from "@/components/how-it-works"

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col space-y-14">
      <div className="bg-gradient-to-b from-primaryGreen/50 to-white">
        <Navbar />
        <Hero />
      </div>
      <Stats />
      <HowItWorks />
      <FAQSection />
    </main>
  )
}
