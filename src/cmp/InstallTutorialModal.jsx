import React, { useEffect, useState } from "react"
import { X, ImageOff, AlertTriangle, CheckCircle2 } from "lucide-react"
import { useTutorialModal } from "./TutorialModalContext"
import step1 from "../assets/1.png"
import step2 from "../assets/2.png"
import step3 from "../assets/3.png"
import step4 from "../assets/4.png"
import step5 from "../assets/5.png"
import step6 from "../assets/7.png"
import step7 from "../assets/6.png"


// ── Data langkah-langkah ──────────────────────────────────────────────
// Ganti `image` di bawah dengan path screenshot asli kamu setelah diunggah,
// misalnya simpan di src/assets/tutorial/ lalu import dan pasang di sini.
// Selama gambar belum ada, otomatis tampil kotak placeholder bertuliskan
// "Screenshot belum diunggah" — jadi modal tetap aman dipakai sekarang.
const steps = [
  {
    number: 1,
    title: "Buka file APK-nya",
    description:
      "Setelah download selesai, ketuk notifikasi unduhan, atau buka folder Unduhan/Downloads di File Manager, lalu cari file Go-Bil.apk.",
    image: step1,
    alt: "Notifikasi download Go-Bil.apk muncul di HP Android",
  },
  {
    number: 2,
    title: "Ketuk file untuk mulai install",
    description: "Ketuk file Go-Bil.apk. Layar konfirmasi pemasangan akan muncul.",
    image: step2,
    alt: "Dialog konfirmasi install aplikasi Go-Bil",
    branch: {
      title: 'Muncul peringatan "sumber tidak dikenal"?',
      description:
        "Ini wajar untuk APK di luar Play Store. Ikuti 3 langkah ini dulu, baru lanjut ke langkah berikutnya.",
      substeps: [
        {
          label: 'Ketuk "Setelan" pada peringatan tersebut',
          image: step3,
          alt: "Tombol Setelan pada peringatan sumber tidak dikenal",
        },
        {
          label: 'Aktifkan toggle "Izinkan dari sumber ini"',
          image: step4,
          alt: "Toggle izinkan install dari sumber tidak dikenal diaktifkan",
        },
        {
          label: "Ketuk tombol kembali, lalu ketuk file Go-Bil.apk sekali lagi",
          image: step5,
          alt: "Kembali ke file manager untuk membuka APK lagi",
        },
      ],
    },
  },
  {
    number: 3,
    title: 'Ketuk "Pasang" / "Install"',
    description: "Tunggu beberapa detik sampai proses instalasi selesai.",
    image: step6,
    alt: "Tombol Install pada dialog pemasangan aplikasi",
  },
  {
    number: 4,
    title: 'Ketuk "Buka" dan Go-Bil siap dipakai',
    description: "Selesai! Aplikasi Go-Bil sudah terpasang di HP kamu.",
    image: step7,
    alt: "Tombol Buka setelah instalasi Go-Bil selesai",
  },
]

// Gambar dengan fallback placeholder kalau file screenshot belum ada
const TutorialImage = ({ src, alt }) => {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="flex aspect-[9/16] w-full max-w-[220px] flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#FFA66E] bg-[#FFF6EE] px-4 text-center">
        <ImageOff className="size-6 text-[#D40000]/60" />
        <span className="text-xs text-[#D40000]/70">Screenshot belum diunggah</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="aspect-[9/16] w-full max-w-[220px] rounded-xl border border-black/10 object-cover shadow-sm"
    />
  )
}

const InstallTutorialModal = () => {
  const { isOpen, closeTutorial } = useTutorialModal()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      const raf = requestAnimationFrame(() => setMounted(true))
      const onKeyDown = (e) => {
        if (e.key === "Escape") closeTutorial()
      }
      window.addEventListener("keydown", onKeyDown)
      return () => {
        cancelAnimationFrame(raf)
        document.body.style.overflow = ""
        window.removeEventListener("keydown", onKeyDown)
      }
    } else {
      setMounted(false)
    }
  }, [isOpen, closeTutorial])

  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-end justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-200 sm:items-center ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
      onClick={closeTutorial}
      role="presentation"
    >
      <div
        className={`max-h-[88vh] w-full overflow-y-auto rounded-t-2xl bg-white shadow-2xl transition-all duration-300 sm:max-w-lg sm:rounded-2xl ${
          mounted ? "translate-y-0 opacity-100 sm:scale-100" : "translate-y-8 opacity-0 sm:scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="tutorial-modal-title"
      >
        {/* grab handle, mobile only — meniru bottom sheet Android */}
        <div className="flex justify-center pt-3 sm:hidden">
          <div className="h-1.5 w-10 rounded-full bg-black/15" />
        </div>

        <div className="flex items-start justify-between gap-4 px-6 pb-2 pt-4 sm:pt-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#FF6200]">
              Panduan Instalasi
            </p>
            <h2 id="tutorial-modal-title" className="text-xl font-bold text-gray-900">
              Cara Install Go-Bil
            </h2>
          </div>
          <button
            onClick={closeTutorial}
            aria-label="Tutup panduan"
            className="shrink-0 rounded-full p-1.5 text-gray-500 transition hover:bg-black/5 hover:text-black"
          >
            <X size={20} />
          </button>
        </div>

        <p className="px-6 text-sm text-gray-600">
          File APK kamu sudah terdownload. Ikuti 4 langkah ini buat memasangnya di HP.
        </p>

        <ol className="space-y-6 px-6 py-5">
          {steps.map((step) => (
            <li key={step.number} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#D40000] text-sm font-bold text-white">
                  {step.number}
                </span>
                {step.number !== steps.length && <span className="mt-1 w-px flex-1 bg-black/10" />}
              </div>

              <div className="flex-1 pb-2">
                <h3 className="font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{step.description}</p>

                <div className="mt-3">
                  <TutorialImage src={step.image} alt={step.alt} />
                </div>

                {step.branch && (
                  <div className="mt-4 rounded-xl border border-[#FFA66E] bg-[#FFF6EE] p-4">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="size-4 text-[#D40000]" />
                      <p className="text-sm font-semibold text-gray-900">{step.branch.title}</p>
                    </div>
                    <p className="mt-1 text-xs text-gray-600">{step.branch.description}</p>

                    <ol className="mt-3 space-y-4">
                      {step.branch.substeps.map((sub, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#FF6200] text-[10px] font-bold text-white">
                            {String.fromCharCode(97 + i)}
                          </span>
                          <div>
                            <p className="text-xs text-gray-700">{sub.label}</p>
                            <div className="mt-2">
                              <TutorialImage src={sub.image} alt={sub.alt} />
                            </div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="flex items-center gap-2 border-t border-black/5 bg-[#FFF6EE]/60 px-6 py-4">
          <CheckCircle2 className="size-4 text-[#22C872]" />
          <p className="text-xs text-gray-600">
            Screenshot di atas mengikuti tampilan asli HP Android, jadi kamu bisa cocokkan langsung.
          </p>
        </div>

        <div className="px-6 pb-6">
          <button
            onClick={closeTutorial}
            className="w-full rounded-xl bg-[#D40000] py-3 text-sm font-semibold text-white transition hover:bg-black active:scale-[0.98]"
          >
            Keluar
          </button>
        </div>
      </div>
    </div>
  )
}

export default InstallTutorialModal