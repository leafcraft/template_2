import React from 'react';

const Secondcomponent = () => {
  return (
    <div>
      <div id="main" className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center md:justify-evenly bg-bg-footer text-white">
        <div className="p-4 md:col-span-1 lg:col-span-2 xl:col-span-3">
          Browse through our exclusive collection and pick an outfit to lease with ease.
        </div>
        <div className="p-4 md:col-span-1 lg:col-span-2 xl:col-span-3">
          Select your size, the preferred duration, and the date of delivery.
        </div>
        <div className="p-4 md:col-span-1 lg:col-span-2 xl:col-span-3">
          Amp up your game with accessories from our specially curated collection to complement your look.
        </div>
        <div className="p-4 md:col-span-1 lg:col-span-2 xl:col-span-3">
          Sit back and relax after check out as we custom fit the outfit to your measurements for a hassle-free experience.
        </div>
        <div className="p-4 md:col-span-1 lg:col-span-2 xl:col-span-3">
          Own your look and turn heads wherever you go. Don't worry, the pick-up is on us!
        </div>
      </div>
    </div>
  );
};

export default Secondcomponent;
