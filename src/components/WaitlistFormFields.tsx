'use client'

import type { WaitlistFormData } from '@/hooks/useWaitlistForm'

const BASE_INPUT: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  border: '1px solid #E8E4DF',
  borderRadius: 8,
  fontSize: 14,
  fontFamily: 'var(--font-body), sans-serif',
  color: '#1A1A2E',
  background: '#fff',
  outline: 'none',
  transition: 'border-color 150ms ease, box-shadow 150ms ease',
  boxSizing: 'border-box',
}

const LABEL: React.CSSProperties = {
  display: 'block',
  fontSize: 13,
  fontWeight: 600,
  fontFamily: 'var(--font-body), sans-serif',
  color: '#1A1A2E',
  marginBottom: 6,
}

const SELECT_ARROW = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`

interface Props {
  form: WaitlistFormData
  setForm: React.Dispatch<React.SetStateAction<WaitlistFormData>>
  focused: string | null
  setFocused: (f: string | null) => void
  isLoading: boolean
  error: string | null
  handleSubmit: (e: React.FormEvent) => Promise<void>
  submitLabel?: string
  /** Override submit button styles */
  submitStyle?: React.CSSProperties
}

export default function WaitlistFormFields({
  form,
  setForm,
  focused,
  setFocused,
  isLoading,
  error,
  handleSubmit,
  submitLabel = 'Get Early Access',
  submitStyle,
}: Props) {
  const inputStyle = (field: string): React.CSSProperties => ({
    ...BASE_INPUT,
    borderColor: focused === field ? '#0072C6' : '#E8E4DF',
    boxShadow: focused === field ? '0 0 0 3px rgba(0,114,198,0.12)' : 'none',
  })

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <label style={LABEL}>Full Name</label>
        <input
          type="text"
          required
          placeholder="e.g. Maria Santos"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          onFocus={() => setFocused('name')}
          onBlur={() => setFocused(null)}
          style={inputStyle('name')}
          disabled={isLoading}
        />
      </div>

      <div>
        <label style={LABEL}>Email Address</label>
        <input
          type="email"
          required
          placeholder="you@school.edu.ph"
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          onFocus={() => setFocused('email')}
          onBlur={() => setFocused(null)}
          style={inputStyle('email')}
          disabled={isLoading}
        />
      </div>

      <div>
        <label style={LABEL}>Role</label>
        <select
          required
          value={form.role}
          onChange={(e) => setForm((p) => ({ ...p, role: e.target.value, roleOther: '' }))}
          onFocus={() => setFocused('role')}
          onBlur={() => setFocused(null)}
          disabled={isLoading}
          style={{
            ...inputStyle('role'),
            appearance: 'none',
            WebkitAppearance: 'none',
            cursor: 'pointer',
            backgroundImage: SELECT_ARROW,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 14px center',
            paddingRight: 38,
          }}
        >
          <option value="" disabled>Select your role</option>
          <option value="teacher">Teacher</option>
          <option value="instructor">Instructor</option>
          <option value="admin">Admin</option>
          <option value="other">Other</option>
        </select>
        {form.role === 'other' && (
          <input
            type="text"
            required
            placeholder="Please describe your role"
            value={form.roleOther}
            onChange={(e) => setForm((p) => ({ ...p, roleOther: e.target.value }))}
            onFocus={() => setFocused('roleOther')}
            onBlur={() => setFocused(null)}
            style={{ ...inputStyle('roleOther'), marginTop: 8 }}
            disabled={isLoading}
          />
        )}
      </div>

      <div>
        <label style={LABEL}>
          Institution Name{' '}
          <span style={{ fontWeight: 400, color: '#6B7280' }}>(optional)</span>
        </label>
        <input
          type="text"
          placeholder="e.g. Ateneo de Manila University"
          value={form.institution}
          onChange={(e) => setForm((p) => ({ ...p, institution: e.target.value }))}
          onFocus={() => setFocused('institution')}
          onBlur={() => setFocused(null)}
          style={inputStyle('institution')}
          disabled={isLoading}
        />
      </div>

      {/* Error message */}
      {error && (
        <p
          style={{
            fontFamily: 'var(--font-body), sans-serif',
            fontSize: 13,
            color: '#DC3545',
            margin: 0,
            padding: '10px 14px',
            background: '#FFEBEE',
            borderRadius: 8,
            border: '1px solid rgba(220,53,69,0.2)',
          }}
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary"
        style={{
          marginTop: 8,
          justifyContent: 'center',
          width: '100%',
          padding: '13px 24px',
          fontSize: 15,
          opacity: isLoading ? 0.75 : 1,
          cursor: isLoading ? 'not-allowed' : 'pointer',
          ...submitStyle,
        }}
      >
        {isLoading ? (
          <>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animation: 'spin 0.7s linear infinite' }}
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Submitting...
          </>
        ) : (
          <>
            {submitLabel}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>
    </form>
  )
}
