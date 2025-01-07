import "../assets/css/styles.css";

const footer = () => {
  return (
    <section>
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-area-content">
                <img
                  src="./asset/Logo/OSPC-Logo.WebP"
                  alt="logo"
                  className="main-logo"
                />
                <p>
                  Online Science Project Competition (OSPC) merupakan ajang adu
                  kemampuan para peneliti muda berusia 13-20 tahun dalam
                  memperlihatkan hasil penelitian yang telah mereka lakukan
                  dalam bentuk karya tulis ilmiah.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 mt-3 mt-lg-0">
              <div className="single-footer-widget">
                <h5>Tautan Informasi</h5>

                <ul className="footer-quick-links list-unstyled">
                  <li>
                    <a href="https://iysa.or.id" target="_blank">
                      Website Utama Kami
                    </a>
                  </li>
                  <li>
                    <a
                      href="/homeregist"
                    >
                      Tautan Registrasi
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h5>Informasi Tentang Kami</h5>

                <ul className="footer-quick-links address-link list-unstyled">
                  <li>
                    <a href="https://goo.gl/maps/gEzFyE9gtXEyRfA26">
                      <i className="fa fa-map-marker me-1"></i> Jl. Kemang RT 03 RW 06
                    </a>
                  </li>
                  <li>
                    <a href="mailto:iysa.ospc@gmail.com">
                      <i className="fa fa-envelope me-1"></i>
                      iysa.ospc@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="https://api.whatsapp.com/send/?phone=6288213248890&text&type=phone_number&app_absent=0" target="_blank">
                      <i className="fa fa-phone me-1"></i> +6288213248890
                    </a>
                  </li>
                  <li>
                    <a href="https://api.whatsapp.com/send/?phone=6281770914129&text&type=phone_number&app_absent=0" target="_blank">
                      <i className="fa fa-phone me-1"></i> +6281770914129
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h5>Berlangganan Sosial Media Kami Untuk Mengikuti</h5>
                <ul className="footer-quick-links sosmed list-unstyled">
                  <li>
                    <a
                      href="https://www.facebook.com/Indonesia-Young-scientist-Association-106523338057326"
                      className="facebook"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/+6281770914129"
                      className="twitter"
                      target="_blank"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa/"
                      className="linkedin"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/iysa_official"
                      className="instagram"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr style={{ border: "3px solid" }} />
          <div className="copyright-area">
            <div className="row align-items-center">
              <p className="text-center">
                <i className="far fa-copyright me-1"></i>2024 OSPC Official. All
                Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default footer;
