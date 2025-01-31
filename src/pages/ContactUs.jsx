import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Link, Links } from "react-router";
const ContactUs = () => {
  return (
    <div className="text-black text-3xl">
      <p className="font-semibold text-2xl">Follow Us: </p>
      <Link to="https://www.facebook.com" className="flex items-center gap-2">
        <FaFacebook />
        <p className="text-sm">Facebook</p>
      </Link>
      <Link to="https://www.x.com" className="flex items-center gap-2">
        <FaTwitter />
        <p className="text-sm">Twitter</p>
      </Link>
      <Link to="https://www.youtube.com" className="flex items-center gap-2">
        <FaYoutube />
        <p className="text-sm">Youtube</p>
      </Link>
      <Link to="https://www.linkedin.com" className="flex items-center gap-2">
        <FaLinkedin />
        <p className="text-sm">Linkedin</p>
      </Link>
    </div>
  );
};

export default ContactUs;
