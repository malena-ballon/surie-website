'use client'

import { useState } from 'react'

const teal = '#0072C6'
const tealLight = '#00B4D8'
const gradient = `linear-gradient(135deg, ${teal} 0%, ${tealLight} 100%)`

const categoryIds: Record<string, string> = {
  'General':           'faq-general',
  'Exams & AI':        'faq-exams-ai',
  'Diagnostics':       'faq-diagnostics',
  'Access & Accounts': 'faq-access-accounts',
}

const faqData = [
  {
    category: 'General',
    items: [
      {
        q: 'What is Surie?',
        a: 'Surie is an AI-powered diagnostic assessment platform for educators. It helps you generate exams from your own lesson materials, automatically analyze student performance, identify learning gaps and misconceptions, and create targeted follow-up assessments.',
      },
      {
        q: 'Who is Surie for?',
        a: 'Surie is built for educators — classroom teachers, review center instructors, and tutors. Administrators can also register their institution. Students access Surie through a separate exam portal.',
      },
      {
        q: 'Is Surie free?',
        a: 'Pricing will be announced closer to launch. Join the waitlist to be notified and to receive any early-access offers.',
      },
      {
        q: 'When will Surie be available?',
        a: "We're currently in development and preparing for early access. Join the waitlist and we'll reach out as soon as spots open.",
      },
    ],
  },
  {
    category: 'Exams & AI',
    items: [
      {
        q: 'How does AI exam generation work?',
        a: "You upload your lesson material (PDF or document), choose your settings — question types, difficulty, Bloom's Taxonomy level, and question count — and Surie's AI generates a complete exam based on your content.",
      },
      {
        q: 'What question types are supported?',
        a: 'Multiple Choice, True/False, Identification, Essay, and Matching Type.',
      },
      {
        q: 'Can I edit the AI-generated questions?',
        a: 'Yes. Surie generates the exam as a starting point. You can review, edit, add, or remove any question before publishing.',
      },
      {
        q: 'Is my uploaded content safe?',
        a: 'Your materials are used only to generate your exams. They are not shared, used to train AI models, or accessed by other users.',
      },
    ],
  },
  {
    category: 'Diagnostics',
    items: [
      {
        q: 'What does the diagnostic report include?',
        a: 'Class average and mastery rate, subtopic mastery heatmap, at-risk student alerts, specific misconception explanations, student groups clustered by shared weak areas, and class strengths.',
      },
      {
        q: 'What is a re-assessment?',
        a: 'A follow-up exam that Surie generates automatically, targeting specific weak subtopics. It uses MCQ-only questions for fast automated grading.',
      },
    ],
  },
  {
    category: 'Access & Accounts',
    items: [
      {
        q: 'How do students take exams?',
        a: "Students log in to a separate student portal and join your class using a class code. They can see assigned exams, take them within any time limits you've set, and view their status.",
      },
      {
        q: 'Can multiple teachers use Surie at one institution?',
        a: 'Yes. An admin registers the institution, and multiple teachers or instructors can operate under that account.',
      },
    ],
  },
]

export default function FAQAccordion() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setOpenIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      {faqData.map(({ category, items }) => {
        const anchorId = categoryIds[category]

        return (
          <div
            key={category}
            id={anchorId}
            style={{ scrollMarginTop: 84 }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>

              {/* ── Sticky left marker — desktop only ── */}
              <div
                className="faq-sticky-marker"
                style={{
                  position: 'sticky',
                  top: 88,
                  width: 28,
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingTop: 12,
                }}
              >
                <div style={{
                  width: 2,
                  height: 28,
                  borderRadius: 2,
                  background: gradient,
                  flexShrink: 0,
                }} />
                <span style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  marginTop: 8,
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  color: teal,
                  whiteSpace: 'nowrap',
                }}>
                  {category}
                </span>
              </div>

              {/* ── Content: category header + cards ── */}
              <div style={{ flex: 1, minWidth: 0 }}>

                {/* Category header row */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 0',
                  borderBottom: '1px solid #E8E8E4',
                  marginBottom: 16,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: 13,
                    fontWeight: 600,
                    color: teal,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}>
                    {category}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: 13,
                    color: '#6B7280',
                  }}>
                    {items.length} question{items.length !== 1 ? 's' : ''}
                  </span>
                </div>

                {/* FAQ cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {items.map(({ q, a }, i) => {
                    const id = `${category}-${i}`
                    const isOpen = openIds.has(id)

                    return (
                      <div
                        key={id}
                        className="faq-card"
                        style={{
                          background: isOpen ? 'rgba(0,114,198,0.04)' : '#fff',
                          borderRadius: 12,
                          boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                          borderLeft: isOpen
                            ? `3px solid ${teal}`
                            : '3px solid transparent',
                          transition: 'background 200ms ease, box-shadow 200ms ease, border-color 200ms ease',
                        }}
                      >
                        {/* Question button */}
                        <button
                          onClick={() => toggle(id)}
                          style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 16,
                            padding: '20px 24px',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            textAlign: 'left',
                            WebkitTapHighlightColor: 'transparent',
                          }}
                        >
                          <span style={{
                            fontFamily: 'var(--font-heading), sans-serif',
                            fontWeight: 600,
                            fontSize: 16,
                            color: '#1A1A1A',
                            lineHeight: 1.45,
                            flex: 1,
                          }}>
                            {q}
                          </span>

                          {/* Chevron icon */}
                          <div style={{
                            width: 28,
                            height: 28,
                            borderRadius: '50%',
                            background: isOpen ? gradient : 'rgba(0,114,198,0.12)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            transition: 'background 200ms ease',
                          }}>
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke={isOpen ? '#fff' : teal}
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{
                                transition: 'transform 200ms ease',
                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                display: 'block',
                              }}
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </button>

                        {/* Answer — max-height transition */}
                        <div
                          className="faq-card-answer"
                          style={{
                            maxHeight: isOpen ? '500px' : '0',
                            overflow: 'hidden',
                            transition: 'max-height 300ms ease-in-out',
                          }}
                        >
                          <p style={{
                            fontFamily: 'var(--font-body), sans-serif',
                            fontSize: 15,
                            color: '#6B7280',
                            lineHeight: 1.7,
                            margin: 0,
                            padding: '0 24px 22px',
                          }}>
                            {a}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )
      })}

      <style>{`
        .faq-card:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.08) !important;
        }
        .faq-sticky-marker {
          display: flex;
        }
        @media (max-width: 767px) {
          .faq-sticky-marker {
            display: none !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .faq-card,
          .faq-card-answer,
          .faq-card button svg {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  )
}
