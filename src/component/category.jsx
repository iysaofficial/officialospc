import "../assets/css/styles.css"


const category = () => {
            return (
                // category 
                <section className="category-section">
                    <div className="container">
                        <div className="category-wrapper">
                            <h1 className="text-center">Kategori</h1>
                            <hr style={{ border: '3px solid #fff' }} />
                        </div>
                        <div className="category-wrapper-icon row">
                            <div className="category-icon col-lg-4 col-6 text-center">
                                <img className="img-fluid" src="./src/assets/category/LifeScience.WebP" alt="" />
                                <p className="text-center">Life Science</p>
                            </div>
                            <div className="category-icon col-lg-4 col-6 text-center">
                                <img className="img-fluid" src="./src/assets/category/SocialScience.WebP" alt="" />
                                <p>Social Science</p>
                            </div>
                            <div className="category-icon col-lg-4 col-6 text-center">
                                <img className="img-fluid" src="./src/assets/category/EngineeringPhysics.Webp" alt="" />
                                <p className="text-center">Physics and Engineering</p>
                            </div>
                            {/* <div className="category-icon text-center col-lg-4">
                                <img className="img-fluid" src="./src/assets/category/LifeScience.WebP" alt="" />
                                <h3>Life Science</h3>
                            </div>
                            <div className="category-icon text-center col-lg-4">
                                <img className="img-fluid" src="./src/assets/category/SocialScience.WebP" alt="" />
                                <h3>Social Science</h3>
                            </div>
                            <div className="category-icon text-center col-lg-4">
                                <img className="img-fluid" src="./src/assets/category/EngineeringPhysics.Webp" alt="" />
                                <h3>Physics and Engineering</h3>
                            </div> */}
                        </div>
                    </div>
                </section>
            );
        };
        
        export default category;