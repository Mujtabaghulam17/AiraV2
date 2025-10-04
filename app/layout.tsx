import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const siteUrl = 'https://aira-ai.nl';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  
  title: {
    template: '%s | AIRA - AI Readiness & Adaptability',
    default: 'AIRA - Maak jouw organisatie AI-ready | AI Training & Implementatie',
  },
  
  description: 'AIRA helpt organisaties hun AI-transformatie te realiseren. Van awareness workshops tot volledige implementatiebegeleiding. Praktische AI-training voor overheid, onderwijs en MKB.',
  
  keywords: [
    'AI training',
    'AI readiness',
    'AI transformatie',
    'kunstmatige intelligentie training',
    'AI implementatie',
    'AI workshop',
    'AI geletterdheidstraining',
    'organisatie AI-ready maken',
    'Nederland',
    'MKB AI',
    'overheid AI',
    'onderwijs AI',
  ],
  
  authors: [{ name: 'AIRA', url: siteUrl }],
  creator: 'AIRA',
  publisher: 'AIRA',
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    alternateLocale: ['en_US'],
    url: siteUrl,
    siteName: 'AIRA',
    title: 'AIRA - Maak jouw organisatie AI-ready',
    description: 'Praktische AI-training en implementatiebegeleiding voor organisaties. Van awareness tot succesvolle adoptie.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AIRA - AI Readiness & Adaptability',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'AIRA - Maak jouw organisatie AI-ready',
    description: 'Praktische AI-training en implementatiebegeleiding voor organisaties.',
    images: ['/og-image.png'],
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: '',
  },
  
  alternates: {
    canonical: siteUrl,
    languages: {
      'nl-NL': siteUrl,
      'en-US': `${siteUrl}/en`,
    },
  },
  
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://forms.cloud.microsoft" />
        <link rel="dns-prefetch" href="https://forms.cloud.microsoft" />
      </head>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
