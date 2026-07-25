'use client'

import { useT } from '@/lib/i18n'
import { RescueIcon, IndustrialIcon, AccessibleIcon, CollaborationIcon } from '@/components/SectionIcons'

function CaseIcon({ name }: { name: string }) {
  const s: Record<string, React.ReactNode> = {
    rescue: <RescueIcon />, industrial: <IndustrialIcon />,
    accessible: <AccessibleIcon />, collaboration: <CollaborationIcon />,
  }
  return <div style={{ width: '48px', height: '48px', color: 'var(--color-accent)' }}>{s[name] ?? null}</div>
}

export default function UseCases() {
  const { t } = useT()
  const uc = (k: string) => JSON.parse(t(`useCases.items.${k}`)) as { title: string; sub: string; desc: string }

  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-label">{t('useCases.eyebrow')}</span>
          <h2 className="section-heading" style={{ marginTop: '0.5rem' }}>{t('useCases.title')}</h2>
          <p className="section-subheading" style={{ margin: '0.75rem auto 0' }}>{t('useCases.subtitle')}</p>
        </div>

        <div className="grid grid-2" style={{ gap: '1.25rem' }}>
          {['rescue', 'industrial', 'accessible', 'collaboration'].map(key => {
            const u = uc(key)
            return (
              <div key={key} className="card" style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '0.75rem' }}><CaseIcon name={key} /></div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.15rem' }}>{u.title}</h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: 'var(--color-text-tertiary)', marginBottom: '0.5rem' }}>{u.sub}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{u.desc}</p>
              </div>
            )
          })}
        </div>

        <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--color-bg-alt)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius)', fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
          <span style={{ fontWeight: 600, color: 'var(--color-accent)' }}>{t('useCases.disclaimer')}</span>{t('useCases.disclaimerText')}
        </div>
      </div>
    </section>
  )
}
