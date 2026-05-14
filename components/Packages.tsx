'use client'
import { motion } from 'framer-motion'

const packages = [
  {
    name: 'Silver',
    price: '300',
    currency: '€',
    description: 'Perfect for intimate private events',
    hours: '3',
    badge: null,
    features: [
      '3 hours of shooting',
      'Unlimited prints',
      '1 backdrop of your choice',
      'Basic props kit',
      'Customized photo strip',
      'QR sharing',
      'Professional operator',
    ],
    highlight: false,
  },
  {
    name: 'Gold',
    price: '400',
    currency: '€',
    description: 'Our most popular — the full experience',
    hours: '4',
    badge: '🔥 Most Popular',
    features: [
      '4 hours of shooting',
      'Unlimited prints',
      '2 backdrops of your choice',
      'Premium props kit',
      'Custom-designed digital album',
      'QR sharing',
      'Multi options printed photos',
      'Professional operator',
    ],
    highlight: true,
  },
  {
    name: 'Platinum',
    price: 'Custom',
    currency: '',
    description: 'For corporate events & large productions',
    hours: '∞',
    badge: '💼 B2B',
    features: [
      'Flexible shooting hours',
      'Unlimited prints',
      'Custom branded backdrops',
      'Company logo on every print',
      'Fully branded booth setup',
      'Analytics & reporting',
      'Full white-glove service',
    ],
    highlight: false,
  },
]

export default function Packages() {
  return (
    <section id="packages" className="bg-navy py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
            Pricing Packages
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-5">
            An Investment You'll{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
              Remember Forever
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Transparent pricing, no surprises. All packages include delivery to the greater Tel Aviv area.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-3xl border p-8 flex flex-col ${
                pkg.highlight
                  ? 'bg-gradient-to-b from-gold/10 to-gold/20 border-gold/50 md:-translate-y-4 md:scale-105 shadow-[0_0_50px_rgba(201,168,76,0.12)]'
                  : 'bg-gradient-to-b from-white/5 to-white/10 border-white/10'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gold text-navy text-xs font-bold px-4 py-1.5 rounded-full">
                  {pkg.badge}
                </div>
              )}

              <div className="mb-6">
                <div className="text-gold/60 text-xs font-semibold tracking-widest uppercase mb-1">
                  Package
                </div>
                <div className="text-white text-2xl font-bold">{pkg.name}</div>
                <div className="text-white/60 text-sm mt-2">{pkg.description}</div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  {pkg.currency && <span className="text-white/40 text-lg">{pkg.currency}</span>}
                  <span className="text-4xl font-extrabold text-white">{pkg.price}</span>
                </div>
                {pkg.price !== 'Custom' && (
                  <div className="text-white/40 text-sm mt-1">per event · {pkg.hours} hours</div>
                )}
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-white/70 text-sm">
                    <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`text-center py-3.5 px-6 rounded-full text-sm font-semibold transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-gold hover:bg-gold-light text-navy'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {pkg.price === 'Custom' ? 'Let\'s Talk' : 'Book Now'}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center text-white/30 text-sm mt-10"
        >
          * All packages are fully customizable. Available throughout The Netherlands.
        </motion.p>
      </div>
    </section>
  )
}
