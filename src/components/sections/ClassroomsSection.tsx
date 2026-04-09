'use client'

import RevealWrapper from '@/components/RevealWrapper'

const points = [
  'Works with any curriculum and lesson material',
  'Fits schools, review centers, and tutoring setups',
  'Clean, intuitive interface that doesn\'t require training',
]

export default function ClassroomsSection() {
  return (
    <section style={{ background: '#ffffff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>

        <RevealWrapper>
          <p
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: 13,
              fontWeight: 600,
              color: '#0072C6',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: 14,
            }}
          >
            Built for Real Classrooms
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.2vw, 42px)',
              color: '#1A1A2E',
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              margin: '0 auto 20px',
              maxWidth: 600,
            }}
          >
            Designed for how educators actually work.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: 17,
              color: '#6B7280',
              lineHeight: 1.7,
              margin: '0 auto 36px',
              maxWidth: 580,
            }}
          >
            Surie fits into your existing workflow without adding friction. No steep learning curve,
            no IT setup — just open it and go.
          </p>

          {/* Inline supporting points */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px 8px',
            }}
          >
            {points.map((point, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                  padding: '7px 16px',
                  borderRadius: 50,
                  background: '#F8F6F2',
                  border: '1px solid #E8E4DF',
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: 14,
                  color: '#1A1A2E',
                  fontWeight: 500,
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0072C6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {point}
              </span>
            ))}
          </div>
        </RevealWrapper>

      </div>
    </section>
  )
}
