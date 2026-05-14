'use client'
import { motion } from 'framer-motion'
import ImageStack from './ImageStack'

const images = [
  '/gallery/photo1.jpg',
  '/gallery/photo2.jpg',
  '/gallery/photo3.jpg',
  '/gallery/photo4.jpg',
  '/gallery/photo5.jpg',
  '/gallery/photo6.jpg',
  '/gallery/photo7.jpg',
  '/gallery/photo8.jpg',
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-navy-light py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
            הגלריה שלנו
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-5">
            רגעים שנשארים{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
              לנצח
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            כל תמונה מספרת סיפור. גררו את הכרטיסים לצפייה בתמונות מהאירועים שלנו.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          {/* Left stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <ImageStack images={images.slice(0, 4)} />
            <p className="text-white/40 text-sm">אירועים פרטיים</p>
          </motion.div>

          {/* Center text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center max-w-xs hidden lg:block"
          >
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold/40 to-transparent mx-auto mb-6" />
            <div className="w-12 h-12 rounded-full border-2 border-gold/40 flex items-center justify-center mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="4" fill="#C9A84C" />
                <path
                  d="M9 3H15L17 6H21C21.5523 6 22 6.44772 22 7V19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19V7C2 6.44772 2.44772 6 3 6H7L9 3Z"
                  stroke="#C9A84C"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              גררו את הכרטיסים לצפייה בתמונות נוספות
            </p>
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold/40 to-transparent mx-auto mt-6" />
          </motion.div>

          {/* Right stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <ImageStack images={images.slice(4, 8)} />
            <p className="text-white/40 text-sm">אירועי חברות</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
