import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AIRA – Maak jouw organisatie AI-ready | AI Training & Readiness Scan',
  description: 'AIRA biedt AI-geletterdheidstrainingen voor teams, begeleide readiness-scans en adoptieprogrammas. Mensgerichte AI-transformatie voor overheid, onderwijs en MKB.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}
