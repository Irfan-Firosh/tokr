import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tokr",
  description:
    "Automatically scrape, generate, and customize TikTok-ready videos from the best Reddit content. Save hours of editing time.",
  generator: 'v0.dev',
  icons: {
    icon: '/tokr-favicon.ico',
    shortcut: '/tokr-favicon.ico',
    apple: '/tokr-favicon.ico',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}



import './globals.css'