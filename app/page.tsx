'use client'

import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import DomainPhilosophy from '@/components/DomainPhilosophy'
import MotionPipeline from '@/components/MotionPipeline'
import GestureDemo from '@/components/GestureDemo'
import SystemArchitecture from '@/components/SystemArchitecture'
import WhyItMatters from '@/components/WhyItMatters'
import UseCases from '@/components/UseCases'
import Footer from '@/components/Footer'
import DemoVideo from '@/components/DemoVideo'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <DomainPhilosophy />
        <DemoVideo />
        <MotionPipeline />
        <GestureDemo />
        <SystemArchitecture />
        <WhyItMatters />
        <UseCases />
      </main>
      <Footer />
    </>
  )
}
