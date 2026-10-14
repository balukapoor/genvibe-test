import { Quote } from 'lucide-react'
import Reveal from './Reveal'

const small = [
  {
    quote: 'We retired three spreadsheets and a monthly “what do customers want” meeting in the first week.',
    name: 'Marcus Bell',
    role: 'Head of Product, Voltix',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    quote: 'Closing the loop is the sleeper feature. Customers reply to say thank you. That never happened before.',
    name: 'Elena Voss',
    role: 'CPO, Tidepool',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80',
  },
]

export default function Testimonials() {
  return (
    <section id="customers" className="section">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">Customers</p>
        <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">Product teams stop guessing.</h2>
      </Reveal>

      <div className="mt-16 grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <figure className="flex h-full flex-col justify-between rounded-3xl bg-coral-600 p-8 text-cream-50 md:p-12">
            <Quote size={40} className="text-coral-200" />
            <blockquote className="mt-8 font-display text-2xl font-semibold leading-snug md:text-3xl">
              “Kiln gave us a roadmap we can defend in front of the board — every line has customers and revenue
              attached. Planning went from a fight to a conversation.”
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80"
                alt="Priya Natarajan"
                className="h-14 w-14 rounded-full border-2 border-coral-200 object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-semibold">Priya Natarajan</p>
                <p className="text-sm text-coral-100">VP Product, Northwind</p>
              </div>
            </figcaption>
          </figure>
        </Reveal>

        <div className="flex flex-col gap-6 lg:col-span-2">
          {small.map((t, i) => (
            <Reveal key={t.name} delay={(i + 1) * 100} className="flex-1">
              <figure className="h-full rounded-3xl border border-ink-100 bg-white p-8 shadow-sm">
                <blockquote className="text-lg leading-relaxed text-ink-700">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-ink-900">{t.name}</p>
                    <p className="text-sm text-ink-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
