import { useEffect } from "react";
import Navigation from "../../component/navigation.jsx";
import Footer from "../../component/footer.jsx";
import { usePendaftaran, pasangFormulir, formatTanggal } from "../../lib/pendaftaran";

/**
 * Halaman pendaftaran OSPC.
 *
 * Saat togel di dasbor dibuka, formulir pendaftaran dasbor (daftar.js) dipasang
 * di sini — data tim, pembimbing, dan tagihan langsung masuk dasbor IYSA.
 * Saat ditutup, yang tampil keterangan, bukan tombol mati.
 */
function HomeRegist() {
  const { memuat, identitas, keadaan } = usePendaftaran();
  const tahun = identitas?.tahun ?? "";

  useEffect(() => {
    if (keadaan === "buka") pasangFormulir();
  }, [keadaan]);

  return (
    <>
      <Navigation />
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto">FORMULIR REGISTRASI</h1>
              <h3 className="mx-auto mt-5 mb-2">
                {keadaan === "buka"
                  ? `Pendaftaran OSPC ${tahun} dibuka`
                  : keadaan === "tutup"
                  ? `Pendaftaran OSPC ${tahun} ditutup`
                  : `Registrasi OSPC ${tahun}`}
              </h3>
            </div>
          </div>

          <div className="link-web mx-auto text-center">
            {memuat ? (
              <p className="m-2">Memuat informasi pendaftaran…</p>
            ) : keadaan === "buka" ? (
              <div
                data-iysa-daftar="ospc"
                data-iysa-bahasa="id"
                style={{ maxWidth: "44rem", margin: "0 auto", textAlign: "left" }}
              />
            ) : (
              <p className="mx-auto text-center m-2">
                {keadaan === "belum"
                  ? `Pendaftaran belum dibuka${identitas?.pendaftaran_buka ? ` — dibuka ${formatTanggal(identitas.pendaftaran_buka)}` : ""}. Silakan kembali lagi nanti.`
                  : keadaan === "tutup"
                  ? "Pendaftaran untuk edisi ini sudah ditutup. Ikuti Instagram @iysa_official untuk informasi edisi berikutnya."
                  : "Informasi pendaftaran belum dapat dimuat. Silakan coba beberapa saat lagi."}
              </p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomeRegist;
