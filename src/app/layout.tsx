import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Surie — Teaching Smarter, Learning Better.',
  description: 'AI-powered diagnostic assessment platform for educators.',
  metadataBase: new URL('https://surie.app'),
  openGraph: {
    title: 'Surie — Teaching Smarter, Learning Better.',
    description: 'AI-powered diagnostic assessment platform for educators.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surie — Teaching Smarter, Learning Better.',
    description: 'AI-powered diagnostic assessment platform for educators.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
