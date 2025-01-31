import React from "react";
import HeroSection from "../pages/HeroSection";

function Section() {
  return (
    <div className="relative">
      <img
        src="https://media.istockphoto.com/id/1257377380/photo/business-people-group-meeting-shot-from-top-view.jpg?s=1024x1024&w=is&k=20&c=iOeWDc5_Jheg6z7cQsPH7Xzd9wiye9TYbv_kCX5OAeo="
        className="h-250 w-400"
      />

      <div className="absolute inset-0 flex justify-center mb-150 items-center">
        <p className="text-gray-950 text-5xl font-serif font-semibold p-4 ">
          Experience the Education Fair in Nepal 2025:
          <br /> Education Tree Global
          <br />
          <button
            className="bg-gray-600 text-white border-2 border-gray-400 shadow-2xl
       rounded-2xl p-2 text-xl cursor-pointer hover:bg-gray-950 "
          >
            Get a Free Registration
          </button>
        </p>
      </div>
      <HeroSection />
      <div className="flex items-center gap-50 mx-15">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWR1Y2F0aW9uYWwlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D"
          className="rounded-full"
        />
        <div className="font-serif">
          <h2 className="font-semibold text-2xl">Also Visit:</h2>
          <p>
            Study in USA <br />
            Study in Canada
            <br />
            Study in Germany
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section;
