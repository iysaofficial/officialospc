import React from "react";
import { useLocation, Link } from "react-router-dom";

function ThankYouIndo() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const namaLengkap = searchParams.get("namaLengkap") || "No data available";
  const projectTitle = searchParams.get("projectTitle") || "No data available";
  const category = searchParams.get("category") || "No data available";
  const namasekolah = searchParams.get("namasekolah") || "No data available";

  return (
    <div className="thankyou">
      <div>
        <h1>Terima Kasih telah mendaftar!</h1>
        <p>
          Kami menghargai partisipasi Anda dan menantikan keterlibatan Anda.
        </p>

        <table className="thankyou-table">
          <tbody>
            <tr>
              <td>
                <strong>Anggota Tim</strong>
              </td>
              <td>{namaLengkap}</td>
            </tr>
            <tr>
              <td>
                <strong>Nama Sekolah</strong>
              </td>
              <td>{namasekolah}</td>
            </tr>
            <tr>
              <td>
                <strong>Judul Proyek</strong>
              </td>
              <td>{projectTitle}</td>
            </tr>
            <tr>
              <td>
                <strong>Kategori Kompetisi</strong>
              </td>
              <td>{category}</td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>
            *Jika data muncul, tangkap layar halaman ini sebagai bukti
            pendaftaran berhasil
          </strong>
        </p>
        <Link to="/homeregist" legacyBehavior>
          <a className="btn btn-custom">Kembali ke menu pendaftaran</a>
        </Link>
      </div>
    </div>
  );
}

export default ThankYouIndo;
