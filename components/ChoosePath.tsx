'use client'
import { motion } from 'framer-motion'
import { Necktie, DiscoBall, type IconProps } from './Icons'

const paths = [
  {
    audience: 'Corporate & Brand',
    Icon: Necktie,
    tagline: 'Turn your event into a marketing machine.',
    bullets: [
      'Custom branded booth wraps & overlays',
      'Lead capture & data analytics',
      'White-label digital delivery',
      'Onsite technician, full setup & teardown',
      'ROI reporting for stakeholders',
    ],
    cta: 'Get a Corporate Proposal',
    ctaStyle: 'border border-gold text-gold hover:bg-gold hover:text-navy',
    border: 'border-gold/30 hover:border-gold/70',
    badge: 'B2B',
  },
  {
    audience: 'Weddings & Celebrations',
    Icon: DiscoBall,
    tagline: 'Make every guest the star of the show.',
    bullets: [
      'Unlimited fun props & themed backdrops',
      'Instant prints guests take home',
      'Social sharing straight from the booth',
      'Personalized overlays for the couple',
      'Memories that outlast the night',
    ],
    cta: 'Book My Celebration',
    ctaStyle: 'bg-gold text-navy hover:bg-gold-light font-bold',
    border: 'border-white/20 hover:border-white/50',
    badge: 'B2C',
  },
]

export default function ChoosePath() {
  return (
    <section className="bg-navy py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
            Who Are You?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-4">
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
              Experience
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            We speak both languages fluently — pick your path below.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {paths.map((path, i) => (
            <motion.div
              key={path.audience}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-3xl border ${path.border} bg-white/5 p-8 flex flex-col gap-6 transition-colors duration-300 flex-1`}
            >
              {/* Badge */}
              <span className="absolute top-6 right-6 text-xs font-bold tracking-widest text-gold/60 border border-gold/20 px-2 py-0.5 rounded-full">
                {path.badge}
              </span>

              <div>
                <path.Icon size={40} className="text-gold mb-3" />
                <h3 className="text-white text-2xl font-bold mb-2">{path.audience}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{path.tagline}</p>
              </div>

              <ul className="space-y-3 flex-1">
                {path.bullets.map(b => (
                  <li key={b} className="flex items-start gap-3 text-white/70 text-sm">
                    <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`text-center py-3.5 px-6 rounded-full text-sm transition-all duration-300 ${path.ctaStyle}`}
              >
                {path.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
