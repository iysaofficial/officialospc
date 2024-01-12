import "../assets/css/styles.css"


const organized = () => {
            return (
                // organized 
                <section className="organized-section">
                    <div className="container">
                        <div className="organized-wrapper row">
                            <div className="content-text text-center">
                                <h1>Organized By</h1>
                            </div>
                            <div className="content-box">
                                <img src="./asset/Logo/LogoIYSA.WebP" alt="" />
                                {/* <img src="./src/assets/Logo/logoIYSA.WebP" alt="" />
                                <img src="./src/assets/Logo/logoIYSA.WebP" alt="" /> */}
                            </div>
                        </div>
                        <div className="supported-wrapper row mt-5">
                            <div className="content-text text-center">
                                <h1>Supported By</h1>
                            </div>
                            <div className="content-box">
                                <img src="./asset/Logo/polines.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            );
        };
        
        export default organized;