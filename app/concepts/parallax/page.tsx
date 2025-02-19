"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, Ruler } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ParallaxPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const topics = [
    {
      title: "Astronomical Distance Scale",
      description:
        "The various methods and units used to measure vast cosmic distances, from our solar system to distant galaxies.",
    },
    {
      title: "Light-years",
      description: "The distance light travels in one year, serving as a fundamental unit for cosmic measurements.",
    },
    {
      title: "Parallax Methods",
      description:
        "Using the apparent shift in position of nearby stars against the background of distant stars to measure distance.",
    },
    {
      title: "Limitations of Parallax",
      description: "Understanding the constraints and uncertainties in parallax measurements for distant objects.",
    },
    {
      title: "Standard Candles",
      description: "Objects with known intrinsic brightness used to measure distances beyond parallax limits.",
    },
    {
      title: "Distance Ladder",
      description: "The sequence of different methods used to measure increasingly large cosmic distances.",
    },
  ]

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-transparent" />
      <div className="container relative py-8">
        <Link
          href="/learning-path"
          className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-8"
        >
          <ChevronLeft className="size-4 mr-2" />
          Back to Learning Path
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-3">
            <Ruler className="size-12 text-green-400" />
            Parallax & Distance Measurement
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-slate-300 mb-8">
              Understanding cosmic distances is crucial for mapping our universe. From nearby stars to distant galaxies,
              we use various techniques to measure the vast spaces between celestial objects.
            </p>

            <div className="grid gap-6">
              {topics.map((topic, index) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle>{topic.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300">{topic.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

