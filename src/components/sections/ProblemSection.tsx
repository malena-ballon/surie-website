'use client'

import React, { useState } from 'react'
import RevealWrapper from '@/components/RevealWrapper'

const teal = '#0072C6'
const tealLight = '#00B4D8'
const gradientText = {
  backgroundImage: `linear-gradient(135deg, ${teal} 0%, ${tealLight} 100%)`,
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  backgroundClip: 'text' as const,
}
const gradientBg = `linear-gradient(135deg, ${teal} 0%, ${tealLight} 100%)`

function InfoIcon({ active }: { active: boolean }) {
  return active ? (
    // X icon when panel is open
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ) : (
    // Question mark icon
    <span style={{
      fontFamily: 'var(--font-heading), sans-serif',
      fontSize: 16,
      fontWeight: 700,
      color: '#fff',
      lineHeight: 1,
      userSelect: 'none',
    }}>?</span>
  )
}

export default function ProblemSection() {
  const [openPanel, setOpenPanel] = useState<null | 1 | 2>(null)

  const toggle = (n: 1 | 2) => setOpenPanel(prev => (prev === n ? null : n))

  return (
    <section style={{ background: '#FAFAF8', padding: 'clamp(72px, 10vw, 112px) 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>

        {/* Section label */}
        <RevealWrapper style={{ textAlign: 'center', marginBottom: 18 }}>
          <span
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              ...gradientText,
            }}
          >
            The Problem
          </span>
        </RevealWrapper>

        {/* Section headline */}
        <RevealWrapper style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.2vw, 42px)',
              color: '#1A1A2E',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              margin: '0 auto',
              maxWidth: 720,
              textWrap: 'balance',
            } as React.CSSProperties}
          >
            Two things are{' '}
            <span style={gradientText}>making teaching harder</span>
            {' '}than it should be.
          </h2>
        </RevealWrapper>

        {/* Two-column split */}
        <RevealWrapper>
          <div
            className="problem-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1px 1fr',
              gap: 0,
              alignItems: 'start',
              overflow: 'visible',
            }}
          >

            {/* ── LEFT: Time Problem ── */}
            <div
              style={{
                padding: 'clamp(32px, 4vw, 56px) clamp(24px, 4vw, 56px)',
                position: 'relative',
                paddingBottom: 80,
              }}
            >
              {/* Gradient pill label */}
              <div
                style={{
                  display: 'inline-block',
                  background: gradientBg,
                  borderRadius: 99,
                  padding: '4px 14px',
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase' as const,
                    color: '#fff',
                  }}
                >
                  Problem 01
                </span>
              </div>

              {/* Column headline */}
              <h3
                style={{
                  fontFamily: 'var(--font-heading), sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 2vw, 26px)',
                  color: '#1A1A2E',
                  lineHeight: 1.25,
                  letterSpacing: '-0.015em',
                  margin: '0 0 32px',
                }}
              >
                Too much time on the wrong tasks.
              </h3>

              {/* Typographic stat */}
              <div style={{ marginBottom: 28 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-heading), sans-serif',
                    fontWeight: 700,
                    fontSize: 48,
                    lineHeight: 1,
                    marginBottom: 8,
                    ...gradientText,
                  }}
                >
                  Hours lost.
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: 14,
                    color: '#6B7280',
                    lineHeight: 1.6,
                    margin: 0,
                    maxWidth: 360,
                  }}
                >
                  Creating exams, grading papers, reviewing descriptive answers one by one.
                </p>
              </div>

              {/* Time bar visual */}
              <div style={{ marginBottom: 0 }}>
                <div
                  style={{
                    height: 8,
                    borderRadius: 99,
                    background: '#E8E4DF',
                    overflow: 'hidden',
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: '65%',
                      borderRadius: 99,
                      background: `linear-gradient(90deg, ${teal} 0%, ${tealLight} 100%)`,
                      opacity: 0.35,
                    }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: 12,
                    color: '#9CA3AF',
                    margin: 0,
                    letterSpacing: '0.01em',
                  }}
                >
                  Time spent on admin vs. actual teaching
                </p>
              </div>

              {/* Info panel — P01 */}
              <div
                className="info-panel"
                style={{
                  position: 'absolute',
                  bottom: 72,
                  right: 24,
                  width: 'min(280px, calc(100% - 48px))',
                  background: '#F2F2F0',
                  borderRadius: 14,
                  padding: '16px 18px',
                  zIndex: 50,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  opacity: openPanel === 1 ? 1 : 0,
                  transform: openPanel === 1 ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.97)',
                  pointerEvents: openPanel === 1 ? 'auto' : 'none',
                  transition: 'opacity 0.22s ease, transform 0.22s ease',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: 14,
                    color: '#1A1A1A',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Teachers spend a significant portion of their week on administrative tasks that
                  take time away from actual instruction. Exam creation and grading alone can
                  consume an entire day.
                </p>
              </div>

              {/* Info icon button — P01 */}
              <button
                onClick={() => toggle(1)}
                aria-label={openPanel === 1 ? 'Hide detail' : 'Show detail'}
                style={{
                  position: 'absolute',
                  bottom: 24,
                  right: 24,
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: gradientBg,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 10px rgba(0,114,198,0.28)',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                  zIndex: 51,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)'
                  ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 16px rgba(0,114,198,0.38)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'
                  ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 10px rgba(0,114,198,0.28)'
                }}
              >
                <InfoIcon active={openPanel === 1} />
              </button>
            </div>

            {/* Vertical divider */}
            <div
              className="problem-divider"
              style={{ width: 1, alignSelf: 'stretch', background: '#E8E4DF' }}
            />

            {/* ── RIGHT: Visibility Problem ── */}
            <div
              style={{
                padding: 'clamp(32px, 4vw, 56px) clamp(24px, 4vw, 56px)',
                position: 'relative',
                paddingBottom: 80,
              }}
            >
              {/* Gradient pill label */}
              <div
                style={{
                  display: 'inline-block',
                  background: gradientBg,
                  borderRadius: 99,
                  padding: '4px 14px',
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase' as const,
                    color: '#fff',
                  }}
                >
                  Problem 02
                </span>
              </div>

              {/* Column headline */}
              <h3
                style={{
                  fontFamily: 'var(--font-heading), sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 2vw, 26px)',
                  color: '#1A1A2E',
                  lineHeight: 1.25,
                  letterSpacing: '-0.015em',
                  margin: '0 0 32px',
                }}
              >
                Learning gaps stay invisible.
              </h3>

              {/* SVG bar chart */}
              <div style={{ marginBottom: 28 }}>
                <svg
                  viewBox="0 0 280 100"
                  width="100%"
                  style={{ maxWidth: 320, display: 'block', overflow: 'visible' }}
                  aria-hidden="true"
                >
                  <line x1="0" y1="98" x2="280" y2="98" stroke="#E8E4DF" strokeWidth="1" />
                  <rect x="10"  y="22" width="44" height="76" rx="4" fill={teal} opacity="0.75" />
                  <rect x="72"  y="38" width="44" height="60" rx="4" fill={teal} opacity="0.75" />
                  <rect x="134" y="70" width="44" height="28" rx="4" fill={tealLight} opacity="0.35" />
                  <rect x="196" y="48" width="44" height="50" rx="4" fill={teal} opacity="0.75" />
                  <line x1="156" y1="62" x2="156" y2="14" stroke={tealLight} strokeWidth="1.5" strokeDasharray="3 2" />
                  <polygon points="156,6 151,16 161,16" fill={tealLight} opacity="0.7" />
                  <text x="164" y="14" fontFamily="sans-serif" fontSize="9" fill="#9CA3AF" fontWeight="600">Gap</text>
                  {['Topic A', 'Topic B', 'Topic C', 'Topic D'].map((label, i) => (
                    <text key={label} x={32 + i * 62} y="110" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#9CA3AF">
                      {label}
                    </text>
                  ))}
                </svg>
              </div>

              {/* Chart caption */}
              <p
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: 12,
                  color: '#9CA3AF',
                  margin: 0,
                  letterSpacing: '0.01em',
                }}
              >
                Subtopic mastery is rarely visible from scores alone.
              </p>

              {/* Info panel — P02 */}
              <div
                className="info-panel"
                style={{
                  position: 'absolute',
                  bottom: 72,
                  right: 24,
                  width: 'min(280px, calc(100% - 48px))',
                  background: '#F2F2F0',
                  borderRadius: 14,
                  padding: '16px 18px',
                  zIndex: 50,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  opacity: openPanel === 2 ? 1 : 0,
                  transform: openPanel === 2 ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.97)',
                  pointerEvents: openPanel === 2 ? 'auto' : 'none',
                  transition: 'opacity 0.22s ease, transform 0.22s ease',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: 14,
                    color: '#1A1A1A',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Even after hours of grading, it is difficult to pinpoint exactly which concepts
                  students have not mastered. By the time the gaps become visible, valuable
                  instructional time has already been lost.
                </p>
              </div>

              {/* Info icon button — P02 */}
              <button
                onClick={() => toggle(2)}
                aria-label={openPanel === 2 ? 'Hide detail' : 'Show detail'}
                style={{
                  position: 'absolute',
                  bottom: 24,
                  right: 24,
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: gradientBg,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 10px rgba(0,114,198,0.28)',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                  zIndex: 51,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)'
                  ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 16px rgba(0,114,198,0.38)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'
                  ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 10px rgba(0,114,198,0.28)'
                }}
              >
                <InfoIcon active={openPanel === 2} />
              </button>
            </div>
          </div>
        </RevealWrapper>

        {/* Transition block */}
        <RevealWrapper style={{ textAlign: 'center', marginTop: 72 }}>
          <p
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: 600,
              fontSize: 20,
              color: '#1A1A2E',
              margin: '0 0 10px',
            }}
          >
            Surie was built to solve both.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: 14,
              color: '#6B7280',
              margin: '0 0 24px',
            }}
          >
            One platform that handles the work and shows you what it means.
          </p>
          <div
            style={{
              width: 40,
              height: 2,
              borderRadius: 99,
              background: `linear-gradient(90deg, ${teal} 0%, ${tealLight} 100%)`,
              margin: '0 auto',
            }}
          />
        </RevealWrapper>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .problem-grid {
            grid-template-columns: 1fr !important;
          }
          .problem-divider {
            width: 100% !important;
            height: 1px !important;
            align-self: auto !important;
          }
          .info-panel {
            right: 16px !important;
            left: 16px !important;
            width: auto !important;
          }
        }
      `}</style>
    </section>
  )
}
