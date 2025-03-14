"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { createClient } from "@supabase/supabase-js"
import { Toaster, toast } from "sonner"

export default function WaitlistPage() {
  console.log("WaitlistPage component rendered")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  const supabase = createClient(supabaseUrl, supabaseKey)

  // Add useEffect to log initial mount
  useEffect(() => {
    console.log("WaitlistPage mounted")
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { data, error: supabaseError } = await supabase.from("waitlist-beta").insert({ email: email })
      
      if (supabaseError) {
        console.error("Error inserting email:", supabaseError)
        if (supabaseError.code === '23505') {
          setError(supabaseError)
          toast.error("This email is already on the waitlist!", {
            description: "Please use a different email address to join.",
            duration: 5000,
          })
          setSubmitted(true)
        } else {
          toast.error("Something went wrong", {
            description: "Please try again later.",
            duration: 5000,
          })
        }
      } else {
        toast.success("Successfully joined the waitlist!", {
          description: "We'll notify you when we launch.",
          duration: 5000,
        })
        setSubmitted(true)
      }
    } catch (err) {
      console.error("Unexpected error during submission:", err)
      toast.error("Something went wrong", {
        description: "Please try again later.",
        duration: 5000,
      })
    }
    
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#121214] text-white">
      <Toaster richColors position="top-center" />
      <Header />
      <main className="py-12">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <Link href="/" className="inline-flex items-center text-[#B3B3B7] hover:text-white mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>

            <div className="rounded-xl bg-gradient-to-br from-[#8A2BE2]/20 via-[#00E5CC]/20 to-[#FF7B3A]/20 p-1">
              <div className="rounded-lg bg-[#24242A] p-6">
                <h1 className="text-2xl font-bold mb-3 text-white">Join the Waitlist</h1>
                <p className="text-[#B3B3B7] mb-6">
                  Be among the first to access our platform when we launch. Early adopters get special perks and
                  priority access!
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center space-y-4 py-6">
                    <div className="h-12 w-12 rounded-full bg-[#4ECB71]/20 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-[#4ECB71]" />
                    </div>
                    <h2 className="text-xl font-medium text-white">Thanks for your interest!</h2>
                    <p className="text-[#B3B3B7] text-center max-w-md">
                      {error?.code === '23505' 
                        ? "You're already on our waitlist! We'll notify you when we launch." 
                        : "We'll notify you when we launch. In the meantime, keep an eye on your inbox for updates."}
                    </p>
                    <Link href="/">
                      <Button className="mt-2 bg-[#8A2BE2] hover:bg-[#8A2BE2]/90 text-white">Return to Home</Button>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="h-10 bg-[#1A1A1C] border-[#34343A] text-white w-full"
                        />
                      </div>

                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                          required
                          className="h-10 bg-[#1A1A1C] border-[#34343A] text-white w-full"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-1">
                          What type of content do you create?
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {["TikTok", "YouTube Shorts", "Instagram Reels", "Other"].map((platform) => (
                            <div key={platform} className="flex items-center">
                              <input
                                type="checkbox"
                                id={platform}
                                className="h-4 w-4 rounded border-[#34343A] bg-[#1A1A1C] text-[#8A2BE2] focus:ring-[#8A2BE2]"
                              />
                              <label htmlFor={platform} className="ml-2 text-sm text-[#B3B3B7]">
                                {platform}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="h-10 w-full bg-[#8A2BE2] hover:bg-[#8A2BE2]/90 text-white"
                        disabled={loading}
                      >
                        {loading ? (
                          <div className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 0h4a4 4 0 014 4h-4a4 4 0 01-4-4z"
                              ></path>
                            </svg>
                            Processing...
                          </div>
                        ) : (
                          <>
                            Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>

                    <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-[#B3B3B7]">
                      <div className="flex items-center">
                        <div className="mr-1 h-3 w-3 rounded-full bg-[#4ECB71]/20 flex items-center justify-center">
                          <div className="h-1 w-1 rounded-full bg-[#4ECB71]"></div>
                        </div>
                        <span>No credit card required</span>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-1 h-3 w-3 rounded-full bg-[#4ECB71]/20 flex items-center justify-center">
                          <div className="h-1 w-1 rounded-full bg-[#4ECB71]"></div>
                        </div>
                        <span>Cancel anytime</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

