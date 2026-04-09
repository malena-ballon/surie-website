'use client'

import { useState } from 'react'

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
        a: 'You upload your lesson material (PDF or document), choose your settings — question types, difficulty, Bloom\'s Taxonomy level, and question count — and Surie\'s AI generates a complete exam based on your content.',
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
        a: "A follow-up exam that Surie generates automatically, targeting specific weak subtopics. It uses MCQ-only questions for fast automated grading.",
      },
    ],
  },
  {
    category: 'Access & Accounts',
    items: [
      {
        q: 'How do students take exams?',
        a: 'Students log in to a separate student portal and join your class using a class code. They can see assigned exams, take them within any time limits you\'ve set, and view their status.',
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
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      {faqData.map(({ category, items }) => (
        <div key={category}>
          {/* Category label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 12,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: 700,
                fontSize: 13,
                color: '#0072C6',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {category}
            </span>
            <div style={{ flex: 1, height: 1, background: '#E8E4DF' }} />
          </div>

          {/* Questions */}
          <div
            style={{
              background: '#fff',
              border: '1px solid #E8E4DF',
              borderRadius: 14,
              overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
            }}
          >
            {items.map(({ q, a }, i) => {
              const id = `${category}-${i}`
              const isOpen = openIds.has(id)
              const isLast = i === items.length - 1

              return (
                <div
                  key={id}
                  style={{
                    borderBottom: isLast ? 'none' : '1px solid #E8E4DF',
                  }}
                >
                  {/* Question row */}
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
                      transition: 'background 150ms ease',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#FAFAF9' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent' }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-heading), sans-serif',
                        fontWeight: 600,
                        fontSize: 15,
                        color: '#1A1A2E',
                        lineHeight: 1.45,
                        flex: 1,
                      }}
                    >
                      {q}
                    </span>
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        background: isOpen ? 'linear-gradient(135deg, #0072C6, #00B4D8)' : '#F8F6F2',
                        border: isOpen ? 'none' : '1px solid #E8E4DF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'background 200ms ease, transform 200ms ease',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      {isOpen ? (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                        </svg>
                      ) : (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    style={{
                      maxHeight: isOpen ? '400px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.32s ease',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-body), sans-serif',
                        fontSize: 15,
                        color: '#6B7280',
                        lineHeight: 1.7,
                        margin: 0,
                        padding: '0 24px 22px',
                        borderTop: '1px solid #F0EDE8',
                        paddingTop: 16,
                      }}
                    >
                      {a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
