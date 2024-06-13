import React from "react";
import Navigation from "../../../component/navigation.jsx";
import Footer from "../../../component/footer.jsx";

const Jenjang23 = () => {
  return (
    <>
      <Navigation />
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="faq-title text-center pb-3">
              <h2>Daftar Pemenang 2023</h2>
              <div className="">
                <h3>Pilih berdasarkan jenjang event yang kalian ikuti</h3>
                <a
                  href="https://drive.google.com/file/d/1o86f_rdhOGom7XQEfqiIbwkWm6GuKN1s/view?usp=sharing"
                  target="_blank"
                  className="btn btn-action m-3"
                >
                  Universitas{" "}
                </a>
                <a
                  href="https://drive.google.com/file/d/1c55AfiqkU5WmN1tmNBFQ2STfeOcGhl_m/view?usp=sharing"
                  target="_blank"
                  className="btn btn-action m-3"
                >
                  Sekolah Menengah Atas (SMA){" "}
                </a>
                <a
                  href="https://drive.google.com/file/d/1HZGogI4Py0JB5gjXHaoEe9Nvo91Y_L7P/view?usp=sharing"
                  target="_blank"
                  className="btn btn-action m-3"
                >
                  Sekolah Menengah Pertama (SMP){" "}
                </a>
                <a
                  href="https://drive.google.com/file/d/1gfqkMxbHBQ73q5sPPL_Earys_uy8dbYt/view?usp=sharing"
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

export default Jenjang23;
