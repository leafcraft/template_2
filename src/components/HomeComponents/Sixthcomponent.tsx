import React from 'react';
import image from '../../assets/bg-component6.png'
import ThiredCommonComponent from '../Atoms/ThiredCommonComponent';
import poster from "../../assets/poster-component3.png";
import product1 from "../../assets/product1-component3.png";
import product2 from "../../assets/product2-component3.png";
import Product3 from "../../assets/product3-component3.png";

const Sixthcomponent = () => {
  const dynamicComponentProps = {
    smallHeader: 'New Arrivals',
    title: 'The Latest Scoop',
    subtitle: 'Get Spring ready in the freshest looks of the season',
    buttonText: 'RENT NOW',
    buttonLink: '/cart',
    images: [
      {
        src: product1,
        alt: 'Image 1',
        description: 'Description for Image 1',
      },
      {
        src: product2,
        alt: 'Image 2',
        description: 'Description for Image 2',
      },
      {
        src: Product3,
        alt: 'Image 3',
        description: 'Description for Image 3',
      },
    ],
    posterImage: poster ,
  };
  return (
    <>
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
    <ThiredCommonComponent {...dynamicComponentProps} />
    </>
  );
};

export default Sixthcomponent;
