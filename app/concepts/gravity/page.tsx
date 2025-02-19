"use client"

import { ConceptHero } from "@/components/ui/concept-hero"
import { ChevronLeft } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <Link
        href="/learning-path"
        className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-8"
      >
        <ChevronLeft className="size-4 mr-2" />
        Back to Learning Path
      </Link>
      <ConceptHero title="Gravity & Spacetime" gradient="bg-gradient-to-r from-green-500/20 to-emerald-500/20" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl w-full px-4 sm:px-6 lg:px-8"
      >
        {/* rest of code here */}
      </motion.div>
    </main>
  )
}

