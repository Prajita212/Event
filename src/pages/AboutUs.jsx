import React from "react";

function AboutUs() {
  return (
    <div className="flex md:gap-45 gap-5">
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
    </div>
  );
}

export default AboutUs;
