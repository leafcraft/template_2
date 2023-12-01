import React from 'react';

interface ProductProps {
  image: string;
  type: string;
  name: string;
  price: string;
}

const ProductCard: React.FC<ProductProps> = ({ image, type, name, price }) => {
  return (
    <div className=" flex flex-col items-center lg:w-1/3  md:w-1/2 p-4 w-full">
      <a className="block relative h-80 rounded overflow-hidden">
        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image} />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{type}</h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
        <p className="mt-1">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
