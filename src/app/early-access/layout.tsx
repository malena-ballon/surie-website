import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Early Access — Surie',
  description: 'Join the Surie waitlist and be the first to experience AI-powered diagnostics built for educators.',
  openGraph: {
    title: 'Get Early Access — Surie',
    description: 'Join the Surie waitlist and be the first to experience AI-powered diagnostics built for educators.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Early Access — Surie',
    description: 'Join the Surie waitlist and be the first to experience AI-powered diagnostics built for educators.',
  },
}

export default function EarlyAccessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
