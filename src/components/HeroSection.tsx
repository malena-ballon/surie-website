'use client'

import { useWaitlistModal } from '@/context/WaitlistModalContext'

export default function HeroSection() {
  const { openModal } = useWaitlistModal()

  const teal = '#0072C6'
  const tealLight = '#00B4D8'

  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #FAFAF8 0%, #F0FAF9 100%)',
          overflow: 'hidden',
          minHeight: 'clamp(520px, 80vh, 760px)',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 'clamp(64px, 10vw, 100px)',
          paddingBottom: 'clamp(80px, 12vw, 140px)',
        }}
      >
        {/* Watermark: large low-opacity dot-grid illustration */}
        <svg
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '110%',
            height: '110%',
            opacity: 0.045,
            pointerEvents: 'none',
            zIndex: 0,
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="wm-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill={teal} />
            </pattern>
            {/* Abstract classroom lines */}
            <pattern id="wm-grid" x="0" y="0" width="112" height="112" patternUnits="userSpaceOnUse">
              {/* Desk row */}
              <rect x="8"  y="52" width="32" height="4"  rx="2" fill={teal} />
              <rect x="52" y="52" width="32" height="4"  rx="2" fill={teal} />
              <rect x="30" y="20" width="52" height="3"  rx="1.5" fill={teal} />
              <circle cx="56" cy="10" r="7" fill="none" stroke={teal} strokeWidth="3" />
              <rect x="52" y="17" width="8"  height="6"  rx="1" fill={teal} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wm-dots)" />
          <rect width="100%" height="100%" fill="url(#wm-grid)" />
        </svg>

        {/* Subtle radial glow — top center */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 900,
            height: 600,
            background:
              `radial-gradient(ellipse 900px 500px at 50% 0%, rgba(0,180,216,0.08) 0%, transparent 70%)`,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Center content */}
        <div
          style={{
            maxWidth: 660,
            margin: '0 auto',
            padding: '0 24px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 10,
            animation: 'fadeInUp 0.7s ease both',
          }}
        >
          {/* Trust badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              padding: '6px 16px',
              borderRadius: 50,
              background: 'rgba(0,114,198,0.07)',
              border: '1px solid rgba(0,114,198,0.18)',
              marginBottom: 28,
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke={teal}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            <span
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 600,
                fontSize: 13,
                color: teal,
                letterSpacing: '0.01em',
              }}
            >
              Built for Educators
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(38px, 4.5vw, 58px)',
              color: '#1A1A2E',
              lineHeight: 1.14,
              margin: '0 0 22px',
              letterSpacing: '-0.025em',
            }}
          >
            Teaching{' '}
            <span
              style={{
                backgroundImage: `linear-gradient(135deg, ${teal} 0%, ${tealLight} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Smarter
            </span>
            {' '}and{' '}
            <span
              style={{
                backgroundImage: `linear-gradient(135deg, ${teal} 0%, ${tealLight} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Easier
            </span>
            .{' '}
            <br />
            Learning{' '}
            <span
              style={{
                backgroundImage: `linear-gradient(135deg, ${teal} 0%, ${tealLight} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Better
            </span>
            .
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 400,
              fontSize: 17,
              color: '#6B7280',
              lineHeight: 1.7,
              margin: '0 auto 40px',
              maxWidth: 580,
            }}
          >
            Creating assessments, grading papers, and reviewing descriptive answers individually
            consumes hours of valuable teaching time. Even so, learning gaps often go undetected.
            Surie automates the process and surfaces those gaps instantly.
          </p>

          {/* CTA */}
          <button
            onClick={openModal}
            className="btn-primary"
            style={{
              padding: '14px 32px',
              fontSize: 15,
              animation: 'ctaPulse 3s ease-in-out 2s infinite',
            }}
          >
            Join the Waitlist
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          {/* Social proof micro-line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              marginTop: 16,
            }}
          >
            {/* Avatar stack */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {[
                { bg: '#0072C6', initials: 'T' },
                { bg: '#00B4D8', initials: 'M' },
                { bg: '#4A90D9', initials: 'R' },
                { bg: '#0099B8', initials: 'S' },
                { bg: '#1A6FB0', initials: 'A' },
              ].map((avatar, i) => (
                <div
                  key={i}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: avatar.bg,
                    border: '2px solid #FAFAF8',
                    marginLeft: i === 0 ? 0 : -8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 10,
                    fontWeight: 700,
                    color: '#fff',
                    fontFamily: 'var(--font-heading), sans-serif',
                    zIndex: 5 - i,
                    position: 'relative',
                  }}
                >
                  {avatar.initials}
                </div>
              ))}
            </div>
            <span
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: 13,
                color: '#6B7280',
                fontWeight: 500,
              }}
            >
              Join 50+ teachers already on the waitlist!
            </span>
          </div>
        </div>
      </section>

      {/* ── Product screenshot — browser chrome mockup ── */}
      <section
        style={{
          background: 'linear-gradient(180deg, #F0FAF9 0%, #F8F6F2 100%)',
          paddingTop: 0,
          paddingBottom: 96,
        }}
      >
        <div
          style={{
            maxWidth: 1060,
            margin: '0 auto',
            padding: '0 24px',
            marginTop: 'clamp(-32px, -4vw, -56px)',
            position: 'relative',
            zIndex: 20,
          }}
        >
          {/* Browser chrome wrapper */}
          <div
            style={{
              borderRadius: 14,
              border: `2px solid rgba(0,180,216,0.35)`,
              boxShadow:
                '0 4px 6px rgba(0,0,0,0.04), 0 12px 32px rgba(0,114,198,0.10), 0 32px 80px rgba(0,0,0,0.10)',
              overflow: 'hidden',
              background: '#fff',
            }}
          >
            {/* Browser top bar */}
            <div
              style={{
                height: 40,
                background: '#F3F4F6',
                borderBottom: '1px solid #E5E7EB',
                display: 'flex',
                alignItems: 'center',
                padding: '0 14px',
                gap: 8,
                flexShrink: 0,
              }}
            >
              {/* Traffic lights */}
              <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexShrink: 0 }}>
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57' }} />
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#FFBD2E' }} />
                <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840' }} />
              </div>
              {/* URL bar */}
              <div
                style={{
                  flex: 1,
                  maxWidth: 340,
                  margin: '0 auto',
                  height: 24,
                  borderRadius: 6,
                  background: '#FFFFFF',
                  border: '1px solid #D1D5DB',
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: 10,
                  gap: 6,
                }}
              >
                {/* Lock icon */}
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: 11,
                    color: '#6B7280',
                    letterSpacing: '0.01em',
                  }}
                >
                  app.surie.io/dashboard
                </span>
              </div>
            </div>

            {/* Screenshot */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/videos/Main.gif"
              alt="Surie dashboard"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </section>
    </>
  )
}
