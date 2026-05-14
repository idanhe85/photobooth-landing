'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { SparklesCore } from './SparklesCore'

const links = [
  { label: 'Home',         href: '#home'     },
  { label: 'Gallery',      href: '#gallery'  },
  { label: 'How It Works', href: '#process'  },
  { label: 'Packages',     href: '#packages' },
  { label: 'Contact',      href: '#contact'  },
]

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [active, setActive]       = useState('home')
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll spy — watch all four sections
  useEffect(() => {
    const ids = links.map(l => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo with Sparkles */}
        <a href="#home" className="relative flex items-center group">
          <div
            className="absolute pointer-events-none"
            style={{ inset: '-18px -12px', zIndex: 0 }}
          >
            <SparklesCore
              particleColor="#CC9933"
              particleDensity={45}
              speed={0.7}
              minSize={0.5}
              maxSize={1.4}
              background="transparent"
              className="w-full h-full"
            />
          </div>
          <div className="relative z-10">
            <Image
              src="/LOGO.png"
              alt="The PhotoDUDE"
              width={180}
              height={24}
              priority
              className="object-contain"
            />
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => {
            const id = l.href.replace('#', '')
            const isActive = active === id
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-gold' : 'text-white/70 hover:text-white'
                }`}
              >
                {l.label}
                {/* Active underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            )
          })}
          <a
            href="#contact"
            className="bg-gold text-navy font-semibold text-sm px-5 py-2 rounded-full hover:bg-gold-light transition-colors"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy/98 backdrop-blur-md border-t border-gold/20 px-6 py-4 flex flex-col gap-2">
          {links.map(l => {
            const id = l.href.replace('#', '')
            const isActive = active === id
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 border-b border-white/10 text-sm font-medium transition-colors ${
                  isActive ? 'text-gold' : 'text-white/70'
                }`}
              >
                {l.label}
              </a>
            )
          })}
          <a
            href="#contact"
            className="bg-gold text-navy font-semibold text-center px-5 py-2.5 rounded-full mt-3"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  )
}
