import type { Metadata, Viewport } from 'next'
import './globals.css'
import { I18nProviderWrapper } from '@/lib/I18nProviderWrapper'

export const metadata: Metadata = {
  title: 'inudesu - 抬手之间，它便与你同行',
  description: '可穿戴动作交互界面——通过 Zilo 智能指环将自然人体动作实时转化为机器狗行为。ADVX 2026',
  keywords: ['机器人', '可穿戴', 'IMU', '手势控制', '人机交互', 'ADVX 2026'],
  authors: [{ name: 'inudesu 团队' }],
  openGraph: {
    type: 'website',
    url: 'https://inudesu.xyz',
    title: 'inudesu - 抬手之间，它便与你同行',
    description: '用智能指环，以自然手势操控机器狗',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'inudesu - 可穿戴动作交互界面' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'inudesu - 抬手之间，它便与你同行',
    description: '用智能指环，以自然手势操控机器狗',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#D4783B" />
      </head>
      <body>
        <I18nProviderWrapper>
          {children}
        </I18nProviderWrapper>
      </body>
    </html>
  )
}
