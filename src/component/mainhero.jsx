import "../assets/css/styles.css"



const mainhero = () => {
            return (
                // Navbar 
                <section className="main-hero">
                    <div className="container">
                        <div className="hero-wrapper row">
                            <div className="content-text col-lg-6">
                                <div>
                                    {/* <h1 className="fw-weight-800">Segera Hadir 2026</h1> */}
                                    <h1 className="fw-weight-800">Buka Pendaftaran 2026</h1>
                                    <hr style={{ border: '3px solid' }} />
                                    <p>Ikuti OSPC 2026 dan jadilah bagian dari peneliti muda Indonesia yang berkompetisi di tingkat dunia di event-event IYSA!</p>
                                </div>
                                <div className="mt-2">
                                    <a href="/" className="btn btn-primary btn-action">Daftar disini!!</a>
                                </div>
                            </div>
                            <div className="content-img col-lg-6">
                                <div className="img-logo mx-auto">
                                    <img src="./asset/Logo/OSPC-Logo.WebP" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        };
        
        export default mainhero;
