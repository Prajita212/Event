import React from "react";
import logo from "../assets/image/event.png";
import { Link } from "react-router-dom";
import Navbar from "../pages/Navbar";
function Header() {
  return (
    <div>
      <div className="hidden lg:flex items-center justify-between w-300 ml-39 h-15 mb-2 bg-gradient-to-r from-gray-300 to-gray-900">
        <img className="w-[105px]" src={logo} />
        <div>
          <Navbar />
        </div>
      </div>
      <div className="flex lg:hidden text-sm items-center justify-between gap-3 h-15 mb-2  bg-gradient-to-r from-gray-300 to-gray-900">
        <img className="w-[60px]" src={logo} />
        <div>
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default Header;
