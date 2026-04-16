import React from 'react'

interface SectionLabelProps {
  children: React.ReactNode
  /** Override alignment — default is center */
  align?: 'left' | 'center'
  /** Extra bottom margin override */
  marginBottom?: number | string
  className?: string
}

/**
 * Standardised section eyebrow label.
 * Renders as: ● LABEL TEXT ●
 * Uses .section-label from globals.css — teal, 11px, letter-spacing 0.10em,
 * uppercase, with teal dot decorators on each side.
 */
export default function SectionLabel({
  children,
  align = 'center',
  marginBottom,
  className = '',
}: SectionLabelProps) {
  return (
    <div
      className={`section-label ${className}`}
      style={{
        justifyContent: align === 'left' ? 'flex-start' : 'center',
        ...(marginBottom !== undefined ? { marginBottom } : {}),
      }}
    >
      {children}
    </div>
  )
}
