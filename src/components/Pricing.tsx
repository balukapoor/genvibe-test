import { useState } from 'react'
import { Check } from 'lucide-react'
import Reveal from './Reveal'

const tiers = [
  {
    name: 'Starter',
    blurb: 'For small teams getting feedback out of inboxes.',
    monthly: 0,
    annual: 0,
    cta: 'Start free',
    features: ['Up to 3 seats', '500 feedback items / month', '5 integrations', 'Public roadmap'],
    featured: false,
  },
  {
    name: 'Growth',
    blurb: 'For product teams that plan and report every quarter.',
    monthly: 49,
    annual: 39,
    cta: 'Start 14-day trial',
    features: [
      'Unlimited seats',
      'Unlimited feedback',
      'Automatic theme clustering',
      'Revenue-weighted prioritisation',
      'Customer notifications',
    ],
    featured: true,
  },
  {
    name: 'Scale',
    blurb: 'For organisations with security and scale needs.',
    monthly: 129,
    annual: 99,
    cta: 'Talk to sales',
    features: ['Everything in Growth', 'SAML SSO & SCIM', 'Audit log & custom roles', 'Dedicated success manager'],
    featured: false,
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="bg-cream-100">
      <div className="section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">Simple pricing that scales with your team.</h2>
          <div className="mt-8 inline-flex items-center rounded-full border border-ink-200 bg-cream-50 p-1" role="group" aria-label="Billing period">
            {[
              { k: false, l: 'Monthly' },
              { k: true, l: 'Annual · save 20%' },
            ].map((o) => (
              <button
                key={o.l}
                onClick={() => setAnnual(o.k)}
                aria-pressed={annual === o.k}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  annual === o.k ? 'bg-ink-900 text-cream-50' : 'text-ink-600 hover:text-ink-900'
                }`}
              >
                {o.l}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <article
                className={`flex h-full flex-col rounded-3xl p-8 ${
                  t.featured
                    ? 'bg-ink-900 text-cream-50 shadow-2xl lg:-my-4 lg:py-12'
                    : 'border border-ink-100 bg-white shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`text-2xl font-semibold ${t.featured ? '!text-cream-50' : ''}`}>{t.name}</h3>
                  {t.featured && (
                    <span className="rounded-full bg-coral-600 px-3 py-1 text-xs font-medium text-cream-50">Most popular</span>
                  )}
                </div>
                <p className={`mt-2 text-base ${t.featured ? 'text-ink-200' : 'text-ink-600'}`}>{t.blurb}</p>
                <p className="mt-8 flex items-baseline gap-1">
                  <span className={`font-display text-5xl font-bold tabular-nums ${t.featured ? 'text-cream-50' : 'text-ink-900'}`}>
                    ${annual ? t.annual : t.monthly}
                  </span>
                  <span className={`text-base ${t.featured ? 'text-ink-300' : 'text-ink-500'}`}>
                    {t.monthly === 0 ? 'forever' : '/ seat / month'}
                  </span>
                </p>
                <p className={`mt-1 text-sm ${t.featured ? 'text-ink-300' : 'text-ink-500'}`}>
                  {t.monthly === 0 ? 'No card required' : annual ? 'Billed annually' : 'Billed monthly'}
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-base">
                      <Check size={18} className={`mt-0.5 shrink-0 ${t.featured ? 'text-coral-400' : 'text-sage-500'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#" className={`mt-10 ${t.featured ? 'btn-primary' : 'btn-outline'}`}>
                  {t.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
