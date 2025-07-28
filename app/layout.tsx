import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AIRA – Maak jouw organisatie AI-ready | AI Training & Readiness Scan',
  description: 'AIRA biedt AI-geletterdheidstrainingen voor teams, begeleide readiness-scans en adoptieprogrammas. Mensgerichte AI-transformatie voor overheid, onderwijs en MKB.',
  keywords: 'AI training, AI readiness, AI transformatie, kunstmatige intelligentie, organisatie training, Nederland',
  authors: [{ name: 'AIRA' }],
  openGraph: {
    title: 'AIRA – Maak jouw organisatie AI-ready',
    description: 'AI-geletterdheidstrainingen en readiness-scans voor organisaties',
    url: 'https://your-domain.vercel.app',
    siteName: 'AIRA',
    locale: 'nl_NL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
