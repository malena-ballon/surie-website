'use client'

import { createContext, useContext, useState } from 'react'

interface WaitlistModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const WaitlistModalContext = createContext<WaitlistModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
})

export function WaitlistModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <WaitlistModalContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </WaitlistModalContext.Provider>
  )
}

export const useWaitlistModal = () => useContext(WaitlistModalContext)
