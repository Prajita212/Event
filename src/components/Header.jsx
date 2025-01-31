import React from "react";
import logo from "../assets/image/event.png";
import { Link } from "react-router-dom";
import Navbar from "../pages/Navbar";
function Header() {
  return (
    <div className="flex items-center justify-between  mx-0">
      <img className="w-[200px]  ml-10 " src={logo} />
      <Navbar />
    </div>
  );
}

export default Header;
