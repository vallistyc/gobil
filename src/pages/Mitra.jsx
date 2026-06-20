import { useEffect, useState } from "react";
import Toast from "../cmp/Toast";
import FileDropInput from "../cmp/FileDropInput";
import { submitForm } from "../cmp/submitForm";

const initialForm = {
  namaBisnis: "",
  namaPemilik: "",
  nomorWa: "",
  menuMode: [], // bisa berisi "teks", "gambar", atau keduanya
  daftarMenuTeks: "",
};

const initialFiles = {
  ktpPemilik: [],
  fotoTempatUsaha: [],
  logoUsaha: [],
  daftarMenuGambar: [],
};

export default function Mitra() {
  const [mitraList, setMitraList] = useState([]);
  const [loadingList, setLoadingList] = useState(true);

  const [form, setForm] = useState(initialForm);
  const [files, setFiles] = useState(initialFiles);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    setLoadingList(false);
    // TODO: fetch ke Sanity client, setMitraList(data)
  }, []);

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const toggleMenuMode = (mode) => {
    setForm((f) => {
      const has = f.menuMode.includes(mode);
      return { ...f, menuMode: has ? f.menuMode.filter((m) => m !== mode) : [...f.menuMode, mode] };
    });
  };

  // Helper: cek apakah suatu field file masih ada yang uploading / error / belum punya publicUrl
  const isFieldBusy = (items) => items.some((it) => it.uploading);
  const isFieldFailed = (items) => items.some((it) => it.error);
  const isFieldReady = (items) => items.length > 0 && items.every((it) => it.publicUrl);

  const anyFileBusy = Object.values(files).some((arr) => isFieldBusy(arr));

  const validate = () => {
    const e = {};
    if (!form.namaBisnis.trim()) e.namaBisnis = "Wajib diisi";
    if (!form.namaPemilik.trim()) e.namaPemilik = "Wajib diisi";
    if (!/^08[0-9]{8,12}$/.test(form.nomorWa.trim())) e.nomorWa = "Format nomor WA tidak valid (contoh: 08123456789)";

    if (!isFieldReady(files.ktpPemilik)) e.ktpPemilik = "Wajib diunggah & menunggu upload selesai";
    if (!isFieldReady(files.fotoTempatUsaha)) e.fotoTempatUsaha = "Wajib diunggah & menunggu upload selesai";
    if (!isFieldReady(files.logoUsaha)) e.logoUsaha = "Wajib diunggah & menunggu upload selesai";

    const isiTeks = form.menuMode.includes("teks") && form.daftarMenuTeks.trim().length > 0;
    const isiGambar = form.menuMode.includes("gambar") && isFieldReady(files.daftarMenuGambar);
    if (form.menuMode.length === 0) {
      e.menuMode = "Pilih minimal satu cara mengisi daftar menu";
    } else if (!isiTeks && !isiGambar) {
      e.menuMode = "Lengkapi daftar menu sesuai pilihan di atas (tulisan dan/atau gambar, tunggu upload selesai)";
    }

    if (anyFileBusy) e._upload = "Masih ada file yang sedang diupload, tunggu sebentar";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const resetForm = () => {
    setForm(initialForm);
    setFiles(initialFiles);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await submitForm(
        "mitra",
        {
          namaBisnis: form.namaBisnis,
          namaPemilik: form.namaPemilik,
          nomorWa: form.nomorWa,
          daftarMenuTeks: form.menuMode.includes("teks") ? form.daftarMenuTeks : "",
        },
        {
          ktpPemilik: files.ktpPemilik[0]?.publicUrl,
          fotoTempatUsaha: files.fotoTempatUsaha[0]?.publicUrl,
          logoUsaha: files.logoUsaha[0]?.publicUrl,
          daftarMenuGambar: form.menuMode.includes("gambar")
            ? files.daftarMenuGambar.map((it) => it.publicUrl)
            : [],
        }
      );
      setToast({ type: "success", message: "Data terkirim! Tim kami akan menghubungi kamu segera." });
      resetForm();
    } catch (err) {
      setToast({ type: "error", message: err.message || "Gagal mengirim data, coba lagi." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-20 space-y-16">
      {/* ===== LIST MITRA ===== */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Mitra Go-Bil</h2>
        {loadingList ? (
          <p className="text-slate-400 text-sm">Memuat daftar mitra...</p>
        ) : mitraList.length === 0 ? (
          <p className="text-slate-400 text-sm">Belum ada mitra yang ditampilkan.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {mitraList.map((m) => (
              <div key={m._id} className="border rounded-xl p-3 text-center">
                <p className="font-medium text-sm">{m.namaBisnis}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ===== FORM PENDAFTARAN MITRA ===== */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-1">Daftar Jadi Mitra</h2>
        <p className="text-slate-500 text-sm mb-6">
          Isi data di bawah ini untuk mendaftarkan usahamu sebagai mitra Go-Bil.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Field label="Nama Bisnis" required error={errors.namaBisnis}>
            <input
              className={inputCls(errors.namaBisnis)}
              value={form.namaBisnis}
              onChange={(e) => update("namaBisnis", e.target.value)}
              placeholder="Contoh: Warung Bu Sari"
            />
          </Field>

          <Field label="Nama Pemilik" required error={errors.namaPemilik}>
            <input
              className={inputCls(errors.namaPemilik)}
              value={form.namaPemilik}
              onChange={(e) => update("namaPemilik", e.target.value)}
            />
          </Field>

          <FileDropInput
            label="Foto KTP Pemilik"
            name="ktpPemilik"
            required
            error={errors.ktpPemilik}
            onChange={(v) => setFiles((f) => ({ ...f, ktpPemilik: v }))}
          />

          <Field label="Nomor WhatsApp Aktif" required error={errors.nomorWa}>
            <input
              className={inputCls(errors.nomorWa)}
              value={form.nomorWa}
              onChange={(e) => update("nomorWa", e.target.value.replace(/[^0-9]/g, ""))}
              placeholder="08123456789"
              inputMode="numeric"
            />
          </Field>

          <FileDropInput
            label="Foto Tempat Usaha"
            name="fotoTempatUsaha"
            required
            error={errors.fotoTempatUsaha}
            onChange={(v) => setFiles((f) => ({ ...f, fotoTempatUsaha: v }))}
          />

          <FileDropInput
            label="Logo Usaha"
            name="logoUsaha"
            required
            error={errors.logoUsaha}
            onChange={(v) => setFiles((f) => ({ ...f, logoUsaha: v }))}
          />

          {/* ===== Daftar Menu: pilih tulisan, gambar, atau keduanya ===== */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-slate-700">
              Daftar Menu / Produk <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-slate-400 -mt-2">
              Pilih salah satu atau kedua cara untuk melengkapi daftar menu kamu.
            </p>

            <div className="flex gap-3">
              {["teks", "gambar"].map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => toggleMenuMode(mode)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                    form.menuMode.includes(mode)
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-white text-slate-600 border-slate-300"
                  }`}
                >
                  {mode === "teks" ? "Tulis daftar menu" : "Unggah foto menu"}
                </button>
              ))}
            </div>

            {form.menuMode.includes("teks") && (
              <textarea
                className={inputCls(errors.menuMode) + " min-h-[100px]"}
                placeholder={"Contoh:\nNasi Goreng - 15000\nEs Teh - 5000"}
                value={form.daftarMenuTeks}
                onChange={(e) => update("daftarMenuTeks", e.target.value)}
              />
            )}

            {form.menuMode.includes("gambar") && (
              <FileDropInput
                label="Foto Daftar Menu (bisa lebih dari satu)"
                name="daftarMenuGambar"
                multiple
                onChange={(v) => setFiles((f) => ({ ...f, daftarMenuGambar: v }))}
              />
            )}

            {errors.menuMode && <p className="text-xs text-red-500">{errors.menuMode}</p>}
          </div>

          {errors._upload && <p className="text-xs text-amber-600">{errors._upload}</p>}

          <button
            type="submit"
            disabled={submitting || anyFileBusy}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition"
          >
            {submitting ? "Mengirim..." : anyFileBusy ? "Menunggu upload selesai..." : "Kirim Pendaftaran"}
          </button>
        </form>
      </section>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}

function Field({ label, required, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

function inputCls(error) {
  return `w-full border rounded-lg px-3 py-2.5 text-sm outline-none transition
    ${error ? "border-red-400 bg-red-50" : "border-slate-300 focus:border-emerald-500"}`;
}