'use client'

import RevealWrapper from '@/components/RevealWrapper'
import WaitlistFormFields from '@/components/WaitlistFormFields'
import { useWaitlistForm } from '@/hooks/useWaitlistForm'

export default function WaitlistSection() {
  const { submitted, ...formProps } = useWaitlistForm()

  return (
    <section
      style={{
        padding: '96px 24px 112px',
        background: 'linear-gradient(160deg, rgba(0,114,198,0.05) 0%, #F8F6F2 45%, rgba(0,180,216,0.05) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Soft glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700,
          height: 400,
          background: 'radial-gradient(ellipse at center, rgba(0,114,198,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <RevealWrapper style={{ maxWidth: 560, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.2vw, 40px)',
              color: '#1A1A2E',
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              margin: '0 0 14px',
            }}
          >
            Be the first to try Surie.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: 16,
              color: '#6B7280',
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            We&apos;re opening access soon. Join the waitlist and we&apos;ll let you know when
            it&apos;s your turn.
          </p>
        </div>

        {/* Form card */}
        <div
          style={{
            background: '#fff',
            border: '1px solid #E8E4DF',
            borderRadius: 14,
            boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
            padding: '36px 36px 40px',
          }}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px 0 8px' }}>
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  backgroundImage: 'linear-gradient(135deg, #0072C6 0%, #00B4D8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: '0 4px 16px rgba(0,114,198,0.3)',
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading), sans-serif',
                  fontWeight: 700,
                  fontSize: 22,
                  color: '#1A1A2E',
                  margin: '0 0 10px',
                }}
              >
                You&apos;re on the list!
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: 15,
                  color: '#6B7280',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                We&apos;ll reach out when Surie is ready for you.
              </p>
            </div>
          ) : (
            <WaitlistFormFields
              {...formProps}
              submitLabel="Join the Waitlist"
            />
          )}
        </div>
      </RevealWrapper>
    </section>
  )
}
