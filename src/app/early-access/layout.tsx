import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Early Access — Surie',
  description: 'Join the Surie waitlist and be the first to experience AI-powered diagnostics built for Filipino educators.',
  openGraph: {
    title: 'Get Early Access — Surie',
    description: 'Join the Surie waitlist and be the first to experience AI-powered diagnostics built for Filipino educators.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Early Access — Surie',
    description: 'Join the Surie waitlist and be the first to experience AI-powered diagnostics built for Filipino educators.',
  },
}

export default function EarlyAccessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
