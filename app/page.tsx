import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col space-y-14">
      <Navbar />
      <Hero />
      <Stats />
    </main>
  )
}