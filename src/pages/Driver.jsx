import { useState } from "react";
import Toast from "../cmp/Toast";
import FileDropInput from "../cmp/FileDropInput";
import { submitForm } from "../cmp/submitForm";

const initialForm = {
  namaLengkap: "",
  noHp: "",
  metodePencairan: "", // "rekening" | "ewallet"
  namaBankEwallet: "",
  nomorRekeningEwallet: "",
};

const initialFiles = {
  ktpKts: [],
  sim: [],
  stnk: [],
  buktiRekening: [],
  fotoKendaraan: [],
  pasFoto: [],
};

export default function Driver() {
  const [form, setForm] = useState(initialForm);
  const [files, setFiles] = useState(initialFiles);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const isFieldBusy = (items) => items.some((it) => it.uploading);
  const isFieldReady = (items) => items.length > 0 && items.every((it) => it.publicUrl);
  const anyFileBusy = Object.values(files).some((arr) => isFieldBusy(arr));

  const validate = () => {
    const e = {};
    if (!form.namaLengkap.trim()) e.namaLengkap = "Wajib diisi";
    if (!/^08[0-9]{8,12}$/.test(form.noHp.trim())) e.noHp = "Format nomor HP tidak valid";

    if (!isFieldReady(files.ktpKts)) e.ktpKts = "Wajib diunggah & menunggu upload selesai";
    if (!isFieldReady(files.sim)) e.sim = "Wajib diunggah & menunggu upload selesai";
    if (!isFieldReady(files.stnk)) e.stnk = "Wajib diunggah & menunggu upload selesai";
    if (!isFieldReady(files.fotoKendaraan)) e.fotoKendaraan = "Wajib diunggah & menunggu upload selesai";
    if (!isFieldReady(files.pasFoto)) e.pasFoto = "Wajib diunggah & menunggu upload selesai";

    if (!form.metodePencairan) {
      e.metodePencairan = "Pilih salah satu metode pencairan";
    } else {
      if (!form.namaBankEwallet.trim()) e.namaBankEwallet = "Wajib diisi";
      if (!form.nomorRekeningEwallet.trim()) e.nomorRekeningEwallet = "Wajib diisi";
      if (form.metodePencairan === "rekening" && !isFieldReady(files.buktiRekening)) {
        e.buktiRekening = "Wajib melampirkan foto buku tabungan / bukti rekening (tunggu upload selesai)";
      }
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
        "driver",
        {
          namaLengkap: form.namaLengkap,
          noHp: form.noHp,
          metodePencairan: form.metodePencairan,
          namaBankEwallet: form.namaBankEwallet,
          nomorRekeningEwallet: form.nomorRekeningEwallet,
        },
        {
          ktpKts: files.ktpKts[0]?.publicUrl,
          sim: files.sim[0]?.publicUrl,
          stnk: files.stnk[0]?.publicUrl,
          fotoKendaraan: files.fotoKendaraan[0]?.publicUrl,
          pasFoto: files.pasFoto[0]?.publicUrl,
          buktiRekening: form.metodePencairan === "rekening" ? files.buktiRekening[0]?.publicUrl : null,
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
    <div className="max-w-3xl mx-auto px-4 py-30 space-y-16">
      {/* ===== PENJELASAN DRIVER ===== */}
      <section className="space-y-6">
        <h1 className="text-3xl font-bold text-slate-800">Jadi Driver Go-Bil</h1>
        <p className="text-slate-600">
          Bergabunglah sebagai driver Go-Bil dan dapatkan penghasilan tambahan dengan jadwal fleksibel
          di wilayah Kabupaten Lamongan.
        </p>

        <div>
          <h3 className="font-semibold text-slate-800 mb-2">Persyaratan</h3>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
            <li>Minimal usia 18 tahun, memiliki KTP/KTS aktif</li>
            <li>Memiliki SIM C atau SIM A yang masih berlaku</li>
            <li>Kendaraan pribadi dengan STNK aktif, kondisi layak jalan</li>
            <li>Memiliki smartphone Android dengan koneksi internet stabil</li>
            <li>Memiliki rekening tabungan atau e-wallet aktif untuk pencairan saldo</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-slate-800 mb-2">Dokumen yang Dibutuhkan</h3>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
            <li>KTP / KTS</li>
            <li>SIM C</li>
            <li>STNK</li>
            <li>Foto kendaraan</li>
            <li>Pas foto terbaru</li>
            <li>Bukti rekening tabungan (jika memilih pencairan via rekening)</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-slate-800 mb-2">Sistem Kerja</h3>
          <p className="text-sm text-slate-600">
            Driver menerima order melalui aplikasi Go-Bil, bebas menentukan jam aktif, dan saldo hasil
            order dapat dicairkan secara berkala ke rekening atau e-wallet yang terdaftar.
          </p>
        </div>
      </section>

      {/* ===== FORM PENDAFTARAN DRIVER ===== */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-1">Form Pendaftaran Driver</h2>
        <p className="text-slate-500 text-sm mb-6">Lengkapi data berikut untuk mendaftar sebagai driver Go-Bil.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Field label="Nama Lengkap" required error={errors.namaLengkap}>
            <input
              className={inputCls(errors.namaLengkap)}
              value={form.namaLengkap}
              onChange={(e) => update("namaLengkap", e.target.value)}
            />
          </Field>

          <Field label="Nomor HP" required error={errors.noHp}>
            <input
              className={inputCls(errors.noHp)}
              value={form.noHp}
              onChange={(e) => update("noHp", e.target.value.replace(/[^0-9]/g, ""))}
              placeholder="08123456789"
              inputMode="numeric"
            />
          </Field>

          <FileDropInput
            label="Foto KTP / KTS"
            name="ktpKts"
            required
            error={errors.ktpKts}
            onChange={(v) => setFiles((f) => ({ ...f, ktpKts: v }))}
          />
          <FileDropInput
            label="Foto SIM"
            name="sim"
            required
            error={errors.sim}
            onChange={(v) => setFiles((f) => ({ ...f, sim: v }))}
          />
          <FileDropInput
            label="Foto STNK"
            name="stnk"
            required
            error={errors.stnk}
            onChange={(v) => setFiles((f) => ({ ...f, stnk: v }))}
          />
          <FileDropInput
            label="Foto Kendaraan"
            name="fotoKendaraan"
            required
            error={errors.fotoKendaraan}
            onChange={(v) => setFiles((f) => ({ ...f, fotoKendaraan: v }))}
          />
          <FileDropInput
            label="Pas Foto Terbaru"
            name="pasFoto"
            required
            error={errors.pasFoto}
            onChange={(v) => setFiles((f) => ({ ...f, pasFoto: v }))}
          />

          {/* ===== Metode Pencairan: pilih salah satu, exclusive ===== */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-slate-700">
              Metode Pencairan <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-slate-400 -mt-2">Pilih salah satu, tidak bisa keduanya.</p>

            <div className="flex gap-3">
              {[
                { key: "rekening", label: "Rekening Tabungan" },
                { key: "ewallet", label: "E-Wallet" },
              ].map((opt) => (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() =>
                    setForm((f) => ({
                      ...f,
                      metodePencairan: opt.key,
                      namaBankEwallet: "",
                      nomorRekeningEwallet: "",
                    }))
                  }
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                    form.metodePencairan === opt.key
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-white text-slate-600 border-slate-300"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            {errors.metodePencairan && <p className="text-xs text-red-500">{errors.metodePencairan}</p>}

            {form.metodePencairan && (
              <div className="space-y-4 pt-2">
                <Field
                  label={form.metodePencairan === "rekening" ? "Nama Bank" : "Nama E-Wallet"}
                  required
                  error={errors.namaBankEwallet}
                >
                  <input
                    className={inputCls(errors.namaBankEwallet)}
                    value={form.namaBankEwallet}
                    onChange={(e) => update("namaBankEwallet", e.target.value)}
                    placeholder={form.metodePencairan === "rekening" ? "Contoh: BCA" : "Contoh: DANA, OVO, GoPay"}
                  />
                </Field>

                <Field
                  label={form.metodePencairan === "rekening" ? "Nomor Rekening" : "Nomor E-Wallet"}
                  required
                  error={errors.nomorRekeningEwallet}
                >
                  <input
                    className={inputCls(errors.nomorRekeningEwallet)}
                    value={form.nomorRekeningEwallet}
                    onChange={(e) => update("nomorRekeningEwallet", e.target.value.replace(/[^0-9]/g, ""))}
                    inputMode="numeric"
                  />
                </Field>

                {form.metodePencairan === "rekening" && (
                  <FileDropInput
                    label="Foto Buku Tabungan / Bukti Rekening"
                    name="buktiRekening"
                    required
                    error={errors.buktiRekening}
                    onChange={(v) => setFiles((f) => ({ ...f, buktiRekening: v }))}
                  />
                )}
              </div>
            )}
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