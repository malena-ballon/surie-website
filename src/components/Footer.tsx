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
            <a
              href="mailto:surie.edtech@gmail.com"
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: 14,
                color: '#0072C6',
                textDecoration: 'none',
              }}
            >
              surie.edtech@gmail.com
            </a>
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
