import React from "react";
import TRYOUT from "../assets/Hero.jpeg";

const Tryout = () => {
  return (
    <div className="bg-[#1D1D20] flex flex-col self-stretch pt-10 px-5 max-md:max-w-full "  id="Trynow">
      {/* <div className="flex max-w-full w-full min-h-[839px] flex-col self-center ml-px mt-3 px-5 py-10 max-md:max-w-full max-md:min-h-[482px]"> */}
      <div className="flex-col flex max-w-full w-full min-h-[839px] self-center ml-px mt-3 px-5 py-10 max-md:max-w-full max-md:min-h-[482px]">
        <p className="text-white text-center font-bold tracking-tighter text-6xl self-center -ml-0.5 mt-0.5 max-md:text-4xl">
          Try it out !
        </p>
        <div className="justify-center text-white text-opacity-80 text-center text-2xl self-center -ml-px mt-5 max-md:max-w-full">
          There should be more content here so we
          <br />
          could pull in more people.
        </div>
        <div className="justify-center items-start shadow-[1px_1px_1px_0px_rgba(255,255,255,0.25)_inset] bg-white flex max-w-full w-[164px] flex-col self-center md:mt-14 mt-6 mb-5  px-5 py-4 rounded-[64px]">
          <a href="https://calendly.com/vishnu-97/30min" target="_blank" className="text-zinc-600 text-center text-sm self-center my-auto ">
            Schedule a demo
          </a>
        </div>
        {/* <div className=" flex-grow w-full  h-full "> */}
          <img src={TRYOUT} alt=""  className=" h-full lg:w-1/2 sm:w-3/4 w-full mx-auto object-contain rounded-xl"/>
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Tryout;