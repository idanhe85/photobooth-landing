'use client'
import { motion } from 'framer-motion'
import { ChatBubble, Paintbrush, DiscoBall, type IconProps } from './Icons'

const steps = [
  {
    number: '01',
    title: 'Consult',
    description:
      'We hop on a quick call to understand your event, vision, and branding needs. No forms, no friction — just a real conversation.',
    Icon: ChatBubble,
  },
  {
    number: '02',
    title: 'Customize',
    description:
      'We design your template, select your backdrop, and configure the tech — all tailored to your event before we arrive.',
    Icon: Paintbrush,
  },
  {
    number: '03',
    title: 'Celebrate',
    description:
      'We handle full setup and teardown. You just show up and enjoy the party — we take care of everything else.',
    Icon: DiscoBall,
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-navy py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-4">
            Simple.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
              Stress-Free.
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            From first message to final print — here's what working with us looks like.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                {/* Number circle with icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-full border-2 border-gold/40 bg-navy flex items-center justify-center">
                    <step.Icon size={24} className="text-gold" />
                  </div>
                  <span className="absolute -top-2 -right-2 text-[10px] font-black text-gold/60 bg-navy px-1">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-white text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-block bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,153,51,0.4)]"
          >
            Start the Conversation →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
