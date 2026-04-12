'use client'

import { Clock, EyeOff, Shuffle } from 'lucide-react'
import RevealWrapper from '@/components/RevealWrapper'

const problems = [
  {
    icon: Clock,
    color: '#F5A623',
    bg: '#FFF8E1',
    title: 'Grading takes hours.',
    body: 'You spend nights checking papers, but the score alone doesn\'t tell you what went wrong — or who needs what kind of help.',
  },
  {
    icon: EyeOff,
    color: '#0072C6',
    bg: '#E8F1FA',
    title: 'Gaps stay hidden.',
    body: 'Which subtopics tripped students up? Who\'s quietly falling behind? Raw scores don\'t say. By the time you notice, you\'re already behind.',
  },
  {
    icon: Shuffle,
    color: '#DC3545',
    bg: '#FFEBEE',
    title: 'Reteaching is guesswork.',
    body: 'Without clear data, you end up reteaching everything instead of what actually matters — wasting time for you and your students.',
  },
]

export default function ProblemSection() {
  return (
    <section style={{ background: '#ffffff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Headline */}
        <RevealWrapper style={{ textAlign: 'center', marginBottom: 56 }}>
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
            The Problem
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(30px, 3.5vw, 44px)',
              color: '#1A1A2E',
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              margin: '0 auto',
              maxWidth: 640,
            }}
          >
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #0072C6 0%, #00B4D8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Learning gaps
            </span>{' '}
            exist in every classroom, but they&apos;re{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #0072C6 0%, #00B4D8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              not clearly visible
            </span>{' '}
            to teachers.
          </h2>
        </RevealWrapper>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {problems.map(({ icon: Icon, color, bg, title, body }, i) => (
            <RevealWrapper key={title} delay={i * 100}>
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #E8E4DF',
                  borderRadius: 14,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  padding: '28px 28px 32px',
                  height: '100%',
                  transition: 'box-shadow 250ms ease, transform 250ms ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.boxShadow = '0 8px 28px rgba(0,0,0,0.10)'
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}
                >
                  <Icon size={20} color={color} strokeWidth={2} />
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading), sans-serif',
                    fontWeight: 700,
                    fontSize: 18,
                    color: '#1A1A2E',
                    margin: '0 0 10px',
                    lineHeight: 1.3,
                  }}
                >
                  {title}
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
                  {body}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
