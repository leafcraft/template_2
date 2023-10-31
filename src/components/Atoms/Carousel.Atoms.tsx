import React, { useState } from 'react';
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
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <Icons variant='rightArrow' />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <Icons variant='leftArrow' />
      </div>
    );
  }

  const mainSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: currentSlide
  };

  const thumbnailSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider',
    focusOnSelect: true,
    afterChange: (index:any) => {
      setSelectedThumbnail(index);
      setCurrentSlide(index); // Set the current slide to the selected thumbnail
    }
  };

  const openZoom = () => {
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
  };

  return (
    <div className="w-full max-w-screen-md mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
       
        <div className="md:col-span-5">
          <Slider {...mainSettings} className="slider">
            {images.map((_image:any, index:any) => (
              <div key={index}>
                <img
                  src={images[selectedThumbnail].src}
                  alt={images[selectedThumbnail].alt}
                  onDoubleClick={openZoom}
                  className="cursor-pointer"
                />
              </div>
            ))}
          </Slider>
        </div>
        {/* <div >
          <Slider {...thumbnailSettings}>
            {images.map((_image: any, index: any) => (
              <div key={index}>
                <img src={images[index].src} alt={images[index].alt} />
              </div>
            ))}
          </Slider>
        </div> */}
      </div>
     
      {isZoomed && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative">
            <img
              src={images[currentSlide].src}
              alt={images[currentSlide].alt}
              className="max-h-screen"
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
