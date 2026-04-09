'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useWaitlistModal } from '@/context/WaitlistModalContext'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'How Surie Works', href: '/how-surie-works' },
  { label: 'FAQs', href: '/faqs' },
]

export default function Navbar() {
  const pathname = usePathname()
  const { openModal } = useWaitlistModal()
  const [isOpen, setIsOpen] = useState(false)

  // Close menu on route change
  useEffect(() => { setIsOpen(false) }, [pathname])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Close if viewport resizes past mobile breakpoint
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #E8E4DF',
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 20px',
          height: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0, textDecoration: 'none' }}>
          <Image
            src="/assets/Logo_Without-Name.png"
            alt="Surie"
            height={38}
            width={38}
            style={{ objectFit: 'contain' }}
            priority
          />
          <span
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: 700,
              fontSize: 20,
              letterSpacing: '0.08em',
              color: '#0072C6',
            }}
          >
            SURIE
          </span>
        </Link>

        {/* Desktop: nav links + CTA */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 4, flex: 1, justifyContent: 'center' }}>
          <ul style={{ display: 'flex', alignItems: 'center', gap: 4, listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href
              return (
                <li key={href} style={{ position: 'relative' }}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontWeight: isActive ? 600 : 400,
                      fontSize: 15,
                      color: isActive ? '#0072C6' : '#1A1A2E',
                      textDecoration: 'none',
                      padding: '6px 14px',
                      display: 'block',
                      transition: 'color 150ms ease',
                    }}
                  >
                    {label}
                  </Link>
                  {isActive && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: -1,
                        left: 14,
                        right: 14,
                        height: 2,
                        background: 'linear-gradient(90deg, #0072C6, #00B4D8)',
                        borderRadius: 1,
                      }}
                    />
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="hidden md:flex" style={{ flexShrink: 0 }}>
          <button onClick={openModal} className="btn-primary">
            Join the Waitlist
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile: hamburger */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            style={{
              width: 40,
              height: 40,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 4,
            }}
          >
            <span
              style={{
                display: 'block',
                width: 22,
                height: 2,
                background: '#1A1A2E',
                borderRadius: 2,
                transition: 'transform 250ms ease, opacity 250ms ease',
                transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: 22,
                height: 2,
                background: '#1A1A2E',
                borderRadius: 2,
                transition: 'opacity 250ms ease',
                opacity: isOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: 22,
                height: 2,
                background: '#1A1A2E',
                borderRadius: 2,
                transition: 'transform 250ms ease',
                transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div
          className="md:hidden"
          style={{
            background: '#ffffff',
            borderBottom: '1px solid #E8E4DF',
            padding: '8px 20px 20px',
            animation: 'mobileMenuIn 0.2s ease both',
          }}
        >
          <ul style={{ listStyle: 'none', margin: '0 0 16px', padding: 0 }}>
            {navLinks.map(({ label, href }, i) => {
              const isActive = pathname === href
              return (
                <li
                  key={href}
                  style={{ borderBottom: i < navLinks.length - 1 ? '1px solid #F0EDE8' : 'none' }}
                >
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontWeight: isActive ? 600 : 400,
                      fontSize: 16,
                      color: isActive ? '#0072C6' : '#1A1A2E',
                      textDecoration: 'none',
                      padding: '14px 4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    {label}
                    {isActive ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0072C6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
          <button
            onClick={() => { openModal(); setIsOpen(false) }}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '13px 24px', fontSize: 15 }}
          >
            Join the Waitlist
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </header>
  )
}
