import React from "react";
import Navigation from "../../../component/navigation.jsx";
import Footer from "../../../component/footer.jsx";

const jenjang26 = () => {
  return (
    <>
      <Navigation />
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="faq-title text-center pb-3">
              <h2>Daftar Pemenang 2026</h2>
              <div className="">
                <h3>Pilih berdasarkan jenjang event yang kalian ikuti</h3>
                <a
                  href="https://drive.google.com/file/d/1rHA7-gx2HMy4ZAsIvMgcrzW-pslhWhoH/view?usp=sharing"
                  target="_blank"
                  className="btn btn-action m-3"
                >
                  Universitas{" "}
                </a>
                <a
                  href="https://drive.google.com/file/d/1wzFJZOgU6UxNInjwR7wBlg4bNW2EhCmu/view?usp=sharing"
                  target="_blank"
                  className="btn btn-action m-3"
                >
                  Sekolah Menengah Atas (SMA){" "}
                </a>
                <a
                  href="https://drive.google.com/file/d/1nun4LsfRhBVD8h8B4HDoYrsB0rPo5Zhh/view?usp=sharing"
                  target="_blank"
                  className="btn btn-action m-3"
                >
                  Sekolah Menengah Pertama (SMP){" "}
                </a>
                <a
                  href="https://drive.google.com/file/d/1YmAVI6_-1cz3SmYP_vayclQYRFWHQ_rp/view?usp=sharing"
                  target="_blank"
                  className="btn btn-action m-3"
                >
                  Sekolah Dasar (SD){" "}
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

export default jenjang26;
