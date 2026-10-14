import { Aperture, Command, Hexagon, Layers, Mountain, Orbit, Triangle, Waves, Zap } from 'lucide-react'

const brands = [
  { name: 'Northwind', Icon: Mountain },
  { name: 'Orbitly', Icon: Orbit },
  { name: 'Hexa', Icon: Hexagon },
  { name: 'Stackwell', Icon: Layers },
  { name: 'Tidepool', Icon: Waves },
  { name: 'Voltix', Icon: Zap },
  { name: 'Apex & Co', Icon: Triangle },
  { name: 'Lensly', Icon: Aperture },
  { name: 'Commandr', Icon: Command },
]

export default function LogoStrip() {
  const row = [...brands, ...brands]
  return (
    <section className="border-y border-ink-100 bg-cream-100 py-12" aria-label="Customers">
      <p className="mx-auto mb-8 max-w-7xl px-6 text-center text-sm text-ink-500">
        Trusted by product teams at 2,400+ growing companies
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream-100 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream-100 to-transparent" />
        <ul className="flex w-max animate-marquee items-center gap-16">
          {row.map(({ name, Icon }, i) => (
            <li key={i} className="flex items-center gap-2 text-ink-400">
              <Icon size={24} />
              <span className="font-display text-xl font-semibold">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
