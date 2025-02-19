import Link from "next/link"
import { ArrowRight, Star, Atom, Orbit } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 size-64 rounded-full bg-purple-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 size-48 rounded-full bg-pink-500/5 blur-3xl animate-float-delayed" />
        <div className="absolute top-2/3 left-1/3 size-56 rounded-full bg-blue-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/3 size-40 rounded-full bg-green-500/5 blur-3xl animate-float-delayed" />

        {/* Physics Constants */}
        <div className="absolute top-1/3 right-1/4 text-2xl text-purple-500/20 font-mono rotate-12">E = mc²</div>
        <div className="absolute bottom-1/4 left-1/3 text-2xl text-pink-500/20 font-mono -rotate-6">F = G(m₁m₂)/r²</div>
        <div className="absolute top-1/2 right-1/3 text-xl text-blue-500/20 font-mono rotate-45">ΔE = hν</div>
        <div className="absolute bottom-1/3 left-1/4 text-xl text-green-500/20 font-mono -rotate-12">c = λν</div>
        <div className="absolute top-2/3 right-1/2 text-xl text-purple-500/20 font-mono rotate-90">ψ</div>
        <div className="absolute bottom-1/2 left-2/3 text-xl text-pink-500/20 font-mono -rotate-45">∇ × B = μ₀J</div>

        {/* Circuit Patterns */}
        <div className="absolute top-1/2 left-1/4 size-32 border border-purple-500/20 rounded-lg rotate-45">
          <div className="absolute inset-0 border-t border-l border-purple-500/20 rounded-tl-lg" />
          <div className="absolute bottom-0 right-0 size-4 bg-purple-500/20 rounded-full" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 size-24 border border-pink-500/20 rounded-lg -rotate-12">
          <div className="absolute inset-0 border-r border-b border-pink-500/20 rounded-br-lg" />
          <div className="absolute top-0 left-0 size-3 bg-pink-500/20 rounded-full" />
        </div>
        <div className="absolute top-1/3 right-1/4 size-28 border border-blue-500/20 rounded-lg rotate-180">
          <div className="absolute inset-0 border-t border-r border-blue-500/20 rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 size-3 bg-blue-500/20 rounded-full" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 size-20 border border-green-500/20 rounded-lg rotate-90">
          <div className="absolute inset-0 border-b border-l border-green-500/20 rounded-bl-lg" />
          <div className="absolute top-0 right-0 size-2 bg-green-500/20 rounded-full" />
        </div>
      </div>

      <header className="container relative mx-auto px-4 py-24 md:py-32 text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl opacity-20" />
          <div className="absolute right-1/4 top-1/4 size-32 rounded-full bg-purple-500 blur-3xl opacity-20" />
          <div className="absolute left-1/4 bottom-1/4 size-32 rounded-full bg-pink-500 blur-3xl opacity-20" />
        </div>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-gradient">
          Physics of the Cosmos
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          Explore the fundamental forces that shape our universe through interactive explanations and stunning
          visualizations
        </p>
        <Link
          href="/learning-path"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-200 shadow-lg shadow-purple-500/25"
        >
          Start Learning
        </Link>
      </header>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/concepts/stellar-evolution" className="group">
            <Card className="relative overflow-hidden bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="size-6 text-yellow-400" />
                  Stellar Evolution
                </CardTitle>
                <CardDescription className="text-slate-400">From nebulae to supernovae</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Discover the life cycles of stars, from their birth in nebulae to their dramatic endings as white
                  dwarfs, neutron stars, or black holes.
                </p>
                <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                  Learn more <ArrowRight className="size-4" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/concepts/nuclear-fusion" className="group">
            <Card className="relative overflow-hidden bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Atom className="size-6 text-blue-400" />
                  Nuclear Fusion
                </CardTitle>
                <CardDescription className="text-slate-400">The power source of stars</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Explore how stars generate energy through nuclear fusion and create the elements of the universe.
                </p>
                <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                  Learn more <ArrowRight className="size-4" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/concepts/gravity" className="group">
            <Card className="relative overflow-hidden bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Orbit className="size-6 text-green-400" />
                  Gravity & Spacetime
                </CardTitle>
                <CardDescription className="text-slate-400">The fabric of the cosmos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Understand how gravity shapes the universe and bends the very fabric of spacetime.
                </p>
                <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                  Learn more <ArrowRight className="size-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}

