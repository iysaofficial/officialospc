import "../assets/css/styles.css"

const footer = () => {
    return (
                <section>
                    <footer class="footer-section">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="footer-area-content">
                                            <img
                                                src="./src/assets/Logo/OSPC-Logo.WebP"
                                                alt="logo"
                                                class="main-logo"
                                            />
                                            <p>
                                            OSPC 2024 adalah ajang kompetisi bagi peneliti muda Indonesia berusia 13-20 tahun untuk mempresentasikan penelitian mereka, memperluas pengetahuan, dan mengasah kemampuan berkomunikasi. Juara OSPC 2024 akan mewakili Indonesia di ajang internasional IYSA, membuka peluang bersaing di tingkat global.
                                            </p>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-6 col-sm-6 mt-3 mt-lg-0">
                                        <div class="single-footer-widget">
                                            <h5>Tautan Informasi</h5>

                                            <ul class="footer-quick-links list-unstyled">
                                                <li><a href="https://iysa.or.id" target="_blank">Website Utama Kami</a></li>
                                                <li>
                                                    <a href="https://registasi-ospc-2024.vercel.app/" target="_blank">Link Registrasi</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="single-footer-widget">
                                            <h5>Our Information</h5>

                                            <ul class="footer-quick-links address-link list-unstyled">
                                                <li>
                                                    <a href="https://goo.gl/maps/gEzFyE9gtXEyRfA26"
                                                        ><i class="fa fa-map-marker me-1"></i> Jl. Kemang No.
                                                        63 RT 03 RW 06</a
                                                    >
                                                </li>
                                                <li>
                                                    <a href="mailto:iysa.ospc@gmail.com"
                                                        ><i class="fa fa-envelope me-1"></i>
                                                        ospc.iysa@gmail.com
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="tel:+6281770914129"
                                                        ><i class="fa fa-phone me-1"></i> +6281770914129
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="single-footer-widget">
                                            <h5>Berlangganan Sosial Kami Untuk Mengikuti</h5>
                                            <ul class="footer-quick-links sosmed list-unstyled">
                                                <li>
                                                    <a href="https://www.facebook.com/Indonesia-Young-scientist-Association-106523338057326" class="facebook" target="_blank"
                                                        ><i class="fab fa-facebook-f"></i
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a href="https://wa.me/+6281770914129" class="twitter" target="_blank"
                                                        ><i class="fab fa-whatsapp"></i
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa/" class="linkedin" target="_blank"
                                                        ><i class="fab fa-linkedin-in"></i
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a href="https://instagram.com/iysa_official" class="instagram" target="_blank"
                                                        ><i class="fab fa-instagram"></i
                                                    ></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <hr style={{ border: '3px solid' }} />
                                <div class="copyright-area">
                                    <div class="row align-items-center">
                                            <p className="text-center">
                                                <i class="far fa-copyright me-1"></i>2024 OSPC Official. All
                                                Rights Reserved
                                            </p>

                                        {/* <div class="col-lg-6 col-md-6">
                                            <ul className="list-unstyled">
                                                <li><a routerLink="/">Privacy Policy</a></li>
                                                <li><a routerLink="/">Terms & Conditions</a></li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </section>
            );
        };
        
        export default footer;