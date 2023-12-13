import React from 'react';
import Typography from '../Atoms/Typography';
import image from '../../assets/bgCar3.jpg';

const CardData = [
  {
    header: '1. MAKE YOUR CHOICE',
    text: 'Browse through our exclusive collection and pick an outfit to lease with ease.',
  },
  {
    header: '2. THE DREAM FIT',
    text: 'Select your size, the preferred duration, and the date of delivery.',
  },
  {
    header: '3. STYLE YOUR LOOK',
    text: 'Amp up your game with accessories from our specially curated collection to complement your look.',
  },
  {
    header: '4. DELIVERY TO YOUR DOORSTEP',
    text: 'Sit back and relax after checkout as we custom fit the outfit to your measurements for a hassle-free experience.',
  },
  {
    header: '5. LOOK PICTURE PERFECT',
    text: "Own your look and turn heads wherever you go. Don't worry, the pick-up is on us!",
  },
];


const Secondcomponent = () => {
  return (
    <>
    <div id="contact" className="bg-pink-500 bg-cover bg-center p-6 items-center flex flex-co l order-start" style={{ backgroundImage: `url(${image})` }}>
      <div className="container p-6 md:p-12 lg:p-24 xl:p-32 flex flex-col justify-center items-center gap-6">
        <div>
          <p className="text-white font-Robot font-normal leading-none text-6xl  text-center">
          The Stylease Blog
          </p>
        </div>
        <div>
          <p className="text-white font-Robot font-normal leading-5 text-base md:text-base lg:text-xl">
          The latest in fashion from The Stylease
          </p>
        </div>

        <div className="flex gap-4 text-white bg-black rounded-lg p-5 shadow-lg shadow-white font-Robot font-normal text-sm leading-5">
        READ NOW
        </div>
      </div>
    </div>
    <div className="flex flex-wrap items-center justify-center bg-bg-footer overflow-hidden p-16">
      {CardData.map((item, index) => (
        <div key={index} className="flex justify-center w-full md:w-1/2 lg:w-1/3 p-4 gap-10">
          <div className="max-w-xs rounded">
            <div className="text-center font-Robot flex flex-col gap-6">
              <Typography variant='featuresHeader' >{item.header}</Typography>
              <Typography variant='featuresHeader' className=' w-60 text-xs md:text-base' >{item.text}</Typography>
            </div>
          </div>
        </div>
      ))}
      
    </div>
    </>
   
  );
};

export default Secondcomponent;
