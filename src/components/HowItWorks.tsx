import Reveal from './Reveal'

const steps = [
  {
    n: '01',
    title: 'Connect your tools',
    body: 'Link Slack, your help desk and call recordings. Historical feedback imports in minutes.',
  },
  {
    n: '02',
    title: 'Review the themes',
    body: 'Kiln groups requests and shows who asked, how often, and how much revenue is attached.',
  },
  {
    n: '03',
    title: 'Ship and tell everyone',
    body: 'Move items onto the roadmap, then notify every customer the moment the work goes live.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="bg-cream-100">
      <div className="section grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
              alt="A product team reviewing customer feedback together at a table"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
              loading="lazy"
            />
            <div className="absolute -bottom-6 right-4 rounded-2xl bg-cream-50 p-5 shadow-2xl md:-right-6">
              <p className="font-display text-4xl font-bold tabular-nums text-ink-900">3.4×</p>
              <p className="text-sm text-ink-500">faster roadmap reviews</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">How it works</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">From noise to shipped in three steps.</h2>
          </Reveal>
          <ol className="mt-12 space-y-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <li className="flex gap-6 border-t border-ink-200 pt-6">
                  <span className="font-display text-3xl font-bold text-coral-600">{s.n}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 max-w-prose text-base leading-relaxed text-ink-600">{s.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
