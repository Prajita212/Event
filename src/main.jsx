import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import "./index.css";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Admin_login from "./pages/Admin_login";
import Admin_signup from "./pages/Admin_signup";
import Admin from "./pages/Admin";

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin-login" element={<Admin_login />} />
        <Route path="/admin-signup" element={<Admin_signup />} />
        <Route path="/admin-dashboard" element={<Admin />} />
        
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

