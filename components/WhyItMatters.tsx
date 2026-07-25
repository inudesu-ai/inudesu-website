'use client'

import { useT } from '@/lib/i18n'
import { NoControllerIcon, NoScreenIcon, LowerBarrierIcon } from '@/components/SectionIcons'

const icons = [<NoControllerIcon key={0} />, <NoScreenIcon key={1} />, <LowerBarrierIcon key={2} />]

export default function WhyItMatters() {
  const { t } = useT()
  const val = (k: string) => JSON.parse(t(`why.values.${k}`)) as { title: string; sub: string; desc: string }

  return (
    <section id="why" className="section section-alt">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-label">{t('why.eyebrow')}</span>
          <h2 className="section-heading" style={{ marginTop: '0.5rem' }}>
            {t('why.title1')}<br />{t('why.title2')}<br /><span style={{ color: 'var(--color-accent)' }}>{t('why.title3')}</span>
          </h2>
        </div>

        <div className="grid grid-3" style={{ gap: '1.5rem', marginBottom: '3rem' }}>
          {['noController', 'noScreen', 'lowerBarrier'].map((k, idx) => {
            const v = val(k)
            return (
              <div key={k} className="card">
                <div style={{ width: '48px', height: '48px', color: 'var(--color-accent)', marginBottom: '1.25rem' }}>
                  {icons[idx]}
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem' }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', letterSpacing: '0.1em', color: 'var(--color-text-tertiary)', marginBottom: '0.75rem' }}>{v.sub}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            )
          })}
        </div>

        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>{t('why.body')}</p>
          <div style={{
            padding: '1.5rem',
            background: '#1A1A1A',
            color: '#E5E0D8',
            borderRadius: 'var(--radius)',
            fontStyle: 'italic',
            fontSize: '1.125rem',
            fontWeight: 500,
            lineHeight: 1.5,
          }}>
            {t('why.quote1')}<br /><span style={{ color: 'var(--color-accent)' }}>{t('why.quote2')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
