import { useState } from 'react'
import { Plus } from 'lucide-react'
import Reveal from './Reveal'

const faqs = [
  {
    q: 'How long does setup take?',
    a: 'Most teams are live in about ten minutes. Connect a source, and Kiln imports up to 24 months of history and starts clustering right away.',
  },
  {
    q: 'Which tools does Kiln integrate with?',
    a: 'Slack, Intercom, Zendesk, HubSpot, Salesforce, Gong, Jira, Linear, the App Store and Google Play — plus a webhook and REST API for anything else.',
  },
  {
    q: 'Can customers see our roadmap?',
    a: 'Yes. Publish a public roadmap on your own domain, or share a private link with selected accounts. You choose which items and details are visible.',
  },
  {
    q: 'Is our data secure?',
    a: 'Kiln is SOC 2 Type II certified and GDPR compliant. Data is encrypted in transit and at rest, and we never train models on your customers’ content.',
  },
  {
    q: 'Can I cancel any time?',
    a: 'Absolutely. Plans are month-to-month or annual, and you can export everything as CSV whenever you like.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section grid gap-16 lg:grid-cols-[1fr_1.6fr]">
      <Reveal>
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">Questions, answered.</h2>
        <p className="mt-6 max-w-prose text-lg text-ink-600">
          Still unsure? Email <a href="mailto:hello@kiln.app" className="font-medium text-coral-600 underline underline-offset-4">hello@kiln.app</a> and a human will reply within a few hours.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <ul className="divide-y divide-ink-100 border-y border-ink-100">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <li key={f.q}>
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-xl font-semibold text-ink-900"
                  >
                    {f.q}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-200 transition-transform duration-300 ${
                        isOpen ? 'rotate-45 bg-ink-900 text-cream-50' : ''
                      }`}
                    >
                      <Plus size={16} />
                    </span>
                  </button>
                </h3>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'}`}>
                  <p className="overflow-hidden max-w-prose text-base leading-relaxed text-ink-600">{f.a}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </Reveal>
    </section>
  )
}
