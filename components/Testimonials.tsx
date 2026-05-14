'use client'
import { motion } from 'framer-motion'
import { Ring, Necktie } from './Icons'

const testimonials = [
  {
    quote:
      "The photo booth was hands-down the highlight of our wedding. Every single guest had a blast, and the prints are now all over our fridge. Worth every penny.",
    name: 'Sarah & Tom',
    role: 'Bride & Groom',
    Icon: Ring,
    tag: 'Wedding',
  },
  {
    quote:
      "Flawless execution from start to finish. The branded booth drove serious social engagement at our product launch, and the analytics report gave us real data to share with the team.",
    name: 'Jessica M.',
    role: 'Event Director, TechConf Europe',
    Icon: Necktie,
    tag: 'Corporate',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-navy-light py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
            Social Proof
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-4">
            Don't Take{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
              Our Word For It
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            From first dances to product launches — here's what our clients say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col gap-6"
            >
              {/* Tag */}
              <span className="absolute top-6 right-6 text-xs font-bold tracking-widest text-gold/60 border border-gold/20 px-2 py-0.5 rounded-full">
                {t.tag}
              </span>

              {/* Quote mark */}
              <div className="text-5xl text-gold/20 font-serif leading-none">"</div>

              <p className="text-white/80 text-base leading-relaxed -mt-4">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-2 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <t.Icon size={20} className="text-gold" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
