import Header from '@/components/Header'
import { HeroCarousel } from '@/components/HeroCarousel'
import ChoosePath from '@/components/ChoosePath'
import Process from '@/components/Process'
import Packages from '@/components/Packages'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const heroImages = [
  { src: '/gallery/Photo1.png', alt: 'PhotoDUDE booth moment 1' },
  { src: '/gallery/Photo2.png', alt: 'PhotoDUDE booth moment 2' },
  { src: '/gallery/Photo3.png', alt: 'PhotoDUDE booth moment 3' },
  { src: '/gallery/Photo4.png', alt: 'PhotoDUDE booth moment 4' },
  { src: '/gallery/Photo5.png', alt: 'PhotoDUDE booth moment 5' },
  { src: '/gallery/Photo6.png', alt: 'PhotoDUDE booth moment 6' },
  { src: '/gallery/Photo7.png', alt: 'PhotoDUDE booth moment 7' },
]

export default function HomeV2() {
  return (
    <main>
      <Header />
      <HeroCarousel
        id="home"
        title={<>Elevate Your <span style={{ color: '#CC9933' }}>Event</span></>}
        subtitle="From high-profile corporate activations to intimate wedding celebrations — we bring the fun, the tech, and the memories."
        images={heroImages}
      />
      <ChoosePath />
      <Process />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
