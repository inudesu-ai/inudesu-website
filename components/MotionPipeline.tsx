'use client'

import { useT } from '@/lib/i18n'
import PipelineIcon from '@/components/PipelineIcon'

const STAGE_KEYS = ['sense', 'process', 'understand', 'map', 'act'] as const

export default function MotionPipeline() {
  const { t } = useT()
  const title = (k: string) => JSON.parse(t(`pipeline.stages.${k}`)) as { title: string; sub: string; desc: string }

  return (
    <section id="system" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">{t('pipeline.eyebrow')}</span>
          <h2 className="section-heading" style={{ marginTop: '0.5rem' }}>
            {t('pipeline.title1')}<br />{t('pipeline.title2')}
          </h2>
          <p className="section-subheading" style={{ margin: '0.75rem auto 0' }}>{t('pipeline.subtitle')}</p>
        </div>

        {/* Pipeline stages */}
        <div className="grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', gap: '0', marginBottom: '3rem', display: 'none' }}>
          {/* This will show on md+ */}
        </div>
        <div className="grid grid-3" style={{ gap: '2rem', marginBottom: '3rem' }}>
          {STAGE_KEYS.map((key, idx) => {
            const s = title(key)
            return (
              <div key={key} style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}>
                  <div style={{
                    width: '72px',
                    height: '72px',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--color-surface)',
                  }}>
                    <PipelineIcon stage={idx} />
                  </div>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--color-text-tertiary)' }}>0{idx + 1}</span>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, margin: '0.25rem 0' }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--color-accent)', letterSpacing: '0.05em' }}>{s.sub}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem', maxWidth: '240px', margin: '0.5rem auto 0' }}>{s.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Terminal block */}
        <div style={{
          maxWidth: '640px',
          margin: '0 auto',
          background: '#1A1A1A',
          color: '#D4D4D4',
          borderRadius: 'var(--radius)',
          padding: '1.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8125rem',
          lineHeight: 1.8,
        }}>
          <div style={{ color: 'var(--color-accent)' }}>$ inudesu stream</div>
          <div style={{ color: '#888' }}>{t('pipeline.terminal.connected')} <span style={{ color: 'var(--color-accent)' }}>✓</span></div>
          <div style={{ color: '#888' }}>{t('pipeline.terminal.dataStream')} imu.accel x=0.42 y=-0.18 z=0.91</div>
          <div style={{ color: '#888' }}>{t('pipeline.terminal.dataStream')} imu.gyro x=21.4 y=-8.7 z=14.2</div>
          <div style={{ color: 'var(--color-accent)' }}>{t('pipeline.terminal.detected')}</div>
          <div style={{ color: 'var(--color-accent)' }}>{t('pipeline.terminal.classified')}</div>
          <div style={{ color: 'var(--color-accent)' }}>{t('pipeline.terminal.intent')}</div>
          <div style={{ color: 'var(--color-accent)' }}>{t('pipeline.terminal.dispatched')}</div>
          <div style={{ color: '#888' }}>{t('pipeline.terminal.moving')}</div>
        </div>
      </div>
    </section>
  )
}
