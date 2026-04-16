'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import RevealWrapper from '@/components/RevealWrapper'

const teal = '#0072C6'
const tealLight = '#00B4D8'

const gradientText = {
  backgroundImage: `linear-gradient(135deg, ${teal} 0%, ${tealLight} 100%)`,
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  backgroundClip: 'text' as const,
}

const acts = [
  {
    number: '01',
    badge: 'AI Exam Generation',
    headline: 'Upload your material. Get a complete exam in seconds.',
    headlineAccent: 'complete exam in seconds',
    points: [
      'No question bank needed — works from your own lessons and notes',
      'Automatically aligned to Bloom\'s Taxonomy',
      'Works for any subject or grade level',
    ],
    screenshot: '/screenshots/AI-Exam-Generation.png',
    screenshotAlt: 'AI Exam Generation interface',
    flip: false,
    hero: false,
  },
  {
    number: '02',
    badge: 'Instant Diagnostics',
    headline: 'The moment they submit, you know exactly why they struggled.',
    headlineAccent: 'exactly why they struggled',
    points: [
      'Subtopic mastery heatmap for every student, instantly',
      'At-risk student alerts surface the moment results come in',
      'Misconception breakdown in plain language — no analysis needed',
    ],
    screenshot: '/screenshots/Instant-Diagnostics.png',
    screenshotAlt: 'Instant diagnostic report',
    flip: true,
    hero: true,
  },
  {
    number: '03',
    badge: 'Targeted Re-assessment',
    headline: 'One click to reteach the right students the right thing.',
    headlineAccent: 'right students the right thing',
    points: [
      'Auto-generated re-assessment targeting only struggling subtopics',
      'Delivered directly to the students who need it most',
      'No manual question selection or sorting required',
    ],
    screenshot: '/screenshots/Targeted-Reassessment.png',
    screenshotAlt: 'Targeted re-assessment view',
    flip: false,
    hero: false,
  },
]

const SLIDE_COUNT = acts.length
// px of page scroll to advance one slide — intentional but not excessive
const SLIDE_SCROLL_PX = 500

