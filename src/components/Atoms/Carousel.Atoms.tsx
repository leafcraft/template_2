import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselZoom = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const openZoom = () => {
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
  };

  return (
    <div className="w-full max-w-screen-md mx-auto">
      <Carousel
        showThumbs={false}
        selectedItem={currentSlide}
        onChange={handleSlideChange}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              onDoubleClick={openZoom}
              className="cursor-pointer"
            />
          </div>
        ))}
      </Carousel>
      <div className="text-center mt-4">
        <p>
          Image {currentSlide + 1} of {images.length}
        </p>
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
