'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import Image from 'next/image'

export default function HeroSection() {
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ringRef.current) {
      gsap.to(ringRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
      })
    }
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-inudesu-bg">
      {/* animated scan line accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-inudesu-accent/10 to-transparent animate-scan-line" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Badge Image */}
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              {/* rotating glow ring behind the badge */}
              <div
                ref={ringRef}
                className="absolute inset-0 -m-8 rounded-full border border-dashed border-inudesu-accent/30"
              />
              <div className="absolute inset-0 bg-hero-glow blur-2xl scale-110" />
              <Image
                src="/inudesu-badge.png"
                alt="inudesu 徽章"
                width={500}
                height={500}
                priority
                className="relative w-full h-auto drop-shadow-2xl animate-float"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="flex flex-col justify-center items-start"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-inudesu-light border border-inudesu-accent/60 rounded-full shadow-glow-accent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-2 h-2 rounded-full bg-inudesu-accent animate-pulse" />
              <span className="font-mono text-xs text-inudesu-accentDark font-bold tracking-widest uppercase">
                ADVX 2026 · 人机交互
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6 text-inudesu-dark"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              抬手之间，
              <br />
              <span className="text-gradient-warm">它便与你同行。</span>
            </motion.h1>

            {/* English Tagline */}
            <motion.p
              className="text-lg md:text-xl text-inudesu-textSoft max-w-lg mb-8 leading-relaxed font-light italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              With a simple gesture, your robot companion moves with you.
            </motion.p>

            {/* Subtitle */}
            <motion.p
              className="text-base md:text-lg text-inudesu-textSoft max-w-lg mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              可穿戴智能指环 · 实时手势识别 · 机器狗伴侣
            </motion.p>

            {/* Domain Highlight */}
            <motion.div
              className="hud-corners relative mb-12 px-6 py-4 bg-gradient-to-r from-inudesu-light to-inudesu-bg border border-inudesu-accent/50 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <p className="text-center font-mono text-2xl md:text-3xl font-bold text-inudesu-dark">
                inudesu<span className="text-inudesu-accent">.xyz</span>
              </p>
              <p className="text-center text-sm text-inudesu-textSoft mt-2 tracking-wide">
                未来的交互方式
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <button className="btn-primary" onClick={() => scrollTo('demo')}>
                观看演示
              </button>
              <button className="btn-secondary" onClick={() => scrollTo('architecture')}>
                查看架构
              </button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="mt-16 flex flex-col items-center gap-2 cursor-pointer text-inudesu-textSoft hover:text-inudesu-accent transition-colors"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: -1 }}
              onClick={() => scrollTo('demo')}
            >
              <span className="text-xs font-mono tracking-widest uppercase">向下滚动探索</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
