import "../assets/css/styles.css"
import CompFaq from "../component/CompFaq";
import Navigation from "../component/navigation";
import Footer from "../component/footer";
import Image from "../component/image";

const faq = () => {
    
            return (
                <>
                <Navigation />
                <CompFaq />
                {/* <Image /> */}
                <Footer />
                </>
            );
        };
        
        export default faq;