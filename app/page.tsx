import { Suspense } from "react"
import Hero from "@/components/hero"
import Benefits from "@/components/benefits"
import Pricing from "@/components/pricing"
import FeatureShowcase from "@/components/feature-showcase"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WaitlistCTA from "@/components/waitlist-cta"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121214] text-white">
      <Header />
      <main className="space-y-16 md:space-y-24">
        <Hero />
        <div className="py-8 bg-[#121214]">
          <div className="container">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#34343A] to-transparent"></div>
          </div>
        </div>
        <Benefits />
        <Suspense fallback={<div className="h-[600px] flex items-center justify-center">Loading features...</div>}>
          <FeatureShowcase />
        </Suspense>
        <div className="py-8 bg-[#121214]">
          <div className="container">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#34343A] to-transparent"></div>
          </div>
        </div>
        <Pricing />
        <WaitlistCTA />
      </main>
      <Footer />
    </div>
  )
}

