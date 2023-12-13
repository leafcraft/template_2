import React, { useState } from 'react';
import BGIMAGE from '../../assets/bg-signup.png';
import forHim from '../../assets/forHim.svg';
import forHer from '../../assets/forHer.svg';
import Skeleton from 'react-loading-skeleton';
import Typography from '../Atoms/Typography';

const Banner = () => {
  const [isload,setIsload] = useState(true);
  const images = [forHer, forHim, forHer, forHim,forHer, forHim];
  return (
    <div>
      {" "}
      <div className="relative">
      {isload ? (
  <img
    src={BGIMAGE}
    alt="Banner Image"
    className="w-full h-auto object-cover"
  />
) : (
  <Skeleton count={1000} />
)}
       
     
         
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
          
        </div>
      </div>
      <div className="flex flex-col lg:flex-row bg-[#312518] px-5 ">
     <div className='flex  items-center justify-center text-center '>
      <Typography variant='featuresHeader' >Choose Your Type</Typography></div>
     <div className=' flex overflow-x-scroll scrollable-div pt-3'>  {images.map((imageSrc, index) => (
        <div
          key={index} // You should use a unique key for each mapped element
          className="h-56 w-56 flex-shrink-0   p-4"
        >
          <img
            src={imageSrc}
            alt={`Image ${index + 1}`}
            className="h-full w-full object-cover object-center rounded-lg shadow-md shadow-out "
          />
        </div>
      ))}</div>
      
      </div>
      
    </div>
  );
};

export default Banner;
