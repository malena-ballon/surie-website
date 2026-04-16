'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useWaitlistModal } from '@/context/WaitlistModalContext'

const teal = '#0072C6'

const navLinks = [
  { label: 'Home',           href: '/'               },
  { label: 'How Surie Works', href: '/how-surie-works' },
  { label: 'FAQs',           href: '/faqs'            },
]

export default function Navbar() {
  const pathname   = usePathname()
  const { openModal } = useWaitlistModal()
  const [isOpen, setIsOpen] = useState(false)

  const close = () => setIsOpen(false)

  // Close on route change
  useEffect(() => { close() }, [pathname])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on resize past mobile breakpoint
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) close() }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #E8E4DF',
      }}>
        <nav style={{
          maxWidth: 1200, margin: '0 auto',
          padding: '0 20px', height: 64,
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 16,
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0, textDecoration: 'none', WebkitTapHighlightColor: 'transparent' }}>
            <Image src="/assets/Logo_Without-Name.png" alt="Surie" height={36} width={36} style={{ objectFit: 'contain' }} priority />
            <span style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: 700, fontSize: 20, letterSpacing: '0.08em', color: teal,
            }}>
              SURIE
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="nav-desktop-links" style={{ alignItems: 'center', gap: 4, flex: 1, justifyContent: 'center' }}>
            <ul style={{ display: 'flex', alignItems: 'center', gap: 4, listStyle: 'none', margin: 0, padding: 0 }}>
              {navLinks.map(({ label, href }) => {
                const isActive = pathname === href
                return (
                  <li key={href} style={{ position: 'relative' }}>
                    <Link href={href} style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontWeight: isActive ? 600 : 400, fontSize: 15,
                      color: isActive ? teal : '#1A1A2E',
                      textDecoration: 'none',
                      padding: '6px 14px', display: 'block',
                      transition: 'color 150ms ease',
                      WebkitTapHighlightColor: 'transparent',
                    }}>
                      {label}
                    </Link>
                    {isActive && (
                      <div style={{
                        position: 'absolute', bottom: -1, left: 14, right: 14,
                        height: 2,
                        background: 'linear-gradient(90deg, #0072C6, #00B4D8)',
                        borderRadius: 1,
                      }} />
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="nav-desktop-cta" style={{ flexShrink: 0 }}>
            <button onClick={openModal} className="btn-primary" style={{ WebkitTapHighlightColor: 'transparent' }}>
              Join the Waitlist
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setIsOpen(v => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            style={{
              width: 44, height: 44,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: 5, background: 'transparent', border: 'none',
              cursor: 'pointer', padding: 0, flexShrink: 0,
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <span style={{
              display: 'block', width: 22, height: 2,
              background: '#1A1A2E', borderRadius: 2,
              transition: 'transform 250ms ease, opacity 250ms ease',
              transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', width: 22, height: 2,
              background: '#1A1A2E', borderRadius: 2,
              transition: 'opacity 250ms ease',
              opacity: isOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: 22, height: 2,
              background: '#1A1A2E', borderRadius: 2,
              transition: 'transform 250ms ease',
              transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </nav>
      </header>

      {/* ── Mobile drawer overlay ── */}
      <div
        onClick={close}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.45)',
          zIndex: 98,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 250ms ease',
        }}
        aria-hidden
      />

      {/* ── Mobile drawer ── */}
      <div
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0,
          width: 'min(320px, 85vw)',
          background: '#fff',
          zIndex: 99,
          display: 'flex', flexDirection: 'column',
          boxShadow: '-4px 0 32px rgba(0,0,0,0.12)',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 280ms cubic-bezier(0.32,0,0.15,1)',
          overflowY: 'auto',
        }}
      >
        {/* Drawer header */}
        <div style={{
          height: 64, display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          borderBottom: '1px solid #E8E4DF',
          flexShrink: 0,
        }}>
          <Link href="/" onClick={close} style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', WebkitTapHighlightColor: 'transparent' }}>
            <Image src="/assets/Logo_Without-Name.png" alt="Surie" height={32} width={32} style={{ objectFit: 'contain' }} />
            <span style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 700, fontSize: 18, letterSpacing: '0.08em', color: teal }}>
              SURIE
            </span>
          </Link>
          <button
            onClick={close}
            aria-label="Close menu"
            style={{
              width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'transparent', border: 'none', cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1, padding: '8px 0' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map(({ label, href }, i) => {
              const isActive = pathname === href
              return (
                <li key={href} style={{ borderBottom: i < navLinks.length - 1 ? '1px solid #F0EDE8' : 'none' }}>
                  <Link
                    href={href}
                    onClick={close}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '16px 20px', minHeight: 56,
                      fontFamily: 'var(--font-body), sans-serif',
                      fontWeight: isActive ? 600 : 400, fontSize: 16,
                      color: isActive ? teal : '#1A1A2E',
                      textDecoration: 'none',
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  >
                    {label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isActive ? teal : '#9CA3AF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* CTA at bottom */}
        <div style={{ padding: '20px', borderTop: '1px solid #E8E4DF', flexShrink: 0 }}>
          <button
            onClick={() => { openModal(); close() }}
            className="btn-primary"
            style={{
              width: '100%', justifyContent: 'center',
              padding: '14px 24px', fontSize: 15,
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            Join the Waitlist
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        /* Desktop: show nav + CTA, hide hamburger */
        .nav-desktop-links { display: flex; }
        .nav-desktop-cta   { display: flex; }
        .nav-hamburger     { display: none !important; }

        /* Mobile: hide nav + CTA, show hamburger */
        @media (max-width: 767px) {
          .nav-desktop-links { display: none !important; }
          .nav-desktop-cta   { display: none !important; }
          .nav-hamburger     { display: flex !important; }
        }
      `}</style>
    </>
  )
}
