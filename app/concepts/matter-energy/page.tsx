"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { ConceptHero } from "@/components/ui/concept-hero"
import { ConceptDialog } from "@/components/ui/concept-dialog"

const topics = [
  {
    title: "Classical Matter",
    description:
      "The familiar forms of matter we encounter daily, composed of atoms and molecules, following the laws of classical physics.",
    details: [
      {
        name: "States of matter",
        description:
          "Matter exists in four main states: solid, liquid, gas, and plasma. Each state has distinct properties based on the arrangement and behavior of particles.",
      },
      {
        name: "Atomic structure",
        description:
          "Atoms consist of a nucleus containing protons and neutrons, surrounded by electrons in quantum orbitals. This structure determines the chemical properties of elements.",
      },
      {
        name: "Chemical bonding",
        description:
          "Atoms can form bonds through various mechanisms including ionic, covalent, and metallic bonding, creating molecules and compounds with unique properties.",
      },
      {
        name: "Properties of materials",
        description:
          "Materials exhibit characteristics like density, conductivity, malleability, and thermal properties based on their atomic and molecular structure.",
      },
    ],
  },
  {
    title: "Plasma",
    description: "The fourth state of matter, consisting of ionized gas where electrons have been stripped from atoms.",
    details: [
      {
        name: "Formation conditions",
        description:
          "Plasma forms under extreme temperatures or strong electromagnetic fields that strip electrons from atoms, creating a soup of charged particles.",
      },
      {
        name: "Properties of plasma",
        description:
          "Plasma conducts electricity, responds to electromagnetic fields, and can self-organize into complex structures due to collective behavior of charged particles.",
      },
      {
        name: "Plasma in stars",
        description:
          "Stars are made primarily of plasma, where high temperatures and pressures maintain matter in this energetic state, enabling nuclear fusion.",
      },
      {
        name: "Applications in technology",
        description:
          "Plasma is used in displays, lighting, materials processing, fusion research, and propulsion systems for spacecraft.",
      },
    ],
  },
  {
    title: "Dark Matter",
    description:
      "Mysterious form of matter that doesn't interact with light but exerts gravitational influence on visible matter.",
    details: [
      {
        name: "Evidence for dark matter",
        description:
          "Galaxy rotation curves, gravitational lensing, and cosmic microwave background radiation all provide evidence for the existence of dark matter.",
      },
      {
        name: "Distribution in galaxies",
        description:
          "Dark matter forms halos around galaxies and clusters, extending far beyond visible matter and providing the gravitational scaffold for cosmic structure.",
      },
      {
        name: "Candidate particles",
        description:
          "Theoretical particles like WIMPs (Weakly Interacting Massive Particles) and axions are proposed as potential dark matter candidates.",
      },
      {
        name: "Detection methods",
        description:
          "Scientists use underground detectors, space telescopes, and particle colliders in attempts to directly or indirectly detect dark matter particles.",
      },
    ],
  },
  {
    title: "Dark Energy",
    description: "The unknown form of energy that appears to be driving the accelerating expansion of the universe.",
    details: [
      {
        name: "Cosmic acceleration",
        description:
          "Observations of distant supernovae revealed that the universe's expansion is accelerating, contrary to what gravity alone would predict.",
      },
      {
        name: "Energy density",
        description:
          "Dark energy appears to maintain constant density as space expands, unlike matter which becomes more diffuse, making it the dominant component of the universe.",
      },
      {
        name: "Theoretical models",
        description:
          "Proposals include the cosmological constant, quintessence, and modified gravity theories to explain the nature of dark energy.",
      },
      {
        name: "Observational evidence",
        description:
          "Multiple lines of evidence support dark energy, including cosmic microwave background patterns, large-scale structure, and galactic distribution.",
      },
    ],
  },
  {
    title: "Antimatter",
    description: "Matter composed of antiparticles, with opposite properties to normal matter.",
    details: [
      {
        name: "Particle-antiparticle pairs",
        description:
          "Every particle has a corresponding antiparticle with opposite quantum properties but identical mass, such as electrons and positrons.",
      },
      {
        name: "Annihilation processes",
        description:
          "When matter and antimatter meet, they annihilate, converting their mass entirely into energy following E=mc².",
      },
      {
        name: "Creation in laboratories",
        description:
          "Particle accelerators can create antimatter through high-energy collisions, allowing scientists to study its properties.",
      },
      {
        name: "Role in early universe",
        description:
          "The slight imbalance between matter and antimatter in the early universe led to the matter-dominated cosmos we observe today.",
      },
    ],
  },
  {
    title: "Quantum Fields",
    description: "The fundamental entities that permeate space and give rise to particles through excitations.",
    details: [
      {
        name: "Field theory basics",
        description:
          "Quantum fields are the fundamental entities of nature, with particles being excitations or waves in these fields.",
      },
      {
        name: "Particle creation",
        description:
          "Fields can be excited to create particles, explaining how particles can appear and disappear in vacuum.",
      },
      {
        name: "Vacuum energy",
        description:
          "Even in empty space, quantum fields maintain zero-point energy, leading to quantum fluctuations and virtual particles.",
      },
      {
        name: "Quantum fluctuations",
        description:
          "Random variations in quantum fields can create particle-antiparticle pairs that quickly annihilate, affecting various physical phenomena.",
      },
    ],
  },
]

export default function MatterEnergyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent" />
      <div className="container relative py-8">
        <Link
          href="/learning-path"
          className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors mb-8"
        >
          <ChevronLeft className="size-4 mr-2" />
          Back to Learning Path
        </Link>

        <ConceptHero title="Matter & Energy" gradient="bg-gradient-to-r from-orange-500/20 to-red-500/20" />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-slate-300 mb-8">
              Explore the fundamental building blocks of the universe and the various forms of matter and energy that
              shape our cosmos, from the familiar to the mysterious.
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

