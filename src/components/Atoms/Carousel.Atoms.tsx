import React, { useState, useRef } from "react";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import Icons from "../../components/Icons";

type TestProps = {
  image: {
    original: string;
    thumbnail: string;
  }[];
};

const Carousel: React.FC<TestProps> = ({ image }) => {
  const imageGalleryRef = useRef<ImageGallery>(null);

  console.log("image :",image);

  const handleSlide = (index: number) => {
    console.log("Slide to index:", index);
  };

  const goBackward = () => {
    if (imageGalleryRef.current) {
      const currentIndex = imageGalleryRef.current.getCurrentIndex() - 1;
      imageGalleryRef.current.slideToIndex(currentIndex);
      handleSlide(currentIndex);
    }
  };

  const goForward = () => {
    if (imageGalleryRef.current) {
      const currentIndex = imageGalleryRef.current.getCurrentIndex() + 1;
      imageGalleryRef.current.slideToIndex(currentIndex);
      handleSlide(currentIndex);
    }
  };

  return (
    <div className="relative">
      <div className="carousel-container flex justify-center">
        <button className="left-arrow" onClick={goBackward}>
          <Icons variant="leftArrow" />
        </button>

        <div className="wrapper">
          <ImageGallery
            ref={imageGalleryRef}
            items={image}
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
          />
        </div>

        <button className="right-arrow" onClick={goForward}>
          <Icons variant="rightArrow" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
