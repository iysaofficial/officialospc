import "../assets/css/styles.css";
import { usePendaftaran, formatTanggal } from "../lib/pendaftaran";

/* Tombol dan judul mengikuti togel pendaftaran di dasbor IYSA. */
const MainHero = () => {
  const { memuat, identitas, keadaan } = usePendaftaran();
  const tahun = identitas?.tahun ?? "2027";

  const judul = keadaan === "buka" ? `Pendaftaran OSPC ${tahun} Dibuka` : `Segera Hadir ${tahun}`;

  let tombol;
  if (memuat) {
    tombol = <span className="btn btn-primary btn-action disabled">Memuat…</span>;
  } else if (keadaan === "buka") {
    tombol = <a href="/homeregist" className="btn btn-primary btn-action">Daftar di sini</a>;
  } else if (keadaan === "belum") {
    tombol = <span className="btn btn-primary btn-action disabled">
      Pendaftaran dibuka {formatTanggal(identitas?.pendaftaran_buka)}
    </span>;
  } else if (keadaan === "tutup") {
    tombol = <span className="btn btn-primary btn-action disabled">Pendaftaran ditutup</span>;
  } else {
    tombol = <a href="/homeregist" className="btn btn-primary btn-action">Info pendaftaran</a>;
  }

  return (
    <section className="main-hero">
      <div className="container">
        <div className="hero-wrapper row">
          <div className="content-text col-lg-6">
            <div>
              <h1 className="fw-weight-800">{judul}</h1>
              <hr style={{ border: "3px solid" }} />
              <p>Ikuti OSPC {tahun} dan jadilah bagian dari peneliti muda Indonesia yang berkompetisi di tingkat dunia di event-event IYSA!</p>
            </div>
            <div className="mt-2">{tombol}</div>
          </div>
          <div className="content-img col-lg-6">
            <div className="img-logo mx-auto">
              <img src="./asset/Logo/OSPC-Logo.WebP" alt="OSPC" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
