"use client"

import { ConceptHero } from "@/components/ui/concept-hero"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <Link
        href="/learning-path"
        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
      >
        <ChevronLeft className="size-4 mr-2" />
        Back to Learning Path
      </Link>
      <ConceptHero title="Nuclear Fusion" gradient="bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
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

