'use client'

import { useWaitlistModal } from '@/context/WaitlistModalContext'
import RevealWrapper from '@/components/RevealWrapper'
import FAQAccordion from '@/components/FAQAccordion'

export default function FAQsPage() {
  const { openModal } = useWaitlistModal()

  return (
    <>
      {/* ── Page Header ── */}
      <section
        style={{
          background: '#F8F6F2',
          padding: '96px 24px 80px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 700,
            height: 400,
            background:
              'radial-gradient(ellipse 700px 400px at 50% 0%, rgba(0,114,198,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <RevealWrapper style={{ maxWidth: 560, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <p
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: 13,
              fontWeight: 600,
              color: '#0072C6',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Help & Support
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(34px, 4vw, 52px)',
              color: '#1A1A2E',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              margin: '0 0 18px',
            }}
          >
            Frequently Asked Questions
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: 17,
              color: '#6B7280',
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Everything you need to know about Surie.
          </p>
        </RevealWrapper>
      </section>

      {/* ── FAQ Accordion ── */}
      <section style={{ background: '#ffffff', padding: '72px 24px 96px' }}>
        <RevealWrapper style={{ maxWidth: 760, margin: '0 auto' }}>
          <FAQAccordion />
        </RevealWrapper>
      </section>

      {/* ── Still Have Questions ── */}
      <section
        style={{
          background: '#F8F6F2',
          padding: '80px 24px 96px',
          textAlign: 'center',
        }}
      >
        <RevealWrapper style={{ maxWidth: 520, margin: '0 auto' }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              backgroundImage: 'linear-gradient(135deg, #0072C6 0%, #00B4D8 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              boxShadow: '0 4px 14px rgba(0,114,198,0.25)',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 2.8vw, 34px)',
              color: '#1A1A2E',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              margin: '0 0 14px',
            }}
          >
            Still have questions?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: 16,
              color: '#6B7280',
              lineHeight: 1.65,
              margin: '0 0 28px',
            }}
          >
            We&apos;re happy to help. Reach out at{' '}
            <a
              href="mailto:surie.edtech@gmail.com"
              style={{
                color: '#0072C6',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              surie.edtech@gmail.com
            </a>{' '}
            or join the waitlist and we&apos;ll be in touch.
          </p>
          <button onClick={openModal} className="btn-primary" style={{ padding: '13px 28px', fontSize: 15 }}>
            Join the Waitlist
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </RevealWrapper>
      </section>
    </>
  )
}
