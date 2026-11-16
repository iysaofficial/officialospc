/**
 * Pendaftaran OSPC ← dasbor IYSA (API publik).
 *
 * Buka/tutup pendaftaran ditentukan TOGEL di dasbor (Workspace → Events →
 * detail edisi → Pendaftaran Terbuka), bukan kode situs ini. Edisi yang dibaca
 * adalah edisi yang di-pin di dasbor (IT → APIs), jadi pergantian tahun tidak
 * perlu mengubah satu baris pun di sini.
 *
 * Formulirnya `daftar.js` dari dasbor: tim, anggota, pembimbing, dan tagihan
 * langsung tercatat di dasbor.
 */
import { useEffect, useState } from "react";

export const SERI = "OSPC";
const API = "https://api-dashboard.iysa.or.id";

/** `buka` | `belum` | `tutup` | `tak_diketahui` — togel yang memutuskan, tanggal hanya menjelaskan. */
export function keadaanPendaftaran(id) {
  if (!id) return "tak_diketahui";
  if (id.pendaftaran_dibuka) return "buka";
  const hariIni = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Jakarta" });
  if (id.pendaftaran_tutup && hariIni > id.pendaftaran_tutup) return "tutup";
  if (id.pendaftaran_buka && hariIni < id.pendaftaran_buka) return "belum";
  return "tutup";
}

let simpanan = null;
function ambilIdentitas() {
  if (!simpanan) {
    simpanan = fetch(`${API}/api/public/v1/${SERI}?sections=identitas`, { headers: { Accept: "application/json" } })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => j?.data?.sections?.find((s) => s.key === "identitas")?.isi ?? null)
      .catch(() => null);
  }
  return simpanan;
}

/** { memuat, identitas, keadaan } */
export function usePendaftaran() {
  const [hasil, setHasil] = useState({ memuat: true, identitas: null, keadaan: "tak_diketahui" });
  useEffect(() => {
    let hidup = true;
    ambilIdentitas().then((id) => {
      if (hidup) setHasil({ memuat: false, identitas: id, keadaan: keadaanPendaftaran(id) });
    });
    return () => { hidup = false; };
  }, []);
  return hasil;
}

export function formatTanggal(iso) {
  if (!iso) return "";
  const d = new Date(`${iso.slice(0, 10)}T00:00:00+07:00`);
  return isNaN(d) ? iso : d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Jakarta" });
}

/** Muat daftar.js sekali, lalu pasang formulir ke setiap `[data-iysa-daftar]`. */
export function pasangFormulir() {
  const pasang = () => window.IysaDaftar?.pasang?.();
  if (document.querySelector('script[data-iysa-daftar-loader]')) { pasang(); return; }
  const s = document.createElement("script");
  s.src = `${API}/embed/daftar.js`;
  s.defer = true;
  s.setAttribute("data-iysa-daftar-loader", "");
  s.onload = pasang;
  document.body.appendChild(s);
}
