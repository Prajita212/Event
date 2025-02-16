import React from "react";
import BodySection from "../pages/BodySection";

function Section() {
  return (
    <div>
      <div className="hidden md:flex items-center ml-39">
        <BodySection />
      </div>
      <div className="flex md:hidden gap-5 ">
        <BodySection />
      </div>
    </div>
  );
}

export default Section;
