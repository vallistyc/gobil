import React from "react"
import { HelpCircle } from "lucide-react"
import { useTutorialModal } from "./TutorialModalContext"

// Render komponen ini SEKALI saja di root app (sejajar dengan
// <InstallTutorialModal />), bukan di setiap halaman, supaya tidak
// dobel muncul. Posisinya ditumpuk di atas WhatsAppFAB (sisi kanan
// bawah yang sama).
const TutorialFAB = () => {
  const { openTutorial } = useTutorialModal()

  return (
    <button
      onClick={openTutorial}
      aria-label="Buka panduan cara install Go-Bil"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#D40000] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-black active:scale-95"
    >
      <HelpCircle size={18} />
      <span className="hidden sm:inline">Cara Install</span>
    </button>
  )
}

export default TutorialFAB