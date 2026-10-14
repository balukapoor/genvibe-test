import { ArrowUpRight, Bell, CheckCircle2, Inbox, Map, MessageSquare, Search, Sparkles, TrendingUp } from 'lucide-react'

const feedback = [
  { who: 'Priya N.', src: 'Intercom', text: 'Can we export the roadmap as a shareable link for our board?', tag: 'Sharing', tone: 'bg-sage-100 text-sage-700' },
  { who: 'Marcus T.', src: 'Slack', text: 'Dark mode on mobile would be huge for our field team.', tag: 'Dark mode', tone: 'bg-coral-100 text-coral-700' },
  { who: 'Elena V.', src: 'Zendesk', text: 'SSO keeps coming up in every security review we run.', tag: 'SSO', tone: 'bg-amber-100 text-amber-700' },
]

const roadmap = [
  { title: 'Dark mode', votes: 148, progress: 78, state: 'Now' },
  { title: 'SAML single sign-on', votes: 96, progress: 42, state: 'Now' },
  { title: 'Public roadmap links', votes: 71, progress: 12, state: 'Next' },
]

export default function ProductMockup() {
  return (
    <div className="relative">
      {/* Window */}
      <div className="overflow-hidden rounded-2xl border border-ink-100 bg-cream-50 shadow-2xl">
        <div className="flex items-center gap-2 border-b border-ink-100 bg-cream-100 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-coral-300" />
          <span className="h-3 w-3 rounded-full bg-amber-100" />
          <span className="h-3 w-3 rounded-full bg-sage-300" />
          <div className="ml-4 hidden flex-1 items-center gap-2 rounded-full bg-cream-50 px-3 py-1 text-xs text-ink-400 sm:flex">
            <Search size={12} /> Search feedback, themes, customers…
          </div>
        </div>

        <div className="grid sm:grid-cols-[1fr_1.05fr]">
          {/* Inbox */}
          <div className="border-b border-ink-100 p-4 sm:border-b-0 sm:border-r">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-ink-900">
                <Inbox size={16} className="text-coral-600" /> Feedback inbox
              </div>
              <span className="rounded-full bg-ink-900 px-2 py-0.5 text-xs font-medium text-cream-50">214 new</span>
            </div>
            <ul className="space-y-3">
              {feedback.map((f) => (
                <li key={f.who} className="rounded-xl border border-ink-100 bg-white p-3 shadow-sm">
                  <div className="mb-1 flex items-center justify-between text-xs text-ink-400">
                    <span className="flex items-center gap-1">
                      <MessageSquare size={12} /> {f.who} · {f.src}
                    </span>
                  </div>
                  <p className="text-sm leading-snug text-ink-700">{f.text}</p>
                  <span className={`mt-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${f.tone}`}>
                    <Sparkles size={10} /> {f.tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Roadmap */}
          <div className="bg-cream-100 p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink-900">
              <Map size={16} className="text-coral-600" /> Roadmap · Q3
            </div>
            <ul className="space-y-3">
              {roadmap.map((r) => (
                <li key={r.title} className="rounded-xl border border-ink-100 bg-white p-3 shadow-sm">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-ink-900">{r.title}</p>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        r.state === 'Now' ? 'bg-coral-100 text-coral-700' : 'bg-ink-100 text-ink-600'
                      }`}
                    >
                      {r.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-ink-500">{r.votes} customer requests linked</p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink-100">
                    <div className="h-full rounded-full bg-coral-500" style={{ width: `${r.progress}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Floating cards crossing the window edge */}
      <div className="absolute -bottom-8 -left-4 hidden animate-float rounded-2xl border border-ink-100 bg-white p-4 shadow-xl sm:block md:-left-10">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-100 text-sage-700">
            <TrendingUp size={20} />
          </span>
          <div>
            <p className="text-xs text-ink-500">Dark mode demand</p>
            <p className="font-display text-xl font-semibold tabular-nums text-ink-900">
              +23% <span className="text-sm font-normal text-ink-500">this week</span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -top-6 right-4 hidden rounded-2xl bg-ink-900 p-4 text-cream-50 shadow-xl md:block">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral-600">
            <Bell size={16} />
          </span>
          <div>
            <p className="flex items-center gap-1 text-sm font-semibold">
              <CheckCircle2 size={14} className="text-sage-300" /> Shipped: Dark mode
            </p>
            <p className="flex items-center gap-1 text-xs text-ink-300">
              148 customers notified <ArrowUpRight size={12} />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
