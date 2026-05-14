'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SparklesCore } from './SparklesCore'

/* ─── Scroll-Expansion shell (adapted from arunachalam0606/scroll-expansion-hero) ─── */
interface ScrollExpandHeroProps {
  title: string
  children: ReactNode
}

function ScrollExpandHero({ title, children }: ScrollExpandHeroProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showContent, setShowContent]       = useState(false)
  const [fullyExpanded, setFullyExpanded]   = useState(false)
  const [touchStartY, setTouchStartY]       = useState(0)
  const [isMobile, setIsMobile]             = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (mobile) {
        setScrollProgress(1)
        setShowContent(true)
        setFullyExpanded(true)
      }
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (isMobile) return
      if (fullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setFullyExpanded(false); e.preventDefault(); return
      }
      if (!fullyExpanded) {
        e.preventDefault()
        const next = Math.min(Math.max(scrollProgress + e.deltaY * 0.0009, 0), 1)
        setScrollProgress(next)
        if (next >= 1) { setFullyExpanded(true); setShowContent(true) }
        else if (next < 0.75) setShowContent(false)
      }
    }

    const onTouchStart = (e: TouchEvent) => { if (isMobile) return; setTouchStartY(e.touches[0].clientY) }

    const onTouchMove = (e: TouchEvent) => {
      if (isMobile) return
      if (!touchStartY) return
      const delta = touchStartY - e.touches[0].clientY
      if (fullyExpanded && delta < -20 && window.scrollY <= 5) {
        setFullyExpanded(false); e.preventDefault(); return
      }
      if (!fullyExpanded) {
        e.preventDefault()
        const next = Math.min(Math.max(scrollProgress + delta * 0.006, 0), 1)
        setScrollProgress(next)
        if (next >= 1) { setFullyExpanded(true); setShowContent(true) }
        else if (next < 0.75) setShowContent(false)
        setTouchStartY(e.touches[0].clientY)
      }
    }

    const onTouchEnd = () => setTouchStartY(0)
    const onScroll   = () => { if (!fullyExpanded && !isMobile) window.scrollTo(0, 0) }

    window.addEventListener('wheel',      onWheel      as EventListener, { passive: false })
    window.addEventListener('scroll',     onScroll)
    window.addEventListener('touchstart', onTouchStart as EventListener, { passive: false })
    window.addEventListener('touchmove',  onTouchMove  as EventListener, { passive: false })
    window.addEventListener('touchend',   onTouchEnd)
    return () => {
      window.removeEventListener('wheel',      onWheel      as EventListener)
      window.removeEventListener('scroll',     onScroll)
      window.removeEventListener('touchstart', onTouchStart as EventListener)
      window.removeEventListener('touchmove',  onTouchMove  as EventListener)
      window.removeEventListener('touchend',   onTouchEnd)
    }
  }, [scrollProgress, fullyExpanded, touchStartY])

  const w          = 300 + scrollProgress * (isMobile ? 650 : 1250)
  const h          = 400 + scrollProgress * (isMobile ? 200 : 400)
  const slideX     = scrollProgress * (isMobile ? 180 : 150)
  const firstWord  = title.split(' ')[0]
  const restWords  = title.split(' ').slice(1).join(' ')

  return (
    <div ref={sectionRef} className="overflow-x-hidden">
      <section id="home" className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">

          {/* ── Background: navy + sparkles, fades as central element expands ── */}
          <motion.div
            className="absolute inset-0 z-0"
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <div className="w-full h-full bg-navy" />
            <SparklesCore
              particleColor="#CC9933"
              particleDensity={50}
              speed={0.5}
              minSize={0.4}
              maxSize={1.6}
              background="transparent"
              className="absolute inset-0 w-full h-full"
            />
            {/* subtle grid */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(204,153,51,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(204,153,51,0.5) 1px,transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />
          </motion.div>

          {/* ── Central expanding colour panel ── */}
          <div className="relative z-10 w-full flex flex-col items-center min-h-[100dvh]">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">

              {/* Expanding panel — hero photo */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden transition-none"
                style={{
                  width: `${w}px`,
                  height: `${h}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0 0 60px rgba(204,153,51,0.35)',
                }}
              >
                {/* Hero photo */}
                <Image
                  src="/IMG_3989.jpg"
                  alt="The PhotoDUDE booth in action"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Dark overlay — fades out as panel expands */}
                <motion.div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, rgba(0,0,51,0.45) 0%, rgba(0,0,0,0.2) 100%)' }}
                  animate={{ opacity: 1 - scrollProgress * 0.7 }}
                />
                {/* Gold shimmer overlay that fades with expansion */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(204,153,51,0.1) 0%, transparent 70%)',
                  }}
                  animate={{ opacity: 1 - scrollProgress * 0.8 }}
                />
                {/* Logo centred inside panel */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ opacity: 1 - scrollProgress * 2 }}
                    className="relative z-10"
                  >
                    <Image
                      src="/LOGO.png"
                      alt="The PhotoDUDE"
                      width={220}
                      height={29}
                      priority
                      className="object-contain"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Split title — words slide apart on scroll */}
              <div className="flex items-center justify-center gap-4 w-full relative z-20 flex-col pointer-events-none">
                <motion.p
                  className="text-4xl md:text-6xl font-black text-white/90 transition-none"
                  style={{ transform: `translateX(-${slideX}vw)` }}
                >
                  {firstWord}
                </motion.p>
                <motion.p
                  className="text-4xl md:text-6xl font-black text-gold transition-none"
                  style={{ transform: `translateX(${slideX}vw)` }}
                >
                  {restWords}
                </motion.p>
              </div>

              {/* Scroll hint */}
              {!fullyExpanded && (
                <motion.div
                  className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-white/50 text-xs tracking-[0.25em] uppercase">Scroll to expand</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12l7 7 7-7" stroke="rgba(204,153,51,0.6)" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </motion.div>
              )}
            </div>

            {/* ── Revealed content after full expansion ── */}
            <motion.div
              className="flex flex-col w-full px-6 py-16 md:px-16 md:py-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ─── Hero section ─── */
export default function Hero() {
  return (
    <ScrollExpandHero title="Elevate Your Event">
      <div className="max-w-5xl mx-auto text-center">

        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          From high-profile corporate activations to intimate wedding celebrations —
          we bring the fun, the tech, and the memories.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <a
            href="#contact"
            className="bg-gold hover:bg-gold-light text-navy font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(204,153,51,0.5)] hover:-translate-y-0.5"
          >
            Book My Celebration
          </a>
          <a
            href="#contact"
            className="text-gold border border-gold/50 hover:bg-gold/10 font-medium text-base px-8 py-4 rounded-full transition-all duration-300"
          >
            Get a Corporate Proposal
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-10 pt-10 border-t border-white/10">
          {[
            { num: '150+', label: 'Events Rocked' },
            { num: '20K+', label: 'Prints Delivered' },
            { num: '100%', label: 'Happy Clients' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-gold">{s.num}</div>
              <div className="text-white/40 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </ScrollExpandHero>
  )
}
