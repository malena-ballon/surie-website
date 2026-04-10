'use client'

import Image from 'next/image'
import { useWaitlistModal } from '@/context/WaitlistModalContext'
import RevealWrapper from '@/components/RevealWrapper'

const steps = [
  {
    number: '01',
    title: 'Upload Your Material',
    description:
      'Upload a PDF or document of your lesson content. Surie reads it and understands the topics and subtopics covered — no manual tagging needed.',
    screenshot: '/screenshots/exam-creation.png',
    alt: 'Upload material',
  },
  {
    number: '02',
    title: 'Generate an Exam',
    description:
      'Choose your settings: question types, difficulty level, Bloom\'s Taxonomy alignment, and question count. Surie\'s AI builds the full exam for you in seconds.',
    screenshot: '/screenshots/exam-creation-2.png',
    alt: 'Exam generator',
  },
  {
    number: '03',
    title: 'Students Take the Exam',
    description:
      'Publish the exam to your class. Students access it through their own portal using a class code. Surie tracks completion and handles grading automatically.',
    screenshot: '/screenshots/student-portal.png',
    alt: 'Student portal',
  },
  {
    number: '04',
    title: 'Get Your Diagnostic Report',
    description:
      'Surie generates a complete diagnostic report: mastery heatmap, at-risk alerts, misconceptions in plain language, student groups by shared gaps, and one-click re-assessment generation.',
    screenshot: '/screenshots/diagnostic-report.png',
    alt: 'Diagnostic report',
  },
]

const differences = [
  {
    other: 'Other tools stop at the score.',
    otherSub: 'Understanding why students got it wrong requires hours of manual analysis.',
    surie: 'Surie tells you why students got it wrong and what to do about it.',
  },
  {
    other: 'Other tools need you to write the questions.',
    otherSub: 'Hours building a test bank — from scratch, every time.',
    surie: 'Surie generates them from your own teaching materials.',
  },
  {
    other: 'Other tools leave reteaching to you.',
    otherSub: 'You\'re left guessing what to cover and who needs it most.',
    surie: 'Surie clusters students by gap and creates follow-up assessments automatically.',
  },
]

export default function HowSurieWorksPage() {
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
        <RevealWrapper style={{ maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 2 }}>
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
            The Process
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(34px, 4vw, 52px)',
              color: '#1A1A2E',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              margin: '0 0 20px',
            }}
          >
            How Surie Works
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
            Four steps from lesson material to learning clarity.
          </p>
        </RevealWrapper>
      </section>

      {/* ── Steps ── */}
      <section style={{ background: '#ffffff', padding: '80px 24px 96px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 80 }}>
          {steps.map((step, i) => (
            <RevealWrapper key={step.number} delay={80}>
              <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>

                {/* Text block */}
                <div style={{ flex: '0 0 44%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        backgroundImage: 'linear-gradient(135deg, #0072C6 0%, #00B4D8 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 4px 14px rgba(0,114,198,0.28)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-heading), sans-serif',
                          fontWeight: 700,
                          fontSize: 15,
                          color: '#fff',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {step.number}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-body), sans-serif',
                        fontSize: 12,
                        fontWeight: 600,
                        color: '#0072C6',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Step {step.number}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: 'var(--font-heading), sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(22px, 2.5vw, 28px)',
                      color: '#1A1A2E',
                      lineHeight: 1.25,
                      letterSpacing: '-0.015em',
                      margin: '0 0 14px',
                    }}
                  >
                    {step.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: 16,
                      color: '#6B7280',
                      lineHeight: 1.7,
                      margin: 0,
                      maxWidth: 420,
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Screenshot block */}
                <div style={{ flex: '0 0 52%', width: '100%' }}>
                  <div
                    style={{
                      borderRadius: 14,
                      overflow: 'hidden',
                      border: '1px solid #E8E4DF',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                      position: 'relative',
                      height: 'clamp(200px, 30vw, 320px)',
                      background: '#F8F6F2',
                    }}
                  >
                    <Image
                      src={step.screenshot}
                      alt={step.alt}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'top left' }}
                    />
                  </div>
                </div>

              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* ── What Makes It Different ── */}
      <section style={{ background: '#F8F6F2', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
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
              Why Surie
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(28px, 3.2vw, 42px)',
                color: '#1A1A2E',
                lineHeight: 1.18,
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              Not just another quiz maker.
            </h2>
          </RevealWrapper>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24,
            }}
          >
            {differences.map(({ other, otherSub, surie }, i) => (
              <RevealWrapper key={i} delay={i * 90}>
                <div
                  style={{
                    background: '#fff',
                    border: '1px solid #E8E4DF',
                    borderRadius: 14,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Other tools */}
                  <div style={{ padding: '22px 24px 20px', background: '#FAFAFA', borderBottom: '1px solid #E8E4DF' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <div
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: '50%',
                          background: '#FFEBEE',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#DC3545" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: 'var(--font-heading), sans-serif',
                            fontWeight: 700,
                            fontSize: 14,
                            color: '#6B7280',
                            margin: '0 0 4px',
                            lineHeight: 1.4,
                          }}
                        >
                          {other}
                        </p>
                        <p
                          style={{
                            fontFamily: 'var(--font-body), sans-serif',
                            fontSize: 13,
                            color: '#9CA3AF',
                            margin: 0,
                            lineHeight: 1.5,
                          }}
                        >
                          {otherSub}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Surie */}
                  <div style={{ padding: '22px 24px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <div
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: '50%',
                          backgroundImage: 'linear-gradient(135deg, #0072C6, #00B4D8)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <p
                        style={{
                          fontFamily: 'var(--font-heading), sans-serif',
                          fontWeight: 700,
                          fontSize: 15,
                          color: '#1A1A2E',
                          margin: 0,
                          lineHeight: 1.45,
                        }}
                      >
                        {surie}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#ffffff', padding: '96px 24px' }}>
        <RevealWrapper style={{ textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(26px, 3vw, 38px)',
              color: '#1A1A2E',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              margin: '0 0 14px',
            }}
          >
            Ready to see it in action?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: 16,
              color: '#6B7280',
              lineHeight: 1.65,
              margin: '0 auto 36px',
              maxWidth: 480,
            }}
          >
            Join the waitlist and be among the first educators to use Surie when we launch.
          </p>
          <button onClick={openModal} className="btn-primary" style={{ padding: '14px 32px', fontSize: 15 }}>
            Join the Waitlist
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </RevealWrapper>
      </section>
    </>
  )
}
