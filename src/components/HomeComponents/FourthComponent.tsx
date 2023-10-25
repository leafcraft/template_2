import React from 'react';

const imageSources = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
];

const FourthComponent = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 -m-1 flex flex-wrap md:-m-2">
      {imageSources.map((src, index) => (
        <div key={index} className="relative group p-1 md:p-2 flex w-1/2 flex-wrap">
          <img className="block h-full w-full rounded-lg object-cover object-center" src={src} alt={`Image ${index + 1}`} />
          <div className="absolute bottom-0 left-0 bg-black text-white p-2 group-hover:opacity-75">
            Text on Image {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FourthComponent;
