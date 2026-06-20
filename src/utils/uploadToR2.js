const WORKER_URL = "https://gobil-r2-presign.ivaldhio-hadi-setyasa-2025.workers.dev/";

export async function uploadToR2(file) {
  const presignRes = await fetch(WORKER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fileName: file.name,
      fileType: file.type,
    }),
  });

  if (!presignRes.ok) {
    console.error("PRESIGN ERROR:");
    console.error(await presignRes.text());
    throw new Error("Gagal mendapatkan presigned URL");
  }

  const { uploadUrl, publicUrl } = await presignRes.json();

  const putRes = await fetch(uploadUrl, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
    },
    body: file,
  });

  if (!putRes.ok) {
    console.error("R2 ERROR:");
    console.error("STATUS:", putRes.status);

    try {
      const errorText = await putRes.text();
      console.error(errorText);
    } catch (e) {
      console.error("Tidak bisa membaca response body", e);
    }

    throw new Error("Gagal upload file ke R2");
  }

  return publicUrl;
}