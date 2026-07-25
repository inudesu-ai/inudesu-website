'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-inudesu-bg/85 backdrop-blur-md border-b border-inudesu-border'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/inudesu-badge.png"
              alt="inudesu"
              width={40}
              height={40}
              className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg md:text-xl text-inudesu-dark group-hover:text-inudesu-accent transition-colors">
                inudesu
              </span>
              <span className="font-mono text-xs text-inudesu-accent font-semibold">.xyz</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#system">系统</NavLink>
            <NavLink href="#gestures">手势</NavLink>
            <Link href="/tech" className="font-mono text-sm text-inudesu-dark hover:text-inudesu-accent transition-colors duration-300 relative group">
              技术
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-inudesu-accent group-hover:w-full transition-all duration-300" />
            </Link>
            <NavLink href="#why">意义</NavLink>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <button className="btn-secondary hidden md:inline-block" onClick={scrollToDemo}>
              查看演示
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="font-mono text-sm text-inudesu-dark hover:text-inudesu-accent transition-colors duration-300 relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-inudesu-accent group-hover:w-full transition-all duration-300" />
    </a>
  )
}
