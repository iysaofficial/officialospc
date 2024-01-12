import Navigation from '../component/navigation.jsx'
import Footer from '../component/footer.jsx'

// Import Content
import MainHero from '../component/mainhero.jsx'
import Organized from '../component/organized.jsx'
import About from '../component/about.jsx'
import Category from '../component/category.jsx'
import Contact from '../component/contact.jsx'

import '../index.css'

function Home() {
    return (
        <>
        <Navigation />
        <MainHero />
        <Organized />
        <About />
        <Category />
        <Contact />
        <Footer />
    </>
    )
}

export default Home;