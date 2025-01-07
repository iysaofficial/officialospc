import "../assets/css/styles.css";

const contact = () => {
  return (
    // contact
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <h1 className="">Hubungi Kami</h1>
          <hr style={{ border: "3px solid" }} />
        </div>
        <div className="contact-input row">
          <form
            action="https://formspree.io/f/xoqoddrr"
            method="POST"
            className="input-wrapper col-lg-8 mb-3 mb-lg-0"
          >
            <p>
              Silakan isi formulir di bawah ini untuk mengirimkan email kepada
              kami dan kami akan membalas Anda sesegera mungkin.
            </p>
            <div className="input-first mt-3">
              <input
                className="input-box"
                type="text"
                name="name"
                placeholder="Nama Lengkap"
              />
              <input
                className="input-box"
                type="email"
                name="email"
                required
                placeholder="Alamat Email"
              />
            </div>
            <div className="input-second mt-3">
              <textarea
                type="text"
                rows={4}
                className="form-control"
                name="massage"
                required
                placeholder="Pesan / Pertanyaan"
              />
            </div>
            <div className="btn-submit">
              <button type="submit" className=" btn btn-primary btn-action">
                Kirim
              </button>
            </div>
          </form>
          <div className="contact-info col-lg-4">
            <h4>Kontak Info</h4>
            <div className="contact-text">
              <p className="">
                <span className="icon">
                  <i className="fas fa-map-marker"></i>
                </span>{" "}
                Alamat :
              </p>
              <a href="https://maps.app.goo.gl/J4HZU8aZeLwXx7Fx7">
                Jalan Kemang RT. 03 RW. 06 Pasir Putih, Kecamatan Sawangan, Kota
                Depok, Jawa Barat 16511, Indonesia.
              </a>
            </div>
            <div className="contact-text mt-2">
              <p className="">
                <span className="icon">
                  <i className="fas fa-phone-volume"></i>
                </span>{" "}
                No Telp :
              </p>
              <a href="https://api.whatsapp.com/send/?phone=6281770914129&text&type=phone_number&app_absent=0">+6281770914129</a>
              <a
                href="https://api.whatsapp.com/send/?phone=6288213248890&text&type=phone_number&app_absent=0"
                target="_blank"
              >+6288213248890
              </a>
            </div>
            <div className="contact-text mt-2">
              <p className="">
                <span className="icon">
                  <i className="fas fa-envelope"></i>
                </span>{" "}
                Alamat Email :
              </p>
              <a href="mailto:ospc.iysa@gmail.com">iysa.ospc@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="contact-wrapper-icon row"></div>
      </div>
    </section>
  );
};

export default contact;
