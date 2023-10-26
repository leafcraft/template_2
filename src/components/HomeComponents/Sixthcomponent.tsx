import React from 'react';
import image from '../../assets/bg-component6.png'
import ThiredCommonComponent from '../Atoms/ThiredCommonComponent';
import poster from "../../assets/poster-component6.png";
import product1 from "../../assets/product2-component3.png";
import product2 from "../../assets/product2-component6.png";
import Product3 from "../../assets/product3-component6.png";

const Sixthcomponent = () => {
  const dynamicComponentProps = {
    smallHeader: 'Mens Wear',
    title: 'Why Should Girls Have All The Fun?',
    subtitle: 'For the dapper and uber stylish modern man',
    buttonText: 'RENT NOW',
    buttonLink: '/cart',
    images: [
      {
        src: product1,
        alt: 'Image 1',
        description: 'Product title Rs. 99.00',
      },
      {
        src: product2,
        alt: 'Image 2',
        description: 'Cream Fully Embroidered Sherwani With Dupatta Rs. 6,500.00',
      },
      {
        src: Product3,
        alt: 'Image 3',
        description: 'Asymmetric Sherwani With Golden Dhoti Pants Rs. 5,500.00',
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
    <div id='mens_wear'><ThiredCommonComponent {...dynamicComponentProps} /></div>
    </>
  );
};

export default Sixthcomponent;
