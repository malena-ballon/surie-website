'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useWaitlistForm } from '@/hooks/useWaitlistForm'
import WaitlistFormFields from '@/components/WaitlistFormFields'

export default function EarlyAccessPage() {
  const { submitted, reset, ...formProps } = useWaitlistForm()

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#F8F6F2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 36, textDecoration: 'none' }}
      >
        <Image
          src="/assets/Logo_Without-Name.png"
          alt="Surie"
          width={38}
          height={38}
          style={{ objectFit: 'contain' }}
          priority
        />
        <span
          style={{
            fontFamily: 'var(--font-heading), sans-serif',
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: '0.08em',
            color: '#0072C6',
          }}
        >
          SURIE
        </span>
      </Link>

      {/* Card */}
      <div
        style={{
          background: '#fff',
          borderRadius: 16,
          maxWidth: 480,
          width: '100%',
          padding: 'clamp(32px, 6vw, 48px)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.10)',
          border: '1px solid #E8E4DF',
        }}
      >
        {submitted ? (
          <SuccessState onReset={reset} />
        ) : (
          <>
            <div style={{ marginBottom: 28 }}>
              <h1
                style={{
                  fontFamily: 'var(--font-heading), sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(22px, 4vw, 28px)',
                  color: '#1A1A2E',
                  margin: '0 0 8px',
                  lineHeight: 1.2,
                }}
              >
                Get Early Access
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: 15,
                  color: '#6B7280',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Be the first to experience Surie — AI-powered diagnostics built for educators.
              </p>
            </div>

            <WaitlistFormFields {...formProps} submitLabel="Join the Waitlist" />
          </>
        )}
      </div>

      {/* Back link */}
      <Link
        href="/"
        style={{
          marginTop: 24,
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: 14,
          color: '#6B7280',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        Back to homepage
      </Link>
    </div>
  )
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div style={{ textAlign: 'center', padding: '24px 0 8px' }}>
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          backgroundImage: 'linear-gradient(135deg, #0072C6 0%, #00B4D8 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px',
          boxShadow: '0 4px 20px rgba(0,114,198,0.30)',
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h2
        style={{
          fontFamily: 'var(--font-heading), sans-serif',
          fontWeight: 700,
          fontSize: 24,
          color: '#1A1A2E',
          margin: '0 0 10px',
        }}
      >
        You&apos;re on the list!
      </h2>
      <p
        style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: 15,
          color: '#6B7280',
          lineHeight: 1.65,
          margin: '0 auto 28px',
          maxWidth: 340,
        }}
      >
        We&apos;ll reach out when Surie is ready for you. Keep an eye on your inbox!
      </p>
      <button
        onClick={onReset}
        style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: 14,
          color: '#0072C6',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textDecoration: 'underline',
          padding: 0,
        }}
      >
        Submit another response
      </button>
    </div>
  )
}
