'use client'

import { useT } from '@/lib/i18n'

const NODE_KEYS = ['ring', 'transport', 'preprocess', 'segment', 'recognize', 'map', 'interface', 'robot'] as const

export default function SystemArchitecture() {
  const { t } = useT()
  const node = (k: string) => JSON.parse(t(`architecture.nodes.${k}`)) as { label: string; desc: string }

  return (
    <section id="architecture" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-label">{t('architecture.eyebrow')}</span>
          <h2 className="section-heading" style={{ marginTop: '0.5rem' }}>
            {t('architecture.title1')}<br />{t('architecture.title2')}
          </h2>
          <p className="section-subheading" style={{ margin: '0.75rem auto 0' }}>{t('architecture.subtitle')}</p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {NODE_KEYS.map((key, idx) => {
            const n = node(key)
            const isLast = idx === NODE_KEYS.length - 1
            return (
              <div key={key} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                {/* Connector line + step number */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '40px' }}>
                  <span style={{
                    width: '28px', height: '28px',
                    borderRadius: 'var(--radius)',
                    background: 'var(--color-accent)',
                    color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 600,
                    flexShrink: 0,
                  }}>{idx + 1}</span>
                  {!isLast && (
                    <div style={{ width: '1px', flex: 1, background: 'var(--color-border)', marginTop: '0.25rem', minHeight: '1.5rem' }} />
                  )}
                </div>

                <div style={{ paddingBottom: isLast ? '0' : '1.5rem', flex: 1 }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>{n.label}</h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginTop: '0.15rem' }}>{n.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
