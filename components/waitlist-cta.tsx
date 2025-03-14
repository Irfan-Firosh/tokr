"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function WaitlistCTA() {
  return (
    <section className="py-24 bg-[#121214]">
      <div className="container max-w-5xl">
        <div className="mx-auto rounded-2xl bg-gradient-to-br from-[#8A2BE2]/20 via-[#00E5CC]/20 to-[#FF7B3A]/20 p-1">
          <div className="rounded-xl bg-[#24242A] p-12 text-center">
            <span className="inline-block px-4 py-1.5 bg-[#1A1A1C] rounded-full text-sm font-medium text-[#B3B3B7] mb-4">
              Limited Access
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
              Join the Waitlist Today
            </h2>
            <p className="text-xl text-[#B3B3B7] mb-10 max-w-2xl mx-auto">
              Be among the first to access our platform when we launch. Early adopters get special perks and priority
              access!
            </p>

            <div className="flex justify-center">
              <Link href="/waitlist">
                <Button size="lg" className="h-14 px-8 bg-[#8A2BE2] hover:bg-[#8A2BE2]/90 text-white text-lg">
                  Join Waitlist <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="mt-10 flex items-center justify-center space-x-8 text-sm text-[#B3B3B7]">
              <div className="flex items-center">
                <div className="mr-2 h-5 w-5 rounded-full bg-[#4ECB71]/20 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-[#4ECB71]"></div>
                </div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-5 w-5 rounded-full bg-[#4ECB71]/20 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-[#4ECB71]"></div>
                </div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

