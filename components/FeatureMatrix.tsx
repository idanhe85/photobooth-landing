'use client'
import { motion } from 'framer-motion'
import { Share, Paintbrush, Lightbulb, BarChart, DiscoBall, Necktie, type IconProps } from './Icons'

const features = [
  {
    name: 'Instant Sharing',
    Icon: Share,
    b2c: 'Text & AirDrop photos to friends on the spot.',
    b2b: 'Viral brand awareness via organic social posts.',
  },
  {
    name: 'Custom Branding',
    Icon: Paintbrush,
    b2c: 'Personalised overlays & frames for the couple.',
    b2b: 'Fully wrapped booths, digital logos & branded prints.',
  },
  {
    name: 'High-End Lighting',
    Icon: Lightbulb,
    b2c: 'Look like a movie star in every shot.',
    b2b: 'Professional-grade assets ready for press & socials.',
  },
  {
    name: 'Data & Analytics',
    Icon: BarChart,
    b2c: '—',
    b2b: 'Lead capture, engagement metrics & ROI reporting.',
  },
]

export default function FeatureMatrix() {
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
            What We Bring
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-4">
            Cool{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
              &amp; Capable
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Every feature serves a purpose — whether that's a laugh or a lead.
          </p>
        </motion.div>

        {/* Table header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:grid grid-cols-[1fr_2fr_2fr] gap-4 mb-3 px-4"
        >
          <div />
          <div className="flex items-center justify-center gap-2 text-gold text-xs font-bold tracking-widest uppercase">
            <DiscoBall size={16} className="text-gold" /> For Celebrations
          </div>
          <div className="flex items-center justify-center gap-2 text-gold text-xs font-bold tracking-widest uppercase">
            <Necktie size={16} className="text-gold" /> For Business
          </div>
        </motion.div>

        <div className="space-y-3">
          {features.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr] gap-4 bg-white/5 border border-white/8 rounded-2xl p-5 items-center"
            >
              {/* Feature name */}
              <div className="flex items-center gap-3">
                <f.Icon size={22} className="text-gold flex-shrink-0" />
                <span className="text-white font-semibold text-sm">{f.name}</span>
              </div>

              {/* B2C */}
              <div className="md:text-center">
                <span className="md:hidden text-gold/60 text-xs font-semibold tracking-widest uppercase mr-2">
                  Celebrations:
                </span>
                <span className={`text-sm ${f.b2c === '—' ? 'text-white/20' : 'text-white/70'}`}>
                  {f.b2c}
                </span>
              </div>

              {/* B2B */}
              <div className="md:text-center">
                <span className="md:hidden text-gold/60 text-xs font-semibold tracking-widest uppercase mr-2">
                  Business:
                </span>
                <span className={`text-sm ${f.b2b === '—' ? 'text-white/20' : 'text-white/70'}`}>
                  {f.b2b}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
