"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import Link from "next/link"

const tiers = [
  {
    name: "Starter",
    id: "starter",
    price: { monthly: "Coming Soon...", annually: "Coming Soon..." },
    description: "Perfect for creators just getting started with automated content.",
    features: [
      "5 videos per month",
      "720p video quality",
      "Basic text-to-speech voices",
      "Standard templates",
      "Email support",
    ],
    cta: "Join Waitlist",
    popular: false,
  },
  {
    name: "Creator",
    id: "creator",
    price: { monthly: "Coming Soon...", annually: "Coming Soon..." },
    description: "For serious creators looking to scale their content production.",
    features: [
      "25 videos per month",
      "1080p video quality",
      "Premium text-to-speech voices",
      "Custom templates",
      "Priority support",
      "Performance analytics",
    ],
    cta: "Join Waitlist",
    popular: true,
  },
  {
    name: "Agency",
    id: "agency",
    price: { monthly: "Coming Soon...", annually: "Coming Soon..." },
    description: "For teams and agencies managing multiple channels.",
    features: [
      "Unlimited videos",
      "4K video quality",
      "All premium voices",
      "Custom branding",
      "Dedicated account manager",
      "Advanced analytics",
      "API access",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function Pricing() {
  const [frequency, setFrequency] = useState("monthly")

  return (
    <section id="pricing" className="py-12 bg-[#1A1A1C]">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3 text-white">Simple, Transparent Pricing</h2>
          <p className="text-lg text-[#B3B3B7] max-w-2xl mx-auto">
            Choose the plan that's right for your content creation needs.
          </p>

          <div className="flex items-center justify-center mt-6">
            <div className="relative flex rounded-full p-1 bg-[#24242A] border border-[#34343A]">
              <button
                type="button"
                className={`relative w-24 rounded-full py-1.5 text-sm font-medium ${
                  frequency === "monthly" ? "bg-[#8A2BE2] text-white" : "text-[#B3B3B7]"
                }`}
                onClick={() => setFrequency("monthly")}
              >
                Monthly
              </button>
              <button
                type="button"
                className={`relative w-24 rounded-full py-1.5 text-sm font-medium ${
                  frequency === "annually" ? "bg-[#8A2BE2] text-white" : "text-[#B3B3B7]"
                }`}
                onClick={() => setFrequency("annually")}
              >
                Annually
                <span className="absolute -right-2 -top-2 flex h-4 w-4">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-[#4ECB71]/80 opacity-75"></span>
                  <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-[#4ECB71] text-[8px] font-medium text-white">
                    -20%
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col rounded-xl bg-[#24242A] border ${
                tier.popular ? "border-[#8A2BE2] shadow-lg shadow-[#8A2BE2]/20" : "border-[#34343A]"
              } shadow-sm overflow-hidden`}
            >
              {tier.popular && (
                <div className="flex items-center justify-center gap-1 mb-2 mt-4">
                  <Star className="h-4 w-4 text-[#8A2BE2] fill-[#8A2BE2]" />
                  <span className="text-sm font-bold text-[#8A2BE2]">
                    MOST POPULAR
                  </span>
                  <Star className="h-4 w-4 text-[#8A2BE2] fill-[#8A2BE2]" />
                </div>
              )}

              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
                <div className="flex items-baseline text-white">
                  <span className="text-2xl font-bold tracking-tight">
                    {frequency === "monthly" ? tier.price.monthly : tier.price.annually}
                  </span>
                </div>
                <p className="mt-2 text-xs text-[#B3B3B7]">{tier.description}</p>
              </div>

              <div className="flex flex-1 flex-col justify-between p-4 pt-0">
                <ul className="mt-4 space-y-2">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 flex-shrink-0 text-[#4ECB71] mt-0.5" />
                      <span className="ml-2 text-sm text-white">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/waitlist" className="mt-6 block">
                  <Button
                    className={`w-full ${
                      tier.popular
                        ? "bg-[#8A2BE2] hover:bg-[#8A2BE2]/90 text-white"
                        : "bg-[#24242A] border border-[#34343A] text-white hover:bg-[#34343A]"
                    }`}
                    variant={tier.popular ? "default" : "outline"}
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

