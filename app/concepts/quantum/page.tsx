"use client"

import { ConceptHero } from "@/components/ui/concept-hero"
import { ChevronLeft } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function QuantumPage() {
  return (
    <main className="flex flex-col items-center">
      <Link
        href="/learning-path"
        className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors mb-8"
      >
        <ChevronLeft className="size-4 mr-2" />
        Back to Learning Path
      </Link>
      <ConceptHero title="Quantum Phenomena" gradient="bg-gradient-to-r from-pink-500/20 to-purple-500/20" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl w-full px-4 py-12 mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Understanding Quantum Phenomena</h1>
        <p className="text-lg text-gray-600">
          Quantum mechanics is a fundamental theory in physics that provides a description of the physical properties of
          nature at the scale of atoms and subatomic particles.
        </p>
      </motion.div>
    </main>
  )
}

