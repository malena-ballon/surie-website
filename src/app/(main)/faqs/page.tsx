'use client'

import { useWaitlistModal } from '@/context/WaitlistModalContext'
import RevealWrapper from '@/components/RevealWrapper'
import FAQAccordion from '@/components/FAQAccordion'

const teal = '#0072C6'
const tealLight = '#00B4D8'

const categoryPills = [
  { label: 'General',           href: '#faq-general'          },
  { label: 'Exams & AI',        href: '#faq-exams-ai'         },
  { label: 'Diagnostics',       href: '#faq-diagnostics'      },
  { label: 'Access & Accounts', href: '#faq-access-accounts'  },
]

export default function FAQsPage() {
  const { openModal } = useWaitlistModal()

  return (
    <>
      {/* ── Page Header ── */}
      <section
        style={{
          background: '#FAFAF8',
          padding: '96px 24px 72px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle radial glow */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 400,
          background: 'radial-gradient(ellipse 700px 400px at 50% 0%, rgba(0,114,198,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <RevealWrapper style={{ maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* "Help & Support" label */}
          <p style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: 12,
            fontWeight: 600,
            color: teal,
            letterSpacing: '0.10em',
            textTransform: 'uppercase',
            margin: '0 0 16px',
          }}>
            Help &amp; Support
          </p>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--font-heading), sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(32px, 4vw, 48px)',
            color: '#1A1A1A',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            margin: '0 0 18px',
          }}>
            Frequently Asked Questions
          </h1>

          {/* Subtext */}
          <p style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: 17,
            color: '#6B7280',
            lineHeight: 1.65,
            margin: '0 0 36px',
          }}>
            Everything you need to know about Surie.
          </p>

          {/* Category pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            justifyContent: 'center',
          }}>
            {categoryPills.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="faq-pill"
                style={{
                  display: 'inline-block',
                  padding: '8px 20px',
                  borderRadius: 999,
                  border: `1px solid ${teal}`,
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: 14,
                  fontWeight: 500,
                  color: teal,
                  textDecoration: 'none',
                  transition: 'background 200ms ease, color 200ms ease',
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </RevealWrapper>
      </section>

      {/* ── FAQ Accordion ── */}
      <section style={{ background: '#ffffff', padding: '72px 24px 96px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <FAQAccordion />
        </div>
      </section>

      {/* ── Still Have Questions ── */}
      <section style={{
        background: '#FAFAF8',
        padding: '80px 24px 96px',
        borderTop: '1px solid #E8E8E4',
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <RevealWrapper>
            <div
              className="faq-contact-card"
              style={{
                background: '#fff',
                borderRadius: 16,
                boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
                padding: '40px',
                display: 'flex',
                alignItems: 'center',
                gap: 40,
              }}
            >
              {/* Left side — 60% */}
              <div style={{ flex: '0 0 60%' }}>
                <h2 style={{
                  fontFamily: 'var(--font-heading), sans-serif',
                  fontWeight: 600,
                  fontSize: 24,
                  color: '#1A1A1A',
                  lineHeight: 1.25,
                  margin: '0 0 12px',
                }}>
                  Still have questions?
                </h2>
                <p style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: 15,
                  color: '#6B7280',
                  lineHeight: 1.65,
                  margin: '0 0 14px',
                }}>
                  Reach out directly and we will get back to you personally.
                </p>
                <a
                  href="mailto:surie.edtech@gmail.com"
                  className="faq-email-link"
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: 14,
                    fontWeight: 500,
                    color: teal,
                    textDecoration: 'none',
                    transition: 'text-decoration 200ms ease',
                  }}
                >
                  surie.edtech@gmail.com
                </a>
              </div>

              {/* Right side — 40% */}
              <div style={{
                flex: '0 0 40%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
              }}>
                <button
                  onClick={openModal}
                  className="btn-primary"
                  style={{
                    padding: '13px 28px',
                    fontSize: 15,
                    WebkitTapHighlightColor: 'transparent',
                  }}
                >
                  Join the Waitlist
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <span style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: 12,
                  color: '#6B7280',
                  textAlign: 'center',
                }}>
                  or email us directly
                </span>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <style>{`
        /* Pill hover */
        .faq-pill:hover {
          background: linear-gradient(135deg, ${teal} 0%, ${tealLight} 100%);
          border-color: transparent;
          color: #fff !important;
        }

        /* Email link hover */
        .faq-email-link:hover {
          text-decoration: underline !important;
        }

        /* Contact card — mobile stacking */
        @media (max-width: 767px) {
          .faq-contact-card {
            flex-direction: column !important;
            padding: 28px 24px !important;
            gap: 24px !important;
          }
          .faq-contact-card > div {
            flex: 1 1 auto !important;
            width: 100%;
          }
          .faq-contact-card > div:last-child {
            width: 100%;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .faq-pill,
          .faq-email-link {
            transition: none !important;
          }
        }
      `}</style>
    </>
  )
}
