'use client'

import { useT } from '@/lib/i18n'
import { UnknownDomainIcon, ThreeDSpaceIcon, PublicDomainIcon } from '@/components/SectionIcons'

const PILLAR_ICONS = [
  <UnknownDomainIcon key={0} />,
  <ThreeDSpaceIcon key={1} />,
  <PublicDomainIcon key={2} />,
]

export default function DomainPhilosophy() {
  const { t } = useT()
  const p = (k: string) => JSON.parse(t(`xyz.pillars.${k}`)) as { title: string; tagline: string; body: string }

  return (
    <section id="xyz" className="section section-alt">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">{t('xyz.eyebrow')}</span>
          <h2 className="section-heading" style={{ marginTop: '0.5rem' }}>
            {t('xyz.headline1')}<br />
            <span style={{ color: 'var(--color-accent)' }}>{t('xyz.headline2')}</span>
          </h2>
          <p className="section-subheading" style={{ margin: '0.75rem auto 0' }}>{t('xyz.subtitle')}</p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-3" style={{ gap: '1.5rem', marginBottom: '4rem' }}>
          {['unknown', 'space', 'public'].map((k, idx) => {
            const v = p(k)
            return (
              <div key={k} className="card">
                <div style={{ width: '48px', height: '48px', color: 'var(--color-accent)', marginBottom: '1.25rem' }}>
                  {PILLAR_ICONS[idx]}
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', letterSpacing: '0.1em', color: 'var(--color-text-tertiary)', marginBottom: '1rem', textTransform: 'uppercase' }}>{v.tagline}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{v.body}</p>
              </div>
            )
          })}
        </div>

        {/* Manifesto */}
        <div style={{
          maxWidth: '720px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '2.5rem',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius)',
          background: 'var(--color-surface)',
        }}>
          <p style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.4, marginBottom: '1.5rem' }}>
            {t('xyz.manifesto1')}<br />
            <span style={{ color: 'var(--color-accent)' }}>{t('xyz.manifesto2')}</span>
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.8125rem', fontFamily: 'var(--font-mono)' }}>
            {['.ai', '.lab', '.cn', '.com', '.io', '.org'].map(ext => (
              <span key={ext} style={{ padding: '0.25rem 0.75rem', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius)', color: 'var(--color-text-tertiary)', textDecoration: 'line-through' }}>
                {ext}
              </span>
            ))}
            <span style={{ padding: '0.25rem 0.75rem', border: '1px solid var(--color-accent)', borderRadius: 'var(--radius)', color: 'var(--color-accent)', fontWeight: 600 }}>
              .xyz
            </span>
          </div>

          <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', maxWidth: '540px', margin: '0 auto' }}>
            {t('xyz.closing')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-4" style={{ marginTop: '3rem', textAlign: 'center' }}>
          {(['stat1', 'stat2', 'stat3', 'stat4'] as const).map(k => {
            const s = JSON.parse(t(`xyz.${k}`)) as { num: string; label: string }
            return (
              <div key={k}>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-accent)', fontFamily: 'var(--font-mono)' }}>{s.num}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-tertiary)', marginTop: '0.25rem' }}>{s.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
