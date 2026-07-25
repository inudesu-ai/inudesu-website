'use client'

import { useT } from '@/lib/i18n'

export default function Footer() {
  const year = new Date().getFullYear()
  const { t } = useT()

  return (
    <footer className="footer">
      <div className="container">
        {/* Mission */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">{t('footer.mission')}</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 700, margin: '0.75rem 0', lineHeight: 1.3 }}>
            {t('footer.mission1')}<br />
            {t('footer.mission2')}<br />
            <span style={{ color: 'var(--color-accent)' }}>{t('footer.mission3')}</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', maxWidth: '480px', margin: '0.75rem auto 0' }}>
            {t('footer.missionDesc')}
          </p>
        </div>

        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <div style={{ width: '32px', height: '32px', border: '1px solid var(--color-accent)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '16px', height: '16px', background: 'var(--color-accent)', borderRadius: '2px' }} />
              </div>
              <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>inudesu<span style={{ color: 'var(--color-accent)' }}>.xyz</span></span>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>{t('footer.brandDesc')}</p>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.9375rem' }}>{t('footer.navTitle')}</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.8125rem', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {[['#system', 'nav.system'], ['#gestures', 'nav.gestures'], ['#xyz', 'nav.xyz'], ['#architecture', 'nav.tech'], ['#why', 'nav.why']].map(([href, tk]) => (
                <li key={href}><a href={href}>{t(tk)}</a></li>
              ))}
            </ul>
          </div>

          {/* Project */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.9375rem' }}>{t('footer.projectTitle')}</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.8125rem', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li><a href="#">{t('footer.github')}</a></li>
              <li><a href="#">{t('footer.paper')}</a></li>
              <li><a href="#demo">{t('footer.video')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.9375rem' }}>{t('footer.contactTitle')}</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.8125rem', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li><a href="#">{t('footer.team')}</a></li>
              <li><a href="#">{t('footer.advx')}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} inudesu. {t('footer.copyright')}</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#">{t('footer.privacy')}</a>
            <a href="#">{t('footer.terms')}</a>
            <a href="#">{t('footer.sitemap')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
