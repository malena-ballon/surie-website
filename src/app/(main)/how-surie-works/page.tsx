'use client'

import { useState } from 'react'
import Image from 'next/image'
import RevealWrapper from '@/components/RevealWrapper'
import CTASection from '@/components/sections/CTASection'
import SectionLabel from '@/components/SectionLabel'

const teal = '#0072C6'
const tealLight = '#00B4D8'

const gradientText = {
  backgroundImage: `linear-gradient(135deg, ${teal} 0%, ${tealLight} 100%)`,
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  backgroundClip: 'text' as const,
}

// ── Mock UI Cards ─────────────────────────────────────────────────────────────

function CardShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 16,
      border: '1px solid #E8E4DF',
      boxShadow: '0 8px 40px rgba(0,0,0,0.09)',
      overflow: 'hidden',
    }}>
      <div style={{
        padding: '13px 18px',
        borderBottom: '1px solid #E8E4DF',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        background: '#FAFAF8',
      }}>
        <div style={{
          width: 9, height: 9, borderRadius: '50%',
          background: `linear-gradient(135deg, ${teal}, ${tealLight})`,
        }} />
        <span style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: 12,
          fontWeight: 600,
          color: '#1A1A2E',
          letterSpacing: '0.01em',
        }}>
          {title}
        </span>
      </div>
      {children}
    </div>
  )
}

function UploadCard() {
  return (
    <CardShell title="Upload Material">
      <div style={{ padding: '20px 18px' }}>
        {/* Drop zone */}
        <div style={{
          border: `2px dashed ${tealLight}`,
          borderRadius: 10,
          padding: '24px 16px',
          textAlign: 'center',
          background: 'rgba(0,180,216,0.03)',
          marginBottom: 14,
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%',
            background: 'rgba(0,114,198,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 10px',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </div>
          <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 12, fontWeight: 600, color: '#374151', margin: '0 0 3px' }}>
            Drag &amp; drop your lesson material
          </p>
          <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 11, color: '#9CA3AF', margin: 0 }}>
            PDF, DOCX, TXT supported
          </p>
        </div>
        {/* Uploaded file row */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '9px 12px',
          background: '#F8F6F2',
          borderRadius: 8,
          border: '1px solid #E8E4DF',
        }}>
          <div style={{
            width: 30, height: 30, borderRadius: 6,
            background: '#FEE2E2',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 12, fontWeight: 600, color: '#1A1A2E', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              Lesson_Plan_Q3.pdf
            </p>
            <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 11, color: '#9CA3AF', margin: 0 }}>2.4 MB · Ready</p>
          </div>
          <div style={{
            width: 20, height: 20, borderRadius: '50%',
            background: `linear-gradient(135deg, ${teal}, ${tealLight})`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
      </div>
    </CardShell>
  )
}

function ConfigureCard() {
  return (
    <CardShell title="Configure Exam">
      <Image
        src="/screenshots/exam-creation-2.png"
        alt="Configure Exam — Question Breakdown"
        width={1448}
        height={930}
        style={{ width: '100%', height: 'auto', display: 'block' }}
        sizes="(max-width: 767px) 100vw, 45vw"
      />
    </CardShell>
  )
}

