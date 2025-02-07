import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import ContactUs from "./ContactUs";

function Navbar() {
  return (
    <div className="text-md text-white font-semibold mr-20 ">
      <ul className="flex space-x-6">
        <Link to="/" className=" hover:underline underline-offset-4">Home</Link>

        <Link to="/about" className=" hover:underline underline-offset-4"element={<About />}>
          About
        </Link>

        <Link to="/contact" className=" hover:underline underline-offset-4">Contact Us</Link>
        <Link to="/gallery"className=" hover:underline underline-offset-4">Gallery</Link>
        <Link to="/services" className=" hover:underline underline-offset-4">Services</Link>
        <Link to ="/login" className=" hover:underline underline-offset-4">Login</Link>
      </ul>
    </div>
  );
}

export default Navbar;
