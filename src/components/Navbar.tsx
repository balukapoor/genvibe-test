import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [
  { href: '#features', label: 'Product' },
  { href: '#how', label: 'How it works' },
  { href: '#customers', label: 'Customers' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-ink-100 bg-cream-50' : 'border-b border-transparent bg-cream-50'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6" aria-label="Primary">
        <Logo />
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-base text-ink-600 transition-colors hover:text-ink-900">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-4 md:flex">
          <a href="#" className="text-base font-medium text-ink-800 hover:text-coral-600">
            Sign in
          </a>
          <a href="#pricing" className="btn-dark py-2">
            Start free
          </a>
        </div>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink-800 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-ink-100 bg-cream-50 px-6 pb-6 md:hidden">
          <ul className="flex flex-col py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-ink-100 py-4 text-lg text-ink-800"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#pricing" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">
            Start free
          </a>
        </div>
      )}
    </header>
  )
}