function StudentPortalCard() {
  return (
    <CardShell title="Student Portal">
      <div style={{ padding: '24px 20px', textAlign: 'center' }}>
        <div style={{
          width: 44, height: 44, borderRadius: 11,
          background: `linear-gradient(135deg, ${teal}, ${tealLight})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 14px',
          boxShadow: '0 4px 14px rgba(0,114,198,0.28)',
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>
        <p style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 14, fontWeight: 700, color: '#1A1A2E', margin: '0 0 3px' }}>
          Join Your Class
        </p>
        <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 12, color: '#9CA3AF', margin: '0 0 18px' }}>
          Enter the code your teacher shared
        </p>
        <div style={{ display: 'flex', gap: 7, marginBottom: 12 }}>
          <div style={{
            flex: 1,
            padding: '9px 12px',
            background: '#F8F6F2',
            borderRadius: 7,
            border: `1.5px solid ${teal}`,
            display: 'flex', alignItems: 'center',
          }}>
            <span style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: 15, fontWeight: 700, color: '#1A1A2E', letterSpacing: '0.1em' }}>
              ABC-1234
            </span>
          </div>
          <button style={{
            padding: '9px 14px',
            background: `linear-gradient(135deg, ${teal}, ${tealLight})`,
            border: 'none', borderRadius: 7,
            color: '#fff',
            fontFamily: 'var(--font-heading), sans-serif',
            fontWeight: 700, fontSize: 13,
            cursor: 'pointer', whiteSpace: 'nowrap',
          }}>
            Join →
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E' }} />
          <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 12, color: '#6B7280' }}>
            24 / 28 students online
          </span>
        </div>
      </div>
    </CardShell>
  )
}

function EditReviewCard() {
  const questions = [
    { id: 'Q1', label: 'Which of the following best describes...' },
    { id: 'Q2', label: 'What is considered a hallmark clinical...' },
  ]
  const options = [
    { letter: 'A', text: 'A chronic functional disorder characterized by recurrent abdominal', correct: true },
    { letter: 'B', text: 'The inability of the digestive system to absorb one or more major', correct: false },
    { letter: 'C', text: 'An acute inflammatory disorder where the pancreatic duct becomes', correct: false },
    { letter: 'D', text: 'A condition where sac-like herniations of the bowel lining extend', correct: false },
  ]
  const aiActions = ['Make it harder', 'Simplify language', 'Better distractors', 'Add context']

  return (
    <CardShell title="Edit &amp; Review Questions">
      <div style={{ display: 'flex', height: 340, overflow: 'hidden' }}>

        {/* Left: question list */}
        <div style={{
          width: 130, flexShrink: 0,
          borderRight: '1px solid #E8E4DF',
          background: '#FAFAF8',
          overflowY: 'auto',
          padding: '10px 0',
        }}>
          <div style={{
            padding: '4px 8px 8px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 10, fontWeight: 700, color: '#374151', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Questions 2
            </span>
          </div>
          {questions.map((q, qi) => (
            <div key={q.id} style={{
              padding: '8px 10px',
              background: qi === 0 ? '#EFF6FF' : 'transparent',
              borderLeft: qi === 0 ? `3px solid ${teal}` : '3px solid transparent',
              cursor: 'pointer',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 3 }}>
                <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 10, fontWeight: 700, color: qi === 0 ? teal : '#9CA3AF' }}>{q.id}</span>
                <span style={{
                  fontFamily: 'var(--font-body), sans-serif', fontSize: 9, fontWeight: 600,
                  color: qi === 0 ? teal : '#9CA3AF',
                  background: qi === 0 ? 'rgba(0,114,198,0.1)' : '#F3F4F6',
                  padding: '1px 5px', borderRadius: 4,
                }}>1pt</span>
              </div>
              <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 10, color: qi === 0 ? '#1A1A2E' : '#6B7280', margin: 0, lineHeight: 1.4, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const }}>
                {q.label}
              </p>
              <span style={{
                display: 'inline-block', marginTop: 4,
                fontFamily: 'var(--font-body), sans-serif', fontSize: 9, fontWeight: 600,
                color: qi === 0 ? teal : '#9CA3AF',
                background: qi === 0 ? 'rgba(0,114,198,0.08)' : '#F3F4F6',
                padding: '1px 5px', borderRadius: 4,
              }}>MCQ</span>
            </div>
          ))}
        </div>

        {/* Center: question editor */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '12px 14px', borderRight: '1px solid #E8E4DF' }}>
          {/* Meta tags */}
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 10 }}>
            {['MCQ', 'Understanding', 'Medium'].map(tag => (
              <span key={tag} style={{
                fontFamily: 'var(--font-body), sans-serif', fontSize: 9, fontWeight: 600,
                color: teal, background: 'rgba(0,114,198,0.08)',
                padding: '2px 7px', borderRadius: 4,
              }}>{tag}</span>
            ))}
            <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 9, color: '#9CA3AF' }}>Max pts:</span>
              <span style={{
                fontFamily: 'var(--font-body), sans-serif', fontSize: 10, fontWeight: 700,
                color: '#1A1A2E', background: '#F3F4F6',
                padding: '1px 7px', borderRadius: 4, border: '1px solid #E5E7EB',
              }}>1</span>
            </span>
          </div>

          {/* Question text */}
          <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 11, fontWeight: 600, color: '#1A1A2E', margin: '0 0 10px', lineHeight: 1.5 }}>
            Which of the following best describes Irritable Bowel Syndrome?
          </p>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 10 }}>
            {options.map(opt => (
              <div key={opt.letter} style={{
                display: 'flex', alignItems: 'flex-start', gap: 7,
                padding: '7px 10px',
                borderRadius: 7,
                border: opt.correct ? `1.5px solid #22C55E` : '1.5px solid #E5E7EB',
                background: opt.correct ? 'rgba(34,197,94,0.06)' : '#FAFAF8',
              }}>
                <div style={{
                  width: 15, height: 15, borderRadius: '50%', flexShrink: 0, marginTop: 1,
                  border: opt.correct ? 'none' : '1.5px solid #D1D5DB',
                  background: opt.correct ? '#22C55E' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {opt.correct && (
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 10, fontWeight: 600, color: '#374151', minWidth: 10 }}>{opt.letter}</span>
                <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 10, color: opt.correct ? '#166534' : '#6B7280', lineHeight: 1.4 }}>{opt.text}</span>
              </div>
            ))}
          </div>

          {/* Tag + explanation hint */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <span style={{
              fontFamily: 'var(--font-body), sans-serif', fontSize: 9, fontWeight: 600,
              color: '#0891B2', background: 'rgba(8,145,178,0.08)',
              padding: '2px 7px', borderRadius: 99,
            }}>Gastrointestinal Disorders ×</span>
          </div>
          <div style={{
            padding: '6px 10px', borderRadius: 6,
            background: '#F8F6F2', border: '1px solid #E8E4DF',
          }}>
            <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 9, fontWeight: 600, color: '#6B7280' }}>
              ∑ Explanation for students
            </span>
          </div>
        </div>

        {/* Right: AI assistant */}
        <div style={{ width: 140, flexShrink: 0, padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 2 }}>
            <div style={{
              width: 18, height: 18, borderRadius: '50%',
              background: `linear-gradient(135deg, ${teal}, ${tealLight})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
            </div>
            <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 10, fontWeight: 700, color: '#1A1A2E' }}>AI Assistant</span>
          </div>

          {/* Quick action chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {aiActions.map(action => (
              <span key={action} style={{
                fontFamily: 'var(--font-body), sans-serif', fontSize: 9, fontWeight: 600,
                color: '#374151', background: '#F3F4F6',
                border: '1px solid #E5E7EB',
                padding: '3px 7px', borderRadius: 99,
                cursor: 'pointer',
              }}>{action}</span>
            ))}
          </div>

          {/* Hint text */}
          <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 9, color: '#9CA3AF', lineHeight: 1.5, margin: 0, textAlign: 'center', padding: '4px 0' }}>
            Ask AI to refine this question, or tap a quick action above.
          </p>

          {/* Input */}
          <div style={{
            marginTop: 'auto',
            display: 'flex', alignItems: 'center', gap: 5,
            padding: '6px 8px',
            border: '1px solid #E5E7EB',
            borderRadius: 7,
            background: '#FAFAF8',
          }}>
            <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 9, color: '#D1D5DB', flex: 1 }}>Ask AI to edit...</span>
            <div style={{
              width: 18, height: 18, borderRadius: '50%',
              background: `linear-gradient(135deg, ${teal}, ${tealLight})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </CardShell>
  )
}

