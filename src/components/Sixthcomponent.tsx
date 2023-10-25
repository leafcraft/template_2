import React from 'react';
import image from '../assets/bg-component6.png'

const Sixthcomponent = () => {
  return (
    <div id="contact" className="bg-pink-500 bg-cover bg-center p-6 items-center flex flex-col" style={{ backgroundImage: `url(${image})` }}>
      <div className="container p-6 md:p-12 lg:p-24 xl:p-32 flex flex-col justify-center items-center gap-6">
        <div>
          <p className="text-white font-Robot font-normal leading-none text-6xl  ">
          The Stylease Blog
          </p>
        </div>
        <div>
          <p className="text-white font-Robot font-normal leading-5 text-base md:text-base lg:text-xl">
          The latest in fashion from The Stylease
          </p>
        </div>

        <div className="flex gap-4 text-white font-Robot font-normal text-sm leading-5">
        READ NOW
        </div>
      </div>
    </div>
  );
};

export default Sixthcomponent;