export default function FeaturesSection() {
  const wrapperRef        = useRef<HTMLDivElement>(null)
  const sectionRef        = useRef<HTMLElement>(null)
  const trackRef          = useRef<HTMLDivElement>(null)

  const [activeSlide,  setActiveSlide]  = useState(0)
  const [showContinue, setShowContinue] = useState(false)

  const activeSlideRef          = useRef(0)
  const wrapperTopRef           = useRef(0)   // absolute Y of wrapper top in page
  const continueTimer           = useRef<ReturnType<typeof setTimeout>>()
  const isProgrammaticScrollRef = useRef(false)

  // ── Cache the wrapper's absolute top after mount / resize ────────────────
  useEffect(() => {
    const update = () => {
      if (wrapperRef.current) {
        wrapperTopRef.current =
          wrapperRef.current.getBoundingClientRect().top + window.scrollY
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // ── Navigate to a slide (arrows / dots / keyboard) ───────────────────────
  const goToSlide = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, SLIDE_COUNT - 1))
    activeSlideRef.current = clamped
    setActiveSlide(clamped)

    // Block the scroll listener from overriding this slide change
    isProgrammaticScrollRef.current = true
    setTimeout(() => { isProgrammaticScrollRef.current = false }, 700)

    // Snap carousel track
    if (trackRef.current) {
      trackRef.current.scrollTo({
        left: clamped * trackRef.current.offsetWidth,
        behavior: 'smooth',
      })
    }

    // Recompute wrapper top fresh (in case layout shifted after mount)
    if (wrapperRef.current) {
      wrapperTopRef.current =
        wrapperRef.current.getBoundingClientRect().top + window.scrollY
    }

    // Scroll page to the position that maps to this slide
    window.scrollTo({
      top: wrapperTopRef.current + clamped * SLIDE_SCROLL_PX,
      behavior: 'smooth',
    })

    clearTimeout(continueTimer.current)
    if (clamped === SLIDE_COUNT - 1) {
      setShowContinue(true)
      continueTimer.current = setTimeout(() => setShowContinue(false), 2000)
    } else {
      setShowContinue(false)
    }
  }, [])

  // ── Scroll-driven slide sync ──────────────────────────────────────────────
  // As the user scrolls through the tall wrapper, derive which slide to show
  // from the scroll position. No wheel hijacking, no page locking — pure CSS
  // sticky does the layout work; JS only reads scroll position.
  useEffect(() => {
    const onScroll = () => {
      // Ignore scroll events fired by goToSlide's window.scrollTo
      if (isProgrammaticScrollRef.current) return

      const scrollWithin = window.scrollY - wrapperTopRef.current
      // Only act while the sticky section is in its "engaged" range
      if (scrollWithin < 0 || scrollWithin > SLIDE_COUNT * SLIDE_SCROLL_PX) return

      const rawIdx = Math.floor(scrollWithin / SLIDE_SCROLL_PX)
      const idx    = Math.max(0, Math.min(rawIdx, SLIDE_COUNT - 1))

      if (idx !== activeSlideRef.current) {
        activeSlideRef.current = idx
        setActiveSlide(idx)

        if (trackRef.current) {
          trackRef.current.scrollTo({
            left: idx * trackRef.current.offsetWidth,
            behavior: 'smooth',
          })
        }

        clearTimeout(continueTimer.current)
        if (idx === SLIDE_COUNT - 1) {
          setShowContinue(true)
          continueTimer.current = setTimeout(() => setShowContinue(false), 2000)
        } else {
          setShowContinue(false)
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Sync dots when user swipes the track directly (mobile) ───────────────
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let t: ReturnType<typeof setTimeout>
    const onTrackScroll = () => {
      clearTimeout(t)
      t = setTimeout(() => {
        const idx = Math.round(track.scrollLeft / track.offsetWidth)
        if (idx !== activeSlideRef.current) {
          activeSlideRef.current = idx
          setActiveSlide(idx)
          window.scrollTo({
            top: wrapperTopRef.current + idx * SLIDE_SCROLL_PX,
            behavior: 'instant' as ScrollBehavior,
          })
        }
      }, 50)
    }
    track.addEventListener('scroll', onTrackScroll, { passive: true })
    return () => { track.removeEventListener('scroll', onTrackScroll); clearTimeout(t) }
  }, [])

  // ── Keyboard navigation ──────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect()
      if (!rect || rect.top > 120 || rect.bottom < 0) return
      if (e.key === 'ArrowRight') goToSlide(activeSlideRef.current + 1)
      else if (e.key === 'ArrowLeft') goToSlide(activeSlideRef.current - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goToSlide])

  return (
    <div>
      {/* ── Section header — sits above wrapper, headline stays on top ── */}
      <RevealWrapper style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          background: '#FAFAF8',
          padding: 'clamp(72px, 10vw, 112px) 24px 24px',
        }}>
          <div style={{ maxWidth: 1160, margin: '0 auto', textAlign: 'center' }}>
            <span style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: 16,
              ...gradientText,
            }}>
              What Surie Does
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.2vw, 42px)',
              color: '#1A1A2E',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              margin: '0 auto',
              maxWidth: 640,
            }}>
              Surie{' '}
              <span style={gradientText}>generates exams</span>
              {' '}and{' '}
              <span style={gradientText}>shows exactly what to reteach</span>.
            </h2>
          </div>
        </div>
      </RevealWrapper>

      {/* ── Tall wrapper — height gives scroll space per slide ── */}
      {/* Sticky duration = wrapperHeight - sectionHeight = SLIDE_COUNT * SLIDE_SCROLL_PX */}
      <div
        ref={wrapperRef}
        style={{
          height: `calc(100vh + ${SLIDE_COUNT * SLIDE_SCROLL_PX}px)`,
          marginTop: -32,       // slight overlap with header
        }}
      >
        {/* ── Sticky carousel — stays at top while wrapper scrolls past ── */}
        <section
          ref={sectionRef}
          aria-label="Features"
          aria-roledescription="carousel"
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            minHeight: 560,
            overflow: 'hidden',
            zIndex: 5,
          }}
        >
          {/* Horizontal scroll-snap track */}
          <div
            ref={trackRef}
            className="features-track"
            style={{
              display: 'flex',
              overflowX: 'scroll',
              scrollSnapType: 'x mandatory',
              width: '100%',
              height: '100%',
              scrollbarWidth: 'none',
            }}
          >
            {acts.map((act, i) => {
              const textContent = (
                <div>
                  <div style={{ marginBottom: 18 }}>
                    <span style={{
                      display: 'inline-block',
                      background: `linear-gradient(135deg, ${teal} 0%, ${tealLight} 100%)`,
                      borderRadius: 99,
                      padding: '4px 14px',
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase' as const,
                      color: '#fff',
                    }}>
                      {act.badge}
                    </span>
                  </div>
                  <h2 style={{
                    fontFamily: 'var(--font-heading), sans-serif',
                    fontWeight: 700,
                    fontSize: act.hero ? 'clamp(22px, 2.6vw, 38px)' : 'clamp(20px, 2.2vw, 34px)',
                    color: '#1A1A2E',
                    lineHeight: 1.18,
                    letterSpacing: '-0.02em',
                    margin: '0 0 26px',
                    maxWidth: 480,
                  }}>
                    {act.headline.split(act.headlineAccent).map((part, pi, arr) => (
                      <span key={pi}>
                        {part}
                        {pi < arr.length - 1 && (
                          <span style={gradientText}>{act.headlineAccent}</span>
                        )}
                      </span>
                    ))}
                  </h2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {act.points.map((point) => (
                      <li key={point} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 10,
                        fontFamily: 'var(--font-body), sans-serif',
                        fontSize: 15,
                        color: '#374151',
                        lineHeight: 1.55,
                      }}>
                        <span style={{
                          flexShrink: 0,
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${teal}, ${tealLight})`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: 2,
                        }}>
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )

              const screenshotContent = (
                <div
                  className="act-screenshot"
                  style={{
                    borderRadius: 14,
                    overflow: 'hidden',
                    position: 'relative',
                    aspectRatio: '16 / 10',
                    background: '#fff',
                    boxShadow: act.hero
                      ? '0 12px 48px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.05)'
                      : '0 8px 32px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.04)',
                  }}
                >
                  <Image
                    src={act.screenshot}
                    alt={act.screenshotAlt}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top left' }}
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </div>
              )

              return (
                <div
                  key={act.number}
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${SLIDE_COUNT}: ${act.badge}`}
                  style={{
                    flex: '0 0 100%',
                    width: '100%',
                    height: '100%',
                    scrollSnapAlign: 'start',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    overflow: 'hidden',
                    opacity: activeSlide === i ? 1 : 0.6,
                    transition: 'opacity 400ms ease-in-out',
                    background: act.hero ? '#F5F5F3' : '#FAFAF8',
                  }}
                >
                  {/* Ambient radial glow */}
                  <div aria-hidden style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,114,198,${act.hero ? '0.10' : '0.08'}), transparent 70%)`,
                    pointerEvents: 'none',
                  }} />

                  {/* Large background number — always top-left */}
                  <div aria-hidden style={{
                    position: 'absolute',
                    top: '-0.05em',
                    left: '3%',
                    fontFamily: 'var(--font-heading), sans-serif',
                    fontWeight: 900,
                    fontSize: 'clamp(180px, 26vw, 320px)',
                    lineHeight: 1,
                    color: '#1A1A2E',
                    opacity: 0.04,
                    pointerEvents: 'none',
                    userSelect: 'none',
                    letterSpacing: '-0.04em',
                    zIndex: 0,
                  }}>
                    {act.number}
                  </div>

                  {/* Slide content */}
                  <div style={{
                    maxWidth: 1160,
                    width: '100%',
                    margin: '0 auto',
                    padding: '0 clamp(24px, 5vw, 80px) 72px',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    <div
                      className="act-grid"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: act.flip ? '5fr 6fr' : '6fr 5fr',
                        gap: 'clamp(28px, 5vw, 72px)',
                        alignItems: 'center',
                      }}
                    >
                      {act.flip
                        ? <>{screenshotContent}{textContent}</>
                        : <>{textContent}{screenshotContent}</>
                      }
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── Left arrow ── */}
          <button
            className="nav-arrow"
            onClick={() => goToSlide(activeSlide - 1)}
            aria-label="Previous slide"
            style={{
              position: 'absolute',
              left: 20,
              top: 'calc(50% - 36px)',
              transform: 'translateY(-50%)',
              width: 52,
              height: 52,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.96)',
              border: '2px solid #D4D4D0',
              cursor: 'pointer',
              display: activeSlide === 0 ? 'none' : 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 20,
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 18px rgba(0,0,0,0.14)',
              transition: 'border-color 180ms ease, box-shadow 180ms ease',
            }}
            onMouseEnter={e => {
              const b = e.currentTarget as HTMLButtonElement
              b.style.borderColor = teal
              b.style.boxShadow = '0 4px 22px rgba(0,114,198,0.24)'
            }}
            onMouseLeave={e => {
              const b = e.currentTarget as HTMLButtonElement
              b.style.borderColor = '#D4D4D0'
              b.style.boxShadow = '0 4px 18px rgba(0,0,0,0.14)'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={teal} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* ── Right arrow ── */}
          <button
            className="nav-arrow"
            onClick={() => goToSlide(activeSlide + 1)}
            aria-label="Next slide"
            style={{
              position: 'absolute',
              right: 20,
              top: 'calc(50% - 36px)',
              transform: 'translateY(-50%)',
              width: 52,
              height: 52,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.96)',
              border: '2px solid #D4D4D0',
              cursor: 'pointer',
              display: activeSlide === SLIDE_COUNT - 1 ? 'none' : 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 20,
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 18px rgba(0,0,0,0.14)',
              transition: 'border-color 180ms ease, box-shadow 180ms ease',
            }}
            onMouseEnter={e => {
              const b = e.currentTarget as HTMLButtonElement
              b.style.borderColor = teal
              b.style.boxShadow = '0 4px 22px rgba(0,114,198,0.24)'
            }}
            onMouseLeave={e => {
              const b = e.currentTarget as HTMLButtonElement
              b.style.borderColor = '#D4D4D0'
              b.style.boxShadow = '0 4px 18px rgba(0,0,0,0.14)'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={teal} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* ── Dots + scroll-to-continue ── */}
          <div style={{
            position: 'absolute',
            bottom: 20,
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            zIndex: 20,
            pointerEvents: 'none',
          }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', pointerEvents: 'auto' }}>
              {acts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  style={{
                    width:  activeSlide === i ? 10 : 8,
                    height: activeSlide === i ? 10 : 8,
                    borderRadius: '50%',
                    background: activeSlide === i
                      ? `linear-gradient(135deg, ${teal}, ${tealLight})`
                      : 'rgba(0,114,198,0.25)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transform: activeSlide === i ? 'scale(1.15)' : 'scale(1)',
                    transition: 'all 200ms ease',
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              opacity: activeSlide === SLIDE_COUNT - 1 && showContinue ? 1 : 0,
              transition: 'opacity 400ms ease',
              height: 38,
            }}>
              <span style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: 13,
                color: '#9CA3AF',
                letterSpacing: '0.02em',
              }}>
                Scroll to continue
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .features-track::-webkit-scrollbar { display: none; }
        @media (hover: none), (max-width: 767px) {
          .nav-arrow { display: none !important; }
        }
        @media (max-width: 767px) {
          .act-grid { grid-template-columns: 1fr !important; }
          .act-screenshot { aspect-ratio: auto !important; height: 200px !important; }
        }
      `}</style>
    </div>
  )
}
