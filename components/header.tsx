"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#34343A]/40 bg-[#121214]/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-gradient-purple text-xl font-bold">Tokr</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-base font-medium text-[#B3B3B7] hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#benefits" className="text-base font-medium text-[#B3B3B7] hover:text-white transition-colors">
              Benefits
            </Link>
            <Link href="#pricing" className="text-base font-medium text-[#B3B3B7] hover:text-white transition-colors">
              Pricing
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-[#B3B3B7] hover:text-white hover:bg-[#34343A]">
            Log in
          </Button>
          <Link href="/waitlist">
            <Button size="sm" className="bg-[#8A2BE2] hover:bg-[#8A2BE2]/90 text-white">
              Join Waitlist
            </Button>
          </Link>
        </div>
        <button
          className="flex md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-[#121214] md:hidden">
          <div className="container py-6 flex flex-col gap-6">
            <nav className="flex flex-col gap-4">
              <Link href="#features" className="text-lg font-medium text-white" onClick={() => setIsMenuOpen(false)}>
                Features
              </Link>
              <Link href="#benefits" className="text-lg font-medium text-white" onClick={() => setIsMenuOpen(false)}>
                Benefits
              </Link>
              <Link href="#pricing" className="text-lg font-medium text-white" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
            </nav>
            <div className="flex flex-col gap-4">
              <Button variant="outline" className="w-full border-[#34343A] text-white hover:bg-[#34343A]">
                Log in
              </Button>
              <Link href="/waitlist" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-[#8A2BE2] hover:bg-[#8A2BE2]/90 text-white">Join Waitlist</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

