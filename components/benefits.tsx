"use client"

import { motion } from "framer-motion"
import { Clock, Zap, TrendingUp, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Save Hours of Editing Time",
    description: "Automate the entire video creation process from content selection to final render.",
    gradient: "from-[#8A2BE2] to-[#5D3FD3]",
  },
  {
    icon: Zap,
    title: "One-Click Generation",
    description: "Select a Reddit thread and generate a complete video with just one click.",
    gradient: "from-[#00E5CC] to-[#00A3B4]",
  },
  {
    icon: TrendingUp,
    title: "Optimized for Virality",
    description: "AI selects the most engaging content and formats it for maximum engagement.",
    gradient: "from-[#FF7B3A] to-[#FF5733]",
  },
  {
    icon: Sparkles,
    title: "Customizable Templates",
    description: "Choose from multiple video styles or create your own custom templates.",
    gradient: "from-[#8A2BE2] via-[#00E5CC] to-[#FF7B3A]",
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-[#1A1A1C]">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3 text-white">
            Why Content Creators Love Our Platform
          </h2>
          <p className="text-lg text-[#B3B3B7] max-w-2xl mx-auto">
            Designed specifically for content creators who want to scale their short-form video production.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-4 rounded-xl bg-[#24242A] border border-[#34343A] overflow-hidden"
            >
              <div className="absolute inset-0 opacity-5 bg-gradient-to-br pointer-events-none" />
              <div className="relative z-10">
                <div
                  className={`h-10 w-10 rounded-lg bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-3`}
                >
                  <benefit.icon className="h-5 w-5 text-[#121214]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h3>
                <p className="text-sm text-[#B3B3B7]">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

