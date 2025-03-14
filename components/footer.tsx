import Link from "next/link"
import { Heart, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-[#34343A] bg-[#121214]">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          <div className="flex items-center justify-center space-x-2 text-white">
            <span className="text-sm md:text-base font-medium">Made with</span>
            <Heart className="h-4 w-4 text-[#FF5733] fill-[#FF5733] animate-pulse" />
            <span className="text-sm md:text-base font-medium">by Irfan-Firosh</span>
          </div>
          
          <Link 
            href="https://github.com/Irfan-Firosh" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-2 text-[#B3B3B7] hover:text-white transition-all duration-300 hover:scale-105 bg-[#1A1A1C] px-4 py-2 rounded-full"
          >
            <Github className="h-4 w-4" />
            <span className="text-sm font-medium">GitHub</span>
          </Link>
          
          <div className="h-1 w-10 bg-gradient-to-r from-[#8A2BE2] to-[#00E5CC] rounded-full mt-2"></div>
        </div>
      </div>
    </footer>
  )
}

