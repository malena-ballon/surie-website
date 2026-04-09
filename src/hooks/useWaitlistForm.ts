'use client'

import { useState } from 'react'

const ENDPOINT = 'https://formspree.io/f/xgopbnyg'

export type WaitlistFormData = {
  name: string
  email: string
  role: string
  roleOther: string
  institution: string
}

const EMPTY: WaitlistFormData = {
  name: '',
  email: '',
  role: '',
  roleOther: '',
  institution: '',
}

export function useWaitlistForm() {
  const [form, setForm] = useState<WaitlistFormData>(EMPTY)
  const [focused, setFocused] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const reset = () => {
    setForm(EMPTY)
    setSubmitted(false)
    setError(null)
    setIsLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          role: form.role === 'other' ? form.roleOther : form.role,
          institution: form.institution || undefined,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return { form, setForm, focused, setFocused, isLoading, submitted, error, reset, handleSubmit }
}
