'use client'

import Link from 'next/link'
import { FileText, Download, Cpu, BookOpen, Rocket, Wrench } from 'lucide-react'
import { useT } from '@/lib/i18n'
import { SensingLayerIcon, TransportLayerIcon, AlgorithmLayerIcon, MappingLayerIcon, ActuationLayerIcon, FrontendLayerIcon } from '@/components/SectionIcons'

const DOC_KEYS = ['architecture', 'summary', 'redesign', 'deploy', 'quickstart'] as const
const DOC_FILES = ['ARCHITECTURE.md', 'PROJECT_SUMMARY.md', 'REDESIGN_REPORT.md', 'DEPLOYMENT.md', 'QUICK_START.md']
const DOC_ICONS = [Cpu, BookOpen, FileText, Rocket, Wrench]

function LayerIcon({ idx }: { idx: number }) {
  const icons = [<SensingLayerIcon key={0} />, <TransportLayerIcon key={1} />, <AlgorithmLayerIcon key={2} />, <MappingLayerIcon key={3} />, <ActuationLayerIcon key={4} />, <FrontendLayerIcon key={5} />]
  return <span style={{ display: 'block', width: '32px', height: '32px', color: 'var(--color-accent)', flexShrink: 0 }}>{icons[idx] ?? null}</span>
}

export default function TechPage() {
  const { t } = useT()
  const layers = JSON.parse(t('tech.layers')) as { label: string; desc: string }[]
  const doc = (k: string) => JSON.parse(t(`tech.docs.${k}`)) as { title: string; desc: string }

  return (
    <main style={{ paddingTop: 'calc(var(--nav-height) + 3rem)', paddingBottom: '5rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">{t('tech.eyebrow')}</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, margin: '0.5rem 0' }}>
            {t('tech.title1')}<br /><span style={{ color: 'var(--color-accent)' }}>{t('tech.title2')}</span>
          </h1>
          <p className="section-subheading" style={{ margin: '0.75rem auto 0' }}>{t('tech.subtitle')}</p>
        </div>

        {/* Tech layers */}
        <div className="grid grid-3" style={{ gap: '1rem', marginBottom: '4rem' }}>
          {layers.map((item, i) => (
            <div key={item.label} className="card" style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <LayerIcon idx={i} />
              <div>
                <h3 style={{ fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.15rem' }}>{item.label}</h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
          <span className="section-label">{t('tech.reportsDivider')}</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--color-border)' }} />
        </div>

        {/* Docs */}
        <div className="grid grid-2" style={{ gap: '1rem', marginBottom: '4rem' }}>
          {DOC_KEYS.map((key, i) => {
            const d = doc(key)
            const Icon = DOC_ICONS[i]
            return (
              <a key={key} href={`/docs/${DOC_FILES[i]}`} target="_blank" rel="noopener noreferrer" className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1.25rem' }}>
                <div style={{ width: '40px', height: '40px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', flexShrink: 0 }}>
                  <Icon size={20} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{d.title}</h3>
                    <Download size={14} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>{d.desc}</p>
                  <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-tertiary)' }}>{DOC_FILES[i]}</p>
                </div>
              </a>
            )
          })}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/" style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>{t('tech.back')}</Link>
        </div>
      </div>
    </main>
  )
}
