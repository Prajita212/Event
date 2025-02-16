import React from "react";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";

function Footer() {
  return (
    <div>
    <div className="hidden lg:flex text-sm w-450 gap-50 p-4 ml-39">
     <AboutUs/>
      <ContactUs />
    </div>
     <div className="flex flex-col lg:hidden text-xs gap-2 ml-4 w-100">
     <AboutUs/>
      <ContactUs />
    </div>
    </div>
  );
}

export default Footer;
