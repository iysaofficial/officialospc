import React from "react";
import Navigation from "../../../component/navigation.jsx";
import Footer from "../../../component/footer.jsx";

const jenjang24 = () => {
  return (
    <>
      <Navigation />
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="faq-title text-center pb-3">
              <h2>Daftar Pemenang</h2>
              <div className="">
                <h3>Pilih berdasarkan jenjang event yang kalian ikuti</h3>
                <a
                  href="https://drive.google.com/file/d/1xYAL-S5C9M5zhDLFdzoQyoQMkth6VyjA/view?usp=sharing"
                  target="_blank"
                  className="btn btn-action m-3"
                >
                  Universitas{" "}
                </a>
                <a
                  href="https://drive.google.com/file/d/1h38sqkk46V--jIqLdQbn0ORS9w5LOE8u/view?usp=sharing"
                  target="_blank"
                  className="btn btn-action m-3"
                >
                  Sekolah Menengah Atas (SMA){" "}
                </a>
                <a
                  href="https://drive.google.com/file/d/1Nt5WElDUzXZ-otaCpXPMnAK3-Zi_r885/view?usp=sharing"
                  target="_blank"
                  className="btn btn-action m-3"
                >
                  Sekolah Menengah Pertama (SMP){" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default jenjang24;
