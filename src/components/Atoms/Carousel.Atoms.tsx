import React, { useState, useRef } from "react";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import img7 from '../../assets/products/img7.png';
import img8 from '../../assets/products/img8.png';
import Icons from "../../components/Icons";

type TestProps = {
  // Define props if any
};

const Carousel: React.FC<TestProps> = () => {
  const [images] = useState<ReactImageGalleryItem[]>([
    {
      original: img7,
      thumbnail: img7,
    },
    {
      original: img8,
      thumbnail: img8,
    },
    {
      original: img7,
      thumbnail: img7,
    }
  ]);



  const imageGalleryRef = useRef<ImageGallery>(null);

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
        <button className="left-arrow" onClick={goBackward}><Icons variant='leftArrow' /></button>

        <div className="wrapper">
          <ImageGallery
            ref={imageGalleryRef}
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
          />
        </div>

        <button className="right-arrow" onClick={goForward}> <Icons variant='rightArrow' /></button>
      </div>
    </div>
  );
};

export default Carousel;
