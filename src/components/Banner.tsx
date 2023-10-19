import React from 'react';
import BGIMAGE from '../assets/bg-component1.svg';
import forHim from '../assets/forHim.svg';
import forHer from '../assets/forHer.svg';

const Banner = () => {
  return (
    <div className="relative">
      <img
        src={BGIMAGE}
        alt="Banner Image"
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-opacity-0 bg-black">
        <div className="text-3xl text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl">Title</h1>
        </div>
        <div className="text-left">
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Title 2</h2>
          <p className="text-lg md:text-xl lg:text-2xl">Sub Title</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <img
          src={forHer}
          alt="Banner Image"
          className="w-full h-auto object-cover p-4"
        />
        <img
          src={forHim}
          alt="Banner Image"
          className="w-full h-auto object-cover p-4"
        />
      </div>
    </div>
  );
};

export default Banner;
