import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import ContactUs from "./ContactUs";

function Navbar() {
  return (
    <div className="text-2xl text-gray-950 font-semibold mr-20 ">
      <ul className="flex space-x-6">
        <Link to="/">Home</Link>

        <Link to="/about" element={<About />}>
          About
        </Link>

        <Link to="/contact">Contact Us</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/services">Services</Link>
        <Link to ="/login">Login</Link>
      </ul>
    </div>
  );
}

export default Navbar;