function DiagnosticCard() {
  return (
    <CardShell title="Diagnostic Report">
      <Image
        src="/screenshots/new-diagnostic.jpeg"
        alt="Diagnostic Report — Subtopic Mastery and At-Risk Students"
        width={1400}
        height={900}
        style={{ width: '100%', height: 'auto', display: 'block' }}
        sizes="(max-width: 767px) 100vw, 45vw"
      />
    </CardShell>
  )
}

// ── Step data ─────────────────────────────────────────────────────────────────

const stepData = [
  {
    number: '01',
    title: 'Upload Your Material',
    description:
      'Start by uploading your lesson notes, slides, or curriculum documents. Surie reads the content and automatically identifies every topic and subtopic covered — no manual tagging or question-bank setup required.',
    time: '~2 minutes',
    flip: false,
  },
  {
    number: '02',
    title: 'Configure Your Exam',
    description:
      "Choose question types, difficulty level, Bloom's Taxonomy alignment, and how many questions you need. Surie builds the complete exam in seconds, perfectly matched to what your students just studied.",
    time: '~30 seconds',
    flip: true,
  },
  {
    number: '03',
    title: 'Edit & Review Questions',
    description:
      'Every question comes with a correct answer pre-selected and a student-facing explanation already written. Use the built-in AI assistant to refine, reword, or adjust any question in one click — or add your own manually. Points are assigned automatically.',
    time: '~5 minutes',
    flip: false,
  },
  {
    number: '04',
    title: 'Students Take the Exam',
    description:
      'Publish with one click. Students join through their own portal using a class code — no accounts needed. Surie tracks completion in real time and handles all grading automatically as submissions come in.',
    time: 'Self-paced by students',
    flip: true,
  },
  {
    number: '05',
    title: 'Get Your Diagnostic Report',
    description:
      'The moment the last student submits, your report is ready. See a subtopic mastery heatmap, at-risk student alerts, and plain-language misconception breakdowns — plus one-click re-assessment targeting the students who need it most.',
    time: 'Instant after last submission',
    flip: false,
  },
]

