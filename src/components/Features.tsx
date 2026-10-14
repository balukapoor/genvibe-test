import { BellRing, Cable, CheckCircle2, GitBranch, Layers3, Slack, Headphones, Mail, Star, Mic } from 'lucide-react'
import Reveal from './Reveal'

const sources = [
  { label: 'Slack', Icon: Slack },
  { label: 'Zendesk', Icon: Headphones },
  { label: 'Gong calls', Icon: Mic },
  { label: 'Email', Icon: Mail },
  { label: 'App reviews', Icon: Star },
]

const themes = [
  { name: 'Dark mode', n: 148, w: 'w-full' },
  { name: 'SAML SSO', n: 96, w: 'w-2/3' },
  { name: 'Public roadmap links', n: 71, w: 'w-1/2' },
  { name: 'CSV export', n: 38, w: 'w-1/4' },
]

export default function Features() {
  return (
    <section id="features" className="section">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">The product</p>
        <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
          One place for every signal. One roadmap everyone trusts.
        </h2>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-600">
          Stop pasting quotes into slide decks. Kiln does the collecting, clustering and closing-the-loop so your team
          can spend its time deciding.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-6">
        {/* Capture */}
        <Reveal className="md:col-span-4">
          <article className="h-full rounded-3xl bg-cream-100 p-8 md:p-10">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 text-cream-50">
              <Cable size={20} />
            </span>
            <h3 className="mt-6 text-2xl font-semibold">Capture feedback where it already lives</h3>
            <p className="mt-3 max-w-prose text-base leading-relaxed text-ink-600">
              Connect your support desk, chat, call recorder and app stores in a few clicks. Every message is
              de-duplicated, attributed to an account and enriched with revenue.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {sources.map(({ label, Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-ink-100 bg-white px-4 py-2 text-sm font-medium text-ink-700 shadow-sm"
                >
                  <Icon size={16} className="text-coral-600" /> {label}
                </li>
              ))}
              <li className="flex items-center rounded-full px-4 py-2 text-sm text-ink-500">+ 40 more</li>
            </ul>
          </article>
        </Reveal>

        {/* Themes */}
        <Reveal delay={100} className="md:col-span-2">
          <article className="h-full rounded-3xl bg-ink-900 p-8 text-cream-50">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coral-600">
              <Layers3 size={20} />
            </span>
            <h3 className="mt-6 text-2xl font-semibold !text-cream-50">Themes, found for you</h3>
            <p className="mt-3 text-base leading-relaxed text-ink-200">
              Similar requests cluster automatically and rank by revenue at stake.
            </p>
            <ul className="mt-8 space-y-4">
              {themes.map((t) => (
                <li key={t.name}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{t.name}</span>
                    <span className="tabular-nums text-ink-300">{t.n}</span>
                  </div>
                  <div className="h-2 rounded-full bg-ink-700">
                    <div className={`h-2 rounded-full bg-coral-400 ${t.w}`} />
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        {/* Roadmap */}
        <Reveal className="md:col-span-3">
          <article className="h-full rounded-3xl border border-ink-100 bg-white p-8 md:p-10">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coral-100 text-coral-700">
              <GitBranch size={20} />
            </span>
            <h3 className="mt-6 text-2xl font-semibold">A roadmap that explains itself</h3>
            <p className="mt-3 max-w-prose text-base leading-relaxed text-ink-600">
              Every item links back to the customers and dollars behind it. Share a live public view, or a private one
              for your board.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs font-medium">
              {[
                { c: 'Now', items: ['Dark mode', 'SSO'], tone: 'bg-coral-100 text-coral-700' },
                { c: 'Next', items: ['Share links', 'CSV export'], tone: 'bg-amber-100 text-amber-700' },
                { c: 'Later', items: ['Slack bot', 'API v2'], tone: 'bg-ink-100 text-ink-600' },
              ].map((col) => (
                <div key={col.c} className="rounded-xl bg-cream-100 p-2">
                  <p className="mb-2 text-ink-500">{col.c}</p>
                  <div className="space-y-2">
                    {col.items.map((i) => (
                      <p key={i} className={`rounded-lg px-2 py-2 ${col.tone}`}>
                        {i}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        {/* Close the loop */}
        <Reveal delay={100} className="md:col-span-3">
          <article className="h-full rounded-3xl bg-sage-100 p-8 md:p-10">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-700 text-cream-50">
              <BellRing size={20} />
            </span>
            <h3 className="mt-6 text-2xl font-semibold">Close the loop in one click</h3>
            <p className="mt-3 max-w-prose text-base leading-relaxed text-ink-700">
              When an item ships, Kiln drafts a personal note to everyone who asked. Customers feel heard; renewals get
              easier.
            </p>
            <div className="mt-8 rounded-2xl bg-white p-4 shadow-md">
              <p className="flex items-center gap-2 text-sm font-semibold text-ink-900">
                <CheckCircle2 size={16} className="text-sage-700" /> Dark mode is live
              </p>
              <p className="mt-1 text-sm text-ink-600">
                “Hi Marcus — you asked for this in March. Your field team can switch it on today.”
              </p>
              <p className="mt-3 text-xs text-ink-400">Sent to 148 customers · 61% opened</p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
