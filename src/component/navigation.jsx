import NavDropdown from "react-bootstrap/NavDropdown";

// Import CSS
import "../assets/css/styles.css";

const navigation = () => {
  const handleAboutClick = (e) => {
    e.preventDefault();

    // Mendapatkan id dari href
    const targetId = e.target.getAttribute("href").substring(1);

    // Mendapatkan elemen dengan id "about"
    const targetElement = document.getElementById(targetId);

    // Scroll ke elemen tersebut
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    // Navbar
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <div className="container">
          <img src="./asset/Logo/OSPC-Logo.WebP" width="100" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="/">
                Utama
              </a>
              <a className="nav-item nav-link" href="/#about">
                Tentang
              </a>
              {/* <a className="nav-item nav-link" href="#">Liputan Media</a> */}
              <NavDropdown title="Galeri" id="nav-dropdown">
                <NavDropdown.Item
                  eventKey="3.1"
                  href="https://drive.google.com/drive/folders/12NlMzG5aGikdjkfiZWr8DkTf3kP3ts6y?usp=drive_link"
                  target="_blank"
                >
                  2023
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="3.2"
                  href="https://drive.google.com/drive/folders/1SKKSld11PoC9FdNb62t0aBWsorrMzB0T?usp=sharing "
                  target="_blank"
                >
                  2022
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="3.3"
                  href="https://drive.google.com/drive/folders/13hKaXwcUTJctuG07e7YjrWhKwMg4IqWK?usp=sharing"
                  target="_blank"
                >
                  2021
                </NavDropdown.Item>
                {/* <NavDropdown.Divider />
                                        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>
              <NavDropdown title="Kurasi" id="nav-dropdown">
              <NavDropdown.Item
                  eventKey="4.1"
                  href="https://drive.google.com/drive/folders/1lAdeJ8FXjoU4ySAcQqZMTBkWZb_4DIZF?usp=drive_link"
                  target="_blank"
                >
                  2024
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="4.1"
                  href="https://drive.google.com/drive/folders/1bBXVRxZOhlbPvyKZ4lM0irgOPOZISBZw?usp=sharing"
                  target="_blank"
                >
                  2023
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="4.2"
                  href="https://drive.google.com/drive/folders/1TVp5jP9C_CSNBWLncR0IFH4_kwiL-L9m?usp=sharing"
                  target="_blank"
                >
                  2022
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="4.3"
                  href="https://drive.google.com/drive/folders/15mh-RGRblGzinXEGvSLY6E77M1JJmMgh?usp=sharing
                                        2022"
                  target="_blank"
                >
                  2021
                </NavDropdown.Item>
                {/* <NavDropdown.Divider />
                                        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>
              <a className="nav-item nav-link" href="/lowtahun">
                Daftar Pemenang{" "}
              </a>
              <NavDropdown title="Sertifikat" id="nav-dropdown">
                <NavDropdown.Item
                  eventKey="4.1"
                  href="https://drive.google.com/drive/folders/1aFsn1EYvInUzGqU51Vcl5sc--6lUXhO1?usp=sharing"
                  target="_blank"
                >
                  Sertifikat Supervisor
                </NavDropdown.Item>
              </NavDropdown>
              <a className="nav-item nav-link" href="/faq">
                FAQ{" "}
              </a>
              <a className="nav-item nav-link" href="/#contact">
                Kontak{" "}
              </a>
            </div>
            <div className="ms-lg-3">
              <a
                href="https://drive.google.com/file/d/1TJu8FK3VoycIMHv0qAJ0zWXSBeKi3-Jf/view?usp=sharing"
                target="_blank"
                className="btn btn-primary btn-action"
              >
                {" "}
                Buku Panduan{" "}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default navigation;
