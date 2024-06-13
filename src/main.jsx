import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages";

import Faq from "./pages/faq.jsx";
import Lowtahun from "./pages/low/lowtahun.jsx";
import Jenjang24 from "./pages/low/2024/jenjang24.jsx";
import Jenjang23 from "./pages/low/2023/jenjang23.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/faq",
    element: <Faq />
  },
  {
    path: "/lowtahun",
    element: <Lowtahun />
  },
  {
    path: "/jenjang24",
    element: <Jenjang24 />
  },
  {
    path: "/jenjang23",
    element: <Jenjang23 />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
