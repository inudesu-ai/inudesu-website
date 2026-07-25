'use client'

import { useEffect, useState } from 'react'
import { I18nProvider, type Lang } from '@/lib/i18n'

export function I18nProviderWrapper({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang | null>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('inudesu-lang') as Lang | null
      setLang(stored === 'en' || stored === 'zh' ? stored : 'zh')
    } catch {
      setLang('zh')
    }
  }, [])

  if (!lang) return null // avoid flash

  return <I18nProvider defaultLang={lang}>{children}</I18nProvider>
}
