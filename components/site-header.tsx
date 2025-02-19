"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/75 border-b border-slate-800">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative size-8">
            {/* New tech-astronomy logo */}
            <div className="absolute inset-0 rotate-45 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse">
              <div className="absolute inset-1 bg-slate-900 rounded-full" />
              <div className="absolute inset-[25%] bg-gradient-to-br from-purple-400 to-pink-400 rounded-full" />
              <div className="absolute inset-0 border-2 border-white/20 rounded-full" />
              {/* Orbital ring */}
              <div className="absolute inset-[-2px] border border-purple-400/30 rounded-full rotate-12" />
              <div className="absolute inset-[-4px] border border-pink-400/20 rounded-full -rotate-12" />
            </div>
          </div>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Cosmic Physics
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <Link href="/concepts/stellar-evolution" className="text-slate-300 hover:text-white transition-colors">
            Stellar Evolution
          </Link>
          <Link href="/concepts/nuclear-fusion" className="text-slate-300 hover:text-white transition-colors">
            Nuclear Fusion
          </Link>
          <Link href="/concepts/gravity" className="text-slate-300 hover:text-white transition-colors">
            Gravity
          </Link>
          <Link href="/concepts/quantum" className="text-slate-300 hover:text-white transition-colors">
            Quantum Physics
          </Link>
          <a
            href="https://www.nasa.gov/solar-system/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-slate-300 hover:text-white transition-colors"
          >
            Celestial Index
            <ExternalLink className="ml-1 size-3" />
          </a>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="size-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-slate-900 border-slate-800">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link
                href="/concepts/stellar-evolution"
                className="text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Stellar Evolution
              </Link>
              <Link
                href="/concepts/nuclear-fusion"
                className="text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Nuclear Fusion
              </Link>
              <Link
                href="/concepts/gravity"
                className="text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Gravity
              </Link>
              <Link
                href="/concepts/quantum"
                className="text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Quantum Physics
              </Link>
              <a
                href="https://www.nasa.gov/solar-system/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Celestial Index
                <ExternalLink className="ml-1 size-3" />
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

