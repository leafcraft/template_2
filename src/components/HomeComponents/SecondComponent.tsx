import React from 'react';

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
    <div className="flex flex-wrap items-center justify-center bg-bg-footer overflow-hidden p-16">
      {CardData.map((item, index) => (
        <div key={index} className="flex justify-center w-full md:w-1/2 lg:w-1/3 p-4 gap-10">
          <div className="max-w-xs rounded">
            <div className="text-center font-Robot flex flex-col gap-6">
              <div className='w-56 font-Robot font-normal text-sm md:text-lg leading-5 text-white '>{item.header}</div>

              <div className=" w-60 font-Robot font-normal text-xs md:text-base leading-5 text-white">{item.text}</div>
            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default Secondcomponent;
