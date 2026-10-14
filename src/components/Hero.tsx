import { ArrowRight, Check, Play } from 'lucide-react'
import ProductMockup from './ProductMockup'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grain absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 pb-24 pt-16 md:pt-24 lg:grid-cols-[1fr_1.1fr] lg:pb-32">
        <div>
          <a
            href="#features"
            className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-ink-200 bg-cream-50 py-1 pl-1 pr-4 text-sm text-ink-600 transition-colors hover:border-ink-700"
          >
            <span className="rounded-full bg-coral-600 px-2 py-0.5 text-xs font-medium text-cream-50">New</span>
            Auto-notify customers when you ship
            <ArrowRight size={14} />
          </a>

          <h1
            className="animate-fade-up mt-6 text-5xl font-bold leading-none md:text-7xl"
            style={{ animationDelay: '80ms' }}
          >
            Build what customers{' '}
            <span className="relative inline-block whitespace-nowrap text-coral-600">
              actually
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 8c40-6 100-7 196-2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>{' '}
            ask for.
          </h1>

          <p
            className="animate-fade-up mt-8 max-w-prose text-lg leading-relaxed text-ink-600 md:text-xl"
            style={{ animationDelay: '160ms' }}
          >
            Kiln gathers feedback from Slack, support, sales calls and reviews, groups it into themes, and turns the
            loudest ones into a roadmap you can defend — then tells every customer when it ships.
          </p>

          <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '240ms' }}>
            <a href="#pricing" className="btn-primary">
              Start free for 14 days <ArrowRight size={18} />
            </a>
            <a href="#how" className="btn-outline">
              <Play size={16} /> Watch 2-min tour
            </a>
          </div>

          <ul
            className="animate-fade-up mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-500"
            style={{ animationDelay: '320ms' }}
          >
            {['No credit card', 'Setup in 10 minutes', 'SOC 2 Type II'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check size={16} className="text-sage-500" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up pb-8 lg:pl-4" style={{ animationDelay: '200ms' }}>
          <ProductMockup />
        </div>
      </div>
    </section>
  )
}
