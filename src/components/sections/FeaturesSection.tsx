'use client'

import Image from 'next/image'
import { Sparkles, BarChart2, RefreshCw, Users } from 'lucide-react'
import RevealWrapper from '@/components/RevealWrapper'

const features = [
  {
    icon: Sparkles,
    color: '#0072C6',
    label: 'AI Exam Generation',
    title: 'Upload your material. Get a complete exam.',
    body: 'Surie creates a full exam aligned to Bloom\'s Taxonomy in seconds — from your own lessons, modules, or notes.',
    screenshot: '/screenshots/exam-creation.png',
    screenshotAlt: 'Exam builder',
    screenshotPosition: 'top left',
  },
  {
    icon: BarChart2,
    color: '#00B4D8',
    label: 'Instant Diagnostics',
    title: 'The moment they submit, you know exactly why.',
    body: 'Get a full diagnostic report the instant results are in — mastery heatmaps, at-risk alerts, and misconception breakdowns.',
    screenshot: '/screenshots/diagnostic-report.png',
    screenshotAlt: 'Diagnostic report',
    screenshotPosition: 'top center',
  },
  {
    icon: RefreshCw,
    color: '#2D8A4E',
    label: 'Targeted Re-Assessments',
    title: 'One click. A follow-up focused on what matters.',
    body: 'Automatically generates a re-assessment targeting only the subtopics your class struggled with — no manual selection needed.',
    screenshot: '/screenshots/diagnostic-report-2.png',
    screenshotAlt: 'Re-assessment view',
    screenshotPosition: 'top left',
  },
  {
    icon: Users,
    color: '#F5A623',
    label: 'Class & Student Management',
    title: 'One dashboard. Every class, every student.',
    body: 'Create classes, enroll students with a simple code, and track performance over time — all from a single clean interface.',
    screenshot: '/screenshots/student-portal.png',
    screenshotAlt: 'Class management',
    screenshotPosition: 'top left',
  },
]

const iconBg: Record<string, string> = {
  '#0072C6': '#E8F1FA',
  '#00B4D8': '#E0F7FA',
  '#2D8A4E': '#E8F5E9',
  '#F5A623': '#FFF8E1',
}

export default function FeaturesSection() {
  return (
    <section style={{ background: '#F8F6F2', padding: '96px 24px' }}>
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
            What Surie Does
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
            From exam to action plan —{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #0072C6 0%, #00B4D8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              automatically.
            </span>
          </h2>
        </RevealWrapper>

        {/* 2×2 grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(460px, 100%), 1fr))',
            gap: 24,
          }}
        >
          {features.map(
            ({ icon: Icon, color, label, title, body, screenshot, screenshotAlt, screenshotPosition }, i) => (
              <RevealWrapper key={label} delay={i * 80}>
                <div
                  style={{
                    background: '#fff',
                    border: '1px solid #E8E4DF',
                    borderRadius: 14,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
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
                  {/* Text area */}
                  <div style={{ padding: '28px 28px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 8,
                          background: iconBg[color] ?? '#F0F0F0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={17} color={color} strokeWidth={2} />
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-body), sans-serif',
                          fontSize: 12,
                          fontWeight: 600,
                          color,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {label}
                      </span>
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
                        fontSize: 14,
                        color: '#6B7280',
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {body}
                    </p>
                  </div>

                  {/* Screenshot preview */}
                  <div
                    style={{
                      margin: '0 16px 16px',
                      borderRadius: 10,
                      overflow: 'hidden',
                      border: '1px solid #E8E4DF',
                      position: 'relative',
                      height: 180,
                      background: '#F8F6F2',
                    }}
                  >
                    <Image
                      src={screenshot}
                      alt={screenshotAlt}
                      fill
                      style={{ objectFit: 'cover', objectPosition: screenshotPosition }}
                    />
                  </div>
                </div>
              </RevealWrapper>
            )
          )}
        </div>
      </div>
    </section>
  )
}
