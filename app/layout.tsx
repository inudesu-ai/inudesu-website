import type { Metadata, Viewport } from 'next'
import './globals.css'

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
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'inudesu - 可穿戴动作交互界面',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'inudesu - 抬手之间，它便与你同行',
    description: '用智能指环，以自然手势操控机器狗',
    images: ['/og-image.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#E67E22" />
      </head>
      <body className="bg-[#EFEADD] text-[#2C2420] font-sans overflow-x-hidden antialiased" style={{backgroundColor:'#EFEADD',color:'#2C2420'}}>
        <div className="relative w-full min-h-screen">
          {/* Warm animated grid background */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-grid-warm bg-grid opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-inudesu-bg/0 via-inudesu-bg/40 to-inudesu-bg" />
            <div className="absolute inset-x-0 top-0 h-[70vh] bg-hero-glow" />
          </div>

          {/* Main content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
