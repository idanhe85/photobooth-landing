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
  return (
    <main>
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
