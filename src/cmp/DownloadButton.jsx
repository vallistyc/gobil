import React from 'react'
import { Download } from 'lucide-react'
import { Button } from "@/components/ui/button"

const handleDownload = () => {
  const link = document.createElement("a")
  link.href = "https://pub-xxxx.r2.dev/namafile.apk"
  link.download = "namafile.apk"
  link.click()
}

const DownloadButton = ({size,r}) => {
  return (
    <Button variant="primary" size={size} onClick={handleDownload} className="flex-row gap-2 py-1 cursor-pointer bg-[#FFA66E] w-fit hover:shadow-2xl hover:bg-black text-[#D40000]">
      <Download className="text-[#D40000]" /> 
      Download
    </Button>
  )
}

export default DownloadButton
