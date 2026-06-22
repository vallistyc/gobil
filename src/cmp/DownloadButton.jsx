import React from 'react'
import { Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useTutorialModal } from "./TutorialModalContext"

const APK_URL = "https://download.gobil.my.id/gobildeliv.apk"

const DownloadButton = ({size, className = ""}) => {
  const { openTutorial } = useTutorialModal()

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = APK_URL
    link.download = "Go-Bil.apk"
    link.click()
    openTutorial()
  }

  return (
    <Button variant="primary" size={size} onClick={handleDownload} className={`flex-row gap-2 py-1 cursor-pointer bg-[#FFA66E] w-fit hover:shadow-2xl hover:bg-black text-[#D40000] ${className}`}>
      <Download className="text-[#D40000] size-4 sm:size-5" /> 
      Download
    </Button>
  )
}

export default DownloadButton