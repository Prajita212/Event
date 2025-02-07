import React from "react";
import ContactUs from "../pages/ContactUs";

function Footer() {
  return (
    <div className="flex justify-between p-8 text-sm ">
      <div>
        <h2 className="font-semibold text-lg">Popular Courses</h2>
        <li>Information technology</li>
        <li>Creative arts design and communication</li>
        <li>Business commerce & management</li>
        <li>Art humanities & social sciences</li>
        <li>Health & Allied Health</li>
        <li>Architecture and Building</li>
      </div>
      <div>
        <h2 className="font-semibold text-lg">Our Services</h2>
        <ul>Guidance On Scholarship</ul>
        <ul>Application Services</ul>
        <ul>Student Health Cover</ul>
        <ul>VISA Counselling</ul>
        <ul>Admission Counselling</ul>
      </div>
      <div>
        <h2 className="font-semibold text-lg">Also Visit</h2>
        <ul>Study in USA</ul>
        <ul>Study in Canada</ul>
        <ul> Study in Germany</ul>
      </div>
      <ContactUs />
    </div>
  );
}

export default Footer;
