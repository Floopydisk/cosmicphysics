"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ErrorBoundary } from "@/components/ui/error-boundary"

export default function LearningPathPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const topics = [
    {
      title: "Stellar Evolution",
      description: "The life cycles of stars",
      subtopics: [
        "Star Formation (Nebula Collapse)",
        "Main Sequence",
        "Red Giant Phase",
        "Supergiant Phase",
        "Supernova",
        "White Dwarf",
        "Neutron Star",
        "Black Hole",
      ],
      href: "/concepts/stellar-evolution",
    },
    {
      title: "Spectroscopy",
      description: "Understanding light from celestial objects",
      subtopics: [
        "Emission Spectra",
        "Absorption Spectra",
        "Spectral Lines",
        "Redshift",
        "Chemical Composition of Stars",
        "Chemical Composition of Nebulae",
      ],
      href: "/concepts/spectroscopy",
    },
    {
      title: "Parallax & Distance Measurement",
      description: "Measuring the cosmic scale",
      subtopics: [
        "Astronomical Distance Scale",
        "Light-years",
        "Parallax Methods",
        "Limitations of Parallax",
        "Standard Candles",
        "Distance Ladder",
      ],
      href: "/concepts/parallax",
    },
    {
      title: "Matter and Energy",
      description: "The building blocks of the cosmos",
      subtopics: ["Classical Matter", "Plasma", "Dark Matter", "Dark Energy", "Antimatter", "Quantum Fields"],
      href: "/concepts/matter-energy",
    },
    {
      title: "Stellar Processes",
      description: "The inner workings of stars",
      subtopics: ["Stellar Nucleosynthesis", "Hydrostatic Equilibrium", "Energy Transport", "Stellar Atmospheres"],
      href: "/concepts/stellar-processes",
    },
    {
      title: "Nuclear Fusion",
      description: "The power source of stars",
      subtopics: ["Proton-Proton Chain", "CNO Cycle", "Helium Fusion", "Heavy Element Fusion"],
      href: "/concepts/nuclear-fusion",
    },
    {
      title: "Gravity and Spacetime",
      description: "The fabric of the cosmos",
      subtopics: ["General Relativity", "Gravitational Waves", "Black Holes", "Cosmic Structure"],
      href: "/concepts/gravity",
    },
    {
      title: "Quantum Phenomena",
      description: "The microscopic cosmos",
      subtopics: ["Wave-Particle Duality", "Quantum Entanglement", "Uncertainty Principle", "Quantum Fields"],
      href: "/concepts/quantum",
    },
  ] as const

  return (
    <ErrorBoundary>
      <div className="container py-8">
        <Link
          href="/"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8"
        >
          <ArrowLeft className="size-4 mr-2" />
          Back to Home
        </Link>

        <div className="max-w-4xl">
          <h1 className="font-display text-4xl font-bold mb-4">Learning Path</h1>
          <p className="text-xl text-slate-300 mb-8">
            Explore our comprehensive curriculum covering the fundamental aspects of cosmic physics. Choose a topic to
            begin your journey through the universe.
          </p>

          <div className="grid gap-6">
            {topics.map((topic) => (
              <Link key={topic.title} href={topic.href}>
                <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle>{topic.title}</CardTitle>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2 md:grid-cols-2">
                      {topic.subtopics.map((subtopic) => (
                        <div key={subtopic} className="flex items-center space-x-2 text-sm text-slate-300">
                          <div className="size-1.5 rounded-full bg-purple-500" />
                          <span>{subtopic}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}

