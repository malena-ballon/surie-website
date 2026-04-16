'use client'

import { useState } from 'react'
import RevealWrapper from '@/components/RevealWrapper'
import WaitlistFormFields from '@/components/WaitlistFormFields'
import { useWaitlistForm } from '@/hooks/useWaitlistForm'
import SectionLabel from '@/components/SectionLabel'

const ENDPOINT = 'https://formspree.io/f/xgopbnyg'

// Deep navy that sits in the same blue family as #0072C6
const bg     = '#0A1F3D'
const accent = '#00B4D8'   // site's tealLight — used for focus ring and highlights

function SuccessBanner() {
  return (
    <div style={{
      padding: '20px 28px',
      borderRadius: 12,
      background: 'rgba(0,180,216,0.12)',
      border: '1px solid rgba(0,180,216,0.28)',
      marginBottom: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
    }}>
      <div style={{
        width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
        background: 'linear-gradient(135deg, #0072C6, #00B4D8)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <span style={{
        fontFamily: 'var(--font-body), sans-serif',
        fontSize: 15, fontWeight: 600, color: '#fff',
      }}>
        You&apos;re on the list! We&apos;ll be in touch soon.
      </span>
    </div>
  )
}

export default function CTASection({ fullForm = false }: { fullForm?: boolean }) {
  // ── Inline (email-only) form state ───────────────────────────────────────
  const [email,     setEmail]     = useState('')
  const [focused,   setFocused]   = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error,     setError]     = useState<string | null>(null)

  const handleInlineSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsLoading(true)
    setError(null)
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, source: 'cta-section' }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // ── Full form state (reuses the same hook + fields as the modal) ─────────
  const { submitted: fullSubmitted, ...fullFormProps } = useWaitlistForm()

  return (
    <section style={{
      background: bg,
      padding: 'clamp(80px, 11vw, 120px) 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Radial glow — top centre */}
      <div aria-hidden style={{
        position: 'absolute',
        top: -140,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 900,
        height: 560,
        background: `radial-gradient(ellipse 900px 480px at 50% 0%, rgba(0,180,216,0.18) 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Dot watermark */}
      <svg aria-hidden style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        opacity: 0.045, pointerEvents: 'none',
      }}>
        <defs>
          <pattern id="cta-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#fff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-dots)" />
      </svg>

      <RevealWrapper style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>

        {/* Label */}
        <div style={{ marginBottom: 28 }}>
          <SectionLabel
            className="cta-label"
            marginBottom={0}
          >
            Join the Waitlist
          </SectionLabel>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-heading), sans-serif',
          fontWeight: 700,
          fontSize: 'clamp(26px, 3.4vw, 44px)',
          color: '#fff',
          lineHeight: 1.15,
          letterSpacing: '-0.022em',
          margin: '0 0 18px',
        }}>
          Be first in the classroom to know exactly who needs help.
        </h2>

        {/* Subheadline */}
        <p style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: 17,
          color: 'rgba(255,255,255,0.58)',
          lineHeight: 1.7,
          margin: '0 auto 32px',
          maxWidth: 520,
        }}>
          Join the waitlist. We&apos;ll reach out personally when Surie is ready.
        </p>

        {/* FOMO line */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '8px 16px',
          borderRadius: 8,
          background: 'rgba(0,180,216,0.10)',
          border: '1px solid rgba(0,180,216,0.22)',
          marginBottom: 28,
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: 13,
            color: 'rgba(255,255,255,0.78)',
            lineHeight: 1.4,
          }}>
            We&apos;re onboarding in batches — early spots get{' '}
            <strong style={{ color: accent, fontWeight: 700 }}>free extended access</strong>.
          </span>
        </div>

        {/* ── Form / success state ── */}
        {fullForm ? (
          /* Full form: same fields as the modal */
          fullSubmitted ? (
            <SuccessBanner />
          ) : (
            <div className="cta-full-form" style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 16,
              padding: 'clamp(24px, 4vw, 36px)',
              marginBottom: 14,
              textAlign: 'left',
            }}>
              <WaitlistFormFields
                {...fullFormProps}
                submitLabel="Join the Waitlist"
                submitStyle={{ background: `linear-gradient(135deg, #0072C6, ${accent})`, color: '#fff' }}
              />
            </div>
          )
        ) : (
          /* Inline email-only form */
          submitted ? (
            <SuccessBanner />
          ) : (
            <form onSubmit={handleInlineSubmit} className="cta-form" style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
              <input
                type="email"
                required
                placeholder="Your school email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                disabled={isLoading}
                style={{
                  flex: 1,
                  padding: '13px 18px',
                  borderRadius: 10,
                  border: focused
                    ? `2px solid ${accent}`
                    : '2px solid rgba(255,255,255,0.16)',
                  background: 'rgba(255,255,255,0.09)',
                  color: '#fff',
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: 15,
                  outline: 'none',
                  transition: 'border-color 150ms ease',
                }}
              />
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  padding: '13px 26px',
                  borderRadius: 10,
                  background: '#fff',
                  color: bg,
                  fontFamily: 'var(--font-heading), sans-serif',
                  fontWeight: 700,
                  fontSize: 14,
                  border: 'none',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  opacity: isLoading ? 0.75 : 1,
                  transition: 'opacity 150ms ease, transform 150ms ease',
                }}
                onMouseEnter={e => {
                  if (!isLoading) {
                    (e.currentTarget as HTMLButtonElement).style.opacity = '0.92'
                    ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'
                  }
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = isLoading ? '0.75' : '1'
                  ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
                }}
              >
                {isLoading ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 0.7s linear infinite' }}>
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Join the Waitlist
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )
        )}

        {/* Inline form error */}
        {!fullForm && error && (
          <p style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: 13, color: '#FCA5A5',
            margin: '0 0 14px',
          }}>
            {error}
          </p>
        )}

        {/* Disclaimer */}
        <p style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: 12,
          color: 'rgba(255,255,255,0.38)',
          margin: '0 0 32px',
          letterSpacing: '0.01em',
        }}>
          No spam. No IT setup. We&apos;ll email you directly.
        </p>

        {/* Counter + curriculum */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px',
            borderRadius: 99,
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.12)',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ADE80', display: 'inline-block', flexShrink: 0 }} />
            <span style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: 13,
              color: 'rgba(255,255,255,0.76)',
              fontWeight: 500,
            }}>
              <strong style={{ color: '#fff', fontWeight: 700 }}>educators</strong> have joined
            </span>
          </div>

          <p style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: 12,
            color: 'rgba(255,255,255,0.34)',
            margin: 0,
            letterSpacing: '0.02em',
          }}>
            Schools&nbsp;&nbsp;·&nbsp;&nbsp;Review Centers&nbsp;&nbsp;·&nbsp;&nbsp;Tutoring&nbsp;&nbsp;·&nbsp;&nbsp;Individual Educators
          </p>
        </div>

      </RevealWrapper>

      <style>{`
        /* Section label on dark background */
        .cta-label { color: rgba(255,255,255,0.65) !important; }
        .cta-label::before, .cta-label::after { background: rgba(255,255,255,0.50) !important; }

        /* Inline form placeholder */
        .cta-form input::placeholder { color: rgba(255,255,255,0.40); }
        @media (max-width: 600px) {
          .cta-form { flex-direction: column !important; }
          .cta-form input, .cta-form button { width: 100%; flex-shrink: unset; }
        }

        /* Full form overrides — inputs/labels on dark bg */
        .cta-full-form label {
          color: rgba(255,255,255,0.80) !important;
        }
        .cta-full-form input,
        .cta-full-form select {
          background: rgba(255,255,255,0.08) !important;
          border-color: rgba(255,255,255,0.16) !important;
          color: #fff !important;
        }
        .cta-full-form input::placeholder { color: rgba(255,255,255,0.38) !important; }
        .cta-full-form input:focus,
        .cta-full-form select:focus {
          border-color: #00B4D8 !important;
          box-shadow: 0 0 0 3px rgba(0,180,216,0.18) !important;
        }
        .cta-full-form select option { background: #0A1F3D; color: #fff; }
      `}</style>
    </section>
  )
}
