import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Icons from '../Icons';

const CustomPaging = ({ images, currentSlide, goTo, index }) => (
  <div
    className={`custom-paging ${currentSlide === index ? 'active' : ''}`}
    onClick={() => goTo(index)}
  >
    <img src={images[index].src} alt={images[index].alt} />
  </div>
);

const CarouselZoom = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
       
        onClick={onClick}
      ><Icons variant='rightArrow' /></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
       
        onClick={onClick}
      ><Icons variant='leftArrow' /></div>
    );
  }
  

  const settings = {
    customPaging: (i, goTo) => {
      return (
        <CustomPaging images={images} currentSlide={currentSlide} goTo={goTo} index={i} />
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const openZoom = () => {
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
  };



  return (
    <div className="w-full max-w-screen-md mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="md:col-span-1">
        

        </div>
        <div className="md:col-span-5">
          <Slider {...settings}>
            {images.map((_image:any, index:any) => (
              <div key={index}>
                <img
                  src={images[index].src}
                  alt={images[index].alt}
                  onDoubleClick={openZoom}
                  className="cursor-pointer"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>
          Image {currentSlide + 1} of {images.length}
          
        </p>
      </div>
      {isZoomed && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative ">
          
            <img
              src={images[currentSlide].src}
              alt={images[currentSlide].alt}
              className="max-h-screen "
            />
            <button
              onClick={closeZoom}
              className="absolute top-2 right-2 text-white text-2xl hover:text-red-500"
            >
              &#10006;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselZoom;