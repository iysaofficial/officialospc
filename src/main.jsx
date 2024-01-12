// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import Navigation from './component/navigation.jsx'
// import Footer from './component/footer.jsx'

// // Import Content
// import MainHero from './component/mainhero.jsx'
// import Organized from './component/organized.jsx'
// import About from './component/about.jsx'
// import Category from './component/category.jsx'
// import Contact from './component/contact.jsx'

// // import Faq from './pages/faq.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Navigation />
//     <App />
//     <MainHero />
//     <Organized />
//     <About />
//     <Category />
//     <Contact />
//     <Footer />
//   </React.StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages";
import Faq from "./pages/faq";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/faq",
    element: <Faq />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);