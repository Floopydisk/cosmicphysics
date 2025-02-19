"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { ConceptHero } from "@/components/ui/concept-hero"
import { ConceptDialog } from "@/components/ui/concept-dialog"

export default function StellarProcessesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const topics = [
    {
      title: "Stellar Nucleosynthesis",
      description: "The process by which stars create heavier elements from lighter ones through nuclear fusion.",
      details: [
        {
          name: "Hydrogen fusion",
          description:
            "The primary fusion process in main sequence stars, converting hydrogen into helium through the proton-proton chain or CNO cycle, releasing enormous amounts of energy.",
        },
        {
          name: "Helium burning",
          description:
            "When core hydrogen is depleted, stars begin fusing helium into carbon and oxygen through the triple-alpha process, marking a new phase of stellar evolution.",
        },
        {
          name: "Carbon fusion",
          description:
            "In massive stars, carbon atoms fuse to create heavier elements like neon, sodium, and magnesium, contributing to the chemical enrichment of the universe.",
        },
        {
          name: "Heavy element production",
          description:
            "The creation of elements heavier than iron through processes like the r-process in supernovae and neutron star mergers.",
        },
        {
          name: "s-process",
          description:
            "The slow neutron-capture process occurring in red giants and AGB stars, producing about half of the elements heavier than iron.",
        },
        {
          name: "r-process",
          description:
            "The rapid neutron-capture process occurring in extreme environments like supernovae and neutron star mergers, creating many heavy elements.",
        },
      ],
    },
    {
      title: "Hydrostatic Equilibrium",
      description:
        "The balance between gravity pulling inward and pressure pushing outward that maintains a star's stability.",
      details: [
        {
          name: "Gravitational force",
          description:
            "The inward pull of gravity that tries to collapse the star, proportional to the star's mass and inversely proportional to radius squared.",
        },
        {
          name: "Pressure gradients",
          description:
            "The outward force created by thermal pressure and radiation pressure that counteracts gravity, maintaining stellar stability.",
        },
        {
          name: "Temperature dependence",
          description:
            "How the internal temperature of the star affects pressure and fusion rates, crucial for maintaining equilibrium.",
        },
        {
          name: "Mass effects",
          description:
            "The role of stellar mass in determining the balance between gravity and pressure, influencing the star's entire life cycle.",
        },
        {
          name: "Stability conditions",
          description:
            "The specific conditions required for a star to maintain stable hydrostatic equilibrium throughout its main sequence life.",
        },
        {
          name: "Instabilities",
          description:
            "Conditions that can disrupt hydrostatic equilibrium, leading to pulsations, mass loss, or stellar collapse.",
        },
      ],
    },
    {
      title: "Energy Transport",
      description: "The mechanisms by which energy moves from a star's core to its surface.",
      details: [
        {
          name: "Radiative transfer",
          description:
            "The process by which photons carry energy through the stellar interior, being repeatedly absorbed and re-emitted.",
        },
        {
          name: "Convection",
          description:
            "The bulk movement of hot material upward and cool material downward, creating convection cells in certain stellar layers.",
        },
        {
          name: "Conduction",
          description:
            "Direct transfer of thermal energy through particle collisions, generally less important in stars except in degenerate cores.",
        },
        {
          name: "Opacity",
          description:
            "The resistance of stellar material to the passage of photons, affecting how efficiently energy can be transported.",
        },
        {
          name: "Temperature gradient",
          description:
            "The change in temperature from the core to the surface that drives energy transport through the star.",
        },
        {
          name: "Energy flux",
          description:
            "The rate at which energy flows through each layer of the star, maintaining the overall energy balance.",
        },
      ],
    },
    {
      title: "Stellar Atmospheres",
      description: "The outer layers of stars where radiation interacts with matter to produce observable spectra.",
      details: [
        {
          name: "Photosphere",
          description:
            "The visible surface of the star where most of the light we observe originates, characterized by specific temperature and opacity.",
        },
        {
          name: "Chromosphere",
          description:
            "A thin layer above the photosphere where temperature begins to rise, observable during solar eclipses and through specific spectral lines.",
        },
        {
          name: "Corona",
          description:
            "The extremely hot outer atmosphere of a star, visible during eclipses and responsible for stellar wind and various high-energy phenomena.",
        },
        {
          name: "Spectral formation",
          description:
            "How different elements in the stellar atmosphere absorb and emit light, creating the characteristic spectrum we observe.",
        },
        {
          name: "Line absorption",
          description:
            "The process by which atoms and ions in the stellar atmosphere absorb specific wavelengths of light, creating absorption lines.",
        },
        {
          name: "Emission processes",
          description:
            "Various mechanisms by which the stellar atmosphere emits light, including recombination and collisional excitation.",
        },
      ],
    },
  ]

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

        <ConceptHero title="Stellar Processes" gradient="bg-gradient-to-r from-yellow-500/20 to-orange-500/20" />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-slate-300 mb-8">
              Delve into the complex physical processes that govern the lives of stars, from the nuclear reactions in
              their cores to the delicate balance of forces that keep them stable.
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

