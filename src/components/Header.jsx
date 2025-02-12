import React from "react";
import logo from "../assets/image/event.png";
import { Link } from "react-router-dom";
import Navbar from "../pages/Navbar";
function Header() {
  return (
    <div className="flex items-center justify-between w-300 ml-39 h-15 mb-2 bg-gradient-to-r from-gray-300 to-gray-900">
      <img className="w-[100px]  ml-10 " src={logo} />
      <Navbar />
    </div>
  );
}

export default Header;
