import React from "react";
import IMage from "../assets/table.png";
import MobileImage from "../assets/table-mobile.png";

const Differentiate = () => {
  return ( 
    <div className="w-full max-w-7xl mx-auto h-full bg-white lg:py-20 md:py-16 px-5 py-10  flex flex-col lg:gap-24  md:gap-16 gap-6">
      <div className="text-zinc-600 font-bold tracking-tighter text-6xl max-md:text-4xl">
        Why are we different?
      </div>
      <img src={IMage} alt="" className="md:block hidden w-full h-auto object-cover select-none" />
      <img src={MobileImage} alt="" className="md:hidden block w-full h-auto object-cover select-none" />
    </div>
  );
};

export default Differentiate;
