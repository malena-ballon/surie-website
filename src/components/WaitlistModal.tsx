'use client'

import { useEffect } from 'react'
import { useWaitlistModal } from '@/context/WaitlistModalContext'
import { useWaitlistForm } from '@/hooks/useWaitlistForm'
import WaitlistFormFields from '@/components/WaitlistFormFields'

export default function WaitlistModal() {
  const { isOpen, closeModal } = useWaitlistModal()
  const { submitted, reset, ...formProps } = useWaitlistForm()

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Reset form after close animation finishes
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(reset, 250)
      return () => clearTimeout(t)
    }
  }, [isOpen, reset])

  if (!isOpen) return null

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        background: 'rgba(26,26,46,0.52)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'modalOverlayIn 0.2s ease both',
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: 14,
          maxWidth: 480,
          width: '100%',
          padding: 40,
          position: 'relative',
          animation: 'modalCardIn 0.28s cubic-bezier(0.34,1.56,0.64,1) both',
          boxShadow: '0 24px 64px rgba(0,0,0,0.14)',
        }}
      >
        {/* Close */}
        <button
          onClick={closeModal}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: '1px solid #E8E4DF',
            background: 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6B7280',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <SuccessState />
        ) : (
          <>
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 700, fontSize: 22, color: '#1A1A2E', margin: '0 0 8px' }}>
                Get Early Access
              </h3>
              <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 14, color: '#6B7280', margin: 0, lineHeight: 1.6 }}>
                Be the first to know when Surie launches. No spam, ever.
              </p>
            </div>
            <WaitlistFormFields {...formProps} submitLabel="Get Early Access" />
          </>
        )}
      </div>
    </div>
  )
}

function SuccessState() {
  return (
    <div style={{ textAlign: 'center', padding: '20px 0 8px' }}>
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          backgroundImage: 'linear-gradient(135deg, #0072C6 0%, #00B4D8 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px',
          boxShadow: '0 4px 16px rgba(0,114,198,0.3)',
        }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h3 style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 700, fontSize: 22, color: '#1A1A2E', margin: '0 0 10px' }}>
        You&apos;re on the list!
      </h3>
      <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: 15, color: '#6B7280', lineHeight: 1.65, margin: '0 auto', maxWidth: 340 }}>
        We&apos;ll reach out when Surie is ready for you.
      </p>
    </div>
  )
}