const stepCards = [<UploadCard />, <ConfigureCard />, <EditReviewCard />, <StudentPortalCard />, <DiagnosticCard />]

// ── Comparison table data ─────────────────────────────────────────────────────

const comparisonRows = [
  {
    feature: 'Exam Creation',
    other:   'Write questions manually',
    surie:   'Generated from your materials in seconds',
  },
  {
    feature: 'Grading',
    other:   'One correct answer, exact match only',
    surie:   'AI-powered grading for descriptive and open-ended answers',
  },
  {
    feature: 'Insights',
    other:   'Score output only',
    surie:   'At-risk alerts, misconception plain language, subtopic mastery analysis',
  },
  {
    feature: 'Follow-up',
    other:   'Make your own re-test',
    surie:   'One-click targeted re-assessment',
  },
  {
    feature: 'Time cost',
    other:   '4–6 hrs per assessment cycle',
    surie:   'Under 10 minutes, start to finish',
  },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HowSurieWorksPage() {
  const [showOtherTools, setShowOtherTools] = useState(false)

  return (
    <>
      {/* ── Page Header ── */}
      <section style={{
        background: 'linear-gradient(135deg, #FAFAF8 0%, #F0FAF9 100%)',
        padding: '96px 24px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: 700, height: 400,
          background: 'radial-gradient(ellipse 700px 400px at 50% 0%, rgba(0,114,198,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <RevealWrapper style={{ maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <SectionLabel marginBottom={16}>The Process</SectionLabel>
          <h1 style={{
            fontFamily: 'var(--font-heading), sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(34px, 4vw, 52px)',
            color: '#1A1A2E', lineHeight: 1.15,
            letterSpacing: '-0.025em', margin: '0 0 20px',
          }}>
            How Surie Works
          </h1>
          <p style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: 17, color: '#6B7280', lineHeight: 1.65, margin: 0,
          }}>
            Five steps from lesson material to learning clarity.
          </p>
        </RevealWrapper>
      </section>

      {/* ── Vertical Timeline ── */}
      <section style={{ background: '#ffffff', padding: 'clamp(72px, 10vw, 112px) 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="timeline-wrapper" style={{ position: 'relative' }}>

            {/* Center line — desktop only, handled via CSS class */}
            <div className="timeline-line" aria-hidden />

            {stepData.map((step, i) => {
              const isLast = i === stepData.length - 1
              const textSide = (
                <div style={{ maxWidth: 420 }}>
                  {/* Step label */}
                  <p style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: 11, fontWeight: 700, color: teal,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    margin: '0 0 10px',
                  }}>
                    Step {step.number}
                  </p>
                  {/* Headline */}
                  <h2 style={{
                    fontFamily: 'var(--font-heading), sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(22px, 2.4vw, 32px)',
                    color: '#1A1A2E', lineHeight: 1.2,
                    letterSpacing: '-0.018em',
                    margin: '0 0 16px',
                  }}>
                    {step.title}
                  </h2>
                  {/* Description */}
                  <p style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: 16, color: '#6B7280', lineHeight: 1.7, margin: '0 0 14px',
                  }}>
                    {step.description}
                  </p>
                  {/* Time badge */}
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: 12, fontWeight: 600,
                      color: teal, letterSpacing: '0.01em',
                    }}>
                      {step.time}
                    </span>
                  </div>
                </div>
              )

              const cardSide = (
                <div style={{ width: '100%' }}>
                  {stepCards[i]}
                </div>
              )

              return (
                <RevealWrapper key={step.number} delay={60}>
                  <div
                    className="timeline-row"
                    style={{ marginBottom: isLast ? 0 : 'clamp(60px, 8vw, 96px)' }}
                  >
                    {/* Desktop: 3-column grid */}
                    <div className="timeline-row-inner">
                      {/* Left column */}
                      <div className="timeline-col-left">
                        {!step.flip ? textSide : cardSide}
                      </div>

                      {/* Node */}
                      <div className="timeline-node-col">
                        <div style={{
                          width: 52, height: 52, borderRadius: '50%',
                          background: `linear-gradient(135deg, ${teal}, ${tealLight})`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          boxShadow: '0 4px 20px rgba(0,114,198,0.32)',
                          border: '3px solid #fff',
                          position: 'relative', zIndex: 2,
                          flexShrink: 0,
                        }}>
                          <span style={{
                            fontFamily: 'var(--font-heading), sans-serif',
                            fontWeight: 800, fontSize: 15,
                            color: '#fff', letterSpacing: '0.01em',
                          }}>
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Right column */}
                      <div className="timeline-col-right">
                        {step.flip ? textSide : cardSide}
                      </div>
                    </div>
                  </div>
                </RevealWrapper>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section style={{ background: '#F8F6F2', padding: '96px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>

          {/* Header */}
          <RevealWrapper style={{ textAlign: 'center', marginBottom: 48 }}>
            <SectionLabel marginBottom={14}>Why Surie</SectionLabel>
            <h2 style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(26px, 3vw, 40px)',
              color: '#1A1A2E',
              lineHeight: 1.18,
              letterSpacing: '-0.02em', margin: 0,
            }}>
              Built for diagnosis.{' '}
              <span style={gradientText}>Not just scores.</span>
            </h2>
          </RevealWrapper>

          {/* Table card */}
          <RevealWrapper delay={80}>
            <div
              className={showOtherTools ? 'compare-expanded' : ''}
              style={{
                borderRadius: 16,
                border: '1px solid #E8E4DF',
                boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                background: '#fff',
              }}
            >

              {/* Header row */}
              <div className="compare-grid" style={{ borderBottom: '2px solid #E8E4DF' }}>
                {/* Feature label col */}
                <div style={{
                  padding: '14px 24px',
                  background: '#F8F6F2',
                  borderRight: '1px solid #E8E4DF',
                }} />

                {/* Other tools col */}
                <div className="compare-other-col" style={{
                  padding: '14px 24px',
                  background: '#F9F9F9',
                  borderRight: '1px solid #E8E4DF',
                  display: 'flex', alignItems: 'center',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: 12, fontWeight: 700, color: '#9CA3AF',
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                  }}>
                    Other Quiz Tools
                  </span>
                </div>

                {/* Surie col */}
                <div style={{
                  padding: '14px 24px',
                  background: '#F0FAF9',
                  borderLeft: `3px solid ${teal}`,
                  display: 'flex', alignItems: 'center',
                }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 7,
                    background: `linear-gradient(135deg, ${teal}, ${tealLight})`,
                    borderRadius: 99,
                    padding: '4px 12px',
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: 12, fontWeight: 700,
                    color: '#fff', letterSpacing: '0.04em',
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Surie
                  </span>
                </div>
              </div>

              {/* Data rows */}
              {comparisonRows.map((row, i) => (
                <div
                  key={row.feature}
                  className="compare-grid"
                  style={{
                    borderBottom: i < comparisonRows.length - 1 ? '1px solid #E8E4DF' : 'none',
                  }}
                >
                  {/* Feature label */}
                  <div style={{
                    padding: '18px 24px',
                    background: '#F8F6F2',
                    borderRight: '1px solid #E8E4DF',
                    display: 'flex', alignItems: 'center',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: 12, fontWeight: 700, color: '#374151',
                      letterSpacing: '0.04em', textTransform: 'uppercase',
                    }}>
                      {row.feature}
                    </span>
                  </div>

                  {/* Other tools cell */}
                  <div className="compare-other-col" style={{
                    padding: '18px 24px',
                    background: '#F9F9F9',
                    borderRight: '1px solid #E8E4DF',
                    display: 'flex', alignItems: 'center', gap: 10,
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: 13, color: '#9CA3AF',
                      lineHeight: 1.5, flexShrink: 0,
                      userSelect: 'none',
                    }}>
                      —
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: 14, color: '#9CA3AF',
                      lineHeight: 1.5,
                    }}>
                      {row.other}
                    </span>
                  </div>

                  {/* Surie cell */}
                  <div style={{
                    padding: '18px 24px',
                    background: '#F0FAF9',
                    borderLeft: `3px solid ${teal}`,
                    display: 'flex', alignItems: 'center', gap: 10,
                  }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                      background: `linear-gradient(135deg, ${teal}, ${tealLight})`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: 14, fontWeight: 600, color: '#1A1A2E',
                      lineHeight: 1.5,
                    }}>
                      {row.surie}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>

          {/* Mobile toggle — shown below table on small screens */}
          <div className="compare-toggle-wrap" style={{ textAlign: 'center', marginTop: 16 }}>
            <button
              onClick={() => setShowOtherTools(v => !v)}
              className={`compare-toggle-btn${showOtherTools ? ' open' : ''}`}
              style={{
                display: 'none', // shown via CSS on mobile only
                alignItems: 'center', gap: 6,
                padding: '10px 18px',
                borderRadius: 8,
                background: 'transparent',
                border: '1px solid #D4D4D0',
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: 13, fontWeight: 600, color: '#6B7280',
                cursor: 'pointer',
                WebkitTapHighlightColor: 'transparent',
                transition: 'border-color 150ms ease, color 150ms ease',
              }}
            >
              {showOtherTools ? 'Hide comparison ▲' : 'Compare with other tools ▼'}
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection fullForm />

      <style>{`
        /* ══════════════════════════════════════════════
           COMPARISON TABLE
           ══════════════════════════════════════════════ */
        .compare-grid {
          display: grid;
          grid-template-columns: 160px 1fr 1fr;
        }

        /* Mobile: hide Other Tools column by default, show toggle */
        @media (max-width: 767px) {
          .compare-grid {
            grid-template-columns: 110px 1fr;
          }
          .compare-other-col {
            display: none;
          }
          .compare-toggle-btn {
            display: inline-flex !important;
          }
          /* When toggled on, restore 3-column layout */
          .compare-expanded .compare-grid {
            grid-template-columns: 90px 1fr 1fr;
          }
          .compare-expanded .compare-other-col {
            display: flex !important;
          }
          .compare-expanded .compare-grid > div {
            padding: 12px 10px !important;
          }
          .compare-toggle-btn.open {
            border-color: ${teal};
            color: ${teal};
          }
        }

        /* ══════════════════════════════════════════════
           TIMELINE — DESKTOP
           ══════════════════════════════════════════════ */
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 26px;
          bottom: 26px;
          width: 2px;
          background: linear-gradient(to bottom, ${teal}, ${tealLight});
          transform: translateX(-50%);
          z-index: 0;
          border-radius: 2px;
        }

        .timeline-row-inner {
          display: grid;
          grid-template-columns: 1fr 80px 1fr;
          gap: 0 52px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .timeline-col-left  { display: flex; justify-content: flex-end;   }
        .timeline-col-right { display: flex; justify-content: flex-start;  }
        .timeline-node-col  { display: flex; align-items: center; justify-content: center; }

        /* ══════════════════════════════════════════════
           TIMELINE — MOBILE (left-rail)
           ══════════════════════════════════════════════ */
        @media (max-width: 767px) {
          .timeline-line {
            left: 16px;
            top: 0;
            bottom: 0;
            transform: none;
          }

          .timeline-row-inner {
            display: block;
            padding-left: 56px;
            position: relative;
          }

          .timeline-node-col {
            position: absolute;
            left: 0;
            top: 0;
            justify-content: flex-start;
          }

          /* 32px circles on mobile */
          .timeline-node-col > div {
            width:  32px !important;
            height: 32px !important;
            font-size: 12px !important;
          }

          .timeline-col-left,
          .timeline-col-right {
            justify-content: flex-start;
            margin-bottom: 16px;
          }

          .timeline-col-left > div,
          .timeline-col-right > div {
            max-width: 100% !important;
          }

          /* Always: text first, then card */
          .timeline-col-left  { order: 1; }
          .timeline-node-col  { order: 0; }
          .timeline-col-right { order: 2; }
        }
      `}</style>
    </>
  )
}
