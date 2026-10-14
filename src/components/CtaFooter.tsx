import { useState, type FormEvent } from 'react'
import { ArrowRight, Check, Github, Linkedin, Twitter } from 'lucide-react'
import Logo from './Logo'
import Reveal from './Reveal'

const cols = [
  { title: 'Product', links: ['Feedback inbox', 'Themes', 'Roadmap', 'Changelog', 'Integrations'] },
  { title: 'Company', links: ['About', 'Customers', 'Careers', 'Press', 'Contact'] },
  { title: 'Resources', links: ['Docs', 'API reference', 'Guides', 'Security', 'Status'] },
]

export default function CtaFooter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (email.includes('@')) setDone(true)
  }

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-6 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-16 md:px-16 md:py-24">
            <div className="grain absolute inset-0 opacity-20" aria-hidden="true" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-coral-600 opacity-40 blur-3xl" aria-hidden="true" />
            <div className="relative max-w-2xl">
              <h2 className="text-4xl font-bold leading-tight !text-cream-50 md:text-6xl">
                Your customers are already telling you what to build.
              </h2>
              <p className="mt-6 max-w-prose text-lg text-ink-200">
                Start your free trial and see your first themes in about ten minutes.
              </p>
              {done ? (
                <p className="mt-8 flex items-center gap-2 text-lg font-medium text-sage-300">
                  <Check size={20} /> Thanks — check your inbox to finish setting up.
                </p>
              ) : (
                <form onSubmit={submit} className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <label htmlFor="cta-email" className="sr-only">
                    Work email
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-full border border-ink-600 bg-ink-800 px-6 py-3 text-base text-cream-50 placeholder:text-ink-300 focus-visible:ring-offset-ink-900 sm:max-w-sm"
                  />
                  <button type="submit" className="btn-primary">
                    Get started <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-ink-100 bg-cream-100">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-base text-ink-600">
              The feedback-to-roadmap platform for product teams who ship what matters.
            </p>
            <div className="mt-6 flex gap-3 text-ink-500">
              {[
                { Icon: Twitter, l: 'Twitter' },
                { Icon: Linkedin, l: 'LinkedIn' },
                { Icon: Github, l: 'GitHub' },
              ].map(({ Icon, l }) => (
                <a
                  key={l}
                  href="#"
                  aria-label={l}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 transition-colors hover:border-ink-900 hover:text-ink-900"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-ink-500">{c.title}</h4>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-base text-ink-700 transition-colors hover:text-coral-600">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="border-t border-ink-100">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-6 text-sm text-ink-500 sm:flex-row">
            <p>© 2025 Kiln Labs, Inc. All rights reserved.</p>
            <p className="flex gap-6">
              <a href="#" className="hover:text-ink-900">Privacy</a>
              <a href="#" className="hover:text-ink-900">Terms</a>
              <a href="#" className="hover:text-ink-900">Cookies</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
