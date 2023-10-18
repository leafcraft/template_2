import React, { useState } from "react";
import Heroimage from "../assets/Hero.jpeg";
import Modal from "react-modal";
import Icons from "./Icons";
Modal.setAppElement("#root");
const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div id="product" className=" lg:h-screen lg:max-h-[980px]  max-h-[840px] h-full lg:-mt-[91px]  w-screen relative    lg:pt-20 max-md:px-5 bg-blend-color bg-cover     " >
      <div className=" absolute -z-10 bg-black left-0  flex items-center self-center lg:pt-20 justify-center h-full w-full bg-blur  ">
        <div className="bg-gradient-radial aspect-square from-[#5B68DF] via-transparent to-transparent w-full h-auto lg:-ml-[1080px] -mt-24 -ml-[250px]"></div>{" "}
      </div>
      <div className="  absolute -z-10 right-0  flex flex-row-reverse pt-20 h-full w-3/4 bg-bur">
        <div className="bg-gradient-radial aspect-square from-[#73E0A9] via-transparent to-transparent w-full h-auto lg:-mr-[200px] -mr-[50px] -mb-24 lg:-mb-[250px]"></div>{" "}
      </div>
      <div className="flex flex-col z-10 mb-0 pb-0 max-md:max-w-full h-full justify-between  lg:gap-12 gap-6 bg-blur pt-24 lg:pt-28 ">
        <div className="flex flex-col max-w-2/3 mx-auto max-md:max-w-full">
          <h1 className="text-white font-bold  lg:leading-[70px] leading-none  text-center lg:text-8xl md:text-7xl text-6xl  max-sm:text-5xl">
            Mobilise information <br /> into conversations
          </h1>
          <p className="text-white text-opacity-80 lg:text-2xl md:text-xl text-lg text-center lg:mt-10 mt-6 max-md:max-w-full">
            Instant answers. <br className=" max-sm:block  hidden" /> All your
            knowledge. &lt;1% Hallucinations
          </p>
        </div>
        <a className="w-full  z-10 flex justify-center overflow-hidden  rounded-xl ">
          <img
            src={Heroimage}
            alt="SubtlAiBot Image"
            className="max-lg:max-h-[660px] h-full rounded-t-3xl relative lg:w-auto mx-auto sm:w-2/3 w-full object-contain px-auto "
          />
          <div className=" absolute h-1/2 flex items-center self-center flex-grow  mx-auto my-auto text-white ">
            <a
              href="https://www.loom.com/share/f83b20d08a5b4b7eafca44683b8b5a72?sid=1e1576f2-3fee-439d-8579-c61d7e934b23"
              target="_blank"
              className="  text-white rounded-full leading-none  w-16 h-16  hover:scale-110 duration-200 ease-in-out lg:text-3xl text-lg"
            >
              <Icons variant="play" />
            </a>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
