import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Link, Links } from "react-router";
const ContactUs = () => {
  return (
    <div className=" flex md:gap-45 gap-40 ">
      <div>
        <h2 className="font-semibold text-lg">Also Visit</h2>
        <ul>Study in USA</ul>
        <ul>Study in Canada</ul>
        <ul> Study in Germany</ul>
      </div>
      <div className=" text-black text-xl">
        <p className="font-semibold text-lg ">Follow Us </p>
        <Link
          to="https://www.facebook.com"
          className="flex items-center gap-2 hover:text-blue-700"
        >
          <FaFacebook />
          <p className="text-sm">Facebook</p>
        </Link>
        <Link
          to="https://www.x.com"
          className="flex items-center gap-2 hover:text-blue-500"
        >
          <FaTwitter />
          <p className="text-sm">Twitter</p>
        </Link>
        <Link
          to="https://www.youtube.com"
          className="flex items-center gap-2 hover:text-red-500"
        >
          <FaYoutube />
          <p className="text-sm">Youtube</p>
        </Link>
        <Link
          to="https://www.linkedin.com"
          className="flex items-center gap-2 hover:text-blue-600"
        >
          <FaLinkedin />
          <p className="text-sm">Linkedin</p>
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
