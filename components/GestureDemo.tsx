'use client'

import { useState } from 'react'
import { useT } from '@/lib/i18n'
import { PushForwardIcon, PullBackIcon, TurnLeftIcon, TurnRightIcon, LiftUpIcon, CirclePatrolIcon } from '@/components/SectionIcons'

const GESTURE_KEYS = ['push', 'pull', 'left', 'right', 'lift', 'circle'] as const
const GESTURE_CMDS: Record<string, string> = { push: 'robot.move.forward', pull: 'robot.move.backward', left: 'robot.turn.left', right: 'robot.turn.right', lift: 'robot.stand.tall', circle: 'robot.patrol.start' }

function GestureIcon({ name }: { name: string }) {
  const s: Record<string, React.ReactNode> = {
    push: <PushForwardIcon />, pull: <PullBackIcon />,
    left: <TurnLeftIcon />, right: <TurnRightIcon />,
    lift: <LiftUpIcon />, circle: <CirclePatrolIcon />,
  }
  return <div style={{ width: '48px', height: '48px', color: 'var(--color-accent)' }}>{s[name] ?? null}</div>
}

export default function GestureDemo() {
  const [hovered, setHovered] = useState<string | null>(null)
  const { t } = useT()
  const item = (k: string) => JSON.parse(t(`gestures.items.${k}`)) as { name: string; desc: string; status: string }

  return (
    <section id="gestures" className="section section-alt">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-label">{t('gestures.eyebrow')}</span>
          <h2 className="section-heading" style={{ marginTop: '0.5rem' }}>{t('gestures.title1')}<br />{t('gestures.title2')}</h2>
          <p className="section-subheading" style={{ margin: '0.75rem auto 0' }}>{t('gestures.subtitle')}</p>
        </div>

        <div className="grid grid-3" style={{ gap: '1.25rem' }}>
          {GESTURE_KEYS.map((key) => {
            const it = item(key)
            const active = hovered === key
            return (
              <div
                key={key}
                className="card"
                onMouseEnter={() => setHovered(key)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: 'pointer', padding: '1.25rem' }}
              >
                <div style={{ marginBottom: '0.75rem' }}><GestureIcon name={key} /></div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, marginBottom: '0.25rem' }}>{it.name}</h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>{it.desc}</p>
                <span style={{
                  display: 'inline-block',
                  padding: '0.2rem 0.625rem',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius)',
                  color: 'var(--color-accent)',
                }}>{GESTURE_CMDS[key]}</span>

                <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-border-light)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: active ? 'var(--color-accent)' : 'var(--color-border)',
                    transition: 'background 0.2s',
                  }} />
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-tertiary)' }}>
                    {active ? it.status : t('gestures.standby')}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--color-bg-alt)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius)', fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
          <span style={{ fontWeight: 600, color: 'var(--color-accent)' }}>{t('gestures.note')}</span>{t('gestures.noteText')}
        </div>
      </div>
    </section>
  )
}
