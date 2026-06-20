// Ganti dengan URL Web App hasil deploy Apps Script kamu.
export const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx8e7SOdpeaCl6oGq6MysfQTBoPLJVs5Dv33kD_IqZKz_HSg9mcbvoKt2VVUNdyqO4DXg/exec";

/**
 * submitForm - kirim payload JSON ke Apps Script.
 * type: "mitra" | "driver"
 * fields: object field text biasa
 * files: object { fieldName: "https://...publicUrl" | ["https://...", "https://..."] }
 */
export async function submitForm(type, fields, files) {
  const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    // text/plain menghindari CORS preflight, tetap bisa di-parse JSON.parse di server.
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ type, fields, files }),
  });

  if (!res.ok) throw new Error("Gagal mengirim data (network)");
  const data = await res.json();
  if (!data.ok) throw new Error(data.message || "Gagal mengirim data");
  return data;
}
