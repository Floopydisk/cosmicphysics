import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus } from "lucide-react"

interface ConceptDialogProps {
  name: string
  description: string
}

export function ConceptDialog({ name, description }: ConceptDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center space-x-2 text-sm text-slate-400 hover:text-slate-300 transition-colors">
          <div className="size-1.5 rounded-full bg-orange-500" />
          <span>{name}</span>
          <Plus className="size-3 opacity-50" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-slate-900 border-slate-800">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

