import "../assets/css/mainhero.css"


const about = () => {
            return (
                // about 
                <section className="about-section" id="about">
                    <div className="container">
                        <div className="about-wrapper row">
                            <h1 className="text-center">Latar Belakang</h1>
                            <hr style={{ border: '3px solid' }} />
                            <div className="content-text col-lg-6">
                                <div className="mb-3 mb-lg-0">
                                    <p>Online Science Project Competition (OSPC) merupakan ajang adu kemampuan para peneliti muda berusia 13-20 tahun dalam mempresentasikan hasil penelitian yang telah mereka lakukan. Melalui Online Science Project Competition 2024, para peneliti muda berkesempatan untuk memaparkan
                                    hasil karya mereka, memperkaya wawasan, meningkatkan kemampuan berkomunikasi dan berkesempatan untuk berkompetisi di tingkat dunia karena juara dari OSPC 2024 secara otomatis akan mewakili Indonesia dalam ajang internasional di event-event IYSA.</p>
                                </div>
                            </div>
                            <div className="content-img col-lg-6">
                                <div className="img-logo">
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/B3Mvydb9eRo?si=_uxoAeFAdmjGfdcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        };
        
        export default about;