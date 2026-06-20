import { useRef, useState, useEffect } from "react";
import { uploadToR2 } from "../utils/uploadToR2";

// Compress + resize gambar di client jadi Blob (bukan base64 lagi), sekalian bikin dataURL buat preview.
async function compressImage(file, maxDim = 1280, quality = 0.75) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();
    reader.onload = (e) => (img.src = e.target.result);
    reader.onerror = reject;
    img.onload = () => {
      let { width, height } = img;
      if (width > height && width > maxDim) {
        height = Math.round((height * maxDim) / width);
        width = maxDim;
      } else if (height > maxDim) {
        width = Math.round((width * maxDim) / height);
        height = maxDim;
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d").drawImage(img, 0, 0, width, height);
      const dataUrl = canvas.toDataURL("image/jpeg", quality);
      canvas.toBlob(
        (blob) => {
          const filename = file.name.replace(/\.[^.]+$/, ".jpg");
          resolve({ blob: new File([blob], filename, { type: "image/jpeg" }), dataUrl, filename });
        },
        "image/jpeg",
        quality
      );
    };
    img.onerror = reject;
    reader.readAsDataURL(file);
  });
}

let uid = 0;

/**
 * FileDropInput - pilih file (single/multiple), compress, upload ke R2.
 * onChange dipanggil setiap kali state berubah dengan array item:
 *   { id, filename, previewDataUrl, publicUrl, uploading, error }
 * Parent WAJIB cek tidak ada item dengan uploading=true / error sebelum submit.
 */
export default function FileDropInput({ label, name, multiple = false, required = false, accept = "image/*", onChange, error }) {
  const inputRef = useRef(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    onChange(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const uploadItem = async (item) => {
    setItems((prev) => prev.map((it) => (it.id === item.id ? { ...it, uploading: true, error: null } : it)));
    try {
      const publicUrl = await uploadToR2(item.blob);
      setItems((prev) => prev.map((it) => (it.id === item.id ? { ...it, uploading: false, publicUrl } : it)));
    } catch (err) {
      setItems((prev) =>
        prev.map((it) => (it.id === item.id ? { ...it, uploading: false, error: err.message || "Upload gagal" } : it))
      );
    }
  };

  const handleFiles = async (fileList) => {
    const files = Array.from(fileList);
    if (!files.length) return;

    const compressed = await Promise.all(
      files.map(async (f) => {
        const { blob, dataUrl, filename } = await compressImage(f);
        return { id: ++uid, blob, previewDataUrl: dataUrl, filename, publicUrl: null, uploading: false, error: null };
      })
    );

    setItems((prev) => (multiple ? [...prev, ...compressed] : compressed));
    compressed.forEach(uploadItem);
  };

  const removeAt = (id) => setItems((prev) => prev.filter((it) => it.id !== id));
  const retry = (item) => uploadItem(item);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div
        onClick={() => inputRef.current?.click()}
        className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition
          ${error ? "border-red-400 bg-red-50" : "border-slate-300 hover:border-emerald-400 hover:bg-emerald-50"}`}
      >
        <input
          ref={inputRef}
          type="file"
          name={name}
          accept={accept}
          multiple={multiple}
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <p className="text-sm text-slate-500">
          Tap untuk {multiple ? "pilih beberapa foto" : "pilih foto"} atau jatuhkan file di sini
        </p>
      </div>

      {items.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {items.map((it) => (
            <div key={it.id} className="relative w-20 h-20 rounded-lg overflow-hidden border border-slate-200">
              <img src={it.previewDataUrl} alt={it.filename} className="w-full h-full object-cover" />

              {it.uploading && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              {it.error && (
                <div
                  className="absolute inset-0 bg-red-600/80 flex flex-col items-center justify-center text-white text-[10px] p-1 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    retry(it);
                  }}
                >
                  <span>Gagal</span>
                  <span className="underline">Tap retry</span>
                </div>
              )}

              {!it.uploading && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeAt(it.id);
                  }}
                  className="absolute top-0.5 right-0.5 bg-black/60 text-white rounded-full w-5 h-5 text-xs leading-none"
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
