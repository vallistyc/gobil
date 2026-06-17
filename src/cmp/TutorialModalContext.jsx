import React, { createContext, useContext, useState } from "react"

const TutorialModalContext = createContext(null)

// Bungkus seluruh app (atau minimal halaman yang punya tombol download)
// dengan <TutorialModalProvider> agar semua komponen anak bisa membuka
// modal tutorial lewat hook useTutorialModal()
export const TutorialModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openTutorial = () => setIsOpen(true)
  const closeTutorial = () => setIsOpen(false)

  return (
    <TutorialModalContext.Provider value={{ isOpen, openTutorial, closeTutorial }}>
      {children}
    </TutorialModalContext.Provider>
  )
}

export const useTutorialModal = () => {
  const ctx = useContext(TutorialModalContext)
  if (!ctx) {
    throw new Error("useTutorialModal harus dipakai di dalam <TutorialModalProvider>")
  }
  return ctx
}
