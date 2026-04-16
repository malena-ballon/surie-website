'use client'

const teal = '#0072C6'

const avatars = [
  { bg: '#0072C6', initials: 'T' },
  { bg: '#00B4D8', initials: 'M' },
  { bg: '#4A90D9', initials: 'R' },
  { bg: '#0099B8', initials: 'S' },
  { bg: '#1A6FB0', initials: 'A' },
]

const textStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body), sans-serif',
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: '#6B7280',
  whiteSpace: 'nowrap',
}

export default function TrustBar() {
  return (
    <div style={{
      background: '#fff',
      borderTop: '1px solid #E8E8E4',
      borderBottom: '1px solid #E8E8E4',
      height: 80,
      overflow: 'hidden',
    }}>
      {/* Inner row — centered, items at natural width, dividers between them */}
      <div style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0,
      }}>

        {/* Item 1 — always visible */}
        <div style={{ padding: '0 32px', flexShrink: 0 }}>
          <span style={textStyle}>Built for educators, not IT teams</span>
        </div>

        <div className="trust-divider" />

        {/* Item 2 — hidden on mobile */}
        <div className="trust-hide-mobile" style={{ padding: '0 32px', flexShrink: 0 }}>
          <span style={textStyle}>Works with any curriculum or lesson material</span>
        </div>

        <div className="trust-divider trust-hide-mobile" />

        {/* Item 3 — always visible */}
        <div style={{ padding: '0 32px', flexShrink: 0 }}>
          <span style={textStyle}>No training required</span>
        </div>

        <div className="trust-divider" />

        {/* Waitlist count with avatars */}
        <div style={{
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          flexShrink: 0,
        }}>
          {/* Avatar stack */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {avatars.map((avatar, i) => (
              <div
                key={i}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: '50%',
                  background: avatar.bg,
                  border: '2px solid #fff',
                  marginLeft: i === 0 ? 0 : -8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 9,
                  fontWeight: 700,
                  color: '#fff',
                  fontFamily: 'var(--font-heading), sans-serif',
                  zIndex: avatars.length - i,
                  position: 'relative',
                  flexShrink: 0,
                }}
              >
                {avatar.initials}
              </div>
            ))}
          </div>

          <span style={textStyle}>
            <span style={{ color: teal, fontWeight: 700 }}>100+</span>
            {' '}educators on the waitlist
          </span>
        </div>

      </div>

      <style>{`
        .trust-divider {
          width: 1px;
          height: 32px;
          background: #E8E8E4;
          flex-shrink: 0;
        }
        @media (max-width: 767px) {
          .trust-hide-mobile {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}
