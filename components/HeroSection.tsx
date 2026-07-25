'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useT } from '@/lib/i18n'

export default function HeroSection() {
  const [visible, setVisible] = useState(false)
  const { t } = useT()

  useEffect(() => { setVisible(true) }, [])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 'var(--nav-height)',
      opacity: visible ? 1 : 0,
      transition: 'opacity 0.6s ease',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
        }} className="grid-2">
          {/* Logo — left */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image
              src="/inudesu-logo.png"
              alt="inudesu"
              width={512}
              height={512}
              priority
              style={{ maxWidth: '380px', width: '100%', height: 'auto' }}
            />
          </div>

          {/* Text — right */}
          <div>
            <span className="section-label">{t('hero.badge')}</span>

            <h1 style={{ marginTop: '1rem', marginBottom: '1.5rem', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.15 }}>
              {t('hero.headline1')}<br />
              <span style={{ color: 'var(--color-accent)' }}>{t('hero.headline2')}</span>
            </h1>

            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', marginBottom: '2rem', fontStyle: 'italic' }}>
              {t('hero.tagline')}
            </p>

            <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '2rem', maxWidth: '480px' }}>
              {t('hero.subtitle')}
            </p>

            {/* Domain badge */}
            <div style={{
              display: 'inline-block',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius)',
              padding: '0.75rem 1.5rem',
              marginBottom: '2rem',
              background: 'var(--color-surface)',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', fontWeight: 600 }}>inudesu<span style={{ color: 'var(--color-accent)' }}>.xyz</span></span>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-tertiary)', marginTop: '0.25rem' }}>{t('site.domain')}</p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => scrollTo('demo')}>{t('hero.watchDemo')}</button>
              <button className="btn btn-outline" onClick={() => scrollTo('architecture')}>{t('hero.viewArch')}</button>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ textAlign: 'center', marginTop: '5rem', paddingBottom: '2rem' }}>
          <button
            onClick={() => scrollTo('demo')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-text-tertiary)',
            }}
          >
            {t('hero.scroll')}
          </button>
        </div>
      </div>
    </section>
  )
}
