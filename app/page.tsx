'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import MotionPipeline from '@/components/MotionPipeline'
import GestureDemo from '@/components/GestureDemo'
import SystemArchitecture from '@/components/SystemArchitecture'
import WhyItMatters from '@/components/WhyItMatters'
import UseCases from '@/components/UseCases'
import Footer from '@/components/Footer'
import DemoVideo from '@/components/DemoVideo'

// Dynamically import particle background to reduce initial bundle
const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      {/* Particle background - disabled for new warm aesthetic */}
      {/* <ParticleBackground /> */}

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Demo Video Section */}
        <DemoVideo />

        {/* Motion Pipeline */}
        <MotionPipeline />

        {/* Gesture Demo */}
        <GestureDemo />

        {/* System Architecture */}
        <SystemArchitecture />

        {/* Why It Matters */}
        <WhyItMatters />

        {/* Use Cases */}
        <UseCases />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
