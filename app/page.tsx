import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ChoosePath from '@/components/ChoosePath'
import PolaroidGallery from '@/components/PolaroidGallery'
import Process from '@/components/Process'
import Packages from '@/components/Packages'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'The PhotoDUDE',
    description: 'Professionele photobooth verhuur voor bruiloften, bedrijfsfeesten, verjaardagen en bar mitswa in Overijssel.',
    url: 'https://thephotodude.nl',
    telephone: '+31621360019',
    email: 'hello@thephotodude.nl',
    areaServed: [
      'Overijssel', 'Zwolle', 'Enschede', 'Deventer', 'Almelo', 'Hengelo'
    ],
    serviceType: 'Photobooth verhuur',
    priceRange: '€€',
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <Hero />
      <PolaroidGallery />
      <ChoosePath />
      <Process />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
