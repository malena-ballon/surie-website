import HeroSection from '@/components/HeroSection'
import TrustBar from '@/components/sections/TrustBar'
import ProblemSection from '@/components/sections/ProblemSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import ClassroomsSection from '@/components/sections/ClassroomsSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <FeaturesSection />
      <ClassroomsSection />
      <CTASection fullForm />
    </>
  )
}
