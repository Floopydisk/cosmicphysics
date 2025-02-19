"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { ConceptHero } from "@/components/ui/concept-hero"
import { ConceptDialog } from "@/components/ui/concept-dialog"
import StellarEvolutionSimulation from "./stellar-evolution-simulation"

const topics = [
  {
    title: "Birth of a Star",
    description: "Learn about the formation of stars from giant molecular clouds.",
    details: [
      {
        name: "Nebulas",
        description: "Explore the vast clouds of gas and dust where stars are born.",
      },
      {
        name: "Protostars",
        description: "Discover the early stages of star formation.",
      },
    ],
  },
  {
    title: "Main Sequence Stars",
    description: "Understand the longest phase in a star's life.",
    details: [
      {
        name: "Nuclear Fusion",
        description: "Learn how stars generate energy through nuclear fusion.",
      },
      {
        name: "Stellar Classification",
        description: "Explore the different types of main sequence stars.",
      },
    ],
  },
  {
    title: "Death of a Star",
    description: "Witness the dramatic end of a star's life.",
    details: [
      {
        name: "White Dwarfs",
        description: "Discover the fate of low-mass stars.",
      },
      {
        name: "Neutron Stars",
        description: "Explore the incredibly dense remnants of massive stars.",
      },
      {
        name: "Black Holes",
        description:
          "Learn about the mysterious objects that have such strong gravity that nothing, not even light, can escape.",
      },
    ],
  },
]

export default function StellarEvolutionPage() {
  const [step, setStep] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent" />
      <div className="container relative py-8">
        <Link
          href="/learning-path"
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors mb-8"
        >
          <ChevronLeft className="size-4 mr-2" />
          Back to Learning Path
        </Link>

        <ConceptHero title="Stellar Evolution" gradient="bg-gradient-to-r from-yellow-500/20 to-orange-500/20" />

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-slate-300 mb-8">
                Follow the incredible journey of stars through their life cycles, from their humble beginnings as clouds
                of gas to their dramatic endings as white dwarfs, neutron stars, or black holes.
              </p>

              <div className="grid gap-8">
                {topics.map((topic, index) => (
                  <ScrollAnimation key={topic.title} delay={index * 0.1}>
                    <Card className="bg-slate-800/50 border-slate-700">
                      <CardHeader>
                        <CardTitle>{topic.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300 mb-4">{topic.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {topic.details.map((detail) => (
                            <ConceptDialog key={detail.name} name={detail.name} description={detail.description} />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="lg:sticky lg:top-24 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <StellarEvolutionSimulation step={step} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

