import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FAQSection } from "@/components/faq-section"
import { RoleSelector } from "@/components/role-selector" // <-- Changed: import RoleSelector

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col space-y-14">
      <div className="bg-gradient-to-b from-primaryGreen/50 to-white">
        <Navbar />
        <Hero />
      </div>
      <div className="container max-w-2xl mx-auto space-y-2">
        <div className="relative">
          <h1 id="get-started" className="text-3xl font-bold text-green-800 text-center">
            Get Started
          </h1>
          <p className="p-4 text-center">
            GPLP is an invite only marketplace with a strict vetting process. Begin your application now.
          </p>
        </div>
        {/* Removed the form provider and form step; now only show the role selector */}
        <RoleSelector />  {/* <-- Change: show RoleSelector directly */}
      </div>
      <FAQSection />
    </main>
  )
}
