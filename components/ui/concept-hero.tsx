import { cn } from "@/lib/utils"

interface ConceptHeroProps {
  title: string
  gradient: string
  className?: string
}

export function ConceptHero({ title, gradient, className }: ConceptHeroProps) {
  return (
    <div className={cn("relative w-full h-[300px] mb-12 rounded-lg overflow-hidden", className)}>
      <div className={cn("absolute inset-0", gradient)} />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center text-center p-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">{title}</h1>
      </div>
      <img
        src="/placeholder.svg?height=300&width=1200"
        alt=""
        className="w-full h-full object-cover"
        aria-hidden="true"
      />
    </div>
  )
}

