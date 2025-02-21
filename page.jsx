import { HeaderDark } from '@/components/HeaderDark'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { CallToAction } from '@/components/CallToAction'
import { Reviews } from '@/components/Reviews'
import { Pricing } from '@/components/Pricing'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'



export default function Home() {
  return (
    <>
      <HeaderDark/>
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <Reviews />
      <Pricing />
      <Faqs />
      <Footer />
    </>
  )
}
