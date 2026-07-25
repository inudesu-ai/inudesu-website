'use client'

import { useT } from '@/lib/i18n'

export default function DemoVideo() {
  const { t } = useT()

  return (
    <section id="demo" className="section section-alt">
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="section-label">{t('demo.eyebrow')}</span>
        <h2 className="section-heading" style={{ marginTop: '0.5rem' }}>{t('demo.title')}</h2>
        <p className="section-subheading" style={{ margin: '0.75rem auto 2.5rem' }}>{t('demo.subtitle')}</p>

        <div style={{
          position: 'relative',
          maxWidth: '960px',
          margin: '0 auto',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
          background: '#1A1A1A',
        }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
            <video
              src="/demo.mp4"
              controls
              poster="/demo-poster.jpg"
              preload="metadata"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <p>{t('demo.videoContent')} {t('demo.videoContentDesc')}</p>
            </video>
          </div>
        </div>

        <p style={{ marginTop: '1rem', fontSize: '0.8125rem', color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>
          {t('demo.advxLabel')}
        </p>
      </div>
    </section>
  )
}
