'use client'

import { useWaitlistModal } from '@/context/WaitlistModalContext'

export default function HeroSection() {
  const { openModal } = useWaitlistModal()

  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          position: 'relative',
          background: '#F8F6F2',
          overflow: 'hidden',
          minHeight: 'clamp(520px, 80vh, 760px)',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 'clamp(64px, 10vw, 100px)',
          paddingBottom: 'clamp(100px, 15vw, 180px)',
        }}
      >
        {/* Radial glow — top center */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 900,
            height: 600,
            background:
              'radial-gradient(ellipse 900px 500px at 50% 0%, rgba(0,114,198,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Decorative dot grid — top right */}
        <div
          className="hidden xl:block"
          style={{
            position: 'absolute',
            top: 56,
            right: 56,
            width: 128,
            height: 128,
            backgroundImage:
              'radial-gradient(circle, rgba(0,114,198,0.18) 1.5px, transparent 1.5px)',
            backgroundSize: '18px 18px',
            pointerEvents: 'none',
          }}
        />

        {/* Decorative dot grid — bottom left */}
        <div
          className="hidden xl:block"
          style={{
            position: 'absolute',
            bottom: 72,
            left: 56,
            width: 128,
            height: 128,
            backgroundImage:
              'radial-gradient(circle, rgba(0,114,198,0.18) 1.5px, transparent 1.5px)',
            backgroundSize: '18px 18px',
            pointerEvents: 'none',
          }}
        />

        {/* Floating card — left */}
        <div
          className="hidden xl:block"
          style={{
            position: 'absolute',
            left: 'max(24px, calc(50% - 680px))',
            top: '50%',
            width: 268,
            borderRadius: 14,
            background: '#fff',
            border: '1px solid #E8E4DF',
            boxShadow: '0 12px 40px rgba(0,0,0,0.11)',
            overflow: 'hidden',
            zIndex: 1,
            animation: 'floatCard 5s ease-in-out infinite',
          }}
        >
          <div
            style={{
              padding: '8px 12px',
              borderBottom: '1px solid #E8E4DF',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0072C6, #00B4D8)',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: 11,
                fontWeight: 600,
                color: '#1A1A2E',
                letterSpacing: '0.03em',
              }}
            >
              Diagnostic Report
            </span>
          </div>
          <div style={{ width: '100%', height: 192, overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/videos/Diagnostic-Report.gif"
              alt="Diagnostic report"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left' }}
            />
          </div>
        </div>

        {/* Floating card — right */}
        <div
          className="hidden xl:block"
          style={{
            position: 'absolute',
            right: 'max(24px, calc(50% - 680px))',
            top: '50%',
            width: 268,
            borderRadius: 14,
            background: '#fff',
            border: '1px solid #E8E4DF',
            boxShadow: '0 12px 40px rgba(0,0,0,0.11)',
            overflow: 'hidden',
            zIndex: 1,
            animation: 'floatCardRight 5s ease-in-out infinite',
            animationDelay: '0.8s',
          }}
        >
          <div
            style={{
              padding: '8px 12px',
              borderBottom: '1px solid #E8E4DF',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0072C6, #00B4D8)',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: 11,
                fontWeight: 600,
                color: '#1A1A2E',
                letterSpacing: '0.03em',
              }}
            >
              Exam Builder
            </span>
          </div>
          <div style={{ width: '100%', height: 192, overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/videos/Exam-Generation.gif"
              alt="Exam generation"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left' }}
            />
          </div>
        </div>

        {/* Center content */}
        <div
          style={{
            maxWidth: 640,
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
              stroke="#0072C6"
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
                color: '#0072C6',
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
                backgroundImage: 'linear-gradient(135deg, #0072C6 0%, #00B4D8 100%)',
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
                backgroundImage: 'linear-gradient(135deg, #0072C6 0%, #00B4D8 100%)',
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
                backgroundImage: 'linear-gradient(135deg, #0072C6 0%, #00B4D8 100%)',
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
              maxWidth: 560,
            }}
          >
            Surie is an AI-powered diagnostic assessment platform built for educators. Generate
            exams from your own materials, instantly see learning gaps, and create targeted
            follow-ups, all in one place.
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
        </div>
      </section>

      {/* ── Product screenshot ── */}
      <section style={{ background: '#F8F6F2', paddingBottom: 96 }}>
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: '0 24px',
            marginTop: 'clamp(-40px, -5vw, -72px)',
            position: 'relative',
            zIndex: 20,
          }}
        >
          <div
            style={{
              borderRadius: 14,
              border: '1px solid #E8E4DF',
              boxShadow: '0 8px 48px rgba(0,0,0,0.10)',
              overflow: 'hidden',
              background: '#fff',
            }}
          >
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
