'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Scroll to top on every navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return (
    <div key={pathname} style={{ animation: 'pageFadeIn 0.35s ease both' }}>
      {children}
    </div>
  )
}
