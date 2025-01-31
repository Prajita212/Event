import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import "./index.css";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
