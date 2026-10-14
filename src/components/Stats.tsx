import Reveal from './Reveal'

const stats = [
  { v: '12M+', l: 'pieces of feedback organised' },
  { v: '68%', l: 'less time spent on roadmap prep' },
  { v: '2,400', l: 'product teams shipping with Kiln' },
  { v: '99.99%', l: 'uptime over the last 12 months' },
]

export default function Stats() {
  return (
    <section className="bg-ink-900">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 80}>
            <p className="font-display text-5xl font-bold tabular-nums text-coral-400 md:text-6xl">{s.v}</p>
            <p className="mt-3 max-w-xs text-base text-ink-200">{s.l}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
