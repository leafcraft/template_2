import React from 'react';
import Product1 from '../assets/Product1.png';
import CartPage from '../components/Atoms/CartCommon.Atoms';

const images = [
  {
    src: Product1,
    alt: 'Image 1',
  },
  {
    src: Product1,
    alt: 'Image 2',
  },
  // Add more images as needed
];

const products = [
  {
    imageUrl: 'https://dummyimage.com/420x260',
    category: 'CATEGORY',
    title: 'The Catalyzer',
    price: '$16.00',
  },
  {
    imageUrl: 'https://dummyimage.com/421x261',
    category: 'CATEGORY',
    title: 'Shooting Stars',
    price: '$21.15',
  },
  // Add more product data as needed
];

const ExamplePage = () => {
  return (
    <div>
      {/* ... other content ... */}
      <CartPage images={images} products={products} />
      {/* ... other content ... */}
    </div>
  );
};

export default ExamplePage;
