'use client'

import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeroCarouselProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode
  subtitle: string
  images: { src: string; alt: string }[]
}

export const HeroCarousel = React.forwardRef<HTMLDivElement, HeroCarouselProps>(
  ({ title, subtitle, images, className, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(Math.floor(images.length / 2))

    const handleNext = React.useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, [images.length])

    const handlePrev = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    React.useEffect(() => {
      const timer = setInterval(handleNext, 4000)
      return () => clearInterval(timer)
    }, [handleNext])

    return (
      <div
        ref={ref}
        className={cn(
          'relative w-full min-h-screen flex flex-col items-center justify-center overflow-x-hidden p-4',
          className
        )}
        style={{ background: '#000033' }}
        {...props}
      >
        {/* Background gradient blobs */}
        <div className="absolute inset-0 z-0 opacity-30" aria-hidden="true">
          <div className="absolute bottom-0 left-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle farthest-side, rgba(204,153,51,0.25), transparent)' }} />
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle farthest-side, rgba(204,153,51,0.15), transparent)' }} />
          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(204,153,51,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(204,153,51,0.5) 1px,transparent 1px)',
              backgroundSize: '60px 60px',
            }} />
        </div>

        {/* Content */}
        <div className="z-10 flex w-full flex-col items-center text-center space-y-8 md:space-y-12">
          {/* Header */}
          <div className="space-y-4 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight max-w-4xl text-white">
              {title}
            </h1>
            <p className="max-w-2xl mx-auto text-white/60 md:text-xl leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="#contact"
                className="bg-gold hover:bg-gold-light text-navy font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(204,153,51,0.5)] hover:-translate-y-0.5"
                style={{ backgroundColor: '#CC9933', color: '#000033' }}
              >
                Book My Celebration
              </a>
              <a
                href="#contact"
                className="font-medium text-base px-8 py-4 rounded-full transition-all duration-300"
                style={{ color: '#CC9933', border: '1px solid rgba(204,153,51,0.5)' }}
              >
                Get a Corporate Proposal
              </a>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1000px' }}>
              {images.map((image, index) => {
                const total = images.length
                let pos = (index - currentIndex + total) % total
                if (pos > Math.floor(total / 2)) pos = pos - total

                const isCenter   = pos === 0
                const isAdjacent = Math.abs(pos) === 1

                return (
                  <div
                    key={index}
                    className="absolute w-48 h-80 md:w-64 md:h-[420px] transition-all duration-500 ease-in-out flex items-center justify-center"
                    style={{
                      transform: `translateX(${pos * 45}%) scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7}) rotateY(${pos * -10}deg)`,
                      zIndex:     isCenter ? 10 : isAdjacent ? 5 : 1,
                      opacity:    isCenter ? 1  : isAdjacent ? 0.4 : 0,
                      filter:     isCenter ? 'blur(0px)' : 'blur(4px)',
                      visibility: Math.abs(pos) > 1 ? 'hidden' : 'visible',
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full rounded-3xl shadow-2xl"
                      style={{ border: '2px solid rgba(204,153,51,0.25)' }}
                    />
                  </div>
                )
              })}
            </div>

            {/* Nav buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 z-20 flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'rgba(0,0,51,0.6)', border: '1px solid rgba(204,153,51,0.4)', backdropFilter: 'blur(8px)', color: '#CC9933' }}
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 z-20 flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'rgba(0,0,51,0.6)', border: '1px solid rgba(204,153,51,0.4)', backdropFilter: 'blur(8px)', color: '#CC9933' }}
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-10 pt-4 pb-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', width: '100%', maxWidth: '600px' }}>
            {[
              { num: '150+', label: 'Events Rocked' },
              { num: '20K+', label: 'Prints Delivered' },
              { num: '100%', label: 'Happy Clients' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold" style={{ color: '#CC9933' }}>{s.num}</div>
                <div className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
)

HeroCarousel.displayName = 'HeroCarousel'
