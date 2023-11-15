import React from 'react';
import BGIMAGE from '../../assets/bg-component1.svg';
import forHim from '../../assets/forHim.svg';
import forHer from '../../assets/forHer.svg';
import Skeleton from 'react-loading-skeleton';

const Banner = () => {
  return (
    <div>
      {" "}
      <div className="relative">
     
        <img
          src={BGIMAGE}
          alt="Banner Image"
          className="w-full h-auto object-cover"
        />
     
         
        <div className="absolute inset-0  lg:bottom-0 md:bottom[-63px] bottom-0 flex flex-col justify-center items-center text-white bg-opacity-0 bg-black">
          <div className="text-3xl text-center">
            <h1 className="animate-fade-down animate-once animate-duration-[1800ms] animate-delay-150 animate-ease-in text-lg md:text-5xl lg:text-6xl font-normal font-Robot leading-tight">
              STYLE IS A CHOICE.
              
            </h1>
            <div className="text-lg gap-1 md:gap-4 flex flex-col">
              <div className="animate-fade-down animate-once animate-duration-[1800ms] animate-delay-150 animate-ease-in md:p-4 col-start-2 col-span-3 font-normal font-Robot text-sm md:text-xl leading-7">
                Make Yours.
              </div>
              <div className='hidden md:flex justify-around'>
                <button className="text-bg-footer bg-white rounded-3xl p-0.5 md:p-1.5  col-end-6 col-span-3  font-Robot font-normal text-[0.50rem] md:text-sm leading-6">
                  Rent Womens Wear
                </button>
                <button className="text-bg-footer bg-white rounded-3xl p-0.5 md:p-1.5  col-end-6 col-span-3 font-Robot font-normal text-[0.50rem] md:text-sm leading-6">
                  Rent Womens Wear
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col text-left gap-1 md:gap-5 absolute bottom-0 left-0 p-4 lg:p-20 md:w-2/3 ">
            <h2 className="text-md md:text-2xl lg:text-4xl xl:text-5xl font-normal font-Robot leading-tigh">
              THE FUTURE OF YOUR WARDROBE
            </h2>
            <div className="flex flex-row justify-around w-full xl:w-6/12">
              <p className="text-bg-footer bg-white rounded-3xl p-0.5 md:p-1.5  col-end-6 col-span-3 font-Robot font-normal  text-[0.50rem] md:text-sm leading-6">
                Rent Womens Wear
              </p>
              <p className="text-bg-footer bg-white rounded-3xl p-0.5 md:p-1.5 col-end-6 col-span-3 font-Robot font-normal  text-[0.50rem] md:text-sm leading-6">
                Rent Womens Wear
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
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
