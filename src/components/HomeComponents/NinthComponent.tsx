import React, { useState } from 'react';

const NinthComponent = () => {
  const [smallHeader, setSmallHeader] = useState('Your Small Header');
  const [title, setTitle] = useState('Your Title');
  const [subtitle, setSubtitle] = useState('Your Subtitle');
  const [buttonText, setButtonText] = useState('Your Button Text');
  const [buttonLink, setButtonLink] = useState('#');
  const [images, setImages] = useState([
    { id: 1, src: 'image1.jpg', alt: 'Image 1', description: 'Description 1' },
    { id: 2, src: 'image2.jpg', alt: 'Image 2', description: 'Description 2' },
    // Add more images as needed
  ]);
  const [posterImage, setPosterImage] = useState('posterImage.jpg');

  // Add a handler for image click
  const onImageClick = (imageId) => {
    console.log(`Image clicked with ID: ${imageId}`);
    // Add any additional logic for image click
  };

  return (
    <div className='flex w-full flex-col '>
      <section className="flex flex-grow px-2 justify-center text-gray-600 body-font overflow-hidden">
        <div className="grid items-center md:grid-cols-2 grid-cols-1 p-7">
          <div>
            <div className="text-black mb-4 text-center p-7">
              <h2 className="text-black-text mb-3 font-normal font-Robot text-sm md:text-lg leading-5 tracking-wide">{smallHeader}</h2>
              <h1 className="text-black-text mb-3 font-normal font-Robot text-xl md:text-5xl leading-tight">{title}</h1>
              <p className="text-black-text font-normal font-Robot text-xs md:text-base leading-7">{subtitle}</p>
            </div>
            <div className="flex items-center justify-center mb-4">
              <a
                href={buttonLink}
                className="flex text-white font-normal font-Robot text-sm leading-5 bg-black border-0 py-3.5 px-7 focus:outline-none hover:bg-gray-700 rounded"
              >
                {buttonText}
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-10 pb-14">
              {images.map((image) => (
                <div key={image.id} className="w-full h-full">
                  <div className="w-full h-full p-6">
                    <img
                      src={image.src}
                      alt={image.alt}
                      onClick={() => onImageClick(image.id)}
                      className="w-full h-full object-cover cursor-pointer"
                    />
                  </div>
                  <p className="mt-2 text-base text-black-text font-Robot font-normal leading-6 ">{image.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="object-cover object-center rounded overflow-hidden">
            <img
              alt="ecommerce"
              src={posterImage}
              className="w-full object-cover object-center rounded"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NinthComponent;
