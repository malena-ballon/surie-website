import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'How Surie Works', href: '/how-surie-works' },
  { label: 'FAQs', href: '/faqs' },
]

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #E8E8E4',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '56px 24px 40px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 40,
            alignItems: 'start',
          }}
        >
          {/* Brand column */}
          <div style={{ maxWidth: 280 }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 12 }}>
              <Image
                src="/assets/Logo_Without-Name.png"
                alt="Surie"
                height={28}
                width={28}
                style={{ objectFit: 'contain' }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-heading), sans-serif',
                  fontWeight: 700,
                  fontSize: 16,
                  letterSpacing: '0.08em',
                  color: '#0072C6',
                }}
              >
                SURIE
              </span>
            </Link>
            <p
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: 700,
                fontSize: 14,
                color: '#6B7280',
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              Teaching Smarter. Learning Better.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: 700,
                fontSize: 13,
                color: '#1A1A2E',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: 16,
                marginTop: 0,
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: 14,
                      color: '#6B7280',
                      textDecoration: 'none',
                      transition: 'color 150ms ease',
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: 700,
                fontSize: 13,
                color: '#1A1A2E',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: 16,
                marginTop: 0,
              }}
            >
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a
                href="mailto:surie.edtech@gmail.com"
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: 14,
                  color: '#0072C6',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0072C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                surie.edtech@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/company/surie"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: 14,
                  color: '#0072C6',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#0072C6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/surie.edtech/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: 14,
                  color: '#0072C6',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#0072C6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid #E8E8E4',
            marginTop: 48,
            paddingTop: 24,
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: 13,
              color: '#6B7280',
              margin: 0,
            }}
          >
            © 2026 Surie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
