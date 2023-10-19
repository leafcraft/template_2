import React from 'react';

const Sixthcomponent = () => {
  return (
    <div id="contact" className="bg-pink-500 bg-cover bg-center p-6 items-center flex flex-col">
      <div className="container p-6 md:p-12 lg:p-24 xl:p-32 flex flex-col justify-center items-center gap-6">
        <div>
          <p className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div>
          <p className="text-white text-lg md:text-xl lg:text-2xl">
            Lorem ipsum dolor
          </p>
        </div>

        <div className="flex gap-4 ">
          <button className="bg-pink-600 text-white py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-full hover:bg-pink-700 transition-colors duration-300">
            Lorem ipsum dolor
          </button>
          <button className="bg-pink-600 text-white py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-full hover-bg-pink-700 transition-colors duration-300">
            Lorem ipsum dolor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sixthcomponent;
