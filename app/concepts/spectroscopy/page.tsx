"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { ConceptHero } from "@/components/ui/concept-hero"
import { ConceptDialog } from "@/components/ui/concept-dialog"

export default function SpectroscopyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const topics = [
    {
      title: "Emission Spectra",
      description: "The unique patterns of light emitted by excited atoms and molecules.",
      details: [
        {
          name: "Atomic emission",
          description:
            "When electrons in excited atoms transition to lower energy levels, they emit photons of specific wavelengths, creating characteristic spectral lines.",
        },
        {
          name: "Molecular emission",
          description:
            "Molecules emit light through various transitions between electronic, vibrational, and rotational energy states, creating band spectra.",
        },
        {
          name: "Thermal emission",
          description:
            "Continuous spectrum of light emitted by hot objects, following black body radiation laws and providing temperature information.",
        },
        {
          name: "Spectral analysis",
          description:
            "Techniques used to analyze emission spectra and identify chemical elements and molecules in astronomical objects.",
        },
      ],
    },
    {
      title: "Absorption Spectra",
      description: "Dark lines in a spectrum where atoms have absorbed specific wavelengths of light.",
      details: [
        {
          name: "Atomic absorption",
          description:
            "Atoms absorb photons of specific wavelengths, creating dark lines in the spectrum that match their energy level transitions.",
        },
        {
          name: "Molecular absorption",
          description:
            "Complex absorption patterns created by molecules, providing information about molecular composition and structure.",
        },
        {
          name: "Stellar atmospheres",
          description:
            "How absorption lines in stellar spectra reveal the chemical composition and physical conditions of stellar atmospheres.",
        },
        {
          name: "Interstellar medium",
          description: "Absorption features that reveal the presence and properties of gas and dust between stars.",
        },
      ],
    },
    {
      title: "Spectral Lines",
      description: "Distinct lines in spectra that correspond to specific atomic transitions.",
      details: [
        {
          name: "Line formation",
          description:
            "Physical processes that create spectral lines, including quantum mechanical transitions and selection rules.",
        },
        {
          name: "Line broadening",
          description:
            "Mechanisms that affect line width, including natural broadening, Doppler broadening, and pressure broadening.",
        },
        {
          name: "Line strength",
          description:
            "Factors determining the intensity of spectral lines, including abundance, temperature, and excitation conditions.",
        },
        {
          name: "Line identification",
          description:
            "Methods used to identify and catalog spectral lines, matching them to specific elements and molecules.",
        },
      ],
    },
    {
      title: "Redshift",
      description: "The stretching of light waves from distant objects, indicating their motion.",
      details: [
        {
          name: "Doppler effect",
          description:
            "How motion affects the wavelength of light, causing blueshift for approaching objects and redshift for receding objects.",
        },
        {
          name: "Cosmological redshift",
          description:
            "The stretching of light waves due to the expansion of space itself, distinct from Doppler shifts.",
        },
        {
          name: "Gravitational redshift",
          description:
            "The shifting of spectral lines due to strong gravitational fields, as predicted by general relativity.",
        },
        {
          name: "Redshift measurement",
          description:
            "Techniques used to measure redshifts and determine distances and velocities of astronomical objects.",
        },
      ],
    },
    {
      title: "Chemical Composition of Stars",
      description: "Using spectral analysis to determine stellar composition.",
      details: [
        {
          name: "Abundance analysis",
          description:
            "Methods to determine the relative amounts of different elements in stars from their spectral lines.",
        },
        {
          name: "Metallicity",
          description:
            "The proportion of elements heavier than helium in a star, indicating its age and formation history.",
        },
        {
          name: "Stellar classification",
          description:
            "How spectral features are used to classify stars into different types based on temperature and composition.",
        },
        {
          name: "Chemical evolution",
          description: "How stellar composition changes over time and varies between different stellar populations.",
        },
      ],
    },
    {
      title: "Chemical Composition of Nebulae",
      description: "Analyzing the spectra of nebulae to understand their composition.",
      details: [
        {
          name: "Emission nebulae",
          description:
            "Hot, glowing clouds of gas that emit light at characteristic wavelengths when excited by nearby stars.",
        },
        {
          name: "Reflection nebulae",
          description: "Clouds of dust that scatter and reflect light from nearby stars, revealing dust composition.",
        },
        {
          name: "Planetary nebulae",
          description: "Shells of gas ejected by dying stars, showing enrichment in heavy elements.",
        },
        {
          name: "Molecular clouds",
          description:
            "Dense regions containing molecules that show distinctive spectral features in radio and infrared.",
        },
      ],
    },
  ]

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
      <div className="container relative py-8">
        <Link
          href="/learning-path"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <ChevronLeft className="size-4 mr-2" />
          Back to Learning Path
        </Link>

        <ConceptHero title="Spectroscopy" gradient="bg-gradient-to-r from-blue-500/20 to-purple-500/20" />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-slate-300 mb-8">
              Explore how the analysis of light reveals the secrets of celestial objects, from their chemical
              composition to their motion through space.
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
      </div>
    </div>
  )
}

