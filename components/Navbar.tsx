'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useT, type Lang } from '@/lib/i18n'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { t, lang, setLang } = useT()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const switchLang = (next: Lang) => {
    setLang(next)
    try { localStorage.setItem('inudesu-lang', next) } catch {}
  }

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav className="navbar" style={scrolled ? { boxShadow: '0 1px 4px rgba(0,0,0,0.06)' } : undefined}>
      <div className="container navbar-inner">
        <Link href="/" className="navbar-brand">
          <Image src="/inudesu-logo.png" alt="inudesu" width={36} height={36} />
          <span>inudesu</span>
        </Link>

        <div className="navbar-links">
          <a href="#system">{t('nav.system')}</a>
          <a href="#gestures">{t('nav.gestures')}</a>
          <a href="#xyz">{t('nav.xyz')}</a>
          <Link href="/tech">{t('nav.tech')}</Link>
          <a href="#why">{t('nav.why')}</a>
        </div>

        <div className="navbar-right">
          <div style={{ display: 'flex', border: '1px solid var(--color-border)', borderRadius: 'var(--radius)', overflow: 'hidden', fontSize: '0.75rem' }}>
            <button
              type="button"
              onClick={() => switchLang('zh')}
              style={{ padding: '0.25rem 0.625rem', border: 'none', background: lang === 'zh' ? 'var(--color-accent)' : 'transparent', color: lang === 'zh' ? '#fff' : 'var(--color-text-secondary)', cursor: 'pointer' }}
            >中</button>
            <button
              type="button"
              onClick={() => switchLang('en')}
              style={{ padding: '0.25rem 0.625rem', border: 'none', background: lang === 'en' ? 'var(--color-accent)' : 'transparent', color: lang === 'en' ? '#fff' : 'var(--color-text-secondary)', cursor: 'pointer' }}
            >EN</button>
          </div>
          <button className="btn btn-outline" onClick={() => scrollTo('demo')} style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem' }}>
            {t('nav.demo')}
          </button>
        </div>
      </div>
    </nav>
  )
}
