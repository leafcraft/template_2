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
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {imageSources.map((src, index) => (
        <div key={index} className="relative group">
          <img className="h-auto w-full rounded-lg" src={src} alt={`Image ${index + 1}`} />
          <div className="absolute bottom-0 left-0 bg-black text-white p-2 group-hover:opacity-75">
            Text on Image {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FourthComponent;
