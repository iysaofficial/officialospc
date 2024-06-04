import React from "react";
import Navigation from "../../component/navigation.jsx";
import Footer from "../../component/footer.jsx";

const lowtahun = () => {
  return (
    <>
      <Navigation />
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="faq-title text-center pb-3">
              <h2>Daftar Pemenang</h2>
              <div className="">
                <h3>Pilih berdasarkan tahun acara yang Anda ikuti</h3>
                <a href="/jenjang24" className="btn btn-action m-3">
                  2024{" "}
                </a>
                <a
                  href="https://drive.google.com/file/d/17Vsf84xLIt7DgMSkwTK34-DW_1bDekIU/view?usp=sharing"
                  target="_blank"
                  className="btn btn-action m-3"
                >
                  2023{" "}
                </a>
                <a
                  href="https://drive.google.com/file/d/177z2HpP2RftH7_E3gkaocklo1pofcxYP/view?usp=sharing"
                  target="_blank"
                  className="btn btn-action m-3"
                >
                  2022{" "}
                </a>
                <a
                  href="https://drive.google.com/file/d/1Qzzg50LPdh83hRQEVtD5bXsMEL7xtu42/view?usp=drive_link"
                  target="_blank"
                  className="btn btn-action m-3"
                >
                  2021{" "}
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

export default lowtahun;
