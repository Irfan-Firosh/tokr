"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Safari } from "./magicui/safari"
import { WordRotate } from "./magicui/word-rotate"

export default function Hero() {
  const [gradientIndex, setGradientIndex] = useState(0)
  const gradients = ["bg-gradient-purple", "bg-gradient-teal", "bg-gradient-orange"]

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % gradients.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${gradientIndex === 0 ? "opacity-100" : "opacity-0"}`}
        >
          <div className="absolute inset-0 bg-gradient-purple" />
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${gradientIndex === 1 ? "opacity-100" : "opacity-0"}`}
        >
          <div className="absolute inset-0 bg-gradient-teal" />
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${gradientIndex === 2 ? "opacity-100" : "opacity-0"}`}
        >
          <div className="absolute inset-0 bg-gradient-orange" />
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <span className="inline-block px-4 py-1.5 bg-[#24242A] rounded-full text-sm font-medium text-[#B3B3B7] mb-6">
            🎉 AI-Powered Content Creation
            </span>
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Transform Reddit Stories into
              <div className="flex items-center gap-5">
                <span className="text-gradient-multi">Viral </span>
                <WordRotate 
                  words={[" Videos", " TikToks", " Reels", " Shorts"]}
                  className="text-gradient-multi"
                />
              </div>
            </h1>
            <p className="mb-8 text-xl text-[#B3B3B7] max-w-xl">
              Automatically scrape, generate, and customize TikTok-ready videos from the best Reddit content. Save hours
              of editing time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/waitlist">
                <Button size="lg" className="h-14 px-8 bg-[#8A2BE2] hover:bg-[#8A2BE2]/90 text-white text-lg">
                  Join Waitlist <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 border-[#34343A] text-white hover:bg-[#34343A] text-lg"
              >
                Watch Demo
              </Button>
            </div>
          </motion.div>

          {/* Dashboard screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative rounded-xl overflow-hidden border border-[#34343A] bg-[#24242A] shadow-2xl">
              <Safari
                imageSrc="/dashboard-screenshot.png"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.currentTarget.style.display = "none"
                  const parent = e.currentTarget.parentElement
                  if (parent) {
                    const fallback = document.createElement("div")
                    fallback.className = "absolute inset-0 flex items-center justify-center bg-[#1A1A1C] p-8"
                    fallback.innerHTML = `
                      <div class="text-center">
                        <div class="text-2xl font-medium text-white mb-3">ContentAI Dashboard</div>
                        <p class="text-[#B3B3B7] text-lg">Powerful analytics and content management</p>
                      </div>
                    `
                    parent.appendChild(fallback)
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

