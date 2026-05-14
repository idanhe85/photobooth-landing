'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone as PhoneIcon, Envelope, MapPin } from './Icons'

const socials = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M18 2H15C13.67 2 12.4 2.53 11.46 3.46C10.53 4.4 10 5.67 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73 14.11 6.48 14.29 6.29C14.48 6.1 14.73 6 15 6H18V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 12a3 3 0 1 0 3 3V3h4a5 5 0 0 0 5 5v4a9 9 0 0 1-5-1.5V15A7 7 0 1 1 9 8.07V12z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/31621360019',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const eventTypes = ['Wedding', 'Bar/Bat Mitzvah', 'Birthday Party', 'Corporate Event', 'Conference / Expo', 'Other']

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', event: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-navy-light py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-5">
            Let's Make Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
              Event Epic
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Leave your details and we'll get back to you within 24 hours with a custom quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent! 🎉</h3>
                <p className="text-white/60">We'll be in touch soon. Thanks for choosing The PhotoDUDE!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/60 text-sm mb-2 block">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-gold/50 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-white/60 text-sm mb-2 block">Phone *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+31 6 00000000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-gold/50 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 focus:border-gold/50 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-2 block">Event Type</label>
                  <select
                    value={form.event}
                    onChange={(e) => setForm({ ...form, event: e.target.value })}
                    className="w-full bg-navy border border-white/10 focus:border-gold/50 rounded-xl px-4 py-3 text-white outline-none transition-colors text-sm appearance-none"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-2 block">Tell us more</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your event — date, venue, number of guests..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 focus:border-gold/50 rounded-xl px-4 py-3 text-white placeholder-white/30 outline-none transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-light text-navy font-bold py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] text-sm"
                >
                  Send Message ✨
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-4">
              {[
                { Icon: PhoneIcon, title: 'Phone', value: '+31 6 21360019', sub: 'Mon–Fri, 08:00–18:00' },
                { Icon: Envelope, title: 'Email', value: 'hello@thephotodude.nl', sub: 'Response within 24 hours' },
                { Icon: MapPin, title: 'Service Area', value: 'All The Netherlands', sub: 'We come to your venue' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/8"
                >
                  <item.Icon size={24} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white/40 text-xs mb-1">{item.title}</div>
                    <div className="text-white font-semibold">{item.value}</div>
                    <div className="text-white/50 text-sm mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <div className="text-white/40 text-sm mb-4 font-medium">Follow The PhotoDUDE</div>
              <div className="flex gap-4">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/40 hover:bg-gold/10 flex items-center justify-center text-white/60 hover:text-gold transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/31621360019"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 rounded-2xl px-6 py-4 transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.122 1.528 5.859L0 24l6.335-1.652C8.074 23.393 10.016 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.935 0-3.76-.538-5.315-1.475l-.381-.226-3.962 1.034 1.07-3.857-.251-.398C2.096 15.636 2 13.86 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Chat on WhatsApp</div>
                <div className="text-white/50 text-xs">Fast replies · 24/7</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-auto text-white/30 group-hover:text-gold transition-colors">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
