import { Flame } from 'lucide-react'

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2" aria-label="Kiln home">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-coral-600 text-cream-50">
        <Flame size={18} strokeWidth={2.5} />
      </span>
      <span className={`font-display text-xl font-bold tracking-tight ${light ? 'text-cream-50' : 'text-ink-900'}`}>
        Kiln
      </span>
    </a>
  )
}
