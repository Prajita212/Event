import React from "react";
import HeroSection from "../pages/HeroSection";
import pic from "../assets/image/hero.jpg";
import About from "../pages/About";
function Section() {
  return (
    <div className="relative ">
      <div className="justify-items-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1681666713641-8d722b681edc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D"
          className="h-130 w-300 "
        />
         <div className="absolute inset-0 flex items-center justify-center mb-90 mr-120">
          <p className="text-white text-3xl font-serif font-semibold p-4 ">
            Experience the Education Fair in Nepal 2025
            <br /> Education Tree Global
            <br />
            <button
              className="bg-gray-600 text-white border-2 border-gray-400 shadow-2xl
       rounded-2xl p-2 text-sm cursor-pointer hover:bg-gray-950 "
            >
              Get a Free Registration
            </button>
          </p>
        </div>
      </div>
      <div className="flex p-6 w-300 ml-39 mt-7 h-80 justify-between">
      <About />
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWR1Y2F0aW9uYWwlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D"
          className="rounded-4xl"
        />
       
      </div>
    </div>
  );
}

export default Section;
